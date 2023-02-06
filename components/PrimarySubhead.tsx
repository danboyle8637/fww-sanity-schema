import React from 'react'

const styles = {
  padding: '0',
  margin: '0',
  fontSize: '32px',
  color: '#4D4B65',
  fontWeight: 'bold',
}

const PrimarySubhead = ({ children }) => {
  return <h3 style={styles}>{children}</h3>
}

export default PrimarySubhead
