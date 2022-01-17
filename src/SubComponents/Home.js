import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { motion } from "framer-motion";

const Homeb = styled.div`
position: fixed;
top: 1rem;
left: 50%;
transform: translate(-50%, 0);
background-color: transparent;
color: white;
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


const Home = () => {
    return (
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
    )
}

export default Home
