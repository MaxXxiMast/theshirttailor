import React from 'react';

const styles = {
  containers: {
    flexDirection: 'row',
  },
  f1: {
    flex: 1,
    position: 'relative',
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

export const OneContainer = () => (
  <div className="d-f" style={styles.containers}>
    <div style={styles.f1}>
      <img src="/images/diytailoring.jpg" />
      <div style={styles.text}>
        <div style={styles.title}>Title for One container</div>
        <button>Comparo de Mario</button>
      </div>
    </div>
  </div>
);

export default OneContainer;