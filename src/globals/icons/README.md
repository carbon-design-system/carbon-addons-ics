## ICS Icons

ICS provides a set of custom icons to use in your projects.
 
Unlike Carbon's icons, ICS icons are designed to be used in square artboards, and we advise against altering our icon sizes using CSS.

## Usage

### Inline SVG (recommended)

To use an inline SVG icon, use the Icon component. For an interactive, button style icon, use the ActionIcon component.

Production-ready SVG files are available in the svg folder, which have been optimized with SVGO. 

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
  <path d="..." />
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
|ics-icons.js| JS module created from ics-icons.svg, used in `Icon` React Component.

### Accessibility

For screen reader accessibility, use `<title>` element.

```html
<svg class="icon">
  <title>Add a new service</title>
  <path d="..." />
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