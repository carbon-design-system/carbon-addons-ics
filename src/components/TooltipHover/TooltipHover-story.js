import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { TooltipHover } from '../../index';
import { withReadme } from 'storybook-readme';
import readme from './README.md';

storiesOf('Components|Tooltip', module)
  .addDecorator(withReadme(readme))
  .add(
    'Tooltip on hover',
    withInfo(
      `
      This example shows the tooltip on hover.
    `,
    )(() => (
      <div style={{ marginTop: '2rem' }}>
        <TooltipHover text="Change layout" iconName="info" />
      </div>
    )),
  );
