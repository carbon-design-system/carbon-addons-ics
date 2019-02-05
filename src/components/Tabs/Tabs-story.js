import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { Tabs, Tab } from 'carbon-components-react';
import { withReadme } from 'storybook-readme';
import readme from './README.md';

const props = {
  tabs: {
    className: 'some-class',
    triggerHref: '#anotherAnchor',
  },
  tab: {
    className: 'another-class',
    onClick: action('onClick'),
    onKeyDown: action('onKeyDown'),
  },
};

storiesOf('Components|Tabs', module)
  .addDecorator(withReadme(readme))
  .add(
    'default',
    withInfo(``)(() => (
      <Tabs {...props.tabs}>
        <Tab {...props.tab} label="Overview">
          <div className="some-content" style={{ paddingTop: '1rem' }}>
            Overview Content
          </div>
        </Tab>
        <Tab {...props.tab} label="Apple">
          <div className="some-content" style={{ paddingTop: '1rem' }}>
            Apple Content
          </div>
        </Tab>
        <Tab {...props.tab} label="Banana">
          <div className="some-content" style={{ paddingTop: '1rem' }}>
            Banana Content
          </div>
        </Tab>
        <Tab {...props.tab} label="Orange">
          <div className="some-content" style={{ paddingTop: '1rem' }}>
            Orange Content
          </div>
        </Tab>
      </Tabs>
    ))
  )
  .add(
    'Selected Example',
    withInfo(
      `
      By using the selected prop on the Tabs component, you can switch which Tab gets
      rendered by default
    `
    )(() => (
      <Tabs {...props.tabs} selected={3}>
        <Tab {...props.tab} label="Overview">
          <div className="some-content" style={{ paddingTop: '1rem' }}>
            Overview Content
          </div>
        </Tab>
        <Tab {...props.tab} label="Apple">
          <div className="some-content" style={{ paddingTop: '1rem' }}>
            Apple Content
          </div>
        </Tab>
        <Tab {...props.tab} label="Banana">
          <div className="some-content" style={{ paddingTop: '1rem' }}>
            Banana Content
          </div>
        </Tab>
        <Tab {...props.tab} label="Orange">
          <div className="some-content" style={{ paddingTop: '1rem' }}>
            Orange Content
          </div>
        </Tab>
      </Tabs>
    ))
  );
