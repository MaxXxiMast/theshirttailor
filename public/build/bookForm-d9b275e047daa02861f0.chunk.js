webpackJsonp([3],{

/***/ 417:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = __webpack_require__(168);

var _reactRedux = __webpack_require__(169);

var _redux = __webpack_require__(61);

var _reactDom = __webpack_require__(12);

var _booksActions = __webpack_require__(420);

var _axios = __webpack_require__(171);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BooksForm = function (_React$Component) {
  _inherits(BooksForm, _React$Component);

  function BooksForm() {
    _classCallCheck(this, BooksForm);

    var _this = _possibleConstructorReturn(this, (BooksForm.__proto__ || Object.getPrototypeOf(BooksForm)).call(this));

    _this.state = {
      images: [{}],
      img: ''
    };
    return _this;
  }

  _createClass(BooksForm, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      this.props.getBooks();

      _axios2.default.get('/api/images').then(function (res) {
        _this2.setState({
          images: res.data
        });
      }).catch(function (err) {
        _this2.setState({
          images: 'error loading images from server'
        });
      });
    }
  }, {
    key: 'handleSumit',
    value: function handleSumit() {
      var book = [{
        title: (0, _reactDom.findDOMNode)(this.refs.title).value,
        description: (0, _reactDom.findDOMNode)(this.refs.description).value,
        images: this.state.img,
        price: (0, _reactDom.findDOMNode)(this.refs.price).value
      }];
      this.props.postBooks(book);
    }
  }, {
    key: 'onDelete',
    value: function onDelete() {
      var bookId = (0, _reactDom.findDOMNode)(this.refs.delete).value;
      this.props.deleteBooks(bookId);
    }
  }, {
    key: 'handleSelect',
    value: function handleSelect(img) {
      this.setState({
        img: '/images/' + img
      });
    }
  }, {
    key: 'resetForm',
    value: function resetForm() {
      //reset button
      this.props.resetButton();
      (0, _reactDom.findDOMNode)(this.refs.title).value = '';
      (0, _reactDom.findDOMNode)(this.refs.description).value = '';
      this.setState({ img: '' });
      (0, _reactDom.findDOMNode)(this.refs.price).value = '';
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var booksList = this.props.books.map(function (booksArr) {
        return _react2.default.createElement(
          'option',
          { key: booksArr._id },
          ' ',
          booksArr._id
        );
      });

      var imgList = this.state.images.map(function (imgArr, i) {
        return _react2.default.createElement(
          _reactBootstrap.MenuItem,
          {
            key: i,
            eventKey: imgArr.name,
            onClick: _this3.handleSelect.bind(_this3, imgArr.name)
          },
          imgArr.name
        );
      });

      return _react2.default.createElement(
        _reactBootstrap.Well,
        null,
        _react2.default.createElement(
          _reactBootstrap.Row,
          null,
          _react2.default.createElement(
            _reactBootstrap.Col,
            { xs: 12, sm: 6 },
            _react2.default.createElement(
              _reactBootstrap.Panel,
              null,
              _react2.default.createElement(
                _reactBootstrap.InputGroup,
                null,
                _react2.default.createElement(_reactBootstrap.FormControl, { type: 'text', ref: 'images', val: this.state.img }),
                _react2.default.createElement(
                  _reactBootstrap.DropdownButton,
                  {
                    componentClass: _reactBootstrap.InputGroup.Button,
                    id: 'input-dropdown-addon',
                    title: 'Select an image',
                    bsStyle: 'primary'
                  },
                  imgList
                )
              ),
              _react2.default.createElement(_reactBootstrap.Image, { src: this.state.img || null, responsive: true })
            )
          ),
          _react2.default.createElement(
            _reactBootstrap.Col,
            { xs: 12, sm: 6 },
            _react2.default.createElement(
              _reactBootstrap.Panel,
              null,
              _react2.default.createElement(
                _reactBootstrap.FormGroup,
                { controlId: 'title' },
                _react2.default.createElement(
                  _reactBootstrap.ControlLabel,
                  null,
                  'Title'
                ),
                _react2.default.createElement(_reactBootstrap.FormControl, {
                  type: 'text',
                  placeholder: 'Enter Title',
                  ref: 'title'
                })
              ),
              _react2.default.createElement(
                _reactBootstrap.FormGroup,
                { controlId: 'description' },
                _react2.default.createElement(
                  _reactBootstrap.ControlLabel,
                  null,
                  'Description'
                ),
                _react2.default.createElement(_reactBootstrap.FormControl, {
                  type: 'text',
                  placeholder: 'Enter Description',
                  ref: 'description'
                })
              ),
              _react2.default.createElement(
                _reactBootstrap.FormGroup,
                { controlId: 'price' },
                _react2.default.createElement(
                  _reactBootstrap.ControlLabel,
                  null,
                  'Price'
                ),
                _react2.default.createElement(_reactBootstrap.FormControl, {
                  type: 'text',
                  placeholder: 'Enter Price',
                  ref: 'price'
                })
              ),
              _react2.default.createElement(
                _reactBootstrap.Button,
                {
                  onClick: !this.props.msg ? this.handleSumit.bind(this) : this.resetForm.bind(this),
                  bsStyle: !this.props.msg ? 'primary' : this.props.style
                },
                !this.props.msg ? 'Save Book' : this.props.msg
              )
            ),
            _react2.default.createElement(
              _reactBootstrap.Panel,
              { style: { marginTop: '25px' } },
              _react2.default.createElement(
                _reactBootstrap.FormGroup,
                { controlId: 'formControlsSelect' },
                _react2.default.createElement(
                  _reactBootstrap.ControlLabel,
                  null,
                  'Select a book id to delete'
                ),
                _react2.default.createElement(
                  _reactBootstrap.FormControl,
                  { ref: 'delete', componentClass: 'select', placeholder: 'select' },
                  _react2.default.createElement(
                    'option',
                    { value: 'select' },
                    'select'
                  ),
                  booksList
                )
              ),
              _react2.default.createElement(
                _reactBootstrap.Button,
                { onClick: this.onDelete.bind(this), bsStyle: 'danger' },
                'DELETE'
              )
            )
          )
        )
      );
    }
  }]);

  return BooksForm;
}(_react2.default.Component);

