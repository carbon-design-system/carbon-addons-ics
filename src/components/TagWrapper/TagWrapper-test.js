import React from 'react';
import TagWrapper from './TagWrapper';
import { shallow } from 'enzyme';

describe('TagWrapper', () => {
  it('should render with the default class', () => {
    const wrapper = shallow(<TagWrapper />);
    expect(wrapper.hasClass('bx--tag--list')).toEqual(true);
  });
});
