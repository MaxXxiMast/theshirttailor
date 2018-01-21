import React from 'react';
import {Row, Col, Grid} from 'react-bootstrap';
import './header.scss';
import { Link } from 'react-router-dom';
import {
  TiUserOutline, 
  TiShoppingBag, 
  TiLocationOutline
} from 'react-icons/lib/ti';

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="d-f">
          <div className="empty"></div>
          <Link to="/books" className="title text-center">The Shirt Tailor</Link>
          <div className="icons d-f">
            <TiUserOutline className="fa"/>
            <TiLocationOutline className="fa"/>
            <TiShoppingBag className="fa"/>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
