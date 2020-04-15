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

const FormTipIcon = () => {
  return (
    <div style={containerStyles}>
      <p style={labelStyles}>Form</p>
      <p style={labelStyles}>Tip</p>
    </div>
  )
}

export default FormTipIcon
