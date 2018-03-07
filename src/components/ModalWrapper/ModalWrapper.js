import PropTypes from 'prop-types';
import React from 'react';
import Modal from '../Modal';
import { Button } from 'carbon-components-react';

export default class ModalWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  static propTypes = {
    status: PropTypes.string,
    handleOpen: PropTypes.func,
    children: PropTypes.node,
    id: PropTypes.string,
    buttonTriggerText: PropTypes.string,
    modalHeading: PropTypes.string,
    modalText: PropTypes.string,
    passiveModal: PropTypes.bool,
    withHeader: PropTypes.bool,
    modalBeforeContent: PropTypes.bool,
    primaryButtonText: PropTypes.string,
    secondaryButtonText: PropTypes.string,
    handleSubmit: PropTypes.func,
    disabled: PropTypes.bool,
    triggerButtonkind: PropTypes.oneOf(['primary', 'secondary', 'danger', 'ghost']),
    shouldCloseAfterSubmit: PropTypes.bool,
    onKeyDown: PropTypes.func,
  };

  static defaultProps = {
    primaryButtonText: 'Save',
    secondaryButtonText: 'Cancel',
    triggerButtonkind: 'primary',
    disabled: false,
    onKeyDown: () => {},
  };

  handleOpen = () => {
    this.setState({
      open: true,
    });
  };

  handleClose = () => {
    this.setState({
      open: false,
    });
  };

  handleOnRequestSubmit = () => {
    const { handleSubmit, shouldCloseAfterSubmit } = this.props;

    if (handleSubmit()) {
      if (shouldCloseAfterSubmit) {
        this.handleClose();
      }
    }
  };

  handleKeyDown = evt => {
    if (evt.which === 27) {
      this.handleClose();
      this.props.onKeyDown(evt);
    }
  };

  render() {
    const {
      id,
      buttonTriggerText,
      triggerButtonkind,
      modalHeading,
      passiveModal,
      primaryButtonText,
      secondaryButtonText,
      handleSubmit, // eslint-disable-line no-unused-vars
      disabled,
      onKeyDown, // eslint-disable-line no-unused-vars
    } = this.props;

    const props = {
      id,
      modalHeading,
      passiveModal,
      primaryButtonText,
      secondaryButtonText,
      open: this.state.open,
      onRequestClose: this.handleClose,
      onRequestSubmit: this.handleOnRequestSubmit,
    };

    return (
      <div role="presentation" onKeyDown={this.handleKeyDown.bind(this)}>
        <Button disabled={disabled} kind={triggerButtonkind} onClick={this.handleOpen}>
          {buttonTriggerText}
        </Button>
        <Modal {...props}>{this.props.children}</Modal>
      </div>
    );
  }
}
