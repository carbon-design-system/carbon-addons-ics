import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { Tooltip } from '../../index';
import { withReadme } from 'storybook-readme';
import readme from './README.md';

storiesOf('Components|Tooltip', module)
  .addDecorator(withReadme(readme))
  .add(
    'Tooltip on click',
    withInfo(
      `
      This example shows the tooltip on click.
    `,
    )(() => (
      <div style={{ marginTop: '2rem' }}>
        <Tooltip triggerText="Tooltip label">
          <p className="bx--tooltip__label">Tooltip subtitle</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaeca cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
        </Tooltip>
      </div>
    )),
  )
  .add(
    'Complex tooltip on hover',
    withInfo('This example shows a floating tooltip that appears on hover.')(() => (
      <div style={{ marginTop: '2rem' }}>
        <Tooltip openOnHover triggerText="Tooltip label">
          <p className="bx--tooltip__label">Tooltip subtitle</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaeca cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
        </Tooltip>
      </div>
    )),
  );
