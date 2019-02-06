import React from 'react';
import CardContent from '../CardContent';
import { shallow } from 'enzyme';

describe('CardContent', () => {
  describe('Renders as expected', () => {
    const props = {
      className: 'extra-class',
      cardAvatar: 'testIcon',
      cardTitle: 'testTitle',
      cardLink: ['http://test-card-link.mybluemix.net'],
      cardInfo: ['testInfo1', 'testInfo2'],
    };
    const wrapper = shallow(
      <CardContent {...props}>
        <div className="child">Test</div>
      </CardContent>
    );

    it('renders children as expected', () => {
      expect(wrapper.find('.child').length).toBe(1);
    });

    it('has the expected classes', () => {
      expect(wrapper.hasClass('bx--card__card-overview')).toBe(true);
    });

    it('renders extra classes passed in via className', () => {
      expect(wrapper.hasClass('extra-class')).toBe(true);
    });

    describe('renders a "business card" div', () => {
      const bizCard = wrapper.childAt(1);

      it('has expected classes', () => {
        expect(bizCard.hasClass('bx--card__business-card')).toBe(true);
      });

      it('renders a child div with an Img', () => {
        const bizCardAvatar = bizCard.childAt(0);
        expect(bizCardAvatar.hasClass('bx--about__icon')).toBe(true);

        const icon = wrapper.find('img');
        expect(icon.hasClass('bx--about__icon--img')).toBe(true);
        expect(icon.props().src).toBe('testIcon');
      });

      describe('renders a title div', () => {
        const title = bizCard.childAt(1);

        it('has expected classes', () => {
          expect(title.hasClass('bx--card__business-card__title')).toBe(true);
        });

        it('has expected paragraph', () => {
          const paragraph = title.childAt(0);
          expect(paragraph.props().id).toBe('card-app-title');
          expect(paragraph.props().className).toBe('bx--about__title--name');
          expect(paragraph.props().children).toBe('testTitle');
        });

        it('has expected links', () => {
          const links = title.childAt(1);
          expect(links.length).toBe(1);
          expect(links.getElement().type).toBe('a');
          expect(links.hasClass('bx--about__title--link')).toBe(true);
          expect(links.props().href).toBe(
            'http://test-card-link.mybluemix.net'
          );
          expect(links.props().children).toBe(
            'http://test-card-link.mybluemix.net'
          );
        });
      });
    });
  });
});
