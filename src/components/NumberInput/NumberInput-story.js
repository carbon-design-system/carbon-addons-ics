import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { NumberInput } from '../../index';
import { withReadme } from 'storybook-readme';
import readme from './README.md';

const numberInputProps = {
  className: 'some-class',
  id: 'tj-input',
  label: 'Number Input label',
  onChange: action('onChange'),
  onClick: action('onClick'),
  min: 0,
  max: 100,
  value: 50,
  step: 10,
  invalidText: 'Number is not valid',
};

const introText = `
  Number inputs are similar to text fields, but contain controls used to increase or decrease an incremental value. The Number Input component can be passed a starting value, a min, a max, and the step.
`;

storiesOf('Components|NumberInput', module)
  .addDecorator(withReadme(readme))
  .add(
    'enabled',
    withInfo(
      `
        ${introText}
        The example below shows an enabled Number Input component.
      `,
    )(() => <NumberInput {...numberInputProps} />),
  )
  .add(
    'disabled',
    withInfo(
      `
        ${introText}
        The example below shows an disabled Number Input component.
      `,
    )(() => <NumberInput disabled {...numberInputProps} />),
  )
  .add(
    'invalid',
    withInfo(
      `
        ${introText}
        The example below shows an disabled Number Input component.
      `,
    )(() => <NumberInput {...numberInputProps} invalid />),
  );
