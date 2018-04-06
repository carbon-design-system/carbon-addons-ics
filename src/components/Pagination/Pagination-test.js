import React from 'react';
import { mount } from 'enzyme';
import Pagination from '../Pagination';

describe('Pagination', () => {
  describe('Renders common props as expected', () => {
    const wrapper = mount(<Pagination totalItems={10} maxPageView={5} className="extra-class" />);

    it('Renders the component as expected', () => {
      expect(wrapper.length).toEqual(1);
    });

    it('Renders the expected className', () => {
      expect(wrapper.children().hasClass('bx--pagination')).toEqual(true);
    });

    it('Renders an extra className', () => {
      expect(wrapper.hasClass('extra-class')).toEqual(true);
    });

    it('Renders the expected amount of li', () => {
      expect(wrapper.find('.bx--pagination__page-item').length).toBe(5);
    });

    it('Renders the expected start page', () => {
      expect(wrapper.props().page).toBe(1);
    });
  });

  describe('Changes between page values as expected', () => {
    const wrapper = mount(<Pagination totalItems={10} page={2} />);

    it('Increases the page value on increment', () => {
      expect(wrapper.state().page).toBe(2);
      wrapper.find('.bx--pagination__button--forward').simulate('click');
      expect(wrapper.state().page).toBe(3);
    });

    it('Decreases the page value on decrement', () => {
      expect(wrapper.state().page).toBe(3);
      wrapper.find('.bx--pagination__button--backward').simulate('click');
      expect(wrapper.state().page).toBe(2);
    });

    it('Rewinds the page value on rewind', () => {
      expect(wrapper.state().page).toBe(2);
      wrapper.find('.bx--pagination__button--rewind').simulate('click');
      expect(wrapper.state().page).toBe(1);
    });

    it('Fast forwards the page value on fast forward', () => {
      expect(wrapper.state().page).toBe(1);
      wrapper.find('.bx--pagination__button--fastforward').simulate('click');
      expect(wrapper.state().page).toBe(10);
    });

    it('Selects the page value on enter', () => {
      const firstTab = wrapper
        .find('.bx--tabs__nav-item')
        .first()
        .simulate('focus');
      firstTab.simulate('keyDown', { key: 'Enter', keyCode: 13, which: 13 });
      expect(wrapper.state().page).toBe(1);
    });

    it('Increases the page value on right arrow', () => {
      const firstTab = wrapper
        .find('.bx--tabs__nav-item')
        .first()
        .simulate('focus');
      firstTab.simulate('keyDown', { key: 'ArrowRight', keyCode: 39, which: 39 });
      expect(wrapper.state().page).toBe(2);
    });

    it('Decreases the page value on left arrow', () => {
      const firstTab = wrapper
        .find('.bx--tabs__nav-item')
        .first()
        .simulate('focus');
      firstTab.simulate('keyDown', { key: 'ArrowLeft', keyCode: 37, which: 37 });
      expect(wrapper.state().page).toBe(10);
    });

    it('Selects the page value on click', () => {
      wrapper
        .find('.bx--tabs__nav-item')
        .first()
        .simulate('click');
      expect(wrapper.state().page).toBe(1);
    });

    it('Returns to start value if incremented past last', () => {
      wrapper.instance().handleTabAnchorFocus(11);
      expect(wrapper.state().page).toBe(1);
    });

    it('Renders the decrement button as disabled if on first page', () => {
      wrapper
        .find('.bx--tabs__nav-item')
        .first()
        .simulate('click');
      expect(wrapper.find('.bx--pagination__button--backward').props().disabled).toEqual(true);
    });

    it('Renders to increment button as disabled if on last page', () => {
      wrapper
        .find('.bx--tabs__nav-item')
        .last()
        .simulate('click');
      expect(wrapper.find('.bx--pagination__button--forward').props().disabled).toEqual(true);
    });

    it('Displays hint if tab is focused', () => {
      wrapper
        .find('.bx--tabs__nav-item')
        .first()
        .simulate('blur');
      expect(wrapper.state().hint).toEqual(false);
      wrapper
        .find('.bx--tabs__nav-item')
        .first()
        .simulate('focus');
      expect(wrapper.state().hint).toEqual(true);
    });
  });
});
