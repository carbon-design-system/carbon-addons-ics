import React from 'react';
import ActionIcon from '../ActionIcon';
import { shallow, mount } from 'enzyme';

describe('ActionIcon', () => {
  describe('Renders common props as expected', () => {
    const wrapper = shallow(
      <ActionIcon
        className="extra-class"
        icon="info"
        iconDescription="information"
        tabIndex={-1}
      />,
    );

    const wrapperHref = shallow(
      <ActionIcon
        className="extra-class"
        icon="info"
        iconDescription="information"
        href="/style"
        tabIndex={-1}
      />,
    );

    it('Renders an actionIcon', () => {
      expect(wrapper.length).toEqual(1);
      expect(wrapperHref.length).toEqual(1);
    });

    it('Renders with appropriate classname', () => {
      expect(wrapper.hasClass('bx--action-icon')).toEqual(true);
      expect(wrapperHref.hasClass('bx--action-icon')).toEqual(true);
    });

    it('Renders a child elements correctly', () => {
      expect(wrapper.find('button').length).toEqual(1);
      expect(wrapperHref.find('a').length).toEqual(1);
    });

    it('Renders a child with a classname', () => {
      expect(wrapper.find('button').hasClass('bx--action-icon_btn')).toEqual(true);
      expect(wrapperHref.find('a').hasClass('bx--action-icon_btn')).toEqual(true);
    });

    it('Renders with tab', () => {
      expect(wrapper.props().tabIndex).toEqual(-1);
      expect(wrapperHref.props().tabIndex).toEqual(-1);
    });

    it('Renders with extra class', () => {
      expect(wrapper.hasClass('extra-class')).toEqual(true);
      expect(wrapperHref.hasClass('extra-class')).toEqual(true);
    });
  });

  describe('Renders modifiers as expected', () => {
    const wrapper = shallow(
      <ActionIcon small selected icon="info" iconDescription="information" />,
    );

    const wrapperHref = shallow(
      <ActionIcon href="/style" icon="info" iconDescription="information" small selected />,
    );

    it('Renders small', () => {
      expect(wrapper.hasClass('bx--action-icon--sm')).toEqual(true);
      expect(wrapperHref.hasClass('bx--action-icon--sm')).toEqual(true);
    });

    it('Renders selected', () => {
      expect(wrapper.hasClass('bx--action-icon--selected')).toEqual(true);
      expect(wrapperHref.hasClass('bx--action-icon--selected')).toEqual(true);
    });
  });

  describe('Renders icons as expected', () => {
    const iconButton = mount(<ActionIcon icon="info" iconDescription="information" />);

    const icon = iconButton.find('svg');

    it('Renders icon', () => {
      expect(icon.hasClass('bx--action-icon_img')).toBe(true);
    });

    it('Errors when no icon description', () => {
      const props = {
        icon: 'info',
      };
      // eslint-disable-next-line quotes
      const error = new Error(
        'icon property specified without also providing an iconDescription property.',
      );
      expect(ActionIcon.propTypes.iconDescription(props)).toEqual(error);
    });
  });
});
