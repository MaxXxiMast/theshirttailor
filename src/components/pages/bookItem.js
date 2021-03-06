import React from 'react';
import { Col, Well, Row, Button, Image } from 'react-bootstrap';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addToCart,updateCart} from '../../actions/cartActions';

class BookItem extends React.Component {
    handleCart() {
        const book = [...this.props.cart, {
            _id: this.props._id,
            title: this.props.description,
            images: this.props.images,
            price: this.props.price,
            description: this.props.description,
            quantity: 1
        }]
        if(this.props.cart.length > 0){
            let _id = this.props._id;
            let cartIndex = this.props.cart.findIndex(cart => cart._id === _id);
            if(cartIndex === -1) {
                this.props.addToCart(book);
            } else {
                this.props.updateCart(_id, 1, this.props.cart);
            }
        } else {
        this.props.addToCart(book);
        }
    }
    render() {
        return (
            <Well>
                <Row>
                    <Col xs={12} sm={4}>
                        <Image src={this.props.image} />
                    </Col>
                    <Col xs={12} sm={8}>
                    <h6>{this.props.title}</h6>
                    <p>{this.props.description}</p>
                    <h6>{this.props.price}</h6>
                    <Button onClick={this.handleCart.bind(this)} bsStyle='primary'>Buy now</Button>
                    </Col>
                </Row>
            </Well>
        )
    }
}

function mapStateToProps(state) {
  return {
    cart: state.cart.cart
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    addToCart: addToCart,
    updateCart: updateCart
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BookItem);
