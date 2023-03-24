import Container from '@mui/material/Container';
import { Box } from '@mui/system';
import React, { useState } from 'react'
import './Calculator.css';

export default function Calculator() {
 const [number, setNumber] = useState(0);
 const [oldNumber, setOldNumber] = useState(0);
 const [operator, setOperator] = useState();

    const blackArray = ['AC', '+/-', '%', '/', 
    7, 8, 9, 'X', 4, 5, 6, '-', 1, 2, 3, '+', 0, '.', '='];

 const handleButtons = ({ target }) => {
    if (target.value === 'AC') {
        return setNumber(0);
    }
    if (target.value === '%') return setNumber(number / 100);
    if(target.value === '+/-' && number === 0) return setNumber(0);
    if(target.value === '+/-' && number > 0) return setNumber(-number)
    if(target.value === '+/-' && number < 0) return setNumber(Math.abs(number))
    if(number === 0) return setNumber(target.value);
    return setNumber(number + target.value);
 }

 const operatorHandler = ({ target }) => {
    if(target.value === '=') {
        if(operator === '/') return setNumber(oldNumber / number)
        if(operator === 'X') return setNumber(oldNumber * number)
        if(operator === '+') return setNumber(Number(oldNumber) + Number(number))
        if(operator === '-') return setNumber(oldNumber - number)
    } else {
        setOldNumber(number);
        setOperator(target.value);
        setNumber(0);
    }
    
 }
  return (
    <div>
    <Box m={5}/>
    <Container maxWidth="xs">
    <div className="wraper" >
        <h1 className="result">{ number }</h1>
    {
        blackArray.map((el, index) => (
            <button 
            className={`element-${index}`} 
            value={el} 
            onClick={ typeof el === 'number' 
            || el === '%' || el === '+/-' || 
            el === 'AC' || el === '.' ? handleButtons : operatorHandler }
            >
                { el }
            </button>
        ))
    }
    </div>
    </Container>
    </div>
  )
}
