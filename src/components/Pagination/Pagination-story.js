import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { Pagination } from '../../index';
import { withReadme } from 'storybook-readme';
import readme from './README.md';

const props = {
  totalItems: 10,
  className: 'some-class',
};

storiesOf('Components|Pagination', module)
  .addDecorator(withReadme(readme))
  .addDecorator(story => <div style={{ width: '800px' }}>{story()}</div>)
  .add('default', withInfo(``)(() => <Pagination {...props} />));
