import React from 'react';
import Avatar from '../Avatar';
import { shallow, mount } from 'enzyme';
import TestUtils from 'react-dom/test-utils';

describe('Avatar', () => {
  describe('Renders common props as expected', () => {
    const wrapper = shallow(
      <Avatar
        size={'sm'}
        className={'extra-class'}
        description="Here is a description"
      />
    );

    it('Renders an Avatar', () => {
      expect(wrapper.length).toEqual(1);
    });

    it('Renders with appropriate classname', () => {
      expect(wrapper.hasClass('bx--avatar')).toEqual(true);
    });

    it('Renders with extra class', () => {
      expect(wrapper.hasClass('extra-class')).toEqual(true);
    });
  });

  describe('Renders sizes of container and icons as expected', () => {
    it('Renders extra small', () => {
      const wrapper = mount(
        <Avatar size={'xs'} description="Here is a description" />
      );

      const containerStyle = wrapper.find('.bx--avatar').get(0).props.style;
      const iconStyle = wrapper.find('svg').get(0).props;

      expect(containerStyle).toHaveProperty('height', 32);
      expect(containerStyle).toHaveProperty('width', 32);
      expect(iconStyle).toHaveProperty('height', '16');
      expect(iconStyle).toHaveProperty('width', '16');
    });

    it('Renders small', () => {
      const wrapper = mount(
        <Avatar size={'sm'} description="Here is a description" />
      );

      const containerStyle = wrapper.find('.bx--avatar').get(0).props.style;
      const iconStyle = wrapper.find('svg').get(0).props;

      expect(containerStyle).toHaveProperty('height', 40);
      expect(containerStyle).toHaveProperty('width', 40);
      expect(iconStyle).toHaveProperty('height', '20');
      expect(iconStyle).toHaveProperty('width', '20');
    });

    it('Renders medium', () => {
      const wrapper = mount(
        <Avatar size={'md'} description="Here is a description" />
      );

      const containerStyle = wrapper.find('.bx--avatar').get(0).props.style;
      const iconStyle = wrapper.find('svg').get(0).props;

      expect(containerStyle).toHaveProperty('height', 56);
      expect(containerStyle).toHaveProperty('width', 56);
      expect(iconStyle).toHaveProperty('height', '28');
      expect(iconStyle).toHaveProperty('width', '28');
    });

    it('Renders large', () => {
      const wrapper = mount(
        <Avatar size={'lg'} description="Here is a description" />
      );

      const containerStyle = wrapper.find('.bx--avatar').get(0).props.style;
      const iconStyle = wrapper.find('svg').get(0).props;

      expect(containerStyle).toHaveProperty('height', 80);
      expect(containerStyle).toHaveProperty('width', 80);
      expect(iconStyle).toHaveProperty('height', '36');
      expect(iconStyle).toHaveProperty('width', '36');
    });

    it('Renders extra large', () => {
      const wrapper = mount(
        <Avatar size={'xl'} description="Here is a description" />
      );

      const containerStyle = wrapper.find('.bx--avatar').get(0).props.style;
      const iconStyle = wrapper.find('svg').get(0).props;

      expect(containerStyle).toHaveProperty('height', 112);
      expect(containerStyle).toHaveProperty('width', 112);
      expect(iconStyle).toHaveProperty('height', '48');
      expect(iconStyle).toHaveProperty('width', '48');
    });

    it('Renders extra extra large', () => {
      const wrapper = mount(
        <Avatar size={'xxl'} description="Here is a description" />
      );

      const containerStyle = wrapper.find('.bx--avatar').get(0).props.style;
      const iconStyle = wrapper.find('svg').get(0).props;

      expect(containerStyle).toHaveProperty('height', 176);
      expect(containerStyle).toHaveProperty('width', 176);
      expect(iconStyle).toHaveProperty('height', '72');
      expect(iconStyle).toHaveProperty('width', '72');
    });
  });

  describe('Renders colors, images and icons correctly', () => {
    const wrapper = mount(
      <Avatar imgUrl={'image-url'} description="Here is a description" />
    );

    it('OnImageError will call setState', () => {
      let component = TestUtils.renderIntoDocument(
        <Avatar imgUrl={'image-url'} description="Here is a description" />
      );
      jest.spyOn(component, 'setState');
      component.onImgErr();
      expect(component.setState).toHaveBeenCalled();
    });

    it('onImgLoad 1x1 pixel', () => {
      let component = TestUtils.renderIntoDocument(
        <Avatar description="description" />
      );
      jest.spyOn(component, 'onImgErr');
      component.setState({ ImgLoaded: false });

      component.imageDOM = {
        naturalWidth: 1,
        naturalHeight: 1,
      };

      component.onImgLoad();
      expect(component.onImgErr).toHaveBeenCalled();
    });

    it('onImgLoad 100x100 pixel', () => {
      let component = TestUtils.renderIntoDocument(
        <Avatar description="description" />
      );
      jest.spyOn(component, 'setState');
      component.setState({ ImgLoaded: false });

      component.imageDOM = {
        naturalWidth: 100,
        naturalHeight: 100,
      };

      component.onImgLoad();
      expect(component.setState).toHaveBeenCalled();
    });

    it('componentWillReceiveProps wont set the state', () => {
      let component = TestUtils.renderIntoDocument(
        <Avatar description="description" imgUrl={''} />
      );
      jest.spyOn(component, 'setState');
      component.componentWillReceiveProps({
        description: 'description',
        imgUrl: '',
      });
      expect(component.setState).not.toHaveBeenCalled();
    });

    it('componentWillReceiveProps will set the state', () => {
      let component = TestUtils.renderIntoDocument(
        <Avatar description="description" imgUrl={''} />
      );
      jest.spyOn(component, 'setState');
      component.componentWillReceiveProps({
        description: 'description',
        imgUrl: 'something-different',
      });
      expect(component.setState).toHaveBeenCalled();
    });

    it('onError', () => {
      let component = mount(
        <Avatar imgUrl={'the-url'} description="Here is a description" />
      );
      jest.spyOn(component.instance(), 'onImgErr');
      const image = component.find('img');
      image.simulate('error');
      expect(component.instance().onImgErr).toHaveBeenCalled();
    });

    it('onLoad', () => {
      let component = mount(
        <Avatar imgUrl={'the-url'} description="Here is a description" />
      );
      jest.spyOn(component.instance(), 'onImgLoad');
      const image = component.find('img');
      image.simulate('load');
      expect(component.instance().onImgLoad).toHaveBeenCalled();
    });

    it('Renders icon in white', () => {
      const iconStyle = wrapper.find('svg').get(0).props;
      expect(iconStyle).toHaveProperty('fill', '#ffffff');
    });

    it('Renders container in gray-30', () => {
      const containerStyle = wrapper.find('.bx--avatar').get(0).props.style;
      expect(containerStyle).toHaveProperty('backgroundColor', '#A6A5A6');
    });
  });
});
