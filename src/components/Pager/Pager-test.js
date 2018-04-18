import React from 'react';
import { mount } from 'enzyme';
import Pager from '../Pager';

describe('Pager', () => {
  describe('Renders common props as expected', () => {
    const wrapper = mount(<Pager totalItems={10} className="extra-class" />);

    it('Renders the component as expected', () => {
      expect(wrapper.length).toEqual(1);
    });

    it('Renders the expected className', () => {
      expect(wrapper.children().hasClass('bx--pager')).toEqual(true);
    });

    it('Renders an extra className', () => {
      expect(wrapper.hasClass('extra-class')).toEqual(true);
    });

    it('Renders the expected amount of li', () => {
      expect(wrapper.find('.bx--pager__page-item').length).toBe(4);
    });

    it('Renders the expected start page', () => {
      expect(wrapper.props().initialPage).toBe(1);
    });
  });

  describe('Changes between page values as expected', () => {
    const wrapper = mount(<Pager totalItems={10} />);

    it('Increases the page value on increment', () => {
      expect(wrapper.state().activePage).toBe(1);
      wrapper.find('.bx--pager__button--forward').simulate('click');
      expect(wrapper.state().activePage).toBe(2);
    });

    it('Decreases the page value on decrement', () => {
      expect(wrapper.state().activePage).toBe(2);
      wrapper.find('.bx--pager__button--backward').simulate('click');
      expect(wrapper.state().activePage).toBe(1);
    });

    it('Increases the page value on right arrow', () => {
      const firstButton = wrapper
        .find('.bx--pager__page-item')
        .first()
        .simulate('focus');
      firstButton.simulate('keyUp', { key: 'ArrowRight', keyCode: 39, which: 39 });
      expect(wrapper.state().activePage).toBe(2);
    });

    it('Decreases the page value on left arrow', () => {
      const firstButton = wrapper
        .find('.bx--pager__page-item')
        .last()
        .simulate('focus');
      firstButton.simulate('keyUp', { key: 'ArrowLeft', keyCode: 37, which: 37 });
      expect(wrapper.state().activePage).toBe(1);
    });

    it('Selects the page value on click', () => {
      const firstButton = wrapper
        .find('.bx--pager__page-item')
        .first()
        .simulate('focus');
      firstButton.simulate('keyUp', { key: 'ArrowRight' });
      expect(wrapper.state().activePage).toBe(2);
      wrapper
        .find('.bx--pager__page-item')
        .first()
        .simulate('click');
      expect(wrapper.state().activePage).toBe(1);
    });
  });
});
