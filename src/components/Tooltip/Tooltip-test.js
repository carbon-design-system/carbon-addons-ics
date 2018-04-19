import React from 'react';
import Icon from '../Icon';
import FloatingMenu from '../../globals/internal/FloatingMenu';
import Tooltip from '../Tooltip';
import { mount } from 'enzyme';

describe('Tooltip', () => {
  describe('Renders as expected with defaults', () => {
    const wrapper = mount(
      <Tooltip triggerText="Tooltip">
        <p className="bx--tooltip__label">Tooltip label</p>
        <p>Lorem ipsum dolor sit amet</p>
      </Tooltip>,
    );

    const trigger = wrapper.find('.bx--tooltip__trigger');

    describe('tooltip trigger', () => {
      it('renders a tooltip container', () => {
        expect(trigger.length).toEqual(1);
      });

      it('renders the info icon', () => {
        const icon = trigger.find(Icon);
        expect(icon.length).toBe(1);
        expect(icon.props().name).toBe('info');
      });
    });
  });

  describe('Renders as expected with specified properties', () => {
    const wrapper = mount(
      <Tooltip
        triggerText="Tooltip"
        direction="bottom"
        menuOffset={{ left: 10, top: 15 }}
        showIcon={false}
      >
        {' '}
        <p className="bx--tooltip__label">Tooltip label</p>
        <p>Lorem ipsum dolor sit amet</p>
      </Tooltip>,
    );

    const trigger = wrapper.find('.bx--tooltip__trigger');
    const floatingMenu = wrapper.find(FloatingMenu);

    describe('tooltip container', () => {
      it("sets the tooltip's position", () => {
        expect(floatingMenu.prop('menuDirection')).toEqual('bottom');
      });
      it("sets the tooltip's offset", () => {
        expect(floatingMenu.prop('menuOffset')).toEqual({ left: 10, top: 15 });
      });
      it('does not render info icon', () => {
        const icon = trigger.find(Icon);
        expect(icon.exists()).toBe(false);
      });
    });
  });

  describe('events', () => {
    it('changes state on click', () => {
      const wrapper = mount(<Tooltip showIcon={false} triggerText="Tooltip" />);
      const trigger = wrapper.find('.bx--tooltip__trigger');
      trigger.simulate('focus');
      expect(wrapper.state().open).toEqual(true);
    });

    it('focus/blur changes state with icon', () => {
      const wrapper = mount(<Tooltip showIcon triggerText="Tooltip" />);
      const trigger = wrapper.find('.bx--tooltip__icon-container');
      trigger.simulate('focus');
      expect(wrapper.state().open).toEqual(true);
      trigger.simulate('blur');
      expect(wrapper.state().open).toEqual(false);
    });

    it('if given openOnHover prop, changes state on hover', () => {
      const wrapper = mount(<Tooltip openOnHover showIcon triggerText="Tooltip" />);
      const trigger = wrapper.find('.bx--tooltip__icon-container');
      trigger.simulate('mouseEnter');
      expect(wrapper.state().open).toEqual(true);
      trigger.simulate('mouseLeave');
      expect(wrapper.state().open).toEqual(false);
    });

    it('A different key press does not change state', () => {
      const wrapper = mount(<Tooltip triggerText="Tooltip" />);
      const trigger = wrapper.find('.bx--tooltip__icon-container');
      trigger.simulate('keyDown', { which: 'x' });
      expect(wrapper.state().open).toEqual(false);
    });
  });

  describe('getTriggerPosition', () => {
    const mockObject = { test: 'test' };
    it('sets triggerPosition when triggerEl is set', () => {
      const rootWrapper = mount(<Tooltip triggerText="Tooltip" />);
      rootWrapper.setState({ triggerPosition: mockObject });
      rootWrapper.instance().getTriggerPosition();
      expect(rootWrapper.state().triggerPosition).not.toEqual(mockObject);
    });
    it('does not set triggerPosition when triggerEl is not set', () => {
      const rootWrapper = mount(<Tooltip triggerText="Tooltip" />);
      rootWrapper.setState({ triggerPosition: mockObject });
      delete rootWrapper.instance().triggerEl;
      rootWrapper.instance().getTriggerPosition();
      expect(rootWrapper.state().triggerPosition).toEqual(mockObject);
    });
  });
});
