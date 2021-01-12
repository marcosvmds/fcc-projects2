import React from 'react'
import ReactDom, {useState} from 'react-dom'
import '../styles/calculator.scss'
import styled from 'styled-components';


function NumButton(props){
    return(
        <StyledNumButton id={props.id} onClick={()=>console.log("numero")}>{props.value}</StyledNumButton>
    )
}
function OpButton(props){
    return(
        <StyledOpButton id={props.id} onClick={()=>console.log("operaçao")}>{props.value}</StyledOpButton>
    )
}

function Calculator(){
   // const [inputState, setInputState] = useState('0');

   return(
    <AppBase id="app-calculator">
        <CalculatorGrid>
            <Display id="display">
                <div>display cima</div>
                <div>display baixo</div>
            </Display>
            <EqButton id="equals" value="=">=</EqButton>            
            <ClearButton id="clear" value="AC">AC</ClearButton>

            <OpButton id="add" value="+"></OpButton>
            <OpButton id="subtract" value="-" >-</OpButton>
            <OpButton id="multiply" value="*" >*</OpButton>
            <OpButton id="divide" value="/" >/</OpButton>         

            <NumButton id="zero" value="0" >0</NumButton> 
            <NumButton id="one" value="1" >1</NumButton> 
            <NumButton id="two" value="2" >2</NumButton> 
            <NumButton id="three" value="3" >3</NumButton> 
            <NumButton id="four" value="4" >4</NumButton> 
            <NumButton id="five" value="5" >5</NumButton> 
            <NumButton id="six" value="6" >6</NumButton> 
            <NumButton id="seven" value="7" >7</NumButton> 
            <NumButton id="eight" value="8" >8</NumButton> 
            <NumButton id="nine" value="9" >9</NumButton> 
            <NumButton id="decimal" value="." >.</NumButton>             
        </CalculatorGrid>
    </AppBase>
    )
}

//STYLED COMPONENTS//
const AppBase = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
`
const CalculatorGrid = styled.div`
    display: grid;
    gap: 0.1rem;
    grid-template-areas: 
        "display display display display"
        'clear clear divide multiply'
        'seven eight nine subtract'
        'four five six add'
        'one two three equals'
        'zero zero decimal equals'
        ;
    align-self: center;
    max-width: 350px;
    width: 100%;
    height: 50vh;
    background-color: crimson;
    padding: 0.3rem;
    border-radius: 5px;
`
const Display = styled.div`
    background-color: black;
    text-align: end;
    padding-right: 0.5rem;
    color: orange;
`
const StyledClickable = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    font-size: 1.4rem;
    background-color:white;
    cursor: pointer;
`
const StyledOpButton = styled(StyledClickable)`
    background-color: grey;
`
const StyledNumButton = styled(StyledClickable)`
    background-color: rgb(51, 51, 51); 
    color: white;
`
const EqButton = styled(StyledClickable)`
    background-color: rgb(158, 0, 0)}; 
`
const ClearButton = styled(StyledClickable)`
    background-color: white;
    color: black 
`


export default function App(){
    return (
        <Calculator/>
    )
}