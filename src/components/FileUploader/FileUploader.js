/* eslint react/no-multi-comp: "off" */
import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Tooltip } from '../../index';
import { Filename, FileUploaderButton } from 'carbon-components-react';

export default class FileUploader extends Component {
  static propTypes = {
    iconDescription: PropTypes.string,
    buttonLabel: PropTypes.string,
    buttonKind: PropTypes.oneOf(['primary', 'secondary']),
    filenameStatus: PropTypes.oneOf(['edit', 'complete', 'uploading']).isRequired,
    labelDescription: PropTypes.string,
    labelTitle: PropTypes.string,
    multiple: PropTypes.bool,
    onChange: PropTypes.func,
    onClick: PropTypes.func,
    className: PropTypes.string,
    accept: PropTypes.arrayOf(PropTypes.string),
    labelTooltip: PropTypes.object,
  };

  static defaultProps = {
    iconDescription: 'Provide icon description',
    filenameStatus: 'uploading',
    buttonLabel: '',
    buttonKind: 'primary',
    multiple: false,
    onChange: () => {},
    onClick: () => {},
    accept: [],
    labelTooltip: null,
  };

  state = {
    filenames: [],
    filenameStatus: '',
  };

  nodes = [];

  componentWillReceiveProps(nextProps) {
    if (nextProps.filenameStatus !== this.props.filenameStatus) {
      this.setState({ filenameStatus: nextProps.filenameStatus });
    }
  }
  handleChange = evt => {
    this.nodes = evt.target.files.map(createRef);
    this.setState({ filenames: evt.target.files.map(file => file.name) });
    this.props.onChange(evt);
  };

  handleClick = (evt, index) => {
    const filteredArray = this.state.filenames.filter(
      filename => filename !== this.nodes[index].current.innerText.trim(),
    );
    this.nodes = filteredArray.map(createRef);
    this.setState({ filenames: filteredArray });
    this.props.onClick(evt);
  };

  clearFiles = () => {
    this.nodes = [];
    // A clearFiles function that resets filenames and can be referenced using a ref by the parent.
    this.setState({ filenames: [], filenameStatus: '' });
  };

  render() {
    const {
      iconDescription,
      buttonLabel,
      buttonKind,
      filenameStatus,
      labelDescription,
      labelTitle,
      className,
      multiple,
      accept,
      labelTooltip,
      ...rest
    } = this.props;

    const classes = classNames({
      'bx--form-item': true,
      [className]: className,
    });

    return (
      <div className={classes} {...rest}>
        <strong className="bx--label">{labelTitle}</strong>
        <div className="bx--label-detail">
          <p className="bx--label-description">{labelDescription}</p>
          {labelTooltip && (
            <Tooltip
              triggerText={null}
              direction={labelTooltip.direction || 'bottom'}
              iconName={labelTooltip.iconName}
              className="bx--label-tooltip"
              menuOffset={labelTooltip.menuOffset}
            >
              <p>{labelTooltip.text}</p>
            </Tooltip>
          )}
        </div>
        <FileUploaderButton
          labelText={buttonLabel}
          multiple={multiple}
          buttonKind={buttonKind}
          onChange={this.handleChange}
          disableLabelChanges
          accept={accept}
        />
        <div className="bx--file-container">
          {this.state.filenames.length === 0
            ? null
            : this.state.filenames.map((name, index) => (
                <span
                  key={index}
                  className="bx--file__selected-file"
                  ref={this.nodes[index]} // eslint-disable-line
                  {...rest}
                >
                  <p className="bx--file-filename">{name}</p>
                  <span className="bx--file__state-container">
                    <Filename
                      iconDescription={iconDescription}
                      status={filenameStatus}
                      onClick={evt => {
                        if (filenameStatus === 'edit') {
                          this.handleClick(evt, index);
                        }
                      }}
                      iconDescription={iconDescription}
                      onKeyDown={evt => {
                        if (evt.which === 13 || evt.which === 32) {
                          this.handleClick(evt, index);
                        }
                      }}
                      onClick={evt => {
                        if (filenameStatus === 'edit') {
                          this.handleClick(evt, index);
                        }
                      }}
                    />
                  </span>
                </span>
              ))}
        </div>
      </div>
    );
  }
}
