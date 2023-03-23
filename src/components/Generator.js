import React, { useEffect, useState } from 'react'
import { Typography, Grid, IconButton, LinearProgress } from '@mui/material';
import RefreshIcon from '@mui/icons-material/Refresh';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

const Generator = ({length, special, numbers, capitals, lowercase}) => {
  const [password, setPassword] = useState('')
  const [strength, setStrength] = useState(password.length*5)
  const [color, setColor] = useState('strong')
  const nums = [0,1,2,3,4,5,6,7,8,9]
  const chars = ['!','?','$','*','&']
  const lower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  const uppercase = lower.map(x => x.toUpperCase())
  let letters = []

  const generate = (length, special, numbers, capitals, lowercase) => {
    if(length > 20) {
      return setPassword(`Length can't be longer than 20`)
    }
    if(lowercase) {
      letters.push(...lower)
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
    setStrength((finals.length)*5)
    return setPassword(finals)
  }

  useEffect(() => {
    if(password.length >= 12) {
      setColor('strong')
    }
    else if(password.length >= 6) {
      setColor('medium')
    } else {
      setColor('accent')
    }
  }, [password])

  useEffect(() => {
    generate(length, special, numbers, capitals, lowercase)
    // eslint-disable-next-line
  }, [length, special, numbers, capitals, lowercase])

  const handleRefresh = () => {
    generate(length, special, numbers, capitals, lowercase)
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(password.join(''))
  }

  console.log(password)

  return (
    <Grid container direction="row" justifyContent="center" alignItems="center">
      <Grid xs={8} padding="30px" paddingInline="0px">
        <Typography variant='h5'><code>{(password)}</code></Typography>
      </Grid>
      <Grid xs={4} padding="34px" paddingInline="0px">
      <IconButton aria-label="Refresh" onClick={handleRefresh} style={{color: '#444444', float: 'right'}}>
          <RefreshIcon />
        </IconButton>
        <IconButton aria-label="Copy" onClick={handleCopy} style={{color: '#444444', float: 'right'}}>
          <ContentCopyIcon/>
        </IconButton>
      </Grid>
      <Grid xs={12} paddingInline="0px">
        <LinearProgress variant="determinate" color={color} value={strength} style={{width: '100%', height: '10px'}}/>
      </Grid>
    </Grid>
  )
}

export default Generator
