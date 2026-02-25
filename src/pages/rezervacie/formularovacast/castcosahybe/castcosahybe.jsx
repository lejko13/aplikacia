import "./castcosahybe.css";
import { color, motion } from "framer-motion";
import Hybesdva from '../hybesdva/hybesdva'

import {useDatePicker} from '../../formularovacast/providerfrom/providerfrom'
import Linka from "../../../../naviac/linka/linka";
import Taktotomabyt from '../taktotomabyt/taktotomabyt'
import { use, useState } from "react";
import Hlavnezobrazivanie from '../hlavnezobrazivanie/hlavnezobrazivanie'


import { useMediaQuery } from "react-responsive";

const Castcosahybe = () => {

      const isMobile = useMediaQuery({ maxWidth: 1000 });

  const {datum, setDatum, rok, setRok,otvorenie, setOtvorenie,krajina, setKrajina,otovreniedatumu, setOtovreniedatumu,otovrenieROKU, setOtovrenieROKU,aktualnyROK, setaktualnyROK,aktuakyMESIAC,setAktualnyMESIAC,mnesic,setMnesic} = useDatePicker()

  const mesiace = [
  { id: 0, kluc: "Január" },
  { id: 1, kluc: "Február" },
  { id: 2, kluc: "Marec" },
  { id: 3, kluc: "Apríl" },
  { id: 4, kluc: "Máj" },
  { id: 5, kluc: "Jún" },
  { id: 6, kluc: "Júl" },
  { id: 7, kluc: "August" },
  { id: 8, kluc: "September" },
  { id: 9, kluc: "Október" },
  { id: 10, kluc: "November" },
  { id: 11, kluc: "December" }
];
// LENFARBA
const[farba,setFarba] = useState(0)
const[farbaHOVER,setFarbaHOVER] = useState(0)
const[cisielko,setCisielko] = useState(1)
const[cisielkoHOVER,setCisielkoHOVER] = useState(null)
const pole = [];
let cislo = 0;

for (let i = 2026; i >= 1950; i--) {
  cislo++; // zvyš číslo o 1
  pole.push({ kluc: i, cislo: cislo });
}
console.log(pole);

  return (
    <motion.div
     initial={{opacity: 0}}
  animate={{
    width:"fit-content",
    // height: otvorenie ? "300px" : "0px",
    opacity: otvorenie ? 1 : 1,

   overflow: otvorenie ? "visible" : "hidden",
   opacity:otvorenie ? 1 : 0,

    pointerEvents: otvorenie ? "auto" : "none",
    // y: otvorenie ? 0 : 0
  }}
  transition={{  duration:otvorenie ? 0.3 : 0.2 }}
      className="lentaknazacianokok"
    >
      <div style={{position:"relative",display:"flex"}}>
         {/* malaikona */}
            <div className="tujelemalaikokna"> 
              <svg className="icon-quarter" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <path d="M0,0 L0,100 A100,100 0 0,1 100,0 Z" fill="var(--farba-biela)" stroke="var(--farba-biela)"/>
            </svg>
            </div>
              {/* malaikona */}


          <div className="halvnyobsah">
               <Linka></Linka>
            <div className="ovaldanienicien">
              <div className="textovacastikokok">
                {/* <span className = "lentexnatext" onClick={() => setOtovreniedatumu(prev => !prev)}>{aktuakyMESIAC}</span> */}
                {/* <span className = "lentexnatext" onClick={() => setOtovrenieROKU(prev => !prev)}>{aktualnyROK}</span> */}

                <span className = "lentexnatext" onClick={() => setOtovreniedatumu(prev => !prev)}>Mesiac</span>
                <span className = "lentexnatext" onClick={() => setOtovrenieROKU(prev => !prev)}>Rok</span>

              </div>
              {/* <div className="ovaladanie">
                <div className="bodka"><i class='bx bx-chevron-left'></i></div>
                <div className="bodka"><i class='bx bx-chevron-right'></i></div>

              </div> */}


            </div>
            <Linka></Linka>
            <div className="tusudatumi">
              <Hlavnezobrazivanie></Hlavnezobrazivanie>



            </div>




          </div>
            <Hybesdva
            logika = {otovreniedatumu}
            sirka = {{width: isMobile ? "110px" : "150px"}}
            text = {aktuakyMESIAC}
            
            >
               {mesiace.map((item) => 
              <Taktotomabyt
              onMouseEnter = {() => setFarbaHOVER(item.id)}
              onMouseLeave = {() => setFarbaHOVER(null)}
               onClick = {() => {setFarba(item.id),setAktualnyMESIAC(item.kluc),setMnesic(item.id),
                setKrajina(prev => ({
                  ...prev,          // zachová predchádzajúce vlastnosti
                  mesiac: item.kluc     // aktualizuje len den
                }));}}
                   style={{
                    color: farba === item.id || farbaHOVER === item.id
                      ? "white"
                      : "var(--farba-cierna)",

                    backgroundColor: farba === item.id || farbaHOVER === item.id
                      ? "var(--farba-main)"
                      : "var(--farba-main2)"
                  }}

              >{item.kluc}</Taktotomabyt>
              )}

            </Hybesdva>
            {/*  */}

            <Hybesdva
            logika = {otovrenieROKU}

            sirka = {{width: isMobile ? "80px" : "100px"}}
                 text = {aktualnyROK}
            >
              {pole.map((item) => 
              <Taktotomabyt
              onMouseEnter={() => setCisielkoHOVER(item.cislo)}
              onMouseLeave={() => setCisielkoHOVER(null)}
              onClick = {() => {setCisielko(item.cislo),setaktualnyROK(item.kluc)
                ,setKrajina(prev => ({
                  ...prev,          // zachová predchádzajúce vlastnosti
                  rok: item.kluc     // aktualizuje len den
                }))}}
                style={{ 
  color: cisielko === item.cislo || cisielkoHOVER === item.cislo ? "white" : "var(--farba-cierna)",
  backgroundColor: cisielko === item.cislo || cisielkoHOVER === item.cislo ? "var(--farba-main)" : "var(--farba-main2)"
}}
        
              >{item.kluc}</Taktotomabyt>
              )}

            </Hybesdva>



     
    </div>
    
    </motion.div>
  );
};

export default Castcosahybe;
