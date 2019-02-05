import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { ToastNotification, InlineNotification } from '../../index';
import { withReadme } from 'storybook-readme';
import readme from './README.md';

const notificationProps = {
  toast: {
    onCloseButtonClick: action('onCloseButtonClick'),
    className: 'some-class',
    title: 'Title:',
    subtitle: 'Here is the subtitle.',
    link: '#',
    linkTitle: 'Undo',
    iconDescription: 'describes the close button',
    style: { marginBottom: '.5rem' },
  },
  inline: {
    className: 'some-class',
    title: 'Title',
    subtitle: 'This is the subtitle.',
    iconDescription: 'describes the close button',
  },
};

storiesOf('Components|Notifications', module)
  .addDecorator(withReadme(readme))
  .add(
    'Toast',
    withInfo(
      `
      "Toast" notifications appear at the top of the screen and out of the way of the user.
    `
    )(() => (
      <div>
        <div style={{ maxWidth: '345px' }}>
          <ToastNotification {...notificationProps.toast} kind="error" />
          <ToastNotification {...notificationProps.toast} kind="info" />
          <ToastNotification {...notificationProps.toast} kind="success" />
        </div>
        <div>
          <ToastNotification
            {...notificationProps.toast}
            subtitle="Here is a two line subtitle. If your toast notification has more info this is what the layout of the notification will look like."
            kind="warning"
          />
        </div>
      </div>
    ))
  )
  .add(
    'Inline',
    withInfo(
      `
      "Inline" notifications occur within the context of the action that was taken.
    `
    )(() => (
      <div>
        <InlineNotification {...notificationProps.inline} kind="error" />
        <InlineNotification {...notificationProps.inline} kind="info" />
        <InlineNotification {...notificationProps.inline} kind="success" />
        <InlineNotification {...notificationProps.inline} kind="warning" />
      </div>
    ))
  );
