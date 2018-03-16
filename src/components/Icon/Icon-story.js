import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withReadme } from 'storybook-readme';
import readme from './README.md';
import { icons } from './Icon';
import { Icon } from '../../index';

const boxStyle = {
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '2rem 0',
  flexDirection: 'column',
};

storiesOf('Components|Icon', module)
  .addDecorator(withReadme(readme))
  .add(
    'Regular icons',
    withInfo(``)(() => (
      <div className="bx--grid">
        <div className="bx--row">
          {icons.map(i => (
            <div className="bx--col-xs-4 bx--col-sm-3 bx--col-md-2" key={i.title}>
              <div style={boxStyle}>
                <Icon name={i.title} />
                <div className="ibm-type-a" style={{ paddingTop: '1rem' }}>
                  {i.title}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    )),
  )
  .add(
    'Small icons',
    withInfo(``)(() => (
      <div className="bx--grid">
        <div className="bx--row">
          {icons.map(i => (
            <div className="bx--col-xs-4 bx--col-sm-3 bx--col-md-2" key={i.title}>
              <div style={boxStyle}>
                <Icon name={i.title} height="16" width="16" />
                <div className="ibm-type-a" style={{ paddingTop: '1rem' }}>
                  {i.title}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    )),
  );
