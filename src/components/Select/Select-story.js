import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { Select } from '../../index';
import { SelectItem, SelectItemGroup } from 'carbon-components-react';
import { withReadme } from 'storybook-readme';
import readme from './README.md';

const selectProps = {
  onChange: action('onChange'),
  className: 'some-class',
};

storiesOf('Components|Select', module)
  .addDecorator(withReadme(readme))
  .add(
    'Select menu',
    withInfo(
      `
      This example shows an enabled Select component with three items.
    `,
    )(() => (
      <Select {...selectProps} id="select-1" defaultValue="placeholder-item">
        <SelectItem disabled hidden value="placeholder-item" text="Pick an option" />
        <SelectItemGroup label="Starter">
          <SelectItem value="option-1" text="Option 1" />
          <SelectItem value="option-2" text="Option 2" />
        </SelectItemGroup>
        <SelectItemGroup label="Advanced">
          <SelectItem value="option-3" text="Option 3" />
        </SelectItemGroup>
      </Select>
    )),
  )
  .add(
    'Disabled select menu',
    withInfo(
      `
      This example shows an disabled Select component.
    `,
    )(() => (
      <Select disabled {...selectProps} id="select-2">
        <SelectItem disabled hidden value="placeholder-item" text="Pick an option" />
        <SelectItem value="option-1" text="Option 1" />
        <SelectItem value="option-2" text="Option 2" />
        <SelectItem value="option-3" text="Option 3" />
      </Select>
    )),
  )
  .add(
    'no label',
    withInfo(
      `
      This example shows a Select component without a label.
    `,
    )(() => (
      <Select {...selectProps} id="select-3" defaultValue="placeholder-item" hideLabel>
        <SelectItem disabled hidden value="placeholder-item" text="Pick an option" />
        <SelectItemGroup label="Starter">
          <SelectItem value="option-1" text="Option 1" />
          <SelectItem value="option-2" text="Option 2" />
        </SelectItemGroup>
        <SelectItemGroup label="Advanced">
          <SelectItem value="option-3" text="Option 3" />
        </SelectItemGroup>
      </Select>
    )),
  )
  .add(
    'Inline Select menu',
    withInfo(
      `
        This example shows an enabled Select component with three items.
      `,
    )(() => (
      <Select {...selectProps} inline id="select-1" defaultValue="placeholder-item">
        <SelectItem disabled hidden value="placeholder-item" text="Pick an option" />
        <SelectItemGroup label="Starter">
          <SelectItem value="option-1" text="Option 1" />
          <SelectItem value="option-2" text="Option 2" />
        </SelectItemGroup>
        <SelectItemGroup label="Advanced">
          <SelectItem value="option-3" text="Option 3" />
        </SelectItemGroup>
      </Select>
    )),
  );
