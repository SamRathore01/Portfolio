import React, { useEffect, useRef,useState } from 'react'
import { motion } from "framer-motion";
import { init } from 'ityped';
import "../edit.css";



const Left = () => {
   const textRef = useRef();
    useEffect(() => {
        init(textRef.current, 
            {   backDelay:1500,
                showCursor:true, 
            strings: ['Developer', 'Designer', 'Programmer' ] });
    }, [])

    const [isOpen,setIsOpen] = useState(false);

    const iconVariants = {
     opened:{
      rotate:45,
      scale:2,
         
     },
    closed: {
        scale:1,
        rotate:0 
    }
    
  }; 
  
  const  menuVariants = {
      opened:{
          top: '0vh',
             
         },
        closed: {
            top: '-105vh',
        }
    }
    function alerter() {
       
        window.alert('Something went wrong please try sending direct Email')
    }

    return (
        <>
        <div className='Trail'>
            

            <motion.svg 
                onClick={()=>setIsOpen( state => !state)} 
                variants={iconVariants}
                animate ={isOpen ? 'opened' : 'closed'}
                width="40" 
                height="40"
                display={isOpen ? 'block' : 'none'}
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"><path d="M12 4C11.4477 4 11 4.44772 11 5V11H5C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13H11V19C11 19.5523 11.4477 20 12 20C12.5523 20 13 19.5523 13 19V13H19C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11H13V5C13 4.44772 12.5523 4 12 4Z"
                 fill="white" />
            </motion.svg>
                    
            
                    <motion.div
                     className='menu' 
                     initial= {false} 
                     variants={menuVariants}
                     animate ={isOpen ? 'opened' : 'closed'}
                     transition={{ duration:0.5}}
                     >
                     <div class="container">  
  <form id="contact" action="" onSubmit={alerter}  >
    <h3>Say Hello</h3>
    <h4>Direct Message me on 'Digvijay721@yahoo.com'</h4>
    <fieldset>
      <input placeholder="Your name" type="text" tabindex="1" required autofocus/>
    </fieldset>
    <fieldset>
      <input placeholder="Your Email Address" type="email" tabindex="2" required/>
    </fieldset>
    <fieldset>
      <textarea placeholder="Type your Message Here...." tabindex="5" required></textarea>
    </fieldset>
    <fieldset>
      <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Submit</button>
    </fieldset>
  </form>
 
  
</div>
                        
                    
                    </motion.div>
                    
                    </div>
                )
        
            <motion.div 
           
           initial={{x:-250,
            y:1000,
               transition:{type:'spring', duration:0.5,delay:1}
               }}
               animate={{x:50,
                y:-620,
                   transition:{type:'spring', duration:1.5,delay:1}
                   }}
           className='left'>
               <div className='wrapper'>
                   <h2>Namaste, I'm</h2>
                   <h1>Sam Rathore</h1>
                   <h3> Freelance <span ref={textRef}></span></h3>
               </div>
               <button onClick={()=>setIsOpen( state => !state)}  className='cont' href='#'>Contact me</button>
               

			
           </motion.div>   
        </>
    )
}

export default Left
