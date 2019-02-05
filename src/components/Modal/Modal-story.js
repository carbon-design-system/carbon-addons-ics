import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { Modal } from '../../index';
import { withReadme } from 'storybook-readme';
import readme from './README.md';

const modalProps = {
  onBlur: action('onBlur'),
  onClick: action('onClick'),
  onFocus: action('onFocus'),
  className: 'some-class',
};

storiesOf('Components|Modal', module)
  .addDecorator(withReadme(readme))
  .add(
    'transactional',
    withInfo(``)(() => (
      <Modal
        {...modalProps}
        open
        modalHeading="Dialog Example"
        primaryButtonText="Primary Button"
        secondaryButtonText="Secondary Button">
        <p className="bx--modal-content__text">
          Please see ModalWrapper for more examples and demo of the
          functionality.
        </p>
      </Modal>
    ))
  )
  .add(
    'passive',
    withInfo(
      `
      Passive modals are modals without footers. Add passiveModal prop or set to true to render passive modal.
    `
    )(() => (
      <Modal
        {...modalProps}
        open
        passiveModal
        modalHeading="Dialog Example"
        primaryButtonText="Primary Button"
        secondaryButtonText="Secondary Button">
        <p className="bx--modal-content__text">
          Please see ModalWrapper for more examples and demo of the
          functionality.
        </p>
      </Modal>
    ))
  );
