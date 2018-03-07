import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { Dropdown } from '../../index';
import { DropdownItem } from 'carbon-components-react';
import { withReadme } from 'storybook-readme';
import readme from './README.md';

const dropdownEvents = {
  onBlur: () => {
    console.log('blur'); // eslint-disable-line no-console
  },
  onClick: () => {
    console.log('click'); // eslint-disable-line no-console
  },
  onFocus: () => {
    console.log('focus'); // eslint-disable-line no-console
  },
  onMouseDown: () => {
    console.log('mouseDown'); // eslint-disable-line no-console
  },
  onMouseEnter: () => {
    console.log('mouseEnter'); // eslint-disable-line no-console
  },
  onMouseLeave: () => {
    console.log('mouseLeave'); // eslint-disable-line no-console
  },
  onMouseUp: () => {
    console.log('mouseUp'); // eslint-disable-line no-console
  },
  className: 'some-class',
};

storiesOf('Components|Dropdown', module)
  .addDecorator(withReadme(readme))
  .add(
    'with default text',
    withInfo(``)(() => (
      <Dropdown
        {...dropdownEvents}
        onChange={selectedItemInfo => console.log(selectedItemInfo)} // eslint-disable-line no-console
        defaultText="Choose something.."
      >
        <DropdownItem itemText="All" value="all" />
        <DropdownItem itemText="Cloud Foundry API" value="cloudFoundry" />
        <DropdownItem itemText="Staging" value="staging" />
        <DropdownItem itemText="Droplet Execution Agent" value="dea" />
        <DropdownItem itemText="Router" value="router" />
      </Dropdown>
    )),
  )
  .add(
    'disabled',
    withInfo(
      `
      This is an example of a disabled dropdown.
      `,
    )(() => (
      <Dropdown
        {...dropdownEvents}
        onChange={selectedItemInfo => console.log(selectedItemInfo)} // eslint-disable-line no-console
        defaultText="Choose something.."
        disabled
      >
        <DropdownItem itemText="All" value="all" />
        <DropdownItem itemText="Cloud Foundry API" value="cloudFoundry" />
        <DropdownItem itemText="Staging" value="staging" />
        <DropdownItem itemText="Droplet Execution Agent" value="dea" />
        <DropdownItem itemText="Router" value="router" />
      </Dropdown>
    )),
  );
