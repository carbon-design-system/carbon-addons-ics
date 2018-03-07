import React from 'react';
import Tag from './Tag';
import Icon from '../Icon';
import { shallow, mount } from 'enzyme';

describe('Tag', () => {
  describe('Renders as expected', () => {
    it('should render with the default dark style', () => {
      const wrapper = shallow(<Tag />);
      const tag = wrapper.find('span');
      expect(tag.hasClass('bx--tag')).toEqual(true);
      expect(tag.hasClass('bx--tag--dark')).toEqual(true);
    });
  });

  describe('Renders action icon as expected', () => {
    it('should render with the add icon', () => {
      const wrapper = shallow(<Tag action="add" />);
      const icon = wrapper.find(Icon);
      expect(icon.hasClass('bx--tag--left__add')).toEqual(true);
    });
    it('should render with the remove icon', () => {
      const wrapper = shallow(<Tag action="remove" />);
      const icon = wrapper.find(Icon);
      expect(icon.hasClass('bx--tag--left__remove')).toEqual(true);
    });
    it('should render with the success icon', () => {
      const wrapper = shallow(<Tag action="success" />);
      const icon = wrapper.find(Icon);
      expect(icon.hasClass('bx--tag--left__success')).toEqual(true);
    });
  });

  it('should support light style', () => {
    const wrapper = shallow(<Tag style="light" />);
    const tag = wrapper.find('span');
    expect(tag.hasClass('bx--tag--light')).toEqual(true);
  });

  it('should support remove style', () => {
    const wrapper = shallow(<Tag remove={true} />);
    const tag = wrapper.find('span');
    const icon = wrapper.find(Icon);
    expect(tag.hasClass('bx--tag--remove')).toEqual(true);
    expect(icon.hasClass('bx--remove__icon')).toEqual(true);
  });

  it('should support extra class names', () => {
    const wrapper = shallow(<Tag className="extra-class">Dublin</Tag>);
    const tag = wrapper.find('span');
    expect(tag.hasClass('extra-class')).toEqual(true);
  });

  describe('Check that functions passed in as props are called', () => {
    const onClick = jest.fn();
    const wrapper = mount(<Tag leftAction action={'add'} onClick={onClick} />);
    const icon = wrapper.find(Icon);

    it('should call onClick', () => {
      icon.simulate('click');
      expect(onClick).toBeCalled();
    });

    const remove = mount(<Tag leftAction action={'remove'} />);
    const removeIcon = remove.find(Icon);
    it('should call default remove if onClick not set for remove', () => {
      removeIcon.simulate('click');
      expect(remove.state().showTag).toEqual(false);
    });
  });
});
