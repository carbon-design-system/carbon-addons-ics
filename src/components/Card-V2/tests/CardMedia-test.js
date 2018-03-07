import React from 'react';
import CardMedia from '../CardMedia';
import { shallow, mount } from 'enzyme';

describe('CardMedia', () => {
  describe('Renders as expected', () => {
    const wrapper = shallow(
      <CardMedia className="extra-class" type="img" src="some link" altText="some alt text" />,
    );

    it('has the expected classes', () => {
      expect(wrapper.hasClass('bx--card__media')).toEqual(true);
    });

    it('renders extra classes passed in via className', () => {
      expect(wrapper.hasClass('extra-class')).toEqual(true);
    });

    it('renders children as expected', () => {
      expect(wrapper.find('.bx--card__media-img').length).toBe(1);
    });
  });

  describe('Check that functions passed in as props are called', () => {
    const onClick = jest.fn();
    const wrapper = mount(<CardMedia onClick={onClick} />);

    it('should call onClick', () => {
      wrapper.simulate('click');
      expect(onClick).toBeCalled();
    });
  });
});
