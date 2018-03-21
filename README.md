# carbon-addons-ics

[![Build Status](https://travis-ci.org/carbon-design-system/carbon-addons-ics.svg?branch=master)](https://travis-ci.org/carbon-design-system/carbon-addons-ics)

> Carbon add-on for IBM Collaboration Solutions

### Usage:

carbon-addons-ics exists as a package on NPM. 

```bash
npm install carbon-addons-ics --save

# Or, with yarn
yarn add carbon-addons-ics
```

Simply import React components like so:

```js
// ES
import { Card, CardContent } from 'carbon-addons-ics';

// Common JS
const { Card, CardContent } = require('carbon-addons-ics');
```

## Styles:

To include ICS styles in your project, add the following to your existing stylesheet:

```scss
// Default import path relative to `node_modules`
@import 'carbon-addons-ics/scss/index-themed.scss';

// If you're using webpack, you can use `~` to alias a node module
@import '~carbon-addons-ics/scss/index-themed.scss';
```

### node-sass

Make sure to include `node_modules` in your `node-sass` config. This will guarantee that all imports work as expected. You can find more about this option [here](https://github.com/sass/node-sass#includepaths).

### Component styles

Component-specific Sass files are also included and can be imported in a similar fashion.

### Global styles

carbon-addons-ics includes the following global elements:

- ICS Theme & color
- ICS Grid
- ICS Icons
- Type usage
- Elevation & shadow
- Bidi

## Component Support

ICS addons provide both new components and component variants and overrides based on carbon-components-react. For more information on particular components and their usage, view the README file for individual components.

## Feedback

We value your feedback! Feel free to submit an Issue or a PR.

## Contributing

Contribution docs can be found here: https://github.com/carbon-design-system/carbon-addons-ics/blob/master/CONTRIBUTING.md
