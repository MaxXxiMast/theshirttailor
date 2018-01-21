import React from 'react';
import Slider from 'react-slick';

const styles = {
  containers: {
  },
  title: {
    fontWeight: 'bold',
    fontSize: '25px',
  },
};

class MultiSlider extends React.Component {
  render() {
    const defaultSettings = {
      infinite: true,
      arrows: true,
      speed: 500,
      slidesToScroll: 1,
    };
    const images = this.props.img.map(i => (
      <div key={i.key} style={{padding:this.props.padding}}><img src={i.src} /></div>
    )
    );

    return (
      <div className="" style={styles.containers}>
        <Slider {...this.props.settings} {...defaultSettings}>
          {images}
        </Slider>
      </div>
    );
  }
}

export default MultiSlider;