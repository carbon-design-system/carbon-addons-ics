### Usage

```js
import { FileUploaderButton } from 'carbon-components-react';
import { FileUploader } from 'carbon-addons-ics';
```

To enable the `labelTooltip` prop add a prop to your `FileUploader` like so:
```js
const data = {
  text: 'some text',
  iconName: 'info',
}

<FileUploader
  {...otherProps}
  labelTooltip={data}
/>
```

### About

The FileUploaderButton and FileUploader are used to upload files. FileUploaderButton
can be used as a standalone component. It is built into FileUploader. We've expanded
the FileUploader to include an optional labelTooltip prop.
