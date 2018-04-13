import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import { Pager } from '../../index';
import { withReadme } from 'storybook-readme';
import readme from './README.md';

const props = {
  page: 4,
  totalItems: 20,
  className: 'some-class',
  max: 5,
  onKeyUp: action('onKeyUp'),
  onChange: action('onChange'),
};

storiesOf('Components|Pager', module)
  .addDecorator(withReadme(readme))
  .addDecorator(story => <div style={{ width: '800px' }}>{story()}</div>)
  .add('default', withInfo(``)(() => <Pager {...props} />));
