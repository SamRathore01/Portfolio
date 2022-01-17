import React from 'react';
import styled from 'styled-components';

import HeaderD from '../SubComponents/HeaderD';
import BigTitle from '../SubComponents/BigTitle';

import {Design,Develope} from './AllSvg';
import { motion } from "framer-motion";


const Box = styled.div`
width: 100vw;
height: 100vh;
background-color:${props => props.theme.body};
position: absolute;
display: flex;
justify-content: space-evenly;
align-items: center;

@media (max-width : 800px){
    font-size: 2.5vw;
}
`


const Main = styled.div`
border: 2px solid ${props => props.theme.text};
color:${props => props.theme.text};
background-color:${props => props.theme.body} ;
padding: 2rem;
width: 30vw;
height: 60vh;
z-index:3;
line-height: 1.5;
cursor:pointer;

font-family: 'Ubunto Mono', monospace;
font-weight: bold;
display: flex;
flex-direction: column;
justify-content: space-evenly;
&:hover{
    color:white;
background-color:black ;
}

@media (max-width: 768px) {
    width :48vw;
}

`

const Title = styled.h2`
display: flex;
justify-content: center;
align-items: center;
font-size: calc(1em + 1vw);

${Main}:hover &{
&>*{
    fill:white;
   }
}

&>*:first-child{
margin-right: 1rem;
}

`

const Description =styled.div`
color:${props => props.theme.text} ;
font-size: calc(0.6 +1vw);
padding: 0.5rem 0;

${Main}:hover &{
    color:${props => props.theme.body};
    transition:  all ease 0.5s;
}

strong{
    margin-bottom:1rem ;
    text-transform: uppercase;
    font-size: 25px;
}
ul,p{
    margin-left: 2rem;
}

`

const MySkillsPage = () => {
    return (
       <>
      <HeaderD/>
      <BigTitle text = "SKILLS" top='70%' left ="2%"  /> 
        <Box> 
            <motion.div
            initial={{x:0,
                y:1000,
                   transition:{type:'spring', duration:0.5,delay:1}
                   }}
                   animate={{
                    y:0,
                       transition:{type:'spring', duration:5,delay:1}
                       }}
            >

             <Main>
            <Title>
                    <Develope width={0} height ={0}/>Front End Developer
                </Title>
                <Description>
                I'm a web Developer and I love to build bring idea's to life and keep makeing it perfect. 
                </Description>
                <Description>
                <strong > Skills</strong>
                <p>
                    Html, Css, Js, React,Php,MySql,AWS, ThreeJs etc.
                </p>
                </Description>
                <Description>
                <strong >  Tools</strong>
                <p>
                    Vscode, Github, AWS Console etc.
                </p>
                </Description>         
            </Main>
        </motion.div>
        <motion.div
            initial={{x:0,
                y:1000,
                   transition:{type:'spring', duration:0.5,delay:1}
                   }}
                   animate={{
                    y:0,
                       transition:{type:'spring', duration:5,delay:1}
                       }}
            >
            <Main>
                <Title>
                    <Design width={0} height ={0}/>Designer
                </Title>
                <Description>
                I'm a self taught programmer and Coding is my passion                
                </Description>
                <Description>
                <strong >  Design</strong>
                <ul>
                    <li>
                        Responsive Design's
                    </li>
                    <li>
                        Native Development
                    </li>
                </ul>
                </Description>
                <Description>
                <strong >  Tools</strong>
                <ul>
                    <li>
                        WebFlow
                    </li>
                    <li>
                    3D Design(3js)
                    </li>
                    
                </ul>
                </Description>  
                  
            </Main>
            </motion.div>
        </Box>
       </>
           
            
        
    )
}

export default MySkillsPage;
