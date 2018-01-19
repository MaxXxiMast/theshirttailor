webpackJsonp([3],{

/***/ 416:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _home = __webpack_require__(421);

var _home2 = _interopRequireDefault(_home);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _home2.default;

/***/ }),

/***/ 421:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = __webpack_require__(210);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HomePage = function (_React$Component) {
  _inherits(HomePage, _React$Component);

  function HomePage() {
    _classCallCheck(this, HomePage);

    return _possibleConstructorReturn(this, (HomePage.__proto__ || Object.getPrototypeOf(HomePage)).apply(this, arguments));
  }

  _createClass(HomePage, [{
    key: 'render',
    value: function render() {

      return _react2.default.createElement(
        _reactBootstrap.Grid,
        null,
        _react2.default.createElement(
          _reactBootstrap.Row,
          null,
          _react2.default.createElement(
            _reactBootstrap.Carousel,
            null,
            _react2.default.createElement(
              _reactBootstrap.Carousel.Item,
              null,
              _react2.default.createElement('img', { src: '/images/bg01.jpg' }),
              _react2.default.createElement(
                _reactBootstrap.Carousel.Caption,
                null,
                _react2.default.createElement(
                  'h3',
                  null,
                  'First slide label'
                ),
                _react2.default.createElement(
                  'p',
                  null,
                  'Nulla vitae elit libero, a pharetra augue mollis interdum.'
                )
              )
            ),
            _react2.default.createElement(
              _reactBootstrap.Carousel.Item,
              null,
              _react2.default.createElement('img', { src: '/images/bg02.jpg' }),
              _react2.default.createElement(
                _reactBootstrap.Carousel.Caption,
                null,
                _react2.default.createElement(
                  'h3',
                  null,
                  'Second slide label'
                ),
                _react2.default.createElement(
                  'p',
                  null,
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                )
              )
            )
          )
        ),
        _react2.default.createElement(_reactBootstrap.Row, null)
      );
    }
  }]);

  return HomePage;
}(_react2.default.Component);

exports.default = HomePage;

/***/ })

});
//# sourceMappingURL=home-b3cb056e7c1ba6a68232.chunk.js.map