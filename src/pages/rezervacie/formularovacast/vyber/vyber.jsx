import React, { useState, useRef, useEffect } from 'react';
import './vyber.css'
import { motion, AnimatePresence } from "framer-motion";
import Ukazka from '../ukazka/ukazka'


const Vyber = ({type,ocomtoje,placeholder,dolezite,pridavok, krajina,setKrajina}) => {

  const inputRef = useRef(null);
  const referecne2 = useRef(null);


  const [otvorenie, setOtvorenie] = useState(false);

  const [farba,setFarba] =  useState(false);


  const funkcia = () => {
    setOtvorenie(prev => !prev)
    if (otvorenie) {
             inputRef.current.style.borderRadius = "12px";
 
    } else{
      inputRef.current.style.borderRadius = "12px 12px 0px 0px";

    }

  }
    useEffect(() => {
    const handleClickOutside = (event) => {
      if (inputRef.current &&
  referecne2.current &&
  !inputRef.current.contains(event.target) &&
  !referecne2.current.contains(event.target)) {
        setOtvorenie(false);
        inputRef.current.style.borderRadius = "12px" 
        console.log("koko");
        
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [otvorenie]);

const pole = [
  { id: 1, krajina: "Česko", fotka: "https://flagcdn.com/cz.svg" },
  { id: 2, krajina: "Slovensko", fotka: "https://flagcdn.com/sk.svg" },
  { id: 3, krajina: "Nemecko", fotka: "https://flagcdn.com/de.svg" },
  { id: 4, krajina: "Rakúsko", fotka: "https://flagcdn.com/at.svg" },
  { id: 5, krajina: "Poľsko", fotka: "https://flagcdn.com/pl.svg" },
  { id: 6, krajina: "Francúzsko", fotka: "https://flagcdn.com/fr.svg" },
  { id: 7, krajina: "Taliansko", fotka: "https://flagcdn.com/it.svg" },
  { id: 8, krajina: "Španielsko", fotka: "https://flagcdn.com/es.svg" },
  { id: 9, krajina: "Holandsko", fotka: "https://flagcdn.com/nl.svg" },
  { id: 10, krajina: "Belgicko", fotka: "https://flagcdn.com/be.svg" },
  { id: 11, krajina: "Maďarsko", fotka: "https://flagcdn.com/hu.svg" },
  { id: 12, krajina: "Švajčiarsko", fotka: "https://flagcdn.com/ch.svg" },
  { id: 13, krajina: "Veľká Británia", fotka: "https://flagcdn.com/gb.svg" },
  { id: 14, krajina: "Írsko", fotka: "https://flagcdn.com/ie.svg" }
];


  return (
    <div className='drziakokmoiVYBER'>
      <div style={{position:"relative",width:"fit-content"}}>
    <span style={{color:"var(--farba-cierna)",position:"relative",fontSize:"var(--font-size-base2)"}}>{ocomtoje}</span>
    <div className="hviezdicakk" style={dolezite}>*</div>
    </div>
    <div style={{position:"relative",width:"100%"}}>
      <div style={{position:"relative"}}>
        <input 
        ref={inputRef}
           type={type}
            readOnly
           placeholder = {"Slovensko"}
           value = {krajina}
           onClick={() => funkcia() }
         className = "inputkodoleleni" tipe="text" />
         <div style={{position:"absolute",top:"12px",right:"20px"}}>
          <i
            className="bx bx-chevron-down"
            style={{
              transform: otvorenie ? "rotate(180deg)" : "rotate(0deg)",
              transition: "transform 0.3s ease"
            }}
          ></i>


         </div>
      </div>
         
                <motion.div
            className='lentakkokubuiniu'
            initial={{ opacity: 0, y: 0 }}
            animate={otvorenie ? { opacity: 1, y: 0 } : { opacity: 0, y: -0 }}
            transition={{ duration: 0.3 }}
            style={{
              pointerEvents: otvorenie ? "auto" : "none", // aby sa nedalo kliknúť, keď je zatvorené
              opacity: 1 // ak chceš, môžeš vždy mať opacity = 1, animácia bude len posun
            }}>
              <div className='tubudeobashokoko' ref={referecne2}>
                {pole.map((item) => (
                  <Ukazka
                   style={{
                    backgroundColor: farba ? "red" : "green"
                  }}
                  polozka = {item.id}


                  farba = {farba}
                 onClick={() => {
                    setKrajina(item.krajina);
                    setOtvorenie(false);
                    inputRef.current.style.borderRadius = "12px";

                      if (pridavok) {
                          pridavok(item.krajina);
                        }
                    
                  }}
                  // setFarba = {setFarba}
                  onMouseEnter =  {() =>setFarba(item.id)}
                  // onMouseLeave = 
                  krajina = {item.krajina}
                  fotka = {item.fotka}
                  ></Ukazka>
                ))}
              </div>
                      
          </motion.div>
  
 
    
    </div>
      
    </div>
  )
}

export default Vyber
