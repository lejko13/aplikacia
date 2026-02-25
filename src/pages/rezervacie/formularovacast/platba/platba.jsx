import React, { useState,useContext } from "react";
import './platba.css';
import Maleokno from '../maleokno/maleokno'
import  Pay from '../pay/pay'
import Tototodrzi from '../tototodrzi/tototodrzi'
import Linka from "../../../../naviac/linka/linka";
import Vyber from '../vyber/vyber'
import Vyberdatum from '../vyberdatum/vyberdatum'
import { color } from "framer-motion";

import { MyContext } from '../../../../naviac/providertelefon/providertelefon'

import { useMediaQuery } from "react-responsive";

const Platba = () => {
const[farba,setFarba] = useState(null)
const[klik,setKlik] = useState(null)



  const { suborOpen,setSuborOpen,obsahOpen,setObsahOpen,subor,setSubor,nazovSuboru,setNazovSuboru,unikattne,setUnikatne,meno,dotadok,setDotadok,otazka,setOtazka,kontrlkaaa,setKontrlkaaa,formData, setFormData} = useContext(MyContext);


 const isMobile = useMediaQuery({ maxWidth: 1200 });
  const isDesktop = useMediaQuery({ minWidth: 810 });


    const [krajina, setKrajina] = useState("");
    const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };


  console.log(formData);
  

  const lenta = krajina
  return (

    <div className="celookcotodrzim">
        <div className="tusuudajecoakokoko">
        
        <Tototodrzi 
        stilik = {{display:"none"}}
        hlvanytext = {"Osobné údaje"} 
        textdole={"Tieto údaje slúžia na základnú identifikáciu osoby a budú použité výhradne na evidenčné účely."}>
               <Linka></Linka>
            <div style={{display:"flex",gap:"10px",width:"100%"}}>
             
                 <Maleokno
                ocomtoje = "Meno"
                       name="otazka1"
                placeholder = "Leo"
                type="text"
                // onChange = {() => }

                   value={formData.otazka1}
                  onChange={handleChange}
                ></Maleokno>

                <Maleokno
                ocomtoje = "Priezvisko"
                placeholder = "Fudaly"
                type="text"
                      name="otazka2"
                value={formData.otazka2}
                  onChange={handleChange}
                ></Maleokno>

            </div>
            <div className="lentakonovymozneo">
             
                 <Maleokno
                ocomtoje = "E-mail"
                type="email"
                  name="otazka3"
                value={formData.otazka3}
                  onChange={handleChange}
                placeholder = "leo.fudaly@gamil.com"
                ></Maleokno>

            <Maleokno
                ocomtoje = "Telefon"
                placeholder = "+421 090 836 584"
                type="tel"
                  name="otazka4"
                value={formData.otazka4}
                  onChange={handleChange}
                ></Maleokno>
   
            <Maleokno
                ocomtoje = "Adresa"
                placeholder = "Kratka 8/A"
                  name="otazka5"
                value={formData.otazka5}
                  onChange={handleChange}
                ></Maleokno>
            

            </div>
           

    
                 {/* toto */}
                 <Vyber
                 type = ""
                ocomtoje = "Krajina"
                placeholder = ""
                krajina = {krajina}
                setKrajina = {setKrajina}
                
               pridavok={(novaKrajina) => {
                setFormData(prev => ({...prev,otazka6:novaKrajina}))
            }}
                ></Vyber>
                    {/* toto */}


                <Vyberdatum
                ocomtoje = "Datum narodenia"
                placeholder = "Fudaly"
                ></Vyberdatum>
                   {/* toto */}


                <Maleokno
                ocomtoje = "Mesto"
                placeholder = "Spisska Bela"
                     name="otazka8"
                value={formData.otazka8}
                  onChange={handleChange}
                
                ></Maleokno>

          
               
            <div style={{display:"flex",gap:"10px",width:"100%"}}>
             
                 <Maleokno
                    ocomtoje = "PSC"
                placeholder = "05901"
                  name="otazka9"
                value={formData.otazka9}
                  onChange={handleChange}
             
                ></Maleokno>
                <Maleokno
                ocomtoje = "Kraj"
                placeholder = "Kezmarsky"
                      name="otazka10"
                value={formData.otazka10}
                  onChange={handleChange}
                // placeholder = "leo.fudaly@gamil.com"
                ></Maleokno>
            </div>


               <Maleokno
               dolezite = {{display:"none"}}
                ocomtoje = "Správa pre hostitela"
                   name="otazka100"
                value={formData.otazka100 }
                  onChange={handleChange}
                placeholder = "Napíšte krátku správu pre hostiteľa…"
                ></Maleokno>


 <Linka></Linka>

               
        </Tototodrzi>
             
               
           

        </div>
          <Tototodrzi  hlvanytext = {"Vyberte si spôsob platby"} textdole={"Všetky platby sú šifrované a bezpečné. Vyberte si metódu, ktorá vám najviac vyhovuje."}>
            <Pay 
         
            onClick = {() => {
              setKlik(1); 
                setFormData(prev => ({...prev,otazka11:"VISA"}))
            }}

          style={{
            backgroundColor: klik === 1 ?"var(--farba-biela)" :  farba === 1 ? "var(--farba-main2)" :"var(--farba-biela)"
            }}
            vnutro = {{
            border: klik === 1 ? "solid var(--farba-main)" : "solid var(--farba-siva)"
            }}
            vnutro2 = {{
              backgroundColor: klik === 1 ? "var(--farba-main)" : "var(--farba-siva)"
            }}
            obrazok = '/visa.svg'
            dolnytext = {"Visa **** 0912"}
            hornytext={"Pay with your Visa card"}

            ></Pay>

            <Pay 
         
            onClick = {() => {setKlik(2),setFormData(prev => ({...prev,otazka11:"MASTER"}))}}

          style={{
            backgroundColor: klik === 2 ?"var(--farba-biela)" :  farba === 2 ? "var(--farba-main2)" :"var(--farba-biela)"
            }}
            vnutro = {{
            border: klik === 2 ? "solid var(--farba-main)" : "solid var(--farba-siva)"
            }}
            vnutro2 = {{
              backgroundColor: klik === 2 ? "var(--farba-main)" : "var(--farba-siva)"
            }}
            obrazok = '/master.svg'
            dolnytext = {"Mastercard **** 0912"}
                hornytext={"Pay with your Mastercard"}
            ></Pay>

            <Pay obrazok = '/pay.svg'

        
            onClick = {() => {setKlik(3),setFormData(prev => ({...prev,otazka11:"PAY-PAL"}))}}

          style={{
            backgroundColor: klik === 3 ?"var(--farba-biela)" :  farba === 3 ? "var(--farba-main2)" :"var(--farba-biela)"
            }}
            vnutro = {{
            border: klik === 3 ? "solid var(--farba-main)" : "solid var(--farba-siva)"
            }}
            vnutro2 = {{
              backgroundColor: klik === 3 ? "var(--farba-main)" : "var(--farba-siva)"
            }}
            dolnytext = {"Pay with Paypal"}
                hornytext={"Split into  payments"}
            ></Pay>


          </Tototodrzi>
   
        
        
    </div>

      
            

          

  );
}



export default Platba
