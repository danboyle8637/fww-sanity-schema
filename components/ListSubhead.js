import React from 'react'

const styles = {
  padding: '0',
  margin: '0',
  fontSize: '26px',
  color: '#545885',
  fontWeight: 'bold'
}

const ListSubhead = ({ children }) => {
  return <h4 style={styles}>{children}</h4>
}

export default ListSubhead
