### Usage

```js
import { Cardv2 } from 'carbon-addons-ics';
// De-structure `Cardv2` directly to get local references
const {
  CardMeta,
  CardText,
  CardMedia,
} = Cardv2;

// Or, just use them in your React projects by doing
<Cardv2.CardMeta />
<Cardv2.CardText />
<Cardv2.CardMedia />
```

### About

Cards are used to display an image or a thumbnail image of content along with meta data that is associated with the content. Cardv2 allows for more flexibility when organizing content. The CardMeta, CardText and CardMedia components can be placed in any order.
