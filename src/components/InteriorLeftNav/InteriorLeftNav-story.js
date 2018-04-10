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
        <InteriorLeftNavList open={true} title="Start here">
          <InteriorLeftNavItem>
            <a target="_blank" href="#example-1">
              Developers
            </a>
          </InteriorLeftNavItem>
        </InteriorLeftNavList>
        <InteriorLeftNavList title="Style">
          <InteriorLeftNavItem>
            <a href="#example-2">Color</a>
          </InteriorLeftNavItem>
          <InteriorLeftNavItem>
            <a href="#example-3">Icons</a>
          </InteriorLeftNavItem>
          <InteriorLeftNavItem>
            <a href="/iframe.html">Gradients</a>
          </InteriorLeftNavItem>
          <InteriorLeftNavItem>
            <a href="#example-5">Icons</a>
          </InteriorLeftNavItem>
        </InteriorLeftNavList>
        <InteriorLeftNavItem>
          <a href="#example-6">Resources</a>
        </InteriorLeftNavItem>
        <InteriorLeftNavItem>
          <a href="#example-7" target="_blank">
            Version tracker
          </a>
        </InteriorLeftNavItem>
      </InteriorLeftNav>
    )),
  );
