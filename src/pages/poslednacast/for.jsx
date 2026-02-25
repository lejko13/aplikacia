import React, { useState, useEffect, useRef,useContext } from 'react';
import './for.css'
import Formularovacast from '../../pages/rezervacie/formularovacast/formularovacast'
// import Formularovacast from './formularovacast/formularovacast'

import { GlobalContext } from '../../naviac/reactcontext/reactcontext';
import { MyContext } from '../../naviac/providertelefon/providertelefon'

import { useNavigate } from 'react-router-dom';

import Templatepage from '../../pages/tempaltepage/templatepage'
const Formularovacastposldena = () => {


     const { suborOpen,setSuborOpen,obsahOpen,setObsahOpen,subor,setSubor,nazovSuboru,setNazovSuboru,unikattne,setUnikatne,meno,dotadok,setDotadok,otazka,setOtazka,formData, setFormData,otvorenieposldenho,setOtvorenieposldenho,vypisovaniechyby,setVypisovaniechyby} = useContext(MyContext);

     const { presun,setPresun,cena,setCena,kvalita,setKvalita,prize,setPrize,zobrazovanie,setZobrazovanie,otvrenie,setOtvorenie,automatika,setKontrolaText,rozdiel,setRozdiel ,ano,setAno} = useContext(GlobalContext); 




        const navigate = useNavigate();

    const handleClick2 = () => {

        navigate(`/Rezervacie`);
    }

    const handleClick32 = () => {
        navigate(`/Zhrnutiefinal`);
    }



    const kontrolujem = (totokontrolujem) =>  {
  const premenenenapole = Object.entries(totokontrolujem)
    const jeValid = premenenenapole.every(([kluc,hodnota]) => {


    if (kluc === "otazka1" && hodnota === "") {
      automatika()
      setKontrolaText('kontolaformularu')
      setVypisovaniechyby("Chyba pri zadavani MENA")
        // console.log("Hodnota otazka1:", hodnota);
        return false
    } 

    
    if (kluc === "otazka2" && hodnota === "") {
      automatika()
      setKontrolaText('kontolaformularu')
      setVypisovaniechyby("Chyba pri zadavani PRIEZVISKA")
        // console.log("Hodnota otazka1:", hodnota);
        return false
    } 

    // emial     // emial     // emial     // emial     // emial     // emial
    
    if (kluc === "otazka3" && hodnota === "") {
      automatika()
      setKontrolaText('kontolaformularu')
      setVypisovaniechyby("Chyba pri zadavani EMAIL")
        // console.log("Hodnota otazka1:", hodnota);
        return false
    } 
    if (kluc === "otazka3" &&  !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(hodnota)) {
       automatika()
      setKontrolaText('kontolaformularu')
      setVypisovaniechyby("Chyba pri zadavani EMAIL")
      
      
    }
       // emial     // emial     // emial     // emial     // emial


      //  TELEFON  //  TELEFON  //  TELEFON  //  TELEFON  //  TELEFON  //  TELEFON
    if (kluc === "otazka4" && hodnota === "") {
      automatika()
      setKontrolaText('kontolaformularu')
      setVypisovaniechyby("Chyba pri zadavani TEL.ČISLA")
        // console.log("Hodnota otazka1:", hodnota);
        return false
    } 
    if (kluc === "otazka4" && !/^\+?\d{8,15}$/.test(hodnota)) {
      automatika()
      setKontrolaText('kontolaformularu')
      setVypisovaniechyby("Chyba pri zadavani TEL.ČISLA")
        // console.log("Hodnota otazka1:", hodnota);
        return false
    } 
     //  TELEFON  //  TELEFON  //  TELEFON  //  TELEFON  //  TELEFON


    if (kluc === "otazka5" && hodnota === "") {
      automatika()
      setKontrolaText('kontolaformularu')
      setVypisovaniechyby("Chyba pri zadavani ADRESA")
        // console.log("Hodnota otazka1:", hodnota);
        return false
    } 
    
    // KRAJINA     // KRAJINA     // KRAJINA     // KRAJINA    // KRAJINA     // KRAJINA
    if (kluc === "otazka6" && hodnota === "") {
      automatika()
      setKontrolaText('kontolaformularu')
      setVypisovaniechyby("Chyba pri zadavani KRAJINA")
        // console.log("Hodnota otazka1:", hodnota);
        return false
    } 
    // KRAJINA     // KRAJINA     // KRAJINA     // KRAJINA    // KRAJINA     // KRAJINA


// DATUM // DATUM // DATUM// DATUM// DATUM// DATUM// DATUM// DATUM// DATUM
        if (kluc === "otazka7" && hodnota === "") {
      automatika()
      setKontrolaText('kontolaformularu')
      setVypisovaniechyby("Chyba pri zadavani DATUM NARODENIA")
        // console.log("Hodnota otazka1:", hodnota);
        return false
    } 
        if (kluc === "otazka7" && !/^[^\/]+ \/ [^\/]+ \/ [^\/]+$/.test(hodnota)) {
      automatika()
      setKontrolaText('kontolaformularu')
      setVypisovaniechyby("Chyba pri zadavani DATUM NARODENIA")
        // console.log("Hodnota otazka1:", hodnota);
        return false
    } 
// DATUM // DATUM // DATUM// DATUM// DATUM// DATUM// DATUM// DATUM// DATUM

        if (kluc === "otazka8" && hodnota === "") {
      automatika()
      setKontrolaText('kontolaformularu')
      setVypisovaniechyby("Chyba pri zadavani MESTO")
        // console.log("Hodnota otazka1:", hodnota);
        return false
    } 


// PSC.    // PSC    // PSC    // PSC   // PSC
        if (kluc === "otazka9" && hodnota === "") {
      automatika()
      setKontrolaText('kontolaformularu')
      setVypisovaniechyby("Chyba pri zadavani PSC")
        // console.log("Hodnota otazka1:", hodnota);
        return false
    } 
        if (kluc === "otazka9" && !/^\d{3}\s?\d{2}$/.test(hodnota)) {
      automatika()
      setKontrolaText('kontolaformularu')
      setVypisovaniechyby("Chyba pri zadavani PSC")
        // console.log("Hodnota otazka1:", hodnota);
        return false
    } 
// PSC.    // PSC    // PSC    // PSC   // PSC
        if (kluc === "otazka10" && hodnota === "") {
      automatika()
      setKontrolaText('kontolaformularu')
      setVypisovaniechyby("Chyba pri zadavani KRAJ")
        // console.log("Hodnota otazka1:", hodnota);
        return false
    } 
        if (kluc === "otazka11" && hodnota === "") {
      automatika()
      setKontrolaText('kontolaformularu')
      setVypisovaniechyby("Chyba pri zadavani PLATBA")
        // console.log("Hodnota otazka1:", hodnota);
        return false
    } 
    
 

 
    

return true

  }
    

  )

    if (jeValid) {
    console.log("ano");
    // navigoavanie()
    handleClick32()
  }

  return jeValid;

}


      console.log(kvalita); 

      const navara = () => setFormData({
  otazka1: "",
  otazka2: "",
  otazka3: "",
  otazka4: "",
  otazka5: "",
  otazka6: "",
  otazka7: "",
  otazka8: "",
  otazka9: "",
  otazka10: "",
  otazka11: "",
  otazka100: "",
});




  return (
    <Templatepage
 hedericek = {{display:"none"}}

  
   
   >

          <div className='tujeformularfinaluzkoneccenkokot'>



        <div className='tujescrollemeltneikcek'>

       <Formularovacast
                                    zmenamnn = {{height:"100%",position:"relative"}}


                                    onClick = {() => {handleClick2(),navara()}}

                                    
                                    onClick2 = {() => {
                                      kontrolujem(formData)


                                      

                                    }}
                                    
                                    ></Formularovacast>
        </div>
        
 
                             
                                
          
      
    </div>


    </Templatepage>
  
  )
}

export default Formularovacastposldena
