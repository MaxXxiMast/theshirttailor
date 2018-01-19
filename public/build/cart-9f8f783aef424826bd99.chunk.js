webpackJsonp([2],{

/***/ 415:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _cart = __webpack_require__(419);

var _cart2 = _interopRequireDefault(_cart);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _cart2.default;

/***/ }),

/***/ 419:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(169);

var _redux = __webpack_require__(61);

var _reactBootstrap = __webpack_require__(168);

var _cartActions = __webpack_require__(170);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Cart = function (_React$Component) {
  _inherits(Cart, _React$Component);

  _createClass(Cart, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.getCart();
    }
  }, {
    key: 'onDelete',
    value: function onDelete(_id) {
      var currentBookToDelete = this.props.cart;
      var indexToDelete = currentBookToDelete.findIndex(function (cart) {
        return cart._id === _id;
      });
      var cartAfterDelete = [].concat(_toConsumableArray(currentBookToDelete.slice(0, indexToDelete)), _toConsumableArray(currentBookToDelete.splice(indexToDelete + 1)));

      this.props.deleteCartItem(cartAfterDelete);
    }
  }, {
    key: 'onIncrement',
    value: function onIncrement(_id) {
      this.props.updateCart(_id, 1, this.props.cart);
    }
  }, {
    key: 'onDecrement',
    value: function onDecrement(_id, quantity) {
      if (quantity > 1) this.props.updateCart(_id, -1, this.props.cart);
    }
  }]);

  function Cart() {
    _classCallCheck(this, Cart);

    var _this = _possibleConstructorReturn(this, (Cart.__proto__ || Object.getPrototypeOf(Cart)).call(this));

    _this.state = {
      showModal: false
    };
    return _this;
  }

  _createClass(Cart, [{
    key: 'open',
    value: function open() {
      this.setState({ showModal: true });
    }
  }, {
    key: 'close',
    value: function close() {
      this.setState({ showModal: false });
    }
  }, {
    key: 'render',
    value: function render() {
      if (this.props.cart[0]) return this.renderCart();else return this.renderEmpty();
    }
  }, {
    key: 'renderEmpty',
    value: function renderEmpty() {
      return _react2.default.createElement('div', null);
    }
  }, {
    key: 'renderCart',
    value: function renderCart() {
      var _this2 = this;

      var cartItemsList = this.props.cart.map(function (cartArr) {
        return _react2.default.createElement(
          _reactBootstrap.Panel,
          { key: cartArr._id },
          _react2.default.createElement(
            _reactBootstrap.Row,
            null,
            _react2.default.createElement(
              _reactBootstrap.Col,
              { xs: 12, sm: 4 },
              _react2.default.createElement(
                'h6',
                null,
                cartArr.title
              ),
              _react2.default.createElement(
                'span',
                null,
                '    '
              )
            ),
            _react2.default.createElement(
              _reactBootstrap.Col,
              { xs: 12, sm: 2 },
              _react2.default.createElement(
                'h6',
                null,
                'usd. ',
                cartArr.price
              )
            ),
            _react2.default.createElement(
              _reactBootstrap.Col,
              { xs: 12, sm: 2 },
              _react2.default.createElement(
                'h6',
                null,
                'qty. ',
                _react2.default.createElement(
                  _reactBootstrap.Label,
                  { bsStyle: 'success' },
                  cartArr.quantity
                )
              )
            ),
            _react2.default.createElement(
              _reactBootstrap.Col,
              { xs: 6, sm: 4 },
              _react2.default.createElement(
                _reactBootstrap.ButtonGroup,
                { style: { minWidth: '300px' } },
                _react2.default.createElement(
                  _reactBootstrap.Button,
                  { onClick: _this2.onDecrement.bind(_this2, cartArr._id, cartArr.quantity), bsStyle: 'default', bsSize: 'small' },
                  '-'
                ),
                _react2.default.createElement(
                  _reactBootstrap.Button,
                  { onClick: _this2.onIncrement.bind(_this2, cartArr._id), bsStyle: 'default', bsSize: 'small' },
                  '+'
                ),
                _react2.default.createElement(
                  'span',
                  null,
                  '    '
                ),
                _react2.default.createElement(
                  _reactBootstrap.Button,
                  { onClick: _this2.onDelete.bind(_this2, cartArr._id), bsStyle: 'danger', bsSize: 'small' },
                  'DELETE'
                )
              )
            )
          )
        );
      }, this);
      return _react2.default.createElement(
        _reactBootstrap.Panel,
        { header: 'Cart', bsStyle: 'primary' },
        cartItemsList,
        _react2.default.createElement(
          _reactBootstrap.Row,
          null,
          _react2.default.createElement(
            _reactBootstrap.Col,
            { xs: 12 },
            _react2.default.createElement(
              'h6',
              null,
              ' Total amount : $',
              this.props.totalAmount
            ),
            _react2.default.createElement(
              _reactBootstrap.Button,
              { onClick: this.open.bind(this), bsStyle: 'success', bsSize: 'small' },
              'PROCEED TO CHECKOUT'
            )
          )
        ),
        _react2.default.createElement(
          _reactBootstrap.Modal,
          { show: this.state.showModal, onHide: this.close.bind(this) },
          _react2.default.createElement(
            _reactBootstrap.Modal.Header,
            { closeButton: true },
            _react2.default.createElement(
              _reactBootstrap.Modal.Title,
              null,
              'Thank you'
            )
          ),
          _react2.default.createElement(
            _reactBootstrap.Modal.Body,
            null,
            _react2.default.createElement(
              'h6',
              null,
              'Your order have been saved'
            ),
            _react2.default.createElement(
              'p',
              null,
              'you will recieve an email confirmation'
            )
          ),
          _react2.default.createElement(
            _reactBootstrap.Modal.Footer,
            null,
            'Your total order: $',
            this.props.totalAmount,
            _react2.default.createElement(
              _reactBootstrap.Button,
              { onClick: this.close.bind(this) },
              'Close'
            )
          )
        )
      );
    }
  }]);

  return Cart;
}(_react2.default.Component);

function mapStateToProps(state) {
  return {
    cart: state.cart.cart,
    totalAmount: state.cart.totalAmount
  };
}

function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({
    deleteCartItem: _cartActions.deleteCartItem,
    addToCart: _cartActions.addToCart,
    updateCart: _cartActions.updateCart,
    getCart: _cartActions.getCart
  }, dispatch);
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Cart);

/***/ })

});
//# sourceMappingURL=cart-9f8f783aef424826bd99.chunk.js.map