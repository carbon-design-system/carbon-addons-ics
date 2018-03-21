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
};

const colors = [
  {
    name: '$brand-01',
    value: '#3c6df0',
  },
  {
    name: '$brand-02',
    value: '#1d3458',
  },
  {
    name: '$brand-03',
    value: '#40d5bb',
  },
  {
    name: '$inverse-01',
    value: '#ffffff',
  },
  {
    name: '$ui-01',
    value: '#ffffff',
  },
  {
    name: '$ui-02',
    value: '#f9f9f9',
  },
  {
    name: '$ui-03',
    value: '#f9f9f9',
  },
  {
    name: '$ui-04',
    value: '#d8d8d8',
  },
  {
    name: '$ui-05',
    value: '#595859',
  },
  {
    name: '$text-01',
    value: '#000000',
  },
  {
    name: '$text-02',
    value: '#595859',
  },
  {
    name: '$text-03',
    value: '#777677',
  },
  {
    name: '$field-01',
    value: 'transparent',
  },
  {
    name: '$support-01',
    value: '#ff5c49',
  },
  {
    name: '$support-02',
    value: '#34bc6e',
  },
  {
    name: '$support-03',
    value: '#e3bc13',
  },
  {
    name: '$support-04',
    value: '#3c6df0',
  },
];

storiesOf('Globals|Theme', module)
  .addDecorator(withReadme(readme))
  .add(
    'Color',
    withInfo(``)(() => (
      <div className="bx--grid" style={{ marginTop: '1rem' }}>
        <div className="bx--row">
          {colors.map(i => (
            <div className="bx--col-xs-6 bx--col-sm-4 bx--col-md-2">
              <div
                style={{
                  ...boxStyle,
                }}
              >
                <div
                  style={{
                    height: '48px',
                    width: '48px',
                    background: i.value,
                    borderRadius: '50%',
                    marginBottom: '1rem',
                    border: '1px solid #eee',
                  }}
                />
                <div className="ibm-type-b">{i.name}</div>
                <div className="ibm-type-a">{i.value}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    )),
  );
