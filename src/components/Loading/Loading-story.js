import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { Loading } from '../../index';
import { withReadme } from 'storybook-readme';
import readme from './README.md';

const loadingProps = {
  active: true,
  className: 'some-class',
};

storiesOf('Components|Loading', module)
  .addDecorator(withReadme(readme))
  .add(
    'Loading with overlay',
    withInfo(``)(() => <Loading {...loadingProps} size={'large'} />)
  )
  .add(
    'Loading without overlay',
    withInfo(``)(() => (
      <Loading {...loadingProps} size={'large'} withOverlay={false} />
    ))
  )
  .add(
    'Small loading',
    withInfo(``)(() => <Loading {...loadingProps} withOverlay={false} />)
  );
