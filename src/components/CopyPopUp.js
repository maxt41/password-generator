import React, { useEffect, useState } from 'react'
import { Dialog, DialogTitle, Grid, Stack, Button } from '@mui/material'
import useMediaQuery from '@mui/material/useMediaQuery';

const CopyPopUp = ({ onClose, open }) => {
  const size = useMediaQuery('(min-width:700px)')
  const [textSize, setTextSize] = useState(undefined)
  const [height, setHeight] = useState(undefined)

  useEffect(() => {
    if(size){
      setTextSize(6)
      setHeight('56px')
    } else {
      setTextSize(12)
      setHeight('28px')
    }
  }, [size])
    
  const handleClose = () => {
      onClose();
    };
    
  return (
      <Dialog onClose={handleClose} open={open} maxWidth='md'>
          <DialogTitle style={{backgroundColor: '#368149', color: '#fff', textAlign: 'center'}}>Copied!</DialogTitle>
          <Grid container overflow={'hidden'}>
            <Grid item xs={textSize} padding='30px' className='PopUpText'>
              <img style={{width: '144px'}} src={'https://www.lastpass.com/-/media/4aa3ac50c27942169989eb33343b3e57.png?h=31&w=211&la=en&hash=9E63DB38CE1CE6C9859F16B96A28405D'} alt='LastPass logo'></img>
            <h2 style={{fontWeight: '900', fontSize: '1.75rem', margin: 'auto', lineHeight: height, marginBottom: '24px'}}>Make that password easy to remember with LastPass</h2>
            <p style={{fontWeight: '500', fontSize: '1.25rem', margin: 'auto', marginBottom: '12px'}}>LastPass does more than generate secure passwords. Try Premium for 30 days and let LastPass remember and autofill passwords for you. Sign up for free & no credit card required.</p>
            <Stack direction={size ? 'row' : 'column'} spacing='2'>
              <Button onClick={handleClose} color='text' style={{textTransform: 'none', fontWeight: '400', fontSize: '1rem'}}>No, thanks</Button>
              <Button variant='contained' color='accent' style={{marginLeft: '12px', borderRadius: '25px', color: '#fff', fontWeight: '700', fontSize: '1.125rem', textTransform: 'none'}}>Get LastPass Free</Button>
            </Stack>

            </Grid>
            <Grid item xs={6} className='PopUpImg' >
              {size ?  
              <img src={'https://www.lastpass.com/-/media/e2e5b6976d274565bbdf10f89f81de1e.jpg'} alt='Laptop on lap' style={{ backgroundPosition: '85%', filter: 'brightness(65%)', width: '100%', height: '100%',  backgroundSize: 'cover'}}></img>
              : null}
            </Grid>
          </Grid>
      </Dialog>

  )
}

export default CopyPopUp