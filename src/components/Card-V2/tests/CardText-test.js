import React from 'react';
import CardText from '../CardText';
import { shallow } from 'enzyme';

describe('CardText', () => {
  describe('Renders as expected', () => {
    const wrapper = shallow(
      <CardText className="extra-class">
        <p>Dummy Text</p>
      </CardText>
    );

    it('has the expected classes', () => {
      expect(wrapper.hasClass('bx--card__text')).toEqual(true);
    });

    it('renders extra classes passed in via className', () => {
      expect(wrapper.hasClass('extra-class')).toEqual(true);
    });
  });
});
