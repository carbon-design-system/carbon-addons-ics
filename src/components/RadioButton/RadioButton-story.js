import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { RadioButton } from 'carbon-components-react';
import { withReadme } from 'storybook-readme';
import readme from './README.md';

const radioProps = {
  className: 'some-class',
};

storiesOf('Components|RadioButton', module)
  .addDecorator(withReadme(readme))
  .add(
    'enabled',
    withInfo(
      `
       This shows how the Radio Button component can be used as an uncontrolled component that is initially checked by setting the defaultChecked property to true. To use the component in a controlled way, set the checked property instead.
      `,
    )(() => (
      <RadioButton
        name="test"
        onChange={action('onChange')}
        value="standard"
        labelText="Standard Radio Button"
        id="radio-1"
        {...radioProps}
      />
    )),
  )
  .add(
    'disabled',
    withInfo(
      `
      This example shows a disabled Radio Button component.
    `,
    )(() => (
      <RadioButton
        name="test-2"
        value="disabled"
        labelText="Disabled Radio Button"
        id="radio-2"
        disabled
        {...radioProps}
      />
    )),
  );
