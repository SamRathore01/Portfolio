import React  from 'react'
import HeaderD from '../SubComponents/HeaderL';
import styled from 'styled-components';
import '../Style.css';

import *  as Three from 'three';

import { Canvas } from "react-three-fiber";
import Canva from '../SubComponents/Canva';
import Subtitles from '../SubComponents/Subtitles';
import Left from '../SubComponents/Left';

 
const MainContainer = styled.div`
width: 100vw;
height: 100vh;
overflow: hidden;
position: absolute;
z-index: 0;
background-color: currentColor;
`


const Main = () => {
    return (
        <>
         
        <MainContainer>
       <Canvas camera={{position: [0,0,8]}}
        onCreated={({gl}) =>{
            gl.shadowMap.enabled = true
            gl.shadowMap.type = Three.PCFSoftShadowMap
        }}>
            <Canva/>
            
        </Canvas>
        <HeaderD/>
        <Left/> 
        <Subtitles/>
        </MainContainer>
        
        </>
    )
}




export default Main
