import React from 'react'
import { FaYoutube } from 'react-icons/fa'

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

const YouTubeEmbedIcon = () => {
  return (
    <div style={containerStyles}>
      <FaYoutube />
      <p style={labelStyles}>Embed</p>
    </div>
  )
}

export default YouTubeEmbedIcon
