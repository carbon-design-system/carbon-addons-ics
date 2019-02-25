import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classnames from 'classnames';
import { ActionIcon } from '../../index';

class PagerListItem extends Component {
  static propTypes = {
    onClick: PropTypes.func,
    onKeyUp: PropTypes.func,
    currentPage: PropTypes.number,
    selected: PropTypes.bool,
    id: PropTypes.func,
  };

  render() {
    const { selected, currentPage } = this.props;
    const classes = classnames('bx--pager__page-item', {
      'bx--pager-item--selected': selected,
    });

    return (
      <button
        onKeyUp={this.props.onKeyUp}
        onClick={this.props.onClick}
        onKeyDown={e => {
          e.key === 'Enter' ? e.preventDefault() : '';
        }}
        className={classes}
        type="button"
        ref={this.props.id}>
        {currentPage}
      </button>
    );
  }
}

export default class Pager extends Component {
  constructor(props) {
    super(props);
    const { totalItems, initialPage } = this.props;
    const lower = [2, 3];
    const higher = [totalItems - 2, totalItems - 1];
    const pagesArr = Array.from(
      new Array(totalItems),
      (val, index) => index + 1
    );
    const maxDisplayPages = 5;
    const maxQueuePages = 3;

    this.state = {
      activePage: initialPage,
      leftPageQueue: lower,
      rightPageQueue: higher,
      activeQueue: totalItems <= maxDisplayPages ? pagesArr : lower,
      truncate: totalItems > maxDisplayPages,
      showLower: initialPage < maxQueuePages,
      showCenter: initialPage > maxQueuePages,
      showHigher: initialPage >= totalItems - 2,
    };
  }

  static propTypes = {
    className: PropTypes.string,
    initialPage: PropTypes.number,
    totalItems: PropTypes.number,
    onClick: PropTypes.func,
    onKeyUp: PropTypes.func,
    backwardText: PropTypes.string,
    forwardText: PropTypes.string,
  };

  static defaultProps = {
    onClick: () => {},
    onKeyUp: () => {},
    initialPage: 1,
    backwardText: 'previous page',
    forwardText: 'next page',
  };

  updatePageQueue = () => {
    const { truncate, activePage } = this.state;
    const pageFocus = `pager-${activePage}`;
    const maxQueuePages = 3;

    if (!truncate) return;
    if (activePage <= maxQueuePages) {
      this.setState(
        {
          activeQueue: this.state.leftPageQueue,
          showLower: true,
          showCenter: false,
          showHigher: false,
        },
        () => {
          this[pageFocus].focus();
        }
      );
    } else if (activePage >= this.props.totalItems - maxQueuePages + 1) {
      this.setState(
        {
          activeQueue: this.state.rightPageQueue,
          showLower: false,
          showCenter: false,
          showHigher: true,
        },
        () => {
          this[pageFocus].focus();
        }
      );
    } else {
      this.setState(
        {
          showLower: false,
          showCenter: true,
          showHigher: false,
        },
        () => {
          this[pageFocus].focus();
        }
      );
    }
  };

  onKeyUp = e => {
    e.preventDefault();
    e.stopPropagation();
    switch (e.key) {
      case 'ArrowLeft':
        this.decrementPage();
        break;
      case 'ArrowRight':
        this.incrementPage();
        break;
      case 'Enter':
        this.handlePageChange(this.state.activePage);
        break;
      default:
        return;
    }
    this.props.onKeyUp();
  };

  incrementPage = () => {
    const page = this.state.activePage + 1;
    if (page && page <= this.props.totalItems) {
      this.handlePageChange(page);
    }
  };

  decrementPage = () => {
    const page = this.state.activePage - 1;
    if (page && page <= this.props.totalItems) {
      this.handlePageChange(page);
    }
  };

  handlePageChange = page => {
    this.setState(
      {
        activePage: page,
        selected: page,
      },
      () => {
        this.updatePageQueue();
      }
    );
  };

  handleClick = e => {
    const page = Number(e.target.innerHTML);
    this.handlePageChange(page);
    this.props.onClick({ page });
  };

  render() {
    const {
      className,
      totalItems,
      backwardText,
      forwardText,
      ...rest
    } = this.props;
    const {
      activePage,
      activeQueue,
      truncate,
      showLower,
      showCenter,
      showHigher,
    } = this.state;

    const classNames = classnames({
      'bx--pager': true,
      [className]: className,
    });

    const backwardIcon = {
      name: 'left',
      description: backwardText,
    };
    const forwardIcon = {
      name: 'right',
      description: forwardText,
    };

    const ellipsis = <span className="bx--pager-ellipsis">...</span>;

    const pageQueue = activeQueue.map(page => {
      return (
        <li key={`pager-${page}`} index={page}>
          <PagerListItem
            label={page.toString()}
            onClick={this.handleClick.bind(this)}
            onKeyUp={this.onKeyUp.bind(this)}
            selected={activePage === page}
            currentPage={page}
            id={button => {
              this[`pager-${page}`] = button;
            }}
          />
        </li>
      );
    });

    return (
      <div className={classNames} {...rest}>
        {activePage > 1 && (
          <div className="bx--pager__left">
            <ActionIcon
              iconDescription={backwardIcon.description}
              onClick={this.decrementPage}
              name={backwardIcon.name}
              icon={backwardIcon.name}
              className="bx--pager__button-icon"
            />
          </div>
        )}

        <div className="bx--pager__center">
          {!truncate && <ul className="bx--pager__page-list">{pageQueue}</ul>}
          {truncate && (
            <ul className="bx--pager__page-list">
              <li key={'pager-1'} index={1}>
                <PagerListItem
                  onClick={this.handleClick.bind(this)}
                  onKeyUp={this.onKeyUp.bind(this)}
                  selected={activePage === 1}
                  currentPage={1}
                  id={button => {
                    this[`pager-1`] = button;
                  }}
                />
              </li>
              {showLower && pageQueue}
              {(showLower || showCenter) && ellipsis}
              {showCenter && activePage !== totalItems && activePage !== 1 && (
                <li key={`pager-${activePage}`} index={activePage}>
                  <PagerListItem
                    onClick={this.handleClick.bind(this)}
                    onKeyUp={this.onKeyUp.bind(this)}
                    selected={true}
                    currentPage={activePage}
                    id={button => {
                      this[`pager-${activePage}`] = button;
                    }}
                  />
                </li>
              )}
              {(showHigher || showCenter) && ellipsis}
              {showHigher && pageQueue}
              <li key={`pager-${totalItems}`} index={totalItems}>
                <PagerListItem
                  onClick={this.handleClick.bind(this)}
                  onKeyUp={this.onKeyUp.bind(this)}
                  selected={activePage === totalItems}
                  currentPage={totalItems}
                  id={button => {
                    this[`pager-${totalItems}`] = button;
                  }}
                />
              </li>
            </ul>
          )}
        </div>
        {activePage < totalItems && (
          <div className="bx--pager__right">
            <ActionIcon
              iconDescription={forwardIcon.description}
              onClick={this.incrementPage}
              name={forwardIcon.name}
              icon={forwardIcon.name}
              className="bx--pager__button-icon"
            />
          </div>
        )}
      </div>
    );
  }
}
