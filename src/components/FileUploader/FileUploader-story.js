import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { FileUploaderButton } from 'carbon-components-react';
import { FileUploader } from '../../index';
import { withReadme } from 'storybook-readme';
import readme from './README.md';

const tooltipHoverData = {
  text: 'only .jpg files at 500mb or less',
  iconName: 'info',
};

storiesOf('Components|FileUploader', module)
  .addDecorator(withReadme(readme))
  .add(
    'FileUploaderButton',
    withInfo(
      `
      The FileUploaderButton can be used as a standalone component if you do not need the extra UI that comes with FileUploader. The FileUploaderButton is used in FileUploader.
    `,
    )(() => (
      <FileUploaderButton
        labelText="Add files"
        className="bob"
        onChange={() => {}}
        buttonKind="secondary"
        multiple
      />
    )),
  )
  .add(
    'FileUploader',
    withInfo(
      `
      The FileUploader components allow the user to upload any necessary files. This uses the FileUploaderButton and Filename components. Filename components will appear below the FileUploaderButton when files are added. Use the filenameStatus prop to control what icon appears in Filename ('edit', 'complete', or 'uploading').
    `,
    )(() => (
      <FileUploader
        labelTitle="Upload"
        labelDescription="only .jpg files at 500mb or less"
        buttonLabel="Add files"
        filenameStatus="edit"
        buttonKind="secondary"
        multiple
      />
    )),
  )
  .add(
    'FileUploader with Tooltip',
    withInfo(
      `
      The FileUploader components allow the user to upload any necessary files. This uses the FileUploaderButton and Filename components. Filename components will appear below the FileUploaderButton when files are added. Use the filenameStatus prop to control what icon appears in Filename ('edit', 'complete', or 'uploading').
    `,
    )(() => (
      <FileUploader
        labelTitle="Upload a file"
        labelDescription="Choose a file to upload"
        labelTooltip={tooltipHoverData}
        buttonLabel="Add files"
        filenameStatus="edit"
        buttonKind="secondary"
        multiple
      />
    )),
  );
