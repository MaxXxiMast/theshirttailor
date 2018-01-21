import React from 'react';

const styles= {
  containers: {
    flexDirection: 'row',
  },
  f1: {
    flex: 1,
    position:'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    position: 'absolute',
    zIndex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: '25px',
    marginBottom: '8px',
  },
};

export const threeContainers = () => (
  <div className="d-f" style={styles.containers}>
    <div style={styles.f1}>
      <img src="/images/bg02.jpg"/>
      <div style={styles.text}>
        <div style={styles.title}>Title</div>
        <button>Comparo</button>
      </div>
    </div>

    <div style={styles.f1}>
      <img src="/images/bg01.jpg"/>
      <div style={styles.text}>
        <div style={styles.title}>Title</div>
        <button>Comparo</button>
      </div>
    </div>

    <div style={styles.f1}>
      <img src="/images/bg03.jpg"/>
      <div style={styles.text}>
        <div style={styles.title}>Title</div>
        <button>Comparo</button>
      </div>
    </div>

  </div>
);

export default threeContainers ;