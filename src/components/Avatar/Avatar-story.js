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
      <Avatar size={'xs'} />
      <Avatar size={'sm'} />
      <Avatar size={'md'} />
      <Avatar size={'lg'} />
      <Avatar size={'xl'} />
      <Avatar size={'xxl'} />
    </div>
  )),
);
