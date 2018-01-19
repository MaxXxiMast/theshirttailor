import React from  'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { Modal, Panel, Col, Row, Well, Button, ButtonGroup, Label } from 'react-bootstrap';
import { deleteCartItem, addToCart, updateCart, getCart } from '../../../actions/cartActions';

class Cart extends React.Component {

  componentDidMount() {
    this.props.getCart();
  }
  onDelete(_id) {
    const currentBookToDelete = this.props.cart;
    const indexToDelete = currentBookToDelete.findIndex(cart => cart._id === _id);
    let cartAfterDelete = [
      ...currentBookToDelete.slice(0, indexToDelete), 
      ...currentBookToDelete.splice(indexToDelete + 1)
    ];

    this.props.deleteCartItem(cartAfterDelete);
  }
  
  onIncrement(_id) {
    this.props.updateCart(_id,1,this.props.cart);
  }
  onDecrement(_id,quantity) {
    if (quantity > 1) this.props.updateCart(_id, -1, this.props.cart);
  }

  constructor() {
    super();
    this.state = {
      showModal: false
    }
  }

  open() {
    this.setState({showModal:true});
  }

  close() {
    this.setState({showModal:false});
  }
  render() {
    if(this.props.cart[0]) return this.renderCart();
    else return this.renderEmpty();
  }
  renderEmpty() {
    return (<div></div>)
  }
  renderCart() {
    const cartItemsList = this.props.cart.map(cartArr =>{
      return (
        <Panel key={cartArr._id}>
          <Row>
            <Col xs={12} sm={4}>
              <h6>{cartArr.title}</h6><span>    </span>
            </Col>
            <Col xs={12} sm={2}>
              <h6>usd. {cartArr.price}</h6>
            </Col>
            <Col xs={12} sm={2}>
              <h6>qty. <Label bsStyle="success">{cartArr.quantity}</Label></h6>
            </Col>
            <Col xs={6} sm={4}>
              <ButtonGroup style={{minWidth:'300px'}}>
                <Button onClick={this.onDecrement.bind(this, cartArr._id, cartArr.quantity)} bsStyle="default" bsSize="small">-</Button>
                <Button onClick={this.onIncrement.bind(this,cartArr._id)} bsStyle="default" bsSize="small">+</Button>
                <span>    </span>
                <Button onClick={this.onDelete.bind(this,cartArr._id)} bsStyle="danger" bsSize="small">DELETE</Button>
              </ButtonGroup>
            </Col>
          </Row>
        </Panel>
      )
    },this)
    return (
      <Panel header="Cart" bsStyle="primary">
        {cartItemsList}
        <Row>
          <Col xs={12}>
            <h6> Total amount : ${this.props.totalAmount}</h6>
            <Button onClick={this.open.bind(this)} bsStyle="success" bsSize="small">
              PROCEED TO CHECKOUT
            </Button>
          </Col>
        </Row>

        <Modal show={this.state.showModal} onHide={this.close.bind(this)}>
          <Modal.Header closeButton>
            <Modal.Title>Thank you</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h6>Your order have been saved</h6>
            <p>you will recieve an email confirmation</p>
          </Modal.Body>
          <Modal.Footer>
            Your total order: ${this.props.totalAmount}
            <Button onClick={this.close.bind(this)}>Close</Button>
          </Modal.Footer>
        </Modal>
      </Panel>
    )
  }
}

function mapStateToProps(state) {
  return {
    cart: state.cart.cart,
    totalAmount: state.cart.totalAmount
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    deleteCartItem: deleteCartItem,
    addToCart: addToCart,
    updateCart: updateCart,
    getCart: getCart
  },dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
