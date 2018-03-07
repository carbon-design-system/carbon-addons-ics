## ICS Icons

ICS provides a set of custom icons to use in your projects.
 
Unlike Carbon's icons, ICS icons are designed to be used in square artboards, and we advise against altering our icon sizes using CSS.

## Usage

### Inline SVG (recommended)

> We recommend inlining SVG when possible since it's a best practice. Overall, this is the simplest way for using SVG in your HTML documents.

Production-ready SVG files are available in the svg folder, which have been optimized with SVGO.


### Using SVG sprite

> __Requirements__:
> - `svgxuse` polyfill
> - Serve ics-icons.svg as a static asset
> - Use ics-icons.svg from same origin to avoid CORS issues.

### Using SVG sprite from static assets (recommended)

Install svgxuse so you can use ics-icons.svg and svgxuse.js.

```sh
npm i svgxuse
```

Use the SVG sprite (__ics-icons.svg__) by serving it as a static asset.
Note that the use of [external svg content](https://css-tricks.com/svg-sprites-use-better-icon-fonts/##Browser+Support) via `<use>` and `xlink:href` is only compatible when using [svgxuse.js](https://github.com/Keyamoon/svgxuse) polyfill.

Move the ics-icons.svg and svgxuse.js files from node_modules to a folder where you will serve your static assets from. They will be located in node_modules/ics-icons and node_modules/svgxuse respectively.

> svgxuse is also available via CDN at [https://unpkg.com/svgxuse@1.2.4/svgxuse.js](https://unpkg.com/svgxuse@1.2.4/svgxuse.js)

**server.js (`express`)**
```js
const express = require('express');
const app = express();

// static assets are served from a folder named dist
app.use(express.static('dist'));

...
```
**index.html**
```html
...
<body>
  ...
  <svg>
    <title>Add new users to your account</title>
    <use xlink:href="/ics-icons.svg#icon--add--glyph"></use>
  </svg>
  ...
  <script src="/svgxuse.js" defer></script>
</body>
```
You can do a simple copy and paste, setup an automated task to move the files out of node_modules or do whatever is the best fit for your project.


### SCSS mixin

To help ensure consistent dimensions, we created an icon reset SASS mixin, that applies 24 x 24px and 16 x 16px sizes to SVGs:

```scss
/** 24*24 icon **/
@include icon-reset;

/** 16*16 icon **/
@include icon-reset('small');
```


### CSS overrides

You can override how an SVG icon looks using CSS.

```html
<svg class="icon">
  <use xlink:href="/ics-icons.svg#icon--add--glyph"></use>
</svg>
```

```css
.icon {
  fill: blue;
}
```

All icons in the library are standarized so that they do not include `stroke` or internal spacing (`padding`).

### Main files

| filename | description | supported versions|
|-----|--------|---------------|
|ics-icons.svg| Contains current icons
|ics-icons.json| JSON file created from ics-icons.svg, used on [ics-design-system website](https://design-guide.w3ibm.mybluemix.net/style/icons)
|ics-icons.js| JS module created from ics-icons.svg, used in `Icon` React Component in [ics-components-react](https://github.ibm.com/connections-incubator/ics-components-react)

### Accessibility

For screen reader accessibility, use `<title>` element.

```html
<svg class="icon">
  <title>Add a new service</title>
  <use xlink:href="/ics-icons.svg#icon--add--glyph"></use>
</svg>
```

* The `<title>` element describes the SVG and what it's used for. Make this as detailed as possible for screen-readers and overall accessibility.

# Contributing

These are contributing guidelines for adding ICS UI icons.

> For internal service logo icons, you will need to rely on your service broker. Talk to your engineering team for further steps.

### Naming SVG files

We use the following naming convention for SVG filenames:

* `name`: icon name (ex. `add.svg`)
* `name--outline`: icon with an outline (ex. `add--outline.svg`)
* `name--glyph`: icon that is a glyph (ex. `add--glyph`)
* `name--modifier`: if none of the above names work for your icon, use whatever modifier name you like.

### Submitting new SVG icons

Make a pull request and add new icons to the src folder.
You can also create a new issue with your SVG code; copy and paste it into your created issue. An ICS team member will submit it for you. You can get SVG code using Sketch.

![sketch](https://user-images.githubusercontent.com/4185382/30172200-bc48bb9a-93b9-11e7-96d6-e968e88cfd79.png)

### Prepping SVG XML code

Icons should be able to be modified with CSS to change its __color__ (`fill`) and __size__ (`width`, `height`).  

Run SVG XML code through [SVGOMG](https://jakearchibald.github.io/svgomg/).
Inspect the code and make sure that your XML doesn't include the following:

- `<style>` tags
- `<g>` tags
- `class` attribtues
- `stroke` attributes
- `stroke-width` attributes