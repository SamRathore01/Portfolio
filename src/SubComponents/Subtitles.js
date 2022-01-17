import React from 'react'
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { motion } from "framer-motion";

const Right = styled.div`

position: absolute;
width: 25vw;
height: 50vh;
top: 50%;
right: -10%;
transform: translate(-50%,-50%);
z-index:3;

@media (max-width: 768px) {
    top: 75%;
    right: -12%;
transform: translate(-50%,-50%);
}
`

const About = styled(NavLink)`
color: ${props => props.theme.text};
font-family: 'Orbitron', sans-serif;
position: absolute;
top: 30%;
font-size: 20px;
font-weight: bold;
right: calc(1rem + 2vw);
text-decoration: none;
color: white;
z-index:1;

&:hover{
    color:#0EFF2C;

}
@media (max-width: 768px) {
    font-size: 1em;
}

`
const Skill = styled(NavLink)`
color: ${props => props.theme.text};
font-family: 'Orbitron', sans-serif;
position: absolute;
top: 45%;
font-size: 20px;
font-weight: bold;
right: calc(1rem + 2vw);
text-decoration: none;
color: white;
z-index:1;

&:hover{
    color:#0EFF2C;

}
@media (max-width: 768px) {
    font-size: 1em;
}
`
const Work = styled(NavLink)`
color: ${props => props.theme.text};
font-family: 'Orbitron', sans-serif;
position: absolute;
top: 60%;
font-size: 20px;
font-weight: bold;
right: calc(1rem + 2vw);
text-decoration: none;
color: white;
z-index:1;
&:hover{
    color:#0EFF2C;

}
@media (max-width: 768px) {
    font-size: 1em;
}

`

const Subtitles = () => {
    return (
        <div>
             <Right>
            <About to="/about">
            <motion.h2
                whileHover ={{scale:1.1}}
                whiletap={{scale:0.9}}
                initial={{x:200,
                    transition:{type:'spring', duration:0.5,delay:1}
                    }}
                    animate={{x:0,
                        transition:{type:'spring', duration:1.5,delay:1}
                        }}>About</motion.h2>
                </About>
            <Skill to="/skills"><motion.h2
                whileHover ={{scale:1.1}}
                whiletap={{scale:0.9}}
                initial={{x:200,
                    transition:{type:'spring', duration:0.5,delay:1}
                    }}
                    animate={{x:0,
                        transition:{type:'spring', duration:1.5,delay:1.3}
                        }}>Skills</motion.h2></Skill>
            <Work to="/work"><motion.h2
                whileHover ={{scale:1.1}}
                whiletap={{scale:0.9}}
                initial={{x:200,
                    transition:{type:'spring', duration:0.5,delay:1}
                    }}
                    animate={{x:0,
                        transition:{type:'spring', duration:1.5,delay:1.6}
                        }}>Work</motion.h2></Work>
            </Right>
        </div>
    )
}

export default Subtitles
