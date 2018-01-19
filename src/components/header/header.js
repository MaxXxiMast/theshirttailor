import React from 'react';
import {Row, Col, Grid} from 'react-bootstrap';
import './header.scss';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
      <div className="d-f">
        <Link to="/books" className="title text-center">Title</Link>
        <div>Icons</div>
      </div>
    );
  }
}

export default Header;
