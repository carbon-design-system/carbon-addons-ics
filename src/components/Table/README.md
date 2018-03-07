### Usage

```js
import {
  Table,
  TableHead,
  TableHeader,
  TableBody,
  TableRow,
  TableData,
} from 'carbon-components-react';
```

### About

Create a table using Table, TableHead, Table Row, TableHeader, and TableBody. Each component maps to their HTML counterpart, wrapped with pink components styles.

Optional classNames include 'bx--table-nowrap' and 'bx--table-num-val'. 'bx--table-nowrap' is for use on TableData with longer content. 'bx--table-num-val' is for number values that need to be right aligned.

Data Table doesn't do data-fetch for you or height/width calculations, it auto-fills it to the native HTML spec. Any overrides you want to do can be passed in via props.