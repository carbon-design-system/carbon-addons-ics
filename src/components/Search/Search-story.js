import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { Search } from '../../index';
import { withReadme } from 'storybook-readme';
import readme from './README.md';

const searchProps = {
  className: 'some-class',
};

storiesOf('Components|Search', module)
  .addDecorator(withReadme(readme))
  .add(
    'default',
    withInfo(``)(() => (
      <Search
        {...searchProps}
        className="some-class"
        id="search"
        labelText="Search"
        placeHolderText="Search"
        onChange={() => {
          action('onChange');
        }}
      />
    )),
  );
