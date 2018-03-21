import PropTypes from 'prop-types';
import React from 'react';
import icons from '../../../icons/ics-icons.json';

/**
 * Returns a single icon Object
 * @param {string} iconName - "name" property of icon
 * @param {Object} [iconsObj=icons] - JSON Array of Objects
 * @example
 * // Returns a single icon Object
 * this.findIcon('copy-code', icons.json);
 */
export function findIcon(name, iconsObj = icons) {
  const icon = iconsObj.filter(obj => obj.title === name);
  if (icon.length === 0) {
    return false;
  } else if (icon.length > 1) {
    throw new Error('Multiple icons found...');
  } else {
    return icon[0];
  }
}

/**
 * Returns "svgData" Object
 * @param {string} iconName - "name" property of icon
 * @example
 * // Returns svgData Object for given iconName
 * this.getSvgData('copy-code');
 */
export function getSvgData(iconName) {
  const name = findIcon(iconName);
  return name ? name.childs : false;
}

/**
 * Returns Elements/Nodes for SVG
 * @param {Object} svgData - JSON Object for an SVG icon
 * @example
 * // Returns SVG elements
 * const svgData = getSvgData('copy-code');
 * svgShapes(svgData);
 */
export function svgShapes(svgData) {
  const svgElements = Object.keys(svgData)
    .filter(key => svgData[key])
    .map((svgProp, index) => {
      const data = svgData[svgProp];

      if (data.name === 'path') {
        return <path d={data.attrs.d} key={index} />;
      }

      return '';
    });

  return svgElements;
}

export function isPrefixed(name) {
  return name.split('--')[0] === 'icon';
}

export function removePrefix(name) {
  return name.split('--')[1];
}

const Icon = ({
  className,
  description,
  fill,
  fillRule,
  height,
  name,
  role,
  style,
  width,
  ...rest
}) => {
  const icon = isPrefixed(name) ? findIcon(removePrefix(name)) : findIcon(name);

  const props = {
    className,
    fill,
    fillRule: fillRule || icon.attrs.fillRule,
    height: height || icon.height,
    name: isPrefixed ? removePrefix(name) : name,
    role,
    style,
    viewBox: icon.attrs.viewBox,
    width: width || icon.width,
    ...rest,
  };

  const svgContent = icon ? svgShapes(icon.childs) : '';

  return (
    <svg {...props} aria-label={description}>
      <title>{description}</title>
      {svgContent}
    </svg>
  );
};

Icon.propTypes = {
  className: PropTypes.string,
  description: PropTypes.string.isRequired,
  fill: PropTypes.string,
  fillRule: PropTypes.string,
  height: PropTypes.string,
  name: PropTypes.string.isRequired,
  role: PropTypes.string,
  style: PropTypes.object,
  viewBox: PropTypes.string,
  width: PropTypes.string,
};

Icon.defaultProps = {
  fillRule: 'evenodd',
  role: 'img',
  description: 'Provide a description that will be used as the title',
  height: '24',
  width: '24',
};

export { icons };
export default Icon;
