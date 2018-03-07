import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Checkbox } from 'carbon-components-react';
import { withInfo } from '@storybook/addon-info';
import { withReadme } from 'storybook-readme';
import readme from './README.md';

const checkboxEvents = {
  className: 'some-class',
  onChange: action('onChange'),
};

storiesOf('Components|Checkbox', module)
  .addDecorator(withReadme(readme))
  .add(
    'enabled checked',
    withInfo(
      `
      The example below shows how the Checkbox component can be used as an uncontrolled component that is initially checked
      by setting the defaultChecked property to true. To use the component in a controlled way, you should set the
      checked property instead.
    `,
    )(() => (
      <fieldset className="bx--fieldset">
        <legend className="bx--label">Favorite Colors</legend>
        <Checkbox defaultChecked {...checkboxEvents} id="red" labelText="Red" />
        <Checkbox defaultChecked {...checkboxEvents} id="blue" labelText="Blue" />
      </fieldset>
    )),
  )
  .add(
    'enabled unchecked',
    withInfo(
      `
      The example below shows how the Checkbox component can be used as an uncontrolled component that is initially
      unchecked. To use the component in a controlled way, you should set the checked property instead.
    `,
    )(() => (
      <fieldset className="bx--fieldset">
        <legend className="bx--label">Favorite Colors</legend>
        <Checkbox {...checkboxEvents} id="red" labelText="Red" />
        <Checkbox {...checkboxEvents} id="blue" labelText="Blue" />
      </fieldset>
    )),
  )
  .add(
    'disabled',
    withInfo(
      `
      The example below shows a disabled Checkbox component.
    `,
    )(() => (
      <fieldset disabled className="bx--fieldset">
        <legend className="bx--label">Favorite Colors</legend>
        <Checkbox {...checkboxEvents} id="red" labelText="Red" />
        <Checkbox {...checkboxEvents} id="blue" labelText="Blue" />
      </fieldset>
    )),
  );
