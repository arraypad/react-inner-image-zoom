function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

var ZoomImage = function ZoomImage(_ref) {
  var src = _ref.src,
      fadeDuration = _ref.fadeDuration,
      top = _ref.top,
      left = _ref.left,
      zoomWidth = _ref.zoomWidth,
      zoomHeight = _ref.zoomHeight,
      isZoomed = _ref.isZoomed,
      onLoad = _ref.onLoad,
      onDragStart = _ref.onDragStart,
      onDragEnd = _ref.onDragEnd,
      onClose = _ref.onClose,
      onFadeOut = _ref.onFadeOut;
  var dimAttributes = {};

  if (zoomWidth && zoomHeight) {
    dimAttributes = {
      width: zoomWidth,
      height: zoomHeight
    };
  }

  console.log('zoom dim attributes', dimAttributes);
  return /*#__PURE__*/React.createElement(Fragment, null, /*#__PURE__*/React.createElement("img", _extends({
    className: "iiz__zoom-img " + (isZoomed ? 'iiz__zoom-img--visible' : ''),
    style: {
      top: top,
      left: left,
      transition: "opacity " + fadeDuration + "ms linear, visibility " + fadeDuration + "ms linear"
    },
    src: src,
    onLoad: onLoad,
    onTouchStart: onDragStart,
    onTouchEnd: onDragEnd,
    onMouseDown: onDragStart,
    onMouseUp: onDragEnd,
    onTransitionEnd: onFadeOut,
    draggable: "false",
    alt: ""
  }, dimAttributes)), onClose && /*#__PURE__*/React.createElement("button", {
    className: "iiz__btn iiz__close " + (isZoomed ? 'iiz__close--visible' : ''),
    style: {
      transition: "opacity " + fadeDuration + "ms linear, visibility " + fadeDuration + "ms linear"
    },
    onClick: onClose,
    "aria-label": "Zoom Out"
  }));
};

ZoomImage.propTypes = process.env.NODE_ENV !== "production" ? {
  src: PropTypes.string,
  fadeDuration: PropTypes.number,
  top: PropTypes.number,
  left: PropTypes.number,
  zoomWidth: PropTypes.number,
  zoomHeight: PropTypes.number,
  isZoomed: PropTypes.bool,
  onLoad: PropTypes.func,
  onDragStart: PropTypes.func,
  onDragEnd: PropTypes.func,
  onClose: PropTypes.func,
  onFadeOut: PropTypes.func
} : {};
export default ZoomImage;