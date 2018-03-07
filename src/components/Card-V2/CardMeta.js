import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classNames from 'classnames';

export default class CardMeta extends Component {
  static propTypes = {
    className: PropTypes.string,
    metaPrimary: PropTypes.string,
    metaSecondary: PropTypes.string,
    metaPadding: PropTypes.bool,
  };

  static defaultProps = {
    metaPrimary: 'Meta Heading',
    metaPadding: false,
  };

  render() {
    const { className, metaPrimary, metaSecondary, metaPadding, ...rest } = this.props;

    const cardMetaClasses = classNames({
      'bx--card__meta': true,
      'bx--card__meta-padding': metaPadding,
      [className]: className,
    });

    return (
      <div {...rest} className={cardMetaClasses}>
        <p id="card-meta-primary" className="bx--card__meta-primary">
          <strong>{metaPrimary}</strong>
        </p>
        {metaSecondary && (
          <p id="card-meta-secondary" className="bx--card__meta-secondary">
            {metaSecondary}
          </p>
        )}
      </div>
    );
  }
}
