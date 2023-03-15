import React, { useReducer } from 'react'
import Generator from './Generator'
import { Typography, Grid, FormGroup, FormControlLabel, Switch, Slider } from '@mui/material';

const initialState = {
    length: 20,
    capitals: false,
    numbers: false,
    special: false
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'length': 
            return {...state, length: action.length}
        case 'capitals': 
            return {...state, capitals: action.capitals}
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
        <Grid container spacing={2} style={{margin: 'auto', display: 'flex', textAlign: 'center'}}>
            <Grid item xs={12}>
                    <Typography variant='h4'>Password Generator</Typography>
                    <FormGroup style={{alignContent: 'center'}}>
                        <FormControlLabel onChange={e => dispatch({type: 'capitals', capitals: e.target.checked})} control={<Switch style={{color: '#444444'}} />} label="Capitals" />   

                        <FormControlLabel onChange={e => dispatch({type: 'numbers', numbers: e.target.checked})} control={<Switch style={{color: '#444444'}}/>} label="Numbers" /> 

                        <FormControlLabel onChange={e => dispatch({type: 'special', special: e.target.checked})} control={<Switch style={{color: '#444444'}}/>} label="Special Characters" />
                    </FormGroup>
                    <Typography variant='h6'>Length</Typography>
                        <Slider
                            defaultValue={20}
                            step={1}
                            valueLabelDisplay="auto"
                            min={1}
                            max={20}
                            onChange={e => dispatch({type: 'length', length: e.target.value})}
                            style={{color: '#444444', width: '50%'}}
                            marks={[{value: 6, label: 'Weak' }, {value: 8, label: 'Average' }, {value: 12, label: 'Strong' }, {value: 16, label: 'Stronger' }, {value: 20, label: 'Strongest' }]}
                        />

            </Grid>
            <Grid item xs={12}>
                <Generator length={state.length} special={state.special} numbers={state.numbers} capitals={state.capitals}/>
            </Grid>
        </Grid>
    )
}

export default Index