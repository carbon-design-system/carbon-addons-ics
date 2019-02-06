import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Button } from 'carbon-components-react';
import { withInfo } from '@storybook/addon-info';
import { withReadme } from 'storybook-readme';
import readme from './README.md';

const buttonEvents = {
  onClick: action('onClick'),
  onFocus: action('onFocus'),
  className: 'some-class',
};

storiesOf('Components|Buttons', module)
  .addDecorator(withReadme(readme))
  .add(
    'Primary Buttons',
    withInfo(
      `
      This is an example of a primary button.
    `
    )(() => (
      <div>
        <Button {...buttonEvents} className="some-class">
          Primary Button
        </Button>
        &nbsp;
        <Button {...buttonEvents} className="some-class" disabled>
          Disabled Primary
        </Button>
        &nbsp;
      </div>
    ))
  )
  .add(
    'Secondary Buttons',
    withInfo(
      `
      This is an example of a secondary button.
    `
    )(() => (
      <div>
        <Button kind="secondary" {...buttonEvents} className="some-class">
          Secondary Button
        </Button>
        &nbsp;
        <Button
          kind="secondary"
          {...buttonEvents}
          className="some-class"
          disabled>
          Disabled Secondary
        </Button>
      </div>
    ))
  )
  .add(
    'Flat Buttons',
    withInfo(`
      This is an example of a flat button.
    `)(() => (
      <div>
        <Button
          kind="ghost"
          className="some-class"
          iconDescription="Add"
          {...buttonEvents}>
          Flat Button
        </Button>
        &nbsp;
        <Button
          kind="ghost"
          className="some-class"
          iconDescription="Add"
          {...buttonEvents}
          disabled>
          Disabled Flat
        </Button>
      </div>
    ))
  )
  .add(
    'Sets of Buttons',
    withInfo(`
      Most of our users are on Windows machines and the standard for the Windows
      OS is to have the primary button on the left and the secondary button on
      the right. To help our users be more efficient, we should follow this
      established pattern that matches the mental model of our users.
    `)(() => (
      <div>
        <Button kind="primary" {...buttonEvents} className="some-class">
          Positive
        </Button>
        &nbsp;
        <Button kind="secondary" {...buttonEvents} className="some-class">
          Negative
        </Button>
      </div>
    ))
  );
