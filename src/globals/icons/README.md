## ICS Icons

ICS provides a set of custom icons to use in your projects.
 
Unlike Carbon's icons, ICS icons are designed to be used in square artboards, and we advise against altering our icon sizes using CSS.

To help ensure consistent dimensions, we created an icon reset SASS mixin, that applies 24 x 24px and 16 x 16px sizes to SVGs:

```scss
/** 24*24 icon **/
@include icon-reset;

/** 16*16 icon **/
@include icon-reset('small');
```


