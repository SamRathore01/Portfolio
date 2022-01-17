import React from 'react';
//import logo from '../assets/Images/sr.png';
import styled from 'styled-components';
import SoundBar from '../SubComponents/SoundBar';
import { motion } from "framer-motion";

const Logo = styled.h3`
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
   color: #fff;

   @media (max-width: 768px) {
    font-size: 2em;
}

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
        <SoundBar />
        
        
        </>
    )
}

export default HeaderD;
