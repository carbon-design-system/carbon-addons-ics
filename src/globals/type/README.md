## ICS Type

Our type rules include font sizes, weights, line heights, maximum widths and letter spacing.

These values are based on Plex type usage guidelines. We currently use fixed values, rather than responsive font sizes.

### Usage

To use a type rule in your project, call our type-scale-item SASS mixin:

```scss
/** Type A **/
@include type-scale-item(a);

/** Type D with no bottom margin **/
@include type-scale-item(d, false);
```

We also include helper classes for `.ibm-type-[a, b, c, d, e, g, h]`, which you can use like so:

```html
<div className="ibm-type-h">Type H</div>
```
