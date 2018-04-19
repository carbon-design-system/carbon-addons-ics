import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { InteriorLeftNavItem, InteriorLeftNav, InteriorLeftNavList } from '../../index';
import { withReadme } from 'storybook-readme';
import readme from './README.md';

storiesOf('Components|InteriorLeftNav', module)
  .addDecorator(withReadme(readme))
  .add(
    'default',
    withInfo(``)(() => (
      <InteriorLeftNav className="some-class">
        <InteriorLeftNavList title="Start here">
          <InteriorLeftNavItem>
            <a target="_blank" href="https://github.com/carbon-design-system/carbon-addons-ics">
              Developers
            </a>
          </InteriorLeftNavItem>
        </InteriorLeftNavList>
        <InteriorLeftNavList title="Style">
          <InteriorLeftNavItem>
            <a href="https://github.com/carbon-design-system/carbon-addons-ics/tree/master/src/globals/grid">
              Grid
            </a>
          </InteriorLeftNavItem>
          <InteriorLeftNavItem>
            <a href="/iframe.html">Gradients</a>
          </InteriorLeftNavItem>
          <InteriorLeftNavItem>
            <a href="https://github.com/carbon-design-system/carbon-addons-ics/tree/master/src/globals/icons">
              Icons
            </a>
          </InteriorLeftNavItem>
        </InteriorLeftNavList>
        <InteriorLeftNavItem>
          <a href="https://github.com/carbon-design-system/carbon-addons-ics/tree/master/src">
            Resources
          </a>
        </InteriorLeftNavItem>
        <InteriorLeftNavItem>
          <a
            href="https://github.com/carbon-design-system/carbon-addons-ics/releases"
            target="_blank"
          >
            Version tracker
          </a>
        </InteriorLeftNavItem>
      </InteriorLeftNav>
    )),
  );
