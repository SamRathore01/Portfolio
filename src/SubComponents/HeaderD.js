import React from 'react';
import styled from 'styled-components';
import SoundBarD from './SoundBarD';
import { NavLink } from 'react-router-dom'
import { motion } from "framer-motion";
 

const Homeb = styled.div`
position: fixed;
top: 2.5rem;
left: 50%;
transform: translate(-50%, 0);
background-color: transparent;
color: black;
padding: 0.3rem;
border-radius: 50%;
border: 0px solid #000;
font-size: 30px;
width: 2.5rem;
height: 2.5rem;
display: flex;
justify-content: center;
align-items:center;
z-index:3;
cursor: pointer;
&:hover{
    
    color: rgba(255, 240, 0);
    transition: 0.6s ease-in-out;
}

&>*:first-child{
    text-decoration: none;
    color: inherit;
}

`


const Logo = styled.h1`
font-family: 'Comforter Brush', cursive;
font-size: 3rem;
   display: inline-block;
   position: fixed;
   margin: 0%;
   padding: 0%;
   font-style:bold;
   top: 0.5rem;
   left: 0.5rem;
   z-index: 5;
   color: black;

   

`
const Contact = styled.div`
position: absolute;
font-family: 'Orbitron', sans-serif;
top: 2.5rem;
font-size: 15px;
font-weight: bold;
right: calc(1rem + 1vw);
text-decoration: none;
color: black;
z-index:3;
display: none;
`

const HeaderD = () => {
    return (
        <>
        <Logo
        ><motion.h3
        initial={{y:-200,
                     
        transition:{type:'spring', duration:0.5,delay:1}
        }}
        animate={{y:0,
            transition:{type:'spring', duration:1.5,delay:1}
            }}>SR </motion.h3> </Logo>
        <SoundBarD />
        <Homeb>
            <NavLink to="/">
            <motion.i
             initial={{y:-200,
                     
                transition:{type:'spring', duration:0.5,delay:1}
                }} animate={{y:0,
                    transition:{type:'spring', duration:1.5,delay:1}
                    }}
                 
             class="fas fa-home" to="/"> </motion.i>
            </NavLink>
        </Homeb>
        <Contact><motion.h3
        initial={{y:-200,            
        transition:{type:'spring', duration:0.5,delay:1}
        }}
        animate={{y:0,
            transition:{type:'spring', duration:1.5,delay:1}
            }}>Contact Me </motion.h3></Contact>
        </>
    )
}

export default HeaderD;
