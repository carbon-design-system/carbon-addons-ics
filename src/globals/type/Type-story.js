import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withReadme } from 'storybook-readme';
import readme from './README.md';

storiesOf('Globals|Type', module)
  .addDecorator(withReadme(readme))
  .add(
    'Type rules',
    withInfo(``)(() => (
      <div className="bx--grid" style={{ marginTop: '1rem' }}>
        <div className="bx--row">
          <div className="bx--col-xs-12">
            <div className="ibm-type-h">Type H</div>
            <div className="ibm-type-g">Type G</div>
            <div className="ibm-type-e">Type E</div>
            <div className="ibm-type-d">Type D</div>
            <div className="ibm-type-c">Type C</div>
            <div className="ibm-type-b">Type B</div>
            <div className="ibm-type-a">Type A</div>
          </div>
        </div>
      </div>
    ))
  );
