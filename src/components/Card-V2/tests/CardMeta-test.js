import React from 'react';
import CardMeta from '../CardMeta';
import { shallow } from 'enzyme';

describe('CardMeta', () => {
  describe('Renders as expected', () => {
    const wrapper = shallow(
      <CardMeta
        className="extra-class"
        metaPrimary="primary text"
        metaSecondary="secondary text"
        metaPadding
      />
    );

    it('has the expected classes', () => {
      expect(wrapper.hasClass('bx--card__meta')).toEqual(true);
    });

    it('renders extra classes passed in via className', () => {
      expect(wrapper.hasClass('extra-class')).toEqual(true);
    });

    it('renders pading passed as expected', () => {
      expect(wrapper.hasClass('bx--card__meta-padding')).toEqual(true);
    });

    it('renders primary text as expected', () => {
      expect(wrapper.find('.bx--card__meta-primary').length).toBe(1);
    });

    it('renders secondary as expected', () => {
      expect(wrapper.find('.bx--card__meta-secondary').length).toBe(1);
    });
  });
});
