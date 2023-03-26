import React, { useReducer } from 'react'
import { Typography, Stack, FormControlLabel, Slider, Grid, Checkbox, Paper, FormGroup, Divider } from '@mui/material';
import Generator from './Generator';

const initialState = {
    length: 20,
    capitals: false,
    numbers: false,
    special: false,
    lowercase: true
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'length': 
            return {...state, length: action.length}
        case 'capitals': 
            return {...state, capitals: action.capitals}
        case 'lowercase': 
            return {...state, lowercase: action.lowercase}
        case 'numbers': 
            return {...state, numbers: action.numbers}
        case 'special': 
            return {...state, special: action.special}
        default:
            return state;
    }
}

const Index = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <Paper elevation={3} style={{marginBottom: "25px"}}>
                <Grid paddingInline='40px'>
                    <Grid>
                        <Generator length={state.length} capitals={state.capitals} lowercase={state.lowercase} numbers={state.numbers} special={state.special}/>    
                    </Grid>
                </Grid>

            </Paper>
            <Paper elevation={3}>
                <Grid container spacing={2} paddingInline='40px'>
                    <Grid item xs={12}>
                        <Typography variant='h4' fontWeight='bold'>Customize your password</Typography>
                        <Divider />
                    </Grid>

                    <Grid item xs={6} marginBottom='10px'>
                    
                        <Typography variant='h6'>Password Length</Typography>
                        <Slider
                            defaultValue={20}
                            step={1}
                            valueLabelDisplay="auto"
                            min={1}
                            max={20}
                            color='accent'
                            onChange={e => dispatch({type: 'length', length: e.target.value})}
                        />
                    </Grid>
                    <Grid item xs={6} marginBottom='10px'>
                        <Stack> 
                            <FormGroup style={{display: 'flex', margin: 'auto'}}>
                                <FormControlLabel onChange={e => dispatch({type: 'lowercase', lowercase: e.target.checked})} control={<Checkbox defaultChecked color='accent' />} label="Lowercase"  /> 

                                <FormControlLabel onChange={e => dispatch({type: 'capitals', capitals: e.target.checked})} control={<Checkbox color='accent' />} label="Uppercase"  />   

                                <FormControlLabel onChange={e => dispatch({type: 'numbers', numbers: e.target.checked})} control={<Checkbox color='accent'/>} label="Numbers" /> 

                                <FormControlLabel onChange={e => dispatch({type: 'special', special: e.target.checked})} control={<Checkbox color='accent'/>} label="Symbols" />
                            </FormGroup>

                        </Stack>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    )
}

export default Index