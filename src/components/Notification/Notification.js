import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classNames from 'classnames';
import Icon from '../Icon';

export class NotificationButton extends Component {
  static propTypes = {
    className: PropTypes.string,
    ariaLabel: PropTypes.string,
    type: PropTypes.string,
    iconDescription: PropTypes.string,
    name: PropTypes.string,
  };
  static defaultProps = {
    ariaLabel: 'close notification',
    iconDescription: 'close icon',
    name: 'close',
  };
  render() {
    const { ariaLabel, className, iconDescription, name, ...rest } = this.props;

    const classes = classNames('bx--toast-notification__close-button', className);

    return (
      <button {...rest} type="button" className={classes}>
        <Icon
          description={iconDescription}
          className="bx--toast-notification__close-icon"
          aria-label={ariaLabel}
          name={name}
        />
      </button>
    );
  }
}

export class NotificationTextDetails extends Component {
  static propTypes = {
    className: PropTypes.string,
    title: PropTypes.string,
    subtitle: PropTypes.node,
    link: PropTypes.string,
    linkTitle: PropTypes.string,
    notificationType: PropTypes.oneOf(['toast', 'inline']),
    kind: PropTypes.oneOf(['error', 'info', 'success', 'warning']).isRequired,
  };

  static defaultProps = {
    title: 'title',
    subtitle: 'subtitle',
    link: '#',
    linkTitle: 'Undo?',
    notificationType: 'toast',
    kind: 'success',
  };

  render() {
    const {
      title,
      subtitle,
      link,
      linkTitle,
      className,
      notificationType,
      kind,
      ...rest
    } = this.props;

    if (notificationType === 'toast') {
      return (
        <div {...rest} className={`bx--toast-notification__details ${className}`}>
          <Icon
            description={title}
            className="bx--toast-notification__icon"
            aria-label={title}
            name={`${kind}--glyph`}
          />
          <div className="bx--toast-notification__text-wrapper">
            <div className="bx--toast-notification__title">{title}</div>
            <div className="bx--toast-notification__subtitle">{subtitle}</div>
            <a className="bx--toast-notification__link" href={link}>
              {linkTitle}
            </a>
          </div>
        </div>
      );
    }

    return (
      <div {...rest} className="bx--inline-notification__text-wrapper">
        <div className="bx--inline-notification__title">{title}</div>
        <div className="bx--inline-notification__subtitle">{subtitle}</div>
      </div>
    );
  }
}

export class ToastNotification extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true,
    };
  }
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    kind: PropTypes.oneOf(['error', 'info', 'success', 'warning']).isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.node.isRequired,
    link: PropTypes.string,
    linkTitle: PropTypes.string,
    role: PropTypes.string.isRequired,
    onCloseButtonClick: PropTypes.func,
    iconDescription: PropTypes.string.isRequired,
    notificationType: PropTypes.string,
  };

  static defaultProps = {
    kind: 'error',
    title: 'provide a title',
    subtitle: 'provide a subtitle',
    link: '#',
    linkTitle: 'Undo?',
    role: 'alert',
    notificationType: 'toast',
    iconDescription: 'closes notification',
    onCloseButtonClick: () => {},
  };

  handleCloseButtonClick = evt => {
    this.setState({ open: false });
    this.props.onCloseButtonClick(evt);
  };

  render() {
    if (!this.state.open) {
      return null;
    }

    const {
      role,
      notificationType,
      onCloseButtonClick, // eslint-disable-line no-unused-vars
      iconDescription,
      className,
      link,
      linkTitle,
      subtitle,
      title,
      kind,
      ...rest
    } = this.props;

    const classes = classNames(
      'bx--toast-notification',
      { [`bx--toast-notification--${this.props.kind}`]: this.props.kind },
      className,
    );

    return (
      <div {...rest} role={role} kind={kind} className={classes}>
        <NotificationTextDetails
          title={title}
          kind={kind}
          subtitle={subtitle}
          link={link}
          linkTitle={linkTitle}
          notificationType={notificationType}
        />
        <NotificationButton
          iconDescription={iconDescription}
          onClick={this.handleCloseButtonClick}
        />
      </div>
    );
  }
}

export class InlineNotification extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    kind: PropTypes.oneOf(['error', 'info', 'success', 'warning']).isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.node.isRequired,
    role: PropTypes.string.isRequired,
    iconDescription: PropTypes.string.isRequired,
    notificationType: PropTypes.string,
  };

  static defaultProps = {
    role: 'alert',
    notificationType: 'inline',
    iconDescription: 'closes notification',
  };

  render() {
    const {
      role,
      notificationType,
      iconDescription,
      className,
      subtitle,
      title,
      kind,
      ...rest
    } = this.props;

    const classes = classNames(
      'bx--inline-notification',
      { [`bx--inline-notification--${this.props.kind}`]: this.props.kind },
      className,
    );

    return (
      <div {...rest} role={role} kind={kind} className={classes}>
        <div className="bx--inline-notification__details">
          <Icon
            description={iconDescription}
            className="bx--inline-notification__icon"
            aria-label="close"
            name={`${kind}--glyph`}
          />
          <NotificationTextDetails
            title={title}
            subtitle={subtitle}
            notificationType={notificationType}
          />
        </div>
      </div>
    );
  }
}
