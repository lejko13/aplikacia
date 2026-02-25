import './hlavnezobrazivanie.css'

import React, { useState } from 'react'
import {useDatePicker} from '../../formularovacast/providerfrom/providerfrom'
import Linka from '../../../../naviac/linka/linka'
import { use } from 'react'

import Klikacka from '../klikacka/klikacka'
import { color } from 'framer-motion'
const Hlavnezobrazivanie = () => {


const {datum, setDatum, rok, setRok,otvorenie, setOtvorenie,krajina, setKrajina,otovreniedatumu, setOtovreniedatumu,otovrenieROKU, setOtovrenieROKU,aktualnyROK, setaktualnyROK,aktuakyMESIAC,setAktualnyMESIAC,mnesic,setMnesic} = useDatePicker()



const[farba,setFarba] = useState(null)
const[farba2,setFarba2] = useState(null)

console.log(farba);


// const pole1  = []
// const pole2  = []

// const datumik = new Date();

// const datumik2 = new Date(aktualnyROK,mnesic + 1,0)

// const den = new Date(aktualnyROK,mnesic,1)

// const pocetDni = datumik2.getDate();
// const den2 = den.getDay();


// for (let i = 1; i < den2; i++) {
//   pole2.push(null)
// }
// for (let i = 1; i <= pocetDni; i++) {
//   pole1.push({objekt:i})
// }

const pole = [];

const datumik = new Date();

const datumik2 = new Date(aktualnyROK, mnesic + 1, 0);
const den = new Date(aktualnyROK, mnesic, 1);

const pocetDni = datumik2.getDate();
const den2 = den.getDay(); // 0 = nedeľa, 1 = pondelok ...

// Pridanie null na začiatok (prázdne bunky pred 1. dňom)
for (let i = 0; i < den2 -1; i++) {
  pole.push(null);
}

// Pridanie dní mesiaca
for (let i = 1; i <= pocetDni; i++) {
  pole.push({ objekt: i });
}

// Doplníme null na koniec, aby bol počet buniek násobok 7
while (pole.length % 7 !== 0) {
  pole.push(null);
}




// const datumik2 = new Date(aktualnyROK, 1, 0);
  return (
    <div className='celkokokoko'>
        <div className='vrchtumatextyikpodnele'>
            <div className='inkaaaao443443' style={{borderLeft:"none"}}>PO</div>
            <div className='inkaaaao443443'>UT</div>
            <div className='inkaaaao443443'>ST</div>
            <div className='inkaaaao443443'>ST</div>
            <div className='inkaaaao443443'>PI</div>
            <div className='inkaaaao443443'>SO</div>
            <div className='inkaaaao443443' style={{borderRight:"none"}}>NE</div>
        </div>
        <Linka></Linka>
        <div className='TUJEKALDENDAR23'>

            {/* {pole2.map((item)=> 
            <div className='inkaaaao2332'>
              <Klikacka 
              style = {{
                border:"none",
                backgroundColor:"transparent"
              }}

               className = "lenmalainkoann"onClick={() => console.log(item.objekt)
            }></Klikacka>
              

            </div>
            )}
    */}
    
           
        {pole.map((item, index) => 
  <div key={index} className='inkaaaao2332'>
    {item === null ? (
      // prázdna bunka
      <div className="lenmalainkoann" style={{ backgroundColor: "transparent" }}></div>
    ) : (
      <Klikacka 
        style={{
          backgroundColor: farba2 === item.objekt 
            ? "var(--farba-main)" 
            : farba === item.objekt 
              ? "var(--farba-main)" 
              : "var(--farba-main2)",
          color: farba2 === item.objekt 
            ? "white" 
            : farba === item.objekt 
              ? "white" 
              : "var(--farba-cierna)"
        }}
        onMouseEnter={() => setFarba(item.objekt)}
        onMouseLeave={() => setFarba(null)}
        onClick={() => {
          setFarba2(item.objekt);
          setKrajina(prev => ({
            ...prev,
            den: item.objekt
          }));
        }}
        className="lenmalainkoann"
      >
        {item.objekt}
      </Klikacka>
    )}
  </div>
)}




            
        </div>
      
    </div>
  )
}

export default Hlavnezobrazivanie
