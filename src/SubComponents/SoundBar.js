import React, { useRef, useState } from 'react'
import styled, { keyframes } from 'styled-components'

import { motion } from "framer-motion";

import music from "../assets/audio/an.mp3"


//box property 
const Box = styled.div`
display:flex;
cursor:pointer;
position:fixed;
left:8rem;
top:2rem;
z-index:3;


&>*:nth-child(1){
    animation-delay: 0.2s;
}
&>*:nth-child(2){
    animation-delay: 0.3s;
}
&>*:nth-child(3){
    animation-delay: 0.4s;
}
&>*:nth-child(4){
    animation-delay: 0.5s;
}
&>*:nth-child(5){
    animation-delay: 0.8s;
}
`

const play = keyframes`
0%{
    transform:scaleY(1);
}
50%{
    transform:scaleY(2);
}
100%{
    transform:scaleY(1);
}
`
// box style property
const Line = styled.span`
background: white;
border: 1px solid white;
animation:${play} 1s ease infinite;
animation-play-state: ${props => props.click ? "running" : "paused"};
height: 1rem;
width: 2px;
z-index:3;
margin:0 0.1rem
`

const SoundBar = () => {

    const ref = useRef(null);
    const [click, setClick] = useState(false);

    const handleClick = () => {
        setClick(!click);

        if(!click){
            ref.current.play();
        }else{
            ref.current.pause();
        }
    }
    return (
        <motion.div
        initial={{
            opacity: 0,
                   transition:{type:'spring', duration:0.5,delay:1}
                   }}
                   animate={{
                    opacity: 1,
                       transition:{type:'spring', duration:1.5,delay:1}
                       }}
        >
        
        <Box onClick={() => handleClick()}>
          
          <Line click={click}></Line>
           <Line click={click}></Line>
           <Line click={click}></Line>
           <Line click={click}></Line>
           <Line click={click}></Line>
          

            <audio src={music} ref={ref}  loop />
        </Box>
        </motion.div>
    )
}

export default SoundBar