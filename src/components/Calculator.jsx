import Container from '@mui/material/Container';
import { Box } from '@mui/system';
import React from 'react'
import './Calculator.css';
// import Container from '@mui/material/Container';


export default function Calculator() {
    const blackArray = ['AC', '+/-', '%', '/', 
    7, 8, 9, 'X', 4, 5, 6, '-', 1, 2, 3, '+', 0, '.', '='];

  return (
    <div>
    <Box m={5}/>
    <Container maxWidth="xs">
    <div className="wraper" >
        
    {
        blackArray.map((el, index) => (
            <button className={`element-${index}`}>{ el }</button>
        ))
    }
    </div>
    </Container>
    </div>
  )
}