function mapStateToProps(state) {
  return {
    books: state.books.books,
    msg: state.books.msg,
    style: state.books.style
  };
}
function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({
    postBooks: _booksActions.postBooks,
    deleteBooks: _booksActions.deleteBooks,
    getBooks: _booksActions.getBooks,
    resetButton: _booksActions.resetButton
  }, dispatch);
}
exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(BooksForm);

/***/ }),

/***/ 420:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getBooks = getBooks;
exports.postBooks = postBooks;
exports.deleteBooks = deleteBooks;
exports.resetButton = resetButton;

var _axios = __webpack_require__(171);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getBooks() {
  return function (dispatch) {
    _axios2.default.get("/api/books").then(function (res) {
      dispatch({ type: "GET_BOOKS", payload: res.data });
    }).catch(function (err) {
      dispatch({ type: "GET_BOOK_REJECTED", payload: "there was error geting a new book" });
    });
  };
  // return {
  //   type: "GET_BOOK"
  // }
}

function postBooks(book) {
  return function (dispatch) {
    _axios2.default.post("/api/books", book).then(function (res) {
      dispatch({ type: "POST_BOOK", payload: res.data });
    }).catch(function (err) {
      dispatch({ type: "POST_BOOK_REJECTED", payload: "there was error posting a new book" });
    });
  };
  // return {
  //   type: "POST_BOOK",
  //   payload: _id
  // }
}

function deleteBooks(book) {
  return function (dispatch) {
    _axios2.default.delete("/api/books/" + book).then(function (res) {
      dispatch({ type: "DELETE_BOOK", payload: book });
    }).catch(function (err) {
      dispatch({ type: "POST_BOOK_REJECTED", payload: "there was error deleting a new book" });
    });
  };
  // return {
  //   type: "DELETE_BOOK",
  //   payload: book
  // }
}

function resetButton() {
  return {
    type: "RESET_BOOK"
  };
}

/***/ })

});
//# sourceMappingURL=bookForm-d9b275e047daa02861f0.chunk.js.map