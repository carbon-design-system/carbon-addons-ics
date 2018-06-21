import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import Avatar from '../Avatar';

storiesOf('Components|Avatar', module).add(
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
);
