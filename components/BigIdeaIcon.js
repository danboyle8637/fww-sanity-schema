import React from 'react'

const containerStyles = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}

const labelStyles = {
  margin: '0',
  padding: '0',
  fontSize: '12px',
  fontWeight: '500',
  textTransform: 'uppercase',
  color: '#333',
}

const BigIdeaIcon = () => {
  return (
    <div style={containerStyles}>
      <p style={labelStyles}>Big</p>
      <p style={labelStyles}>Idea</p>
    </div>
  )
}

export default BigIdeaIcon
