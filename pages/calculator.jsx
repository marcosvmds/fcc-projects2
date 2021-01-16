import React, {useState} from 'react'
import ReactDom from 'react-dom'
import '../styles/calculator.scss'
import styled from 'styled-components';

function Calculator(){
   const [inputState, setInputState] = useState('0');
   const [resultState, setResultState] = useState('0');
   const [lastAction, setLastAction] = useState('0') 

   function clearInput(){
        setInputState('0')
        setResultState('0')
    } 
   function numberInput(x){
       if(inputState == '0'){
           if(x == '.') setInputState(inputState+x);
           else if(x != '0') setInputState(x); 
       } else if(x=='.'){
           if(!isOp(inputState.slice(-1))){
            for(let i=inputState.length; i>0; i--){
                let char = inputState[i];
                if(char=='.') break;
                if(isOp(char)) {
                    setInputState(inputState+x)
                    break;
                }
                if(i==1) setInputState(inputState+x)
            } 
           } else {setInputState(inputState.slice(0,inputState.length-1)+'.')}              
        } else {
            if(lastAction=='='){
                setInputState(x);
            } setInputState(inputState+x);                
        }
       
       setLastAction(x)
   }
   function equal(){
    if(!isOp(inputState.slice(-1))){
        let result = eval(inputState);
        setResultState(result)
        setLastAction('=')
    } else {
        setInputState(inputState.slice(0,inputState.length-1));
    }
     
   }
   function operation(op){
       let lastPos = inputState.slice(-1)
       if(inputState == 0 && op == '-'){
            setInputState(op)
       } else if(inputState!='0' && inputState!='-'){
        if(!isOp(lastPos) && lastPos!='.'){
            setInputState(inputState+op)
        } else setInputState(inputState.slice(0,inputState.length-1)+op)       
       }
       setLastAction(op)
   }
   function isOp(op){
        return ['-', '+', '/', '*'].includes(op);
    }
   function NumButton(props){
        return(
            <StyledNumButton id={props.id} onClick={()=>{numberInput(props.value)}}>{props.value}</StyledNumButton>
        )
    }
    function OpButton(props){
        return(
            <StyledOpButton id={props.id} onClick={()=>{operation(props.value)}}>{props.value}</StyledOpButton>
        )
    }
    function EqButton(props){
        return(
            <StyledEqButton id={props.id} onClick={()=>equal()}>{props.value}</StyledEqButton>
        )
    }
    function AcButton(props){
        return(
            <StyledAcButton id={props.id} onClick={()=>{clearInput()}}>{props.value}</StyledAcButton>
        )
    }

   return(
    <AppBase id="app-calculator">
        <CalculatorGrid>
            <Display id="total-display">
                <TopDisplay id="display">{inputState}</TopDisplay>
                <BottomDisplay>{resultState}</BottomDisplay>
            </Display>
            <EqButton id="equals" value="="/>          
            <AcButton id="clear" value="AC"/>

            <OpButton id="add" value="+"/>
            <OpButton id="subtract" value="-"/>
            <OpButton id="multiply" value="*"/>
            <OpButton id="divide" value="/"/>         

            <NumButton id="zero" value="0" />
            <NumButton id="one" value="1" />
            <NumButton id="two" value="2" />
            <NumButton id="three" value="3" />
            <NumButton id="four" value="4" />
            <NumButton id="five" value="5" />
            <NumButton id="six" value="6" />
            <NumButton id="seven" value="7" />
            <NumButton id="eight" value="8" />
            <NumButton id="nine" value="9" />
            <NumButton id="decimal" value="." />            
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
    width: 90vw;
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
    display:flex;
    flex-direction: column;
    justify-content: space-evenly;
    background-color: black;
    text-align: end;
    padding-right: 0.5rem;
    
`
const TopDisplay = styled.div` //formula
    color: white;
`
const BottomDisplay = styled.div` //result
    color: orange;
`
const StyledClickable = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    font-size: 1.4rem;
    cursor: pointer;
    &:active{
        background-color: orange;
    }
`
const StyledOpButton = styled(StyledClickable)`
    background-color: grey;
`
const StyledNumButton = styled(StyledClickable)`
    background-color: rgb(51, 51, 51); 
    color: white;
`
const StyledEqButton = styled(StyledClickable)`
    background-color: rgb(158, 0, 0)}; 
`
const StyledAcButton = styled(StyledClickable)`
    background-color: white;
    color: black 
`

export default function App(){
    return (
        <Calculator/>
    )
}