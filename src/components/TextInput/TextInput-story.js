import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { TextInput } from '../../index';
import { withReadme } from 'storybook-readme';
import readme from './README.md';

const TextInputProps = {
  className: 'some-class',
  id: 'test2',
  labelText: 'Text Input',
  onClick: action('onClick'),
  onChange: action('onChange'),
};

let controlledValue = 'Controlled value';

storiesOf('Components|TextInput', module)
  .addDecorator(withReadme(readme))
  .add(
    'enabled',
    withInfo(
      `
      This example shows an enabled TextInput component. The default type is 'text' and its
      value can be either 'string' or 'number'. Notice there is no placeholder prop. The label is designed
      to be the placeholder.
    `,
    )(() => <TextInput {...TextInputProps} />),
  )
  .add(
    'disabled',
    withInfo(
      `
      This example shows a disabled TextInput component.
    `,
    )(() => <TextInput disabled {...TextInputProps} />),
  )
  .add(
    'email',
    withInfo(
      `
      This example shows an enabled TextInput component with type 'email'.
    `,
    )(() => <TextInput {...TextInputProps} type={'email'} />),
  )
  .add(
    'password',
    withInfo(
      `
      This example shows an enabled TextInput component with type 'password'.
    `,
    )(() => <TextInput {...TextInputProps} type={'password'} />),
  )
  .add(
    'controlled',
    withInfo(
      `
      This example shows a controlled TextInput component (i.e. with a value prop)
    `,
    )(() => <TextInput {...TextInputProps} value={controlledValue} />),
  );
