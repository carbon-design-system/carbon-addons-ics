import React from 'react';
import Icon from '../Icon';
import Search from './Search';
import { mount, shallow } from 'enzyme';

describe('Search', () => {
  describe('renders as expected', () => {
    const wrapper = mount(<Search id="test" className="extra-class" labelText="testlabel" />);

    const label = wrapper.find('label');
    const textInput = wrapper.find('input');
    const container = wrapper.find('[role="search"]');

    describe('container', () => {
      it('should add extra classes that are passed via className', () => {
        expect(container.hasClass('extra-class')).toEqual(true);
      });
      it('should have the role of search', () => {
        expect(container.props().role).toEqual('search');
      });
    });

    describe('icon', () => {
      it('renders correct search icon', () => {
        const icons = container.find(Icon);
        expect(icons.at(0).props().name).toEqual('search');
      });

      it('renders one Icon', () => {
        const icons = container.find(Icon);
        expect(icons.length).toEqual(2);
      });
    });

    describe('input', () => {
      it('renders as expected', () => {
        expect(textInput.length).toBe(1);
      });

      it('has the expected classes', () => {
        expect(textInput.hasClass('bx--search-input')).toEqual(true);
      });

      it('should set type as expected', () => {
        expect(textInput.props().type).toEqual('text');
        wrapper.setProps({ type: 'email' });
        expect(wrapper.find('input').props().type).toEqual('email');
      });

      it('should set value as expected', () => {
        expect(textInput.props().defaultValue).toEqual(undefined);
        wrapper.setProps({ defaultValue: 'test' });
        expect(wrapper.find('input').props().defaultValue).toEqual('test');
        expect(wrapper.find('input').props().value).toEqual(undefined);
      });

      it('should set placeholder as expected', () => {
        expect(textInput.props().placeholder).toEqual('');
        wrapper.setProps({ placeHolderText: 'Enter text' });
        expect(wrapper.find('input').props().placeholder).toEqual('Enter text');
      });
    });

    describe('label', () => {
      it('renders a label', () => {
        expect(label.length).toBe(1);
      });

      it('has the expected classes', () => {
        expect(label.hasClass('bx--label')).toEqual(true);
      });

      it('should set label as expected', () => {
        expect(wrapper.props().labelText).toEqual('testlabel');
        wrapper.setProps({ labelText: 'Email Input' });
        expect(wrapper.props().labelText).toEqual('Email Input');
      });
    });
  });

  describe('close events', () => {
    const onClick = jest.fn();
    const onChange = jest.fn();
    const wrapper = mount(
      <Search id="test" labelText="testlabel" onClick={onClick} onChange={onChange} />,
    );

    const input = wrapper.find('input');
    const closeIcon = wrapper.find(Icon).at(1);

    it('should clear input when close icon clicked', () => {
      wrapper.setState({ hasContent: true });
      closeIcon.simulate('click', input);
      expect(onChange).toBeCalled();
    });

    it('should clear input when close icon clicked with value props', () => {
      wrapper.setProps({ value: 'some value' });
      wrapper.setState({ hasContent: true });
      closeIcon.simulate('click', input);
      expect(onChange).toBeCalled();
    });
  });

  describe('input events', () => {
    describe('enabled textinput', () => {
      const onClick = jest.fn();
      const onChange = jest.fn();
      const wrapper = shallow(
        <Search id="test" labelText="testlabel" onClick={onClick} onChange={onChange} />,
      );

      const input = wrapper.find('input');
      const eventObject = {
        target: {
          defaultValue: 'test',
        },
      };

      it('should invoke onClick when input is clicked', () => {
        input.simulate('click');
        expect(onClick).toBeCalled();
      });

      it('should invoke onChange when input value is changed', () => {
        input.simulate('change', eventObject);
        expect(onChange).toBeCalledWith(eventObject);
      });
    });
  });
});
