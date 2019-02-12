import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { NumberInput } from 'carbon-components-react';
import { withReadme } from 'storybook-readme';
import readme from './README.md';

const numberInputProps = {
  className: 'some-class',
  id: 'some-id',
  label: 'Number Input label',
  onChange: action('onChange'),
  onClick: action('onClick'),
  min: -10,
  max: 100,
  step: 10,
  invalidText: 'Invalid number format',
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
      `
    )(() => (
      <div>
        <NumberInput
          {...numberInputProps}
          label={'One Step Example'}
          step={1}
        />
        <NumberInput
          {...numberInputProps}
          label={'Ten Step Example'}
          value={42}
        />
      </div>
    ))
  )
  .add(
    'disabled',
    withInfo(
      `
        ${introText}
        The example below shows an disabled Number Input component.
      `
    )(() => <NumberInput {...numberInputProps} disabled value={null} />)
  )
  .add(
    'invalid',
    withInfo(
      `
        ${introText}
        The example below shows an disabled Number Input component.
      `
    )(() => <NumberInput {...numberInputProps} invalid />)
  );
