import React, { useEffect, useState } from 'react'
import { Typography, Grid, IconButton } from '@mui/material';
import RefreshIcon from '@mui/icons-material/Refresh';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

const Generator = ({length, special, numbers, capitals}) => {
  const [password, setPassword] = useState('')
  const nums = [1,2,3,4,5,6,7,8,9]
  const chars = ['!','?','$','*','&']
  let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  const uppercase = letters.map(x => x.toUpperCase())

  const generate = (length, special, numbers, capitals) => {
    if(length > 20) {
      return setPassword(`Length can't be longer than 20`)
    }
    if(special){
      letters.push(...chars)
    }
    if(numbers) {
      letters.push(...nums)
    } 
    if(capitals) {
      letters.push(...uppercase)
    }
    let finals = []
    for(let i = 0; i < length; i++) {
      let index = Math.floor(Math.random() * letters.length)
      finals.push(letters[index])
    }
    return setPassword(finals)
  }

  useEffect(() => {
    generate(length, special, numbers, capitals)
    // eslint-disable-next-line
  }, [length, special, numbers, capitals])

  const handleRefresh = () => {
    generate(length, special, numbers, capitals)
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(password.join(''))
  }

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} style={{ textAlign: 'center'}}>
        <Typography variant='h5'>{(password)}</Typography>
        <IconButton aria-label="Copy" onClick={handleCopy} style={{color: '#444444'}}>
          <ContentCopyIcon/>
        </IconButton>
        <IconButton aria-label="Refresh" onClick={handleRefresh} style={{color: '#444444'}}>
          <RefreshIcon />
        </IconButton>
      </Grid>
    </Grid>
  )
}

export default Generator
