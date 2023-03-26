import React, { useState, useEffect } from 'react'
import useMediaQuery from '@mui/material/useMediaQuery';

const Header = () => {
  const size = useMediaQuery('(min-width:700px)')
  const [font, setFont] = useState(undefined)
  const [height, setHeight] = useState(undefined)

  useEffect(() => {
    if (size) {
      setFont('3rem')
      setHeight('3.5rem')
    } else {
      setFont('1.5rem')
      setHeight('2.25rem')
    }
  }, [size])

  return (
    <h1 style={{fontWeight: '900', fontSize: font, maxWidth: '80%', margin: 'auto', lineHeight: height}}>Instantly generate a secure, random password with the LastPass online tool</h1>
  )
}

export default Header