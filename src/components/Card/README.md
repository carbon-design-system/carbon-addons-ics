### Usage

```js
import { Card, CardContent } from 'carbon-addons-ics';
import { CardFooter } from 'carbon-components-react';
```

You can also use `Card-V2` components by importing like so:

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

Cards are used to display an image or a thumbnail image of content along with meta data that is associated with the content. Feel free to mix and match `Card` and `Card-V2` components.
