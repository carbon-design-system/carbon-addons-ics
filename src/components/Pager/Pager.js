import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classnames from 'classnames';
import { TooltipHover } from '../../index';

class PagerListItem extends Component {
  static propTypes = {
    onClick: PropTypes.func,
    onKeyUp: PropTypes.func,
    currentPage: PropTypes.number,
    selected: PropTypes.bool,
  };

  render() {
    const classes = classnames('bx--pager__page-item', {
      'bx--pager-item--selected': this.props.selected,
    });

    return (
      <button
        onClick={this.props.onClick}
        onKeyUp={this.props.onKeyUp}
        className={classes}
        tabIndex={-1}
      >
        {this.props.currentPage}
      </button>
    );
  }
}

export default class Pager extends Component {
  constructor(props) {
    super(props);
    const { totalItems, initialPage } = this.props;
    const lower = [initialPage + 1, initialPage + 2];
    const higher = [totalItems - 2, totalItems - 1];
    const isSmall = totalItems <= this.props.max;
    const pagesArr = Array.from(new Array(totalItems), (val, index) => index + 1);

    this.state = {
      activePage: this.props.initialPage,
      pages: pagesArr,
      leftPageQueue: lower,
      rightPageQueue: higher,
      activeQueue: isSmall ? pagesArr : lower,
      small: isSmall,
      showLower: this.props.initialPage === 1,
      showCenter: this.props.initialPage > this.props.mid,
      showHigher: this.props.initialPage >= this.props.totalItems - 2,
      isLastPage: this.props.initialPage === this.props.totalItems,
      isFirstPage: this.props.initialPage === 1,
    };
  }

  static propTypes = {
    className: PropTypes.string,
    initialPage: PropTypes.number,
    totalItems: PropTypes.number,
    max: PropTypes.number,
    mid: PropTypes.number,
    onClick: PropTypes.func,
    onKeyUp: PropTypes.func,
    backwardText: PropTypes.string,
    forwardText: PropTypes.string,
  };

  static defaultProps = {
    onClick: () => {},
    onKeyUp: () => {},
    initialPage: 1,
    max: 5,
    mid: 3,
    backwardText: 'previous page',
    forwardText: 'next page',
  };

  updatePageQueue = () => {
    const { small, activePage } = this.state;
    // Less than or equal to 3
    if (small) return;
    if (activePage <= this.props.mid) {
      this.setState({
        activeQueue: this.state.leftPageQueue,
        showLower: true,
        showCenter: false,
        showHigher: false,
      });
      return;
    } else if (activePage >= this.props.totalItems - this.props.mid + 1) {
      this.setState({
        activeQueue: this.state.rightPageQueue,
        showLower: false,
        showCenter: false,
        showHigher: true,
      });
      return;
    } else {
      this.setState({
        showLower: false,
        showCenter: true,
        showHigher: false,
      });
      return;
    }
  };

  onKeyUp = e => {
    switch (e.key) {
      case 'ArrowLeft':
        this.decrementPage();
        break;
      case 'ArrowRight':
        this.incrementPage();
        break;
      case 'Enter':
        this.handlePageChange();
        break;
      default:
        return;
    }
    e.preventDefault();
    this.props.onKeyUp();
  };

  incrementPage = () => {
    const page = this.state.activePage + 1;
    if (page && page <= this.props.totalItems) {
      this.handlePageChange(page);
    }
  };

  decrementPage = () => {
    this.handlePageChange(this.state.activePage - 1);
  };

  rewind = () => {
    this.handlePageChange(1);
  };

  fastForward = () => {
    this.handlePageChange(this.props.totalItems);
  };

  handlePageChange = page => {
    this.setState(
      {
        activePage: page,
        selected: page,
      },
      () => {
        this.updatePageQueue();
      },
    );
  };

  handleClick = e => {
    const page = Number(e.target.innerHTML);
    if (page && page <= this.props.totalItems) {
      this.setState(
        {
          activePage: page,
          selected: page,
        },
        () => {
          this.props.onClick({ page });
        },
      );
    }
  };

  buildTooltip = iconInfo => {
    return (
      <TooltipHover
        text={iconInfo.description}
        iconName={iconInfo.name}
        className="bx--pager__button-icon"
      />
    );
  };

  setButtonClassNames = type => {
    return classnames({
      'bx--btn': true,
      'bx--btn--secondary': true,
      'bx--pager__button': true,
      [`bx--pager__button--${type}`]: true,
    });
  };

  render() {
    const { className, totalItems, backwardText, forwardText, ...rest } = this.props;

    const statePage = this.state.activePage;
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

    const ellipsis = '...';

    const pageQueue = this.state.activeQueue.map(page => {
      return (
        <li
          key={`pager-${page}`}
          index={page}
          ref={li => {
            this[`pager-${page}`] = li;
          }}
        >
          <PagerListItem
            label={page.toString()}
            onClick={this.handleClick.bind(this)}
            onKeyUp={this.onKeyUp.bind(this)}
            selected={statePage === page}
            currentPage={page}
          />
        </li>
      );
    });

    return (
      <div className={classNames} {...rest}>
        {statePage > 1 && (
          <div className="bx--pager__left">
            <button className={this.setButtonClassNames('backward')} onClick={this.decrementPage}>
              {this.buildTooltip(backwardIcon)}
            </button>
          </div>
        )}

        <div className="bx--pager__center">
          {this.state.small && <ul className="bx--pager__page-list">{pageQueue}</ul>}
          {!this.state.small && (
            <ul className="bx--pager__page-list">
              <li key={'pager-1'} index={this.state.pages[0]}>
                <PagerListItem
                  onClick={this.rewind}
                  onKeyUp={this.onKeyUp.bind(this)}
                  selected={statePage === 1}
                  currentPage={this.state.pages[0]}
                />
              </li>
              {this.state.showLower && pageQueue}
              {(this.state.showLower || this.state.showCenter) && ellipsis}
              {this.state.showCenter &&
                !this.state.small && (
                  <li key={`pager-${statePage}`} index={statePage}>
                    <PagerListItem
                      onClick={this.handleClick.bind(this)}
                      onKeyUp={this.onKeyUp.bind(this)}
                      selected={true}
                      currentPage={statePage}
                    />
                  </li>
                )}
              {(this.state.showHigher || this.state.showCenter) && ellipsis}
              {this.state.showHigher && pageQueue}
              <li key={`pager-${totalItems}`} index={this.state.pages[totalItems - 1]}>
                <PagerListItem
                  onClick={this.fastForward}
                  onKeyUp={this.onKeyUp.bind(this)}
                  selected={statePage === totalItems}
                  currentPage={this.state.pages[totalItems - 1]}
                />
              </li>
            </ul>
          )}
        </div>

        {statePage < totalItems && (
          <div className="bx--pager__right">
            <button className={this.setButtonClassNames('forward')} onClick={this.incrementPage}>
              {this.buildTooltip(forwardIcon)}
            </button>
          </div>
        )}
      </div>
    );
  }
}
