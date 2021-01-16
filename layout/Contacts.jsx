import React from 'react'
import styled, {ThemeProvider} from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelopeSquare } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithubSquare } from "@fortawesome/free-brands-svg-icons";

export default function Contacts(props){
    return(
        <GlobalContacts id="contacts">
        
        <h2>contacts and social networks</h2>
        <p className="contact-sub">Cellphone: +55 11 {props.phone}</p>
            <ul>
                <li className="contact">
                    <a className="contact-link" href={"mailto:"+props.email}>
                    <p><FontAwesomeIcon icon={faEnvelopeSquare} className="icon"/> E-mail</p>
                    </a>                  
                </li>
                <li className="contact">
                    <a className="contact-link" id="profile-link" 
                    href="http://github.com/marcosvmds" target="_blank">
                        <p><FontAwesomeIcon icon={faGithubSquare}/> GitHub</p>
                    </a>                  
                </li>
                <li className="contact">
                    <a className="contact-link" 
                    href="https://www.linkedin.com/in/marcosvmds/"  target="_blank">
                        <p><FontAwesomeIcon icon={faLinkedin} className="icon"/> Linkedin</p>
                    </a>                  
                </li>
            </ul>
        </GlobalContacts>
    )
}
const GlobalContacts = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    height: 91vh;
    background-color: black;
    h2{
        font-size: 4rem;
        color: white;
    }
        .contact-sub{
        font-size: 1.3rem;
        font-style: italic;
        color: crimson;
        margin-bottom: 4rem;
    }
    ul{
        display: flex;
        justify-content: space-around;
        width: 100%;
        max-width: 600px;
        list-style: none;     
        li{
            a{
                font-size: 1.5rem;
                padding: 1rem 0px 1rem;
                color: white; 
                display: inline-block;
                p{
                  display:inline-block;
                }
                &:hover{   
                  transform: translateY(-15px);
                  transition: 1s;              
                }
                &:hover p{   
                  color: crimson;
                  font-size: 1.7rem;
                  transition: 1s;
                }
              }
        }
    }
    @media (max-width:460px){
        ul{
          flex-direction: column;
          justify-content: center;
        }
        .contact-link{
           margin-bottom: 1rem;
        }
        .contact-link:hover{   
          transform: translateX(15px);
          transition: 1s;
        }
    }


`
