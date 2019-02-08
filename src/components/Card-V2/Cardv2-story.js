import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withReadme } from 'storybook-readme';
import readme from './README.md';
import { Cardv2 } from '../../index';
const { CardMeta, CardText, CardMedia } = Cardv2;

const cardProps = {
  onClick: () => {
    console.log('click'); // eslint-disable-line no-console
  },
  onFocus: () => {
    console.log('focus'); // eslint-disable-line no-console
  },
  className: 'some-class',
};

const timestamp = new Date(Date.now());

const cardMetaProps = {
  metaPrimary: 'Card Title',
  metaSecondary: timestamp.toLocaleTimeString(),
  className: 'some-class',
};

const mediaSrc =
  'https://www.ibm.com/images/portal/U348822E90543V80/cognitive-bg-1600x900-1.jpg';
const mediaAlt = 'example image';

storiesOf('Components|Card-V2', module)
  .addDecorator(withReadme(readme))
  .addDecorator(story => (
    <div className="bx--col-sm-6 bx--col-lg-3">{story()}</div>
  ))
  .add(
    'default',
    withInfo(
      `
      This card is an example of how a card might appear but can be updated and
      modified to display any data that is needed within the context of your product.
      This example uses CardMeta and CardText components.
    `
    )(() => (
      <Cardv2 {...cardProps}>
        <CardMeta {...cardMetaProps} />
        <CardText className="some-class">
          <p>
            This card is an example of how a card might appear but can be
            updated and modified to display any data that is needed within the
            context of your product.
          </p>
        </CardText>
      </Cardv2>
    ))
  )
  .add(
    'Media Card',
    withInfo(
      `
      Media Cards provide an at-a glance preview of media content. The example
      below uses the CardMedia and CardMeta component. The CardMeta has metaPadding
      prop that provides 16px padding when used above or below a CardMedia component.
    `
    )(() => (
      <Cardv2 {...cardProps}>
        <CardMedia
          className="some-class"
          type="img"
          src={mediaSrc}
          altText={mediaAlt}
        />
        <CardMeta {...cardMetaProps} metaPadding />
      </Cardv2>
    ))
  )
  .add(
    'Media and Text Card',
    withInfo(
      `
        CardMedia, CardText and CardMeta can be combined in any combination.
      `
    )(() => (
      <div>
        <Cardv2 {...cardProps}>
          <CardMeta {...cardMetaProps} />
          <CardText className="some-class">
            <p>
              This card is an example of how a card might appear but can be
              updated and modified to display any data that is needed within the
              context of your product.
            </p>
          </CardText>
          <CardMedia
            className="some-class"
            type="img"
            src={mediaSrc}
            altText={mediaAlt}
          />
        </Cardv2>
        <Cardv2 {...cardProps}>
          <CardMeta {...cardMetaProps} metaPadding />
          <CardMedia
            className="some-class"
            type="img"
            src={mediaSrc}
            altText={mediaAlt}
          />
          <CardText className="some-class">
            <p>
              This card is an example of how a card might appear but can be
              updated and modified to display any data that is needed within the
              context of your product.
            </p>
          </CardText>
        </Cardv2>
      </div>
    ))
  );
