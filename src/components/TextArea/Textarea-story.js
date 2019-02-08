import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { TextArea } from '../../index';
import { withReadme } from 'storybook-readme';
import readme from './README.md';

const textareaProps = {
  labelText: 'This is a Label',
  className: 'some-class',
  onChange: action('onChange'),
  onClick: action('onClick'),
  placeholder: 'Hint text here',
  id: 'test2',
  cols: 50,
  rows: 4,
};

storiesOf('Components|TextArea', module)
  .addDecorator(withReadme(readme))
  .add(
    'enabled',
    withInfo(
      `
      This example shows an enabled
      Text Area component.
    `
    )(() => <TextArea {...textareaProps} />)
  )
  .add(
    'disabled',
    withInfo(
      `
      This example shows an disabled
      Text Area component.
    `
    )(() => <TextArea disabled {...textareaProps} placeholder={'Disabled'} />)
  );
