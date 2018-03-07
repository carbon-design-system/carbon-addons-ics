import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withReadme } from 'storybook-readme';
import readme from './README.md';

const columnStyle = {
  height: '100vh',
  width: '100%',
  background: '#3c6df0',
};

storiesOf('Globals|Grid', module)
  .addDecorator(withReadme(readme))
  .add(
    'ICS grid',
    withInfo(``)(() => (
      <div className="bx--grid">
        <div className="bx--row">
          <div className="bx--col-xs-1">
            <div style={columnStyle} />
          </div>
          <div className="bx--col-xs-1">
            <div style={columnStyle} />
          </div>
          <div className="bx--col-xs-1">
            <div style={columnStyle} />
          </div>
          <div className="bx--col-xs-1">
            <div style={columnStyle} />
          </div>
          <div className="bx--col-xs-1">
            <div style={columnStyle} />
          </div>
          <div className="bx--col-xs-1">
            <div style={columnStyle} />
          </div>
          <div className="bx--col-xs-1">
            <div style={columnStyle} />
          </div>
          <div className="bx--col-xs-1">
            <div style={columnStyle} />
          </div>
          <div className="bx--col-xs-1">
            <div style={columnStyle} />
          </div>
          <div className="bx--col-xs-1">
            <div style={columnStyle} />
          </div>
          <div className="bx--col-xs-1">
            <div style={columnStyle} />
          </div>
          <div className="bx--col-xs-1">
            <div style={columnStyle} />
          </div>
        </div>
      </div>
    )),
  );
