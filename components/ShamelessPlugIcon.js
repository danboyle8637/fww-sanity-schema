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

const ShamelessPlugIcon = () => {
  return (
    <div style={containerStyles}>
      <p style={labelStyles}>Shameless</p>
      <p style={labelStyles}>Plug</p>
    </div>
  )
}

export default ShamelessPlugIcon
