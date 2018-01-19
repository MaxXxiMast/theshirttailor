import React from 'react';

import { Grid, Col, Row, Button, Carousel } from 'react-bootstrap';

class HomePage extends React.Component {
  render() {

    return (
      <Grid >
        <Row>
          <Carousel>
            <Carousel.Item>
              <img src="/images/bg01.jpg" />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img src="/images/bg02.jpg" />
              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Row>
        <Row>
        
        </Row>
      </Grid>
    )
  }
}

export default HomePage;