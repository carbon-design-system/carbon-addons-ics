import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withReadme } from 'storybook-readme';
import readme from './README.md';

const boxStyle = {
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '2rem 0',
  flexDirection: 'column',
  padding: '40% 0 30%',
};

storiesOf('Globals|Layer', module)
  .addDecorator(withReadme(readme))
  .add(
    'Shadows & elevation',
    withInfo(``)(() => (
      <div className="bx--grid">
        <div className="bx--row">
          <div className="bx--col-xs-6 bx--col-sm-4 bx--col-md-2">
            <div
              style={{
                ...boxStyle,
              }}
            >
              <div className="ibm-type-b">flat</div>
            </div>
          </div>
          <div className="bx--col-xs-6 bx--col-sm-4 bx--col-md-2">
            <div
              style={{
                ...boxStyle,
                boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.15), 0 2px 2px 0 rgba(0, 0, 0, 0.1)',
              }}
            >
              <div className="ibm-type-b">raised</div>
            </div>
          </div>
          <div className="bx--col-xs-6 bx--col-sm-4 bx--col-md-2">
            <div
              style={{
                ...boxStyle,
                boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.15), 0 4px 4px 0 rgba(0, 0, 0, 0.1)',
              }}
            >
              <div className="ibm-type-b">overlay</div>
            </div>
          </div>
          <div className="bx--col-xs-6 bx--col-sm-4 bx--col-md-2">
            <div
              style={{
                ...boxStyle,
                boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 8px 8px 0 rgba(0, 0, 0, 0.1)',
              }}
            >
              <div className="ibm-type-b">pop-out</div>
            </div>
          </div>
          <div className="bx--col-xs-6 bx--col-sm-4 bx--col-md-2">
            <div
              style={{
                ...boxStyle,
                boxShadow: '0 8px 16px 0 rgba(0, 0, 0, 0.15), 0 16px 16px 0 rgba(0, 0, 0, 0.05)',
              }}
            >
              <div className="ibm-type-b">temporary-nav</div>
            </div>
          </div>
          <div className="bx--col-xs-6 bx--col-sm-4 bx--col-md-2">
            <div
              style={{
                ...boxStyle,
                boxShadow: '0 16px 24px 0 rgba(0, 0, 0, 0.1), 0 24px 24px 0 rgba(0, 0, 0, 0.05)',
              }}
            >
              <div className="ibm-type-b">sticky-nav</div>
            </div>
          </div>
        </div>
      </div>
    )),
  );
