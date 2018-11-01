import React from 'react';
import Cardv2, { UnwrappedComponent } from '../Cardv2';
import { shallow, mount } from 'enzyme';

describe('Cardv2', () => {
  describe('Renders as expected', () => {
    const wrapper = shallow(
      <UnwrappedComponent className="extra-class">
        <div className="child">Test</div>
      </UnwrappedComponent>,
    );

    it('renders children as expected', () => {
      expect(wrapper.find('.child').length).toBe(1);
    });

    it('has the expected classes', () => {
      expect(wrapper.hasClass('bx--cardv2')).toEqual(true);
    });

    it('renders extra classes passed in via className', () => {
      expect(wrapper.hasClass('extra-class')).toEqual(true);
    });

    it('has default tabIndex of 0', () => {
      expect(wrapper.props().tabIndex).toEqual(0);
    });
  });

  describe('Check that functions passed in as props are called', () => {
    let onClick;
    let wrapper;
    beforeEach(() => {
      onClick = jest.fn();
      wrapper = mount(<Cardv2 onClick={onClick} />);
    });

    afterEach(() => {
      wrapper.unmount();
    });

    it('should call onClick', () => {
      wrapper.simulate('click');
      expect(onClick).toBeCalled();
    });
  });
});
