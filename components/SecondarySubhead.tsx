import React from 'react'

const styles = {
  padding: '0',
  margin: '0',
  fontSize: '28px',
  color: '#4D5D7E',
  fontWeight: 'bold'
}

const SecondarySubhead = ({ children }) => {
  return <h3 style={styles}>{children}</h3>
}

export default SecondarySubhead
