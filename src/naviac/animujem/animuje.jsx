
import React, { useRef,useEffect } from 'react';
import './animujem.css'
import { motion, AnimatePresence } from "framer-motion";
import Ukazovatelko from '../ukazovatelko/ukazovatelko';
import {TestimonialCard} from '../../naviac/TestimonialCard/TestimonialCard'

const Animuje = ({detailyoko,blokyy,priatelaiiinfo,lppaccco,tklllook,notakze,vysuvam,setVysuvam,recencie,referencia1,otovrene,data,setOtvorene}) => {
     const podpisRef = useRef(null);
     const podpisRef2 = useRef(null);
     console.log(podpisRef2);


     
     useEffect(() => {
        const handleClickOutside = (event) => {
          if (!vysuvam) return;

          const refs = [podpisRef, podpisRef2];

          const clickedInside = refs.some(
            (ref) => ref.current && ref.current.contains(event.target)
          );

          if (!clickedInside) {
            setVysuvam(false);
          }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
          document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [vysuvam, setVysuvam]);

     

  return (
    <>
    <motion.div className='anumijemmem'
        ref={podpisRef}

        //   initial={{ opacity: 1, x: 40 }}
        //   animate={{ x: mobil === "open" ? -200 : 40 }}
        //   transition={{ duration: 0.3 }}
    >
      <div style={{position:"relative",height:"100%"}}>
        <div className='mojopllcvvmodiv'>
            <svg  className = "rotuj" width="12" height="12"  viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <path d="M0,0 L0,100 A100,100 0 0,1 100,0 Z" fill="var(--farba-biela)" stroke="var(--farba-biela)"/>
            </svg>
        </div>
        <div className='mojopllcvvmodiv2'>
           <svg  className = "rotuj2" width="12" height="12"  viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <path d="M0,0 L0,100 A100,100 0 0,1 100,0 Z" fill="var(--farba-biela)" stroke="var(--farba-biela)"/>
            </svg>
        </div>
        {/* <div className='.mojopllcvvmodiv2'>
            <svg width="10" height="10"  viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <path d="M0,0 L0,100 A100,100 0 0,1 100,0 Z" fill="green" stroke="var(--farba-biela)"/>
            </svg>
        </div> */}
        {/* <div style={{position:"absolute",height:"20px",width:"20px",backgroundColor:"yellow",left:"-20px",display:"flex",justifyContent:"end"}}>
            <svg width="10" height="10"  viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <path d="M0,0 L0,100 A100,100 0 0,1 100,0 Z" fill="green" stroke="var(--farba-biela)"/>
            </svg>
        </div> */}

      
      </div>
       
      
    </motion.div>


    <AnimatePresence>
        <motion.div 
            ref={podpisRef2}
            className='tujeuzobshahh'
              initial={{ 
                opacity: 0,
                x : 900,
                pointerEvents:"none",
                //  x:0 
                }}
              animate={{ 
              x:vysuvam ? 0 : 900,
              opacity:vysuvam ? 1 : 0,
                pointerEvents:"auto",
              }}
              transition={{ duration: 0.3 }}
        >
          <div>
          <Ukazovatelko style={{ backgroundColor: "var(--farba-biela)" }}
          onClick = {() => setVysuvam(false)}
          ><i class='bx bx-chevron-left' style={{color:"var(--farba-cierna)"}}></i></Ukazovatelko>
          </div>


            {otovrene === "Hodnotenia" && 
            <div className='wrapperokokonj'>
            {notakze}

            </div>}
            
             
            {otovrene === "Recenzie" && 
            <div className='wrapperokokonj'>
                   {tklllook}

           
              </div>} 
              
            {otovrene === "Lokalituzobraziť" && <div className='wrapperokokonj'>
              {priatelaiiinfo}
              
              </div>} 

            {otovrene === "blok" && <div className='wrapperokokonj'>
              {blokyy}
              
              </div>} 

            {otovrene === "detail" && <div className='wrapperokokonj4343'>
              {detailyoko}
              
              </div>} 

            {otovrene === "profil" && <div className='wrapperokokonj'>
              {lppaccco}
              
              </div>} 

            </motion.div>
        
    </AnimatePresence>
        </>
  )
}

export default Animuje
