import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withReadme } from 'storybook-readme';
import { Avatar } from '../../index';
import readme from './README.md';

storiesOf('Components|Avatar', module)
  .addDecorator(withReadme(readme))
  .add(
    'default',
    withInfo(
      `
      This is the default example of an Avatar without an image provided. Users have the ability to upload pictures for their avatar but until they do so they are provided with a default Avatar.
    `,
    )(() => (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
        <div style={{ padding: 10 }}>
          <Avatar size={'xs'} />
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
       This is the default example of an Avatar with an image provided. Images provided to the Avatar component should be square shaped, having an equal height and width.
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
