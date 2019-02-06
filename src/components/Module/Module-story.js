import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { Module, ModuleHeader, ModuleBody } from '../../index';
import { withReadme } from 'storybook-readme';
import readme from './README.md';

storiesOf('Components|Module', module)
  .addDecorator(withReadme(readme))
  .addDecorator(story => <div className="bx--col-md-8">{story()}</div>)
  .add(
    'Fluid width',
    withInfo(`This is an example of a fluid width module`)(() => (
      <Module className="some-class">
        <ModuleHeader>Module Example</ModuleHeader>
        <ModuleBody>
          <p>
            Lorem Ipsum is dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry&rsquo;s standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </p>
          <p>
            It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged.
          </p>
        </ModuleBody>
      </Module>
    ))
  )
  .add(
    'Fixed width',
    withInfo(`This is an example of a fixed width module`)(() => (
      <Module className="some-class" size="single">
        <ModuleHeader>Module Example</ModuleHeader>
        <ModuleBody>
          <p>
            Lorem Ipsum is dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry&rsquo;s standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </p>
          <p>
            It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged.
          </p>
        </ModuleBody>
      </Module>
    ))
  )
  .add(
    'Outer padding',
    withInfo(`This is an example of a module with outer padding`)(() => (
      <Module className="some-class" padding>
        <ModuleHeader>Module Example</ModuleHeader>
        <ModuleBody>
          <p>
            Lorem Ipsum is dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry&rsquo;s standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </p>
          <p>
            It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged.
          </p>
        </ModuleBody>
      </Module>
    ))
  );
