import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styled, {ThemeProvider} from 'styled-components';

export default function MyHeader(){
    return(
        <GlobalNavBar id="navbar">
            <Link href="/" >
                <a className="nav-logo">               
                  <Image src="/m-logo-sf-p.png" width="60px" height="38px" alt="temp site logo"/>
                </a>
            </Link>
            {/* <ul className="nav-list">     
                <li><a href="/">Home</a></li>
                <li><a href="/#projects">Projects</a></li>
                <li><a href="#contacts">Contacts</a></li>
            </ul> */}
        </GlobalNavBar>
    )
}
const GlobalNavBar = styled.nav`
    color: black;
    position: fixed;
    z-index: 99;
    margin-bottom:60px;
    background-color: rgb(220, 20, 60);
    border-bottom: solid white 2px;
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 60px;
    top:0px;
    left: 0px;
    transition: 0.5s;
    &:hover{ 
      border-bottom: 4px black solid; 
    }
    .nav-logo{
      position: relative;
      top: 3px;
      margin-left: 2rem;
      align-self: center;
      margin-top: 2px;
    }
    ul{
      display: flex;
      align-items: center;
      margin-right: 1rem;
      list-style: none;
      li{
        display: flex;    
        height: 100%;
        align-content: center;
        a{
          display: flex;
          align-items: center;
          height: 100%;
          padding: 0px 1.3rem;
          font-size: 1.4rem;
          color: black;
          &:hover{
            font-weight: bold;
            color: white;    
            background-color: rgba(0,0,0, 0.1);
            transition: 0.5s;
          }
        }
      }
  }
`
