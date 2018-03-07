import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { ActionIcon } from '../../index';
import { withInfo } from '@storybook/addon-info';
import { withReadme } from 'storybook-readme';
import readme from './README.md';

const buttonEvents = {
  onClick: action('onClick'),
  onFocus: action('onFocus'),
  className: 'some-class',
};

storiesOf('Components|Action Icon', module)
  .addDecorator(withReadme(readme))
  .add(
    'default',
    withInfo(``)(() => (
      <ActionIcon
        {...buttonEvents}
        icon="search"
        className="some-class"
        iconDescription="Search this page"
      />
    )),
  )
  .add(
    'selected',
    withInfo(`This is an example of an ActionIcon with a selected prop`)(() => (
      <ActionIcon
        {...buttonEvents}
        className="some-class"
        icon="grid-view"
        iconDescription="View page as a grid"
        selected
      />
    )),
  )
  .add(
    'disabled',
    withInfo(`To disable, use the disabled prop, as seen in this example.`)(() => (
      <ActionIcon
        {...buttonEvents}
        className="some-class"
        icon="upload"
        iconDescription="Upload a profile picture"
        disabled
      />
    )),
  )
  .add(
    'small',
    withInfo(`
        Use the small prop to get a small icon, as seen in this example.
      `)(() => (
      <ActionIcon
        {...buttonEvents}
        className="some-class"
        icon="add"
        iconDescription="Add a new table row"
        small
      />
    )),
  )
  .add(
    'small selected',
    withInfo(
      `
        This is an example of a small, selected ActionIcon.
      `,
    )(() => (
      <ActionIcon
        {...buttonEvents}
        className="some-class"
        icon="tag"
        iconDescription="View document tags"
        small
        selected
      />
    )),
  );
