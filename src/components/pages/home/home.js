import React from 'react';

import ThreeContainers from './three-containers';
import OneContainer from './one-container';
import Slider from './slider';
import './home.scss';

class HomePage extends React.Component {
  render() {

    return (
      <div className="home">
        <Slider
          settings={{
            dots: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: true,
            autoplay: true,
            draggable: false,
            swipeToSlide: false,
            pauseOnHover: false,
          }}
          img={[{
            src: '/images/bg03.jpg',
            key: 1,
          },
          {
            src: '/images/bg02.jpg',
            key: 2
          }]} />
        <div className="gap"></div>
        <ThreeContainers />
        <div className="gap"></div>
        <OneContainer />
        <div className="gap"></div>
        <div style={{textAlign:'center'}}>
          <div className="title">
            <div>A look for every occasion</div>
          </div>
          <Slider 
            padding='10px'
            settings={{
              dots: true,
              slidesToShow: 3,
              slidesToScroll: 1,
              centerMode: true,
            }}
            img={[{
              src: '/images/bg03.jpg',
              key:1,
            }, 
            {
              src: '/images/bg02.jpg',
              key:2
            },
            {
              src: '/images/bg01.jpg',
              key: 3
            },
            {
              src: '/images/bg02.jpg',
              key: 4
            },
            {
              src: '/images/bg03.jpg',
              key: 5
            }]}/>
        </div>
        <div className="gap"></div>
        <div className="gap"></div>
      </div>
    );
  }
}

export default HomePage;