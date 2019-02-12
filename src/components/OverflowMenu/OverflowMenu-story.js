import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { OverflowMenu, OverflowMenuItem } from 'carbon-components-react';
import { withReadme } from 'storybook-readme';
import readme from './README.md';

const overflowMenuEvents = {
  onClick: action('onClick'),
  className: 'some-class',
};

const overflowMenuItemEvents = {
  onClick: action('onClick'),
  className: 'some-class',
};

storiesOf('Components|OverflowMenu', module)
  .addDecorator(withReadme(readme))
  .add(
    'Basic overflow',
    withInfo(``)(() => (
      <OverflowMenu {...overflowMenuEvents}>
        <OverflowMenuItem {...overflowMenuItemEvents} itemText="Stop App" />
        <OverflowMenuItem {...overflowMenuItemEvents} itemText="Restart App" />
        <OverflowMenuItem {...overflowMenuItemEvents} itemText="Rename App" />
        <OverflowMenuItem
          {...overflowMenuItemEvents}
          itemText="Edit Routes and Access"
        />
      </OverflowMenu>
    ))
  )
  .add(
    'Floating overflow',
    withInfo(
      `
      Overflow Menu with the floatingMenu prop is used when you need to place an OverflowMenu
      inside a container with "overflow" CSS set.
    `
    )(() => (
      <OverflowMenu {...overflowMenuEvents} floatingMenu>
        <OverflowMenuItem {...overflowMenuItemEvents} itemText="Stop App" />
        <OverflowMenuItem {...overflowMenuItemEvents} itemText="Restart App" />
        <OverflowMenuItem {...overflowMenuItemEvents} itemText="Rename App" />
        <OverflowMenuItem
          {...overflowMenuItemEvents}
          itemText="Edit Routes and Access"
        />
      </OverflowMenu>
    ))
  );
