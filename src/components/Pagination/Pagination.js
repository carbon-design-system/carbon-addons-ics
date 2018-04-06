import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classnames from 'classnames';
import { Icon } from '../../index';

export default class Pagination extends Component {
  constructor(props) {
    super(props);
    const pageNum =
      this.props.totalItems.length <= this.props.max ? this.props.totalItems : this.props.max;
    this.state = {
      page: this.props.page,
      pages: Array.from(new Array(this.props.totalItems), (val, index) => index + 1),
      hint: false,
      pageQueue: new Array(pageNum),
    };
  }

  static propTypes = {
    className: PropTypes.string,
    disabled: PropTypes.bool,
    hintText: PropTypes.string,
    isLastPage: PropTypes.bool,
    onChange: PropTypes.func,
    page: PropTypes.number,
    totalItems: PropTypes.number,
    max: PropTypes.number,
    mid: PropTypes.number,
  };

  static defaultProps = {
    disabled: false,
    hintText: 'Use ← left and right → arrow keys to navigate',
    isLastPage: false,
    onChange: () => {},
    page: 1,
    max: 5,
    mid: 3,
  };

  updatePageQueue = () => {
    if (this.state.page <= this.props.mid) {
      this.state.pageQueue = (
        <ul className="bx--pagination__page-list">
          {this.state.pages.slice(0, this.props.max).map(page => {
            const selected = this.state.page === page;
            const classes = classnames('bx--pagination__page-item', {
              'bx--tabs__page-item--selected': selected,
            });
            return (
              <li
                key={`pagination-page-${page}`}
                index={page}
                label={page.toString()}
                onClick={this.handleClick}
                onFocus={this.showHint}
                onBlur={this.hideHint}
                ref={li => {
                  this[`pagination-page-${page}`] = li;
                }}
                className={classes}
              >
                {page}
              </li>
            );
          })}
        </ul>
      );
    } else if (this.state.page >= this.props.totalItems - this.props.mid) {
      this.state.pageQueue = (
        <ul className="bx--pagination__page-list">
          {this.state.pages
            .slice(this.props.totalItems - this.props.max, this.props.totalItems)
            .map(page => {
              const selected = this.state.page === page;
              const classes = classnames('bx--pagination__page-item', {
                'bx--tabs__page-item--selected': selected,
              });
              return (
                <li
                  key={`pagination-page-${page}`}
                  index={page}
                  label={page.toString()}
                  onClick={this.handleClick}
                  onFocus={this.showHint}
                  onBlur={this.hideHint}
                  ref={li => {
                    this[`pagination-page-${page}`] = li;
                  }}
                  className={classes}
                >
                  {page}
                </li>
              );
            })}
        </ul>
      );
    } else {
      this.state.pageQueue = (
        <ul className="bx--pagination__page-list">
          {this.state.pages.slice(this.state.page - 3, this.state.page + 2).map(page => {
            const selected = this.state.page === page;
            const classes = classnames('bx--pagination__page-item', {
              'bx--tabs__page-item--selected': selected,
            });
            return (
              <li
                key={`pagination-page-${page}`}
                index={page}
                label={page.toString()}
                onClick={this.handleClick}
                onFocus={this.showHint}
                onBlur={this.hideHint}
                ref={li => {
                  this[`pagination-page-${page}`] = li;
                }}
                className={classes}
              >
                {page}
              </li>
            );
          })}
        </ul>
      );
    }
  };

  incrementPage = () => {
    const page = this.state.page + 1;
    this.setState({ page });
    this.setState({ selected: page });
    this.updatePageQueue();
    this[`pagination-page-${page}`].focus();
    this.props.onChange({ page });
  };

  decrementPage = () => {
    const page = this.state.page - 1;
    this.setState({ page });
    this.updatePageQueue();
    this.props.onChange({ page });
  };

  rewind = () => {
    const page = 1;
    this.setState({ page });
    this.updatePageQueue();
    this.props.onChange({ page });
  };

  fastForward = () => {
    const page = this.props.totalItems;
    this.setState({ page });
    this.updatePageQueue();
    this.props.onChange({ page });
  };

  handlePageChange = page => {
    if (page && page <= this.props.totalItems) {
      debugger; // eslint-disable-line
      this.setState({ page });
      this.updatePageQueue();
      this.props.onChange({ page });
    }
  };

  handleClick = page => {
    debugger; // eslint-disable-line
    this.handlePageChange(page);
  };

  showHint = () => {
    this.setState({ hint: true });
  };

  hideHint = () => {
    this.setState({ hint: false });
  };

  buildIcon = iconInfo => {
    return (
      <Icon
        name={iconInfo.name}
        description={iconInfo.description}
        className="bx--pagination__button-icon"
      />
    );
  };

  setButtonClassNames = type => {
    return classnames({
      'bx--btn': true,
      'bx--btn--secondary': true,
      'bx--pagination__button': true,
      [`bx--pagination__button--${type}`]: true,
    });
  };

  render() {
    const {
      className,
      hintText,
      isLastPage,
      totalItems,
      page: pageNumber, // eslint-disable-line no-unused-vars
      ...rest
    } = this.props;
    const statePage = this.state.page;
    const classNames = classnames({
      'bx--pagination': true,
      [className]: className,
    });

    const backwardIcon = {
      name: 'left',
      description: 'prev',
    };
    const forwardIcon = {
      name: 'right',
      description: 'next',
    };

    const rewindIcon = {
      name: 'left',
      description: 'rewind',
    };

    const fastForwardIcon = {
      name: 'right',
      description: 'fast forward',
    };

    this.updatePageQueue();

    return (
      <div className={classNames} {...rest}>
        {statePage > 1 && (
          <div className="bx--pagination__left">
            <button
              className={this.setButtonClassNames('rewind')}
              onClick={this.rewind}
              disabled={false}
            >
              {this.buildIcon(rewindIcon)}
            </button>
            <button
              className={this.setButtonClassNames('backward')}
              onClick={this.decrementPage}
              disabled={false}
            >
              {this.buildIcon(backwardIcon)}
            </button>
          </div>
        )}

        <div className="bx--pagination__center">
          {this.state.pageQueue}
          <p className="bx--pagination__hint">{hintText}</p>
        </div>

        {statePage < this.props.totalItems && (
          <div className="bx--pagination__right">
            <button
              className={this.setButtonClassNames('forward')}
              onClick={this.incrementPage}
              disabled={this.props.disabled || statePage === totalItems || isLastPage}
            >
              {this.buildIcon(forwardIcon)}
            </button>
            <button
              className={this.setButtonClassNames('fastforward')}
              onClick={this.fastForward}
              disabled={this.props.disabled || statePage === totalItems || isLastPage}
            >
              {this.buildIcon(fastForwardIcon)}
            </button>
          </div>
        )}
      </div>
    );
  }
}
