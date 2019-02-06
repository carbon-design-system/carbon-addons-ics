import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { ListItem, UnorderedList } from '../../../index';
import { withReadme } from 'storybook-readme';
import readme from './README.md';

storiesOf('Components|List', module)
  .addDecorator(withReadme(readme))
  .add(
    'Unordered List',
    withInfo(``)(() => (
      <div>
        <UnorderedList>
          <ListItem>First item</ListItem>
          <ListItem>
            Second item with extras
            <UnorderedList nested>
              <ListItem>Nested list item</ListItem>
              <ListItem>Nested list item</ListItem>
            </UnorderedList>
          </ListItem>
          <ListItem>Third item</ListItem>
        </UnorderedList>
      </div>
    ))
  )
  .add(
    'Unordered List - small',
    withInfo(``)(() => (
      <div>
        <UnorderedList small>
          <ListItem>First item</ListItem>
          <ListItem>
            Second item with extras
            <UnorderedList nested>
              <ListItem>Nested list item</ListItem>
              <ListItem>Nested list item</ListItem>
            </UnorderedList>
          </ListItem>
          <ListItem>Third item</ListItem>
        </UnorderedList>
      </div>
    ))
  );
