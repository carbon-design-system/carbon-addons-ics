import PropTypes from 'prop-types';
import React, { Component, createRef } from 'react';
import classNames from 'classnames';
import Icon from '../Icon';
import { Button } from 'carbon-components-react';

export default class Dialog extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    passiveModal: PropTypes.bool,
    onRequestClose: PropTypes.func,
    id: PropTypes.string,
    modalHeading: PropTypes.string,
    secondaryButtonText: PropTypes.string,
    primaryButtonText: PropTypes.string,
    open: PropTypes.bool,
    onRequestSubmit: PropTypes.func,
    onKeyDown: PropTypes.func,
    iconDescription: PropTypes.string,
    primaryButtonDisabled: PropTypes.bool,
    onSecondarySubmit: PropTypes.func,
  };

  static defaultProps = {
    onRequestClose: () => {},
    onRequestSubmit: () => {},
    primaryButtonDisabled: false,
    onKeyDown: () => {},
    passiveModal: false,
    iconDescription: 'close the modal',
    modalHeading: 'Provide a heading',
  };

  innerModal = createRef();

  handleKeyDown = evt => {
    if (evt.which === 27) {
      this.props.onRequestClose();
    }
  };

  handleClick = evt => {
    if (
      this.innerModal &&
      this.innerModal.current &&
      !this.innerModal.current.contains(evt.target)
    ) {
      this.props.onRequestClose();
    }
  };

  render() {
    const {
      modalHeading,
      passiveModal,
      secondaryButtonText,
      primaryButtonText,
      open,
      onRequestClose,
      onRequestSubmit,
      onSecondarySubmit,
      iconDescription,
      primaryButtonDisabled,
      ...rest
    } = this.props;

    const onSecondaryButtonClick = onSecondarySubmit ? onSecondarySubmit : onRequestClose;

    const modalClasses = classNames({
      'bx--modal': true,
      'bx--modal-tall': !passiveModal,
      'is-visible': open,
      [this.props.className]: this.props.className,
    });

    const modalButton = (
      <button className="bx--modal-close" type="button" onClick={onRequestClose}>
        <Icon name="close" className="bx--modal-close__icon" description={iconDescription} />
      </button>
    );

    const modalBody = (
      <div ref={this.innerModal} className="bx--modal-container">
        <div className="bx--modal-header">
          {passiveModal && modalButton}
          <h2 className="bx--modal-header__heading">{modalHeading}</h2>
          {!passiveModal && modalButton}
        </div>
        <div className="bx--modal-content">{this.props.children}</div>
        {!passiveModal && (
          <div className="bx--modal-footer">
            <div className="bx--modal__buttons-container">
              <Button kind="primary" disabled={primaryButtonDisabled} onClick={onRequestSubmit}>
                {primaryButtonText}
              </Button>
              <Button kind="secondary" onClick={onSecondaryButtonClick}>
                {secondaryButtonText}
              </Button>
            </div>
          </div>
        )}
      </div>
    );

    return (
      <div
        {...rest}
        onKeyDown={this.handleKeyDown}
        onClick={this.handleClick}
        className={modalClasses}
        role="presentation"
        tabIndex={-1}
      >
        {modalBody}
      </div>
    );
  }
}
