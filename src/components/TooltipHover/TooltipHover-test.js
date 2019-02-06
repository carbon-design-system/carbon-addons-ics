import React from 'react';
import Icon from '../Icon';
import TooltipHover from '../TooltipHover';
import { mount } from 'enzyme';

describe('Tooltip', () => {
  describe('Renders as expected with defaults', () => {
    const outerWrapper = mount(
      <TooltipHover text="Tooltip" iconName="warning" />
    );

    const innerWrapper = outerWrapper.find('.bx--tooltip--simple');

    describe('tooltip innerWrapper', () => {
      it('renders a tooltip container', () => {
        expect(innerWrapper.length).toEqual(1);
      });

      it('renders with icon', () => {
        const icon = innerWrapper.find(Icon);
        expect(icon.length).toBe(1);
        expect(icon.props().name).toBe('warning');
      });
    });
  });

  describe('Renders as expected with specified properties', () => {
    const outerWrapper = mount(
      <TooltipHover text="data-text" iconName="warning" position="top" />
    );

    describe('tooltip container', () => {
      it("sets the tooltip's data-tooltip-text attribute", () => {
        expect(outerWrapper.prop('text')).toEqual('data-text');
      });
      it("sets the tooltip's position", () => {
        expect(outerWrapper.prop('position')).toEqual('top');
      });
    });
  });
});
