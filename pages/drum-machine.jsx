import ReactDOM from 'react-dom'
import React, {useState, useEffect, useRef} from 'react'
import '../styles/drummachine.scss'

function DrumMachine(){
    const [machineState, setMachineState] = useState('inactive');
    const [displayState, setDisplayState] = useState('')
    const padsKeys = ['Q','W','E','A','S','D','Z','X','C','q','w','e','a','s','d','z','x','c'];
    const pads = [];

    if(machineState == 'inactive'){      
        for(let i=0; i<9; i++){
            pads[i] = <div className="drum-pad" onClick={()=>alert('machine is off')} key={i}></div>
        }
    } else {
        let bank = machineState == 'bankOne' ? bankOne : bankTwo;
        bank.map((pad, i)=>{
            pads[i] = 
            <div className="drum-pad" onClick={()=>playAudio(pad.keyTrigger, pad.id)} id={pad.id} key={i}>
                <audio className="clip" src={pad.url} id={pad.keyTrigger}/>
                {pad.keyTrigger}                
            </div>     
        })
    }
    function handleChangeBank(){
        if(machineState != 'inactive'){
            if(machineState == 'bankOne') {
                setMachineState('bankTwo')
                setDisplayState('second set')
            } else {
                setMachineState ('bankOne')
                setDisplayState('first set')
            }
        } else alert('machine is off');   
    }
    function handleChangePower(){
        if(machineState == 'inactive') {
            setMachineState('bankOne');
            setDisplayState('first set')
        } else {
            setMachineState('inactive')
            setDisplayState('')
        }
    }
    function playAudio(keyTrigger, soundId){
        if(machineState != 'inactive') {          
            document.getElementById(keyTrigger).play();
            //pegar o id por aqui e dar o set
            setDisplayState(soundId)
        } else alert('machine is off');             
    }
    React.useEffect(() => {
        window.addEventListener('keydown', (event) => {     
                if(padsKeys.includes(event.key)){
                    console.log(event.key)
                 }           
          return () => {
            window.removeEventListener('keydown', handleKeyDown);
          };
        });
    });
    
    return( 
        <div className="app-machine">
             <div id="drum-machine"> 
            <div className="pads">                      
                {pads}
            </div>
            <div className="setup">
                <button onClick={handleChangePower}
                        className={`power ${machineState=='inactive' ? "power-off" : "power-on"}`}>
                        Power
                </button>
                <div id="display">
                    {displayState}
                </div>
                <button className="change-bank" onClick={handleChangeBank}>Change bank</button>
            </div>           
            </div>
        </div>  
    )
}

function DrumPad(props){  
    return(
        <div className="drum-pad" onClick={props.play}>
            <audio src={props.url} className="clip" id={props.keyTrigger}/>
            {props.keyTrigger}
        </div>
    )
}


export default function App(){
    return (
        <DrumMachine/>
    )
}

const bankOne = [
    {
      keyCode: 81,
      keyTrigger: 'Q',
      id: 'Heater-1',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
    },
    {
      keyCode: 87,
      keyTrigger: 'W',
      id: 'Heater-2',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
    },
    {
      keyCode: 69,
      keyTrigger: 'E',
      id: 'Heater-3',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
    },
    {
      keyCode: 65,
      keyTrigger: 'A',
      id: 'Heater-4',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
    },
    {
      keyCode: 83,
      keyTrigger: 'S',
      id: 'Clap',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
    },
    {
      keyCode: 68,
      keyTrigger: 'D',
      id: 'Open-HH',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
    },
    {
      keyCode: 90,
      keyTrigger: 'Z',
      id: "Kick-n'-Hat",
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
    },
    {
      keyCode: 88,
      keyTrigger: 'X',
      id: 'Kick',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
    },
    {
      keyCode: 67,
      keyTrigger: 'C',
      id: 'Closed-HH',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
    }
  ];
  
  const bankTwo = [
    {
      keyCode: 81,
      keyTrigger: 'Q',
      id: 'Chord-1',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3'
    },
    {
      keyCode: 87,
      keyTrigger: 'W',
      id: 'Chord-2',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3'
    },
    {
      keyCode: 69,
      keyTrigger: 'E',
      id: 'Chord-3',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3'
    },
    {
      keyCode: 65,
      keyTrigger: 'A',
      id: 'Shaker',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3'
    },
    {
      keyCode: 83,
      keyTrigger: 'S',
      id: 'Open-HH',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3'
    },
    {
      keyCode: 68,
      keyTrigger: 'D',
      id: 'Closed-HH',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3'
    },
    {
      keyCode: 90,
      keyTrigger: 'Z',
      id: 'Punchy-Kick',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3'
    },
    {
      keyCode: 88,
      keyTrigger: 'X',
      id: 'Side-Stick',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3'
    },
    {
      keyCode: 67,
      keyTrigger: 'C',
      id: 'Snare',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3'
    }
  ];
  