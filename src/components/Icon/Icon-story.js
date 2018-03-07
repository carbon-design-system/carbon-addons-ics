import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withReadme } from 'storybook-readme';
import readme from './README.md';
import icons from '../../globals/icons/ics-icons';
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
            <div className="bx--col-xs-2" key={i.name}>
              <div style={boxStyle}>
                <Icon name={i.name.split('--')[1]} />
                <div className="ibm-type-a" style={{ paddingTop: '1rem' }}>
                  {i.name.split('--')[1]}
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
            <div className="bx--col-xs-2" key={i.name}>
              <div style={boxStyle}>
                <Icon name={i.name.split('--')[1]} height={16} width={16} />
                <div className="ibm-type-a" style={{ paddingTop: '1rem' }}>
                  {i.name.split('--')[1]}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    )),
  );
