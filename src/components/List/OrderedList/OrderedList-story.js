import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { ListItem, OrderedList } from '../../../index';
import { withReadme } from 'storybook-readme';
import readme from './README.md';

storiesOf('Components|List', module)
  .addDecorator(withReadme(readme))
  .add(
    'Ordered List',
    withInfo(``)(() => (
      <div>
        <OrderedList>
          <ListItem>First item</ListItem>
          <ListItem>
            Second item with extras
            <OrderedList nested>
              <ListItem>Nested list item</ListItem>
              <ListItem>Nested list item</ListItem>
            </OrderedList>
          </ListItem>
          <ListItem>Third item</ListItem>
        </OrderedList>
      </div>
    )),
  )
  .add(
    'Ordered List - small',
    withInfo(``)(() => (
      <div>
        <OrderedList small>
          <ListItem>First item</ListItem>
          <ListItem>
            Second item with extras
            <OrderedList nested>
              <ListItem>Nested list item</ListItem>
              <ListItem>Nested list item</ListItem>
            </OrderedList>
          </ListItem>
          <ListItem>Third item</ListItem>
        </OrderedList>
      </div>
    )),
  );
