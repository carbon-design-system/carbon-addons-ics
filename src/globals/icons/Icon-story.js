import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withReadme } from 'storybook-readme';
import readme from './README.md';
import { icons } from '../../components/Icon';
import { ActionIcon } from '../../index';

const boxStyle = {
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '2rem 0',
  flexDirection: 'column',
};

storiesOf('Globals|Icons', module)
  .addDecorator(withReadme(readme))
  .add(
    'ICS icons',
    withInfo(``)(() => (
      <div className="bx--grid">
        <div className="bx--row">
          {icons.map(i => (
            <div className="bx--col-xs-4 bx--col-sm-3 bx--col-md-2" key={i.title}>
              <div style={boxStyle}>
                <ActionIcon icon={i.title} iconDescription={`${i.title} icon`} />
              </div>
            </div>
          ))}
        </div>
      </div>
    )),
  );
