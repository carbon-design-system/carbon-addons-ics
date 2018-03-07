import React from 'react';
import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';
import readme from '../README.md';

storiesOf('Welcome|Getting started', module)
  .addDecorator(withReadme(readme))
  .add('Usage', () => (
    <div
      style={{
        background: '#3c6df1',
      }}
    >
      <div
        style={{
          color: '#fff',
          minHeight: '50vh',
        }}
      >
        <div
          style={{
            padding: '3rem 0 0',
          }}
        >
          <div className="bx--grid max">
            <div className="bx--row" style={{ marginBottom: '3rem' }}>
              <div className="bx--col-xs-12">
                <h1>{`ICS Storybook`}</h1>
                <h3
                  style={{
                    color: '#000',
                  }}
                >{`IBM Collaboration Solutions`}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          width: '100vw',
          height: '50vh',
          backgroundImage: `url(/intro.png)`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      />
    </div>
  ));
