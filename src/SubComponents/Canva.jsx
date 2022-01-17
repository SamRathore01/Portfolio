import React, {useState, useRef, useEffect}  from 'react'
import { useSpring,a} from '@react-spring/three';
import { useFrame, extend, useThree } from "react-three-fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";



extend ({OrbitControls});


const Hammer = () =>{
   const [model,setModel] = useState();
        useEffect(() =>{
                new GLTFLoader().load('/scene.gltf', setModel);
                
              }, [])
              return model ? <primitive object={model.scene}/> : null 
}
        
const Controls = () =>{
        const orbitRef = useRef();
   const {camera,gl} = useThree();

        useFrame(() => {
                orbitRef.current.update()
        })

        return(
                <orbitControls
                  autoRotate
                 maxPolarAngele = {Math.PI /2}
                 minPolarAngle = {Math.PI /5} 
                args = {[camera, gl.domElement]}
                ref ={orbitRef}
                />
        )
}


function Canva() {
        
        const [hovered, setHovered] = useState(false);
        const [active,setActive] = useState();
        const style = useSpring({
                scale : active ? [1,1,1] : [1,1,1],
                color : hovered ? 'hotpink' : 'grey',
        })
         useFrame(() => {
          
         })
             
    return (
     <a.mesh 
       
        onPointerOver={() =>setHovered(true)}
        onPointerOut={() =>setHovered(false)}
        onClick={() => setActive(!active)}
        scale={style.scale}
     >
        <fog attach='fog' args={['white' , 5, 15]} />
             <Controls/>
             <ambientLight/>
             <Hammer/>
             <spotLight position={10} penumbra={1}/>
        
    </a.mesh>
    )
}

export default Canva;
