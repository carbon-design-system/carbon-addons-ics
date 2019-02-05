import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';
import '../src/index-themed.scss';

setOptions({
  hierarchySeparator: /\/|\./,
  hierarchyRootSeparator: /\|/,
});

addDecorator((story, componentContext) =>
  componentContext.kind === 'Welcome|Getting started' ||
  componentContext.kind === 'Globals|Grid' ||
  componentContext.kind === 'Globals|Icon' ||
  componentContext.kind === 'Globals|Theme' ||
  componentContext.kind === 'Globals|Layer' ? (
    <div>{story()}</div>
  ) : (
    <div className="bx--grid" style={{ marginTop: '1rem' }}>
      <div className="bx--row">{story()}</div>
    </div>
  )
);

function importAll(req) {
  req.keys().forEach(filename => req(filename));
}

function loadStories() {
  require('./Welcome.js');
  let req;
  req = require.context('../src/', true, /\-story\.js$/);
  importAll(req);
}

configure(loadStories, module);
