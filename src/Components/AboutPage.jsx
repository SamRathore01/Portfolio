import React from 'react';
import styled, { keyframes } from 'styled-components';
import HeaderD from '../SubComponents/HeaderL';
import Home from '../SubComponents/Home';


import Om from '../assets/Images/earth1.gif';
import BigTitle from '../SubComponents/BigTitle';
import { motion } from "framer-motion";


const Box = styled.div`
width: 100vw;
height: 100vh;
background-color:black;
position: relative;
display: flex;
justify-content: space-evenly;
align-items: center;
overflow: hidden;
`

const float = keyframes`
0%{transform:translateY(-30px)}
50%{transform:translateY(30px) translateX(-15px) }
100%{transform:translateY(-30px) }
`

const Shiv = styled.div`
position: absolute;
top: 25%;
left: 5%;
width: 30vw;
animation: ${float} 4s ease infinite;
img{
    width: 100%;
    height: auto;
}
`

const Main = styled.div`
 border: 2px solid whitesmoke;
color:white;
padding: 2rem;
width: 55vw;
height: 60vh;
line-height: 1.5rem;
position: absolute;
top: 30%;
right: 5%;
left: -45vw;
transform :translate (-50%,-50%);

justify-content: center;
align-items: center;

font-size: 1.7vw;
backdrop-filter:blur(1px);
font-family: 'Ubunto Mono', monospace;
font-weight: 500;
font-style:italic;

@media (max-width: 768px) {
    font-style:normal;
    display: flex;
    
    font-size: 2.2vw;
    font-weight: 300;
    width :80vw;
  }

`


const MySkillsPage = () => {
    return (
        
        <Box>
            <BigTitle text = "ABOUT" top='40%' left ="35%"  /> 
            <HeaderD/>
            <Home/>
            
            
            <Shiv>
                <motion.div
                initial={{x:-50,
                    y:1000,
                       transition:{type:'spring', duration:0.5,delay:1}
                       }}
                       animate={{
                        y:-100,
                           transition:{type:'spring', duration:5,delay:1}
                           }}
                >
                    <img src={Om} alt='universe'/>
                </motion.div>
                
            </Shiv>

            <motion.div 
            initial={{x:-50,
                y:1000,
                   transition:{type:'spring', duration:0.5,delay:1}
                   }}
                   animate={{
                    y:-180,
                       transition:{type:'spring', duration:1.5,delay:1}
                       }}
            >
                
                <Main>
                

            Hello there!<br/><br/>
            My name is Sam Rathore I'm a front-end developer located in Perth Western Australia. From a young age, I'm fascinated with web development and I believe everything is Web development is an Art 
             <br/><br/>
             I have a mindset of never giving up and always finding a way to solve an issue. I'm also a quick learner with a strong sense of self-motivation.
            <br/><br/>
            I'm willing to work in any location at any time. Please give me a chance to show my works and work with your great company.
                
            </Main>
            </motion.div>

        </Box>
        
    )
}

export default MySkillsPage;
