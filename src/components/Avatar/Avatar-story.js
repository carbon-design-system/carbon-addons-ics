import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import Avatar from '../Avatar';

storiesOf('Components|Avatar', module)
  .add(
    'default',
    withInfo(
      `
      This card is an example of how a card might appear but can be updated and
      modified to display any data that is needed within the context of your product.
      This example uses CardMeta and CardText components.
    `,
    )(() => (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
        <div style={{ padding: 10 }}>
          <Avatar size={'xs'} description="Here is a description" />
        </div>
        <div style={{ padding: 10 }}>
          <Avatar size={'sm'} description="Here is a description" />
        </div>
        <div style={{ padding: 10 }}>
          <Avatar size={'md'} description="Here is a description" />
        </div>
        <div style={{ padding: 10 }}>
          <Avatar size={'lg'} description="Here is a description" />
        </div>
        <div style={{ padding: 10 }}>
          <Avatar size={'xl'} description="Here is a description" />
        </div>
        <div style={{ padding: 10 }}>
          <Avatar size={'xxl'} description="Here is a description" />
        </div>
      </div>
    )),
  )
  .add(
    'with image',
    withInfo(
      `
      Media Cards provide an at-a glance preview of media content. The example
      below uses the CardMedia and CardMeta component. The CardMeta has metaPadding
      prop that provides 16px padding when used above or below a CardMedia component.
    `,
    )(() => (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
        <div style={{ padding: 10 }}>
          <Avatar imgUrl={'/felton-jamer.png'} size={'xs'} description="Here is a description" />
        </div>
        <div style={{ padding: 10 }}>
          <Avatar imgUrl={'/felton-jamer.png'} size={'sm'} description="Here is a description" />
        </div>
        <div style={{ padding: 10 }}>
          <Avatar imgUrl={'/felton-jamer.png'} size={'md'} description="Here is a description" />
        </div>
        <div style={{ padding: 10 }}>
          <Avatar imgUrl={'/felton-jamer.png'} size={'lg'} description="Here is a description" />
        </div>
        <div style={{ padding: 10 }}>
          <Avatar imgUrl={'/felton-jamer.png'} size={'xl'} description="Here is a description" />
        </div>
        <div style={{ padding: 10 }}>
          <Avatar imgUrl={'/felton-jamer.png'} size={'xxl'} description="Here is a description" />
        </div>
      </div>
    )),
  );
