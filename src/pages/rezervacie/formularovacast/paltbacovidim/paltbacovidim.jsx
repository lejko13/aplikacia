import React, { useState,useContext } from "react";
import './paltbacovidim.css'
import Maleokno from '../maleokno/maleokno'
import  Pay from '../pay/pay'
import Boxhore from '../../../../naviac/koneccc/boxhore/boxhore'
import Tototodrzi from '../tototodrzi/tototodrzi'
import Linka from "../../../../naviac/linka/linka";
import Vyber from '../vyber/vyber'

import { GlobalContext } from '../../../../naviac/reactcontext/reactcontext';
import Vyberdatum from '../vyberdatum/vyberdatum'
import { color } from "framer-motion";

import { MyContext } from '../../../../naviac/providertelefon/providertelefon'

import { useMediaQuery } from "react-responsive";

import { useNavigate } from 'react-router-dom';
import Totosazobrazuje from '../../formularovacast/totosazobrazuje/totosazobrazuje'
import { Link } from "react-router-dom";
const Paltbacovidim = ({sharekliknutie}) => {
const[farba,setFarba] = useState(null)
const[klik,setKlik] = useState(null)



  const { presun,setPresun,cena,setCena,kvalita,setKvalita,prize,setPrize, kontorla,setKontrola,kontorlaText,setKontrolaText,automatika,  zobrazovanie,setZobrazovanie } = useContext(GlobalContext); 


  const { suborOpen,setSuborOpen,obsahOpen,setObsahOpen,subor,setSubor,nazovSuboru,setNazovSuboru,unikattne,setUnikatne,meno,dotadok,setDotadok,otazka,setOtazka,kontrlkaaa,setKontrlkaaa,formData, setFormData} = useContext(MyContext);


 const isMobile = useMediaQuery({ maxWidth: 1200 });
 const opak = useMediaQuery({ minWidth: 1201 });
  const isDesktop = useMediaQuery({ minWidth: 810 });


    const [krajina, setKrajina] = useState("");
    const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };


  console.log(formData);
  
  const navigate = useNavigate();

  const lenta = krajina


  const tax = Math.floor(prize) * 0.1;
const formattedTax = tax.toFixed(2);
const total = prize + Number(formattedTax);
const formattedTotal = total.toFixed(2);
  return (

    <div className="celookcotodrzim">
        <div className="tusuudajecoakokoko">
        
        <Tototodrzi 
        stilik = {{display:"none"}}
        hlvanytext = {"Osobné údaje"} 
        textdole={"Tieto údaje slúžia na základnú identifikáciu osoby a budú použité výhradne na evidenčné účely."}>
               <Linka></Linka>
            <div style={{display:"flex",gap:"10px",width:"100%"}}>
             
                 <Totosazobrazuje
              


                ocomtoje = "Meno"
                       name="otazka1"
                type="text"
                // onChange = {() => }

                   value={formData.otazka1}
                  onChange={handleChange}

                  textcotamje = {formData.otazka1}
                ></Totosazobrazuje>

                <Totosazobrazuje
                ocomtoje = "Priezvisko"
                placeholder = "Fudaly"
                type="text"
                      name="otazka2"
                value={formData.otazka2}
                  onChange={handleChange}
                        textcotamje = {formData.otazka2}
                ></Totosazobrazuje>

            </div>
            <div className="lentakonovymozneo">
             
                 <Totosazobrazuje
                ocomtoje = "E-mail"
                type="email"
                  name="otazka3"
                value={formData.otazka3}
                  onChange={handleChange}
                   textcotamje = {formData.otazka3}
              
                ></Totosazobrazuje>

            <Totosazobrazuje
                ocomtoje = "Telefon"
         
                type="tel"
                  name="otazka4"
                value={formData.otazka4}
                  onChange={handleChange}
                   textcotamje = {formData.otazka4}
                ></Totosazobrazuje>
   
            <Totosazobrazuje
                ocomtoje = "Adresa"
                placeholder = "Kratka 8/A"
                  name="otazka5"
                value={formData.otazka5}
                  onChange={handleChange}
                   textcotamje = {formData.otazka5}
                ></Totosazobrazuje>
            

            </div>
           

    
                 {/* toto */}
                 <Totosazobrazuje
                 type = ""
                ocomtoje = "Krajina"
                placeholder = ""
                krajina = {krajina}
                setKrajina = {setKrajina}
                 textcotamje = {formData.otazka6}
                
               pridavok={(novaKrajina) => {
                setFormData(prev => ({...prev,otazka6:novaKrajina}))
            }}
                ></Totosazobrazuje>
                    {/* toto */}

                     <Totosazobrazuje
                ocomtoje = "Datum narodenia"
       
                  name="otazka5"
                value={formData.otazka5}
                  onChange={handleChange}
                  textcotamje = {formData.otazka7}
                ></Totosazobrazuje>

{/* 
                <Vyberdatum
                ocomtoje = "Datum narodenia"
                placeholder = "Fudaly"
                ></Vyberdatum> */}
                   {/* toto */}


                <Totosazobrazuje
                ocomtoje = "Mesto"
                placeholder = "Spisska Bela"
                     name="otazka8"
                value={formData.otazka8}
                  onChange={handleChange}
                  textcotamje = {formData.otazka8}
                
                ></Totosazobrazuje>

          
               
            <div style={{display:"flex",gap:"10px",width:"100%"}}>
             
                 <Totosazobrazuje
                    ocomtoje = "PSC"
                placeholder = "05901"
                  name="otazka9"
                value={formData.otazka9}
                textcotamje = {formData.otazka9}
                  onChange={handleChange}
             
                ></Totosazobrazuje>

                <Totosazobrazuje
                ocomtoje = "Kraj"
                placeholder = "Kezmarsky"
                      name="otazka10"
                value={formData.otazka10}
                  onChange={handleChange}
                  textcotamje = {formData.otazka10}
                // placeholder = "leo.fudaly@gamil.com"
                ></Totosazobrazuje>
            </div>

{ formData.otazka100 != "" &&    <Totosazobrazuje
               dolezite = {{display:"none"}}
                ocomtoje = "Správa pre hostitela"
                placeholder = "Napíšte krátku správu pre hostiteľa…"
                textcotamje = {formData.otazka100}
                ></Totosazobrazuje>}
             

               <Totosazobrazuje
               dolezite = {{display:"none"}}
                ocomtoje = "Sposob platby"
                textcotamje = {formData.otazka11}
                placeholder = "Napíšte krátku správu pre hostiteľa…"
                ></Totosazobrazuje>

        {opak && <Linka></Linka> }        




               
        </Tototodrzi>
             
               
           
   <Tototodrzi 
        stilik = {{display:"none"}}
        hlvanytext = {"Prehlad ubytovania"} 
        textdole={"Tu je súhrn vášich pobytov."}>
               <Linka></Linka>
            
                
               

          
                <div className="tubuetiebytt">

                  <div className='tusazbrieraalennivia' style={{padding:"0px",backgroundColor:"transparent"}}>
          {kvalita?.map((item) => 

          <Boxhore
          silll = {{display:"none"}}
          apartamnnazov = {item.apartman.name}
          apartamnlocation = {item.apartman.location}
          sharekliknutie = {sharekliknutie}
          fotkaa2 ={item.apartman.fotky[0]}
          krajina = {item.apartman.krajina}
          kraj = {item.apartman.kraj}
          location = {item.apartman.location}
          cena = {item.prepocet}
          onClick = {() => navigate(`/Detail/${item.apartman.id}`)}
          trashkliknutie = {() => 
          odstraneneiKvality(item.apartman.id,item.prepocet)
          
          }
         
          ></Boxhore>

          )}


        </div>

                </div>
            

           

               
        </Tototodrzi> 

          <div className="cenykokocinko">
          <Tototodrzi 
        stilik = {{display:"none"}}
        hlvanytext = {"Zhrnutie ceny"} 
        textdole={"Nizsie je detailný prehľad výslednej ceny."}>
  <Linka></Linka>
           <div className="summaryDetailiks">
      <div className='driztitexty'>
          <span style={{color:"var(--farba-sivaText)",fontSize:"var(--font-size-small)"}}>Ubytovanie</span>
           <span style={{color:"var(--farba-sivaText)",fontSize:"var(--font-size-small)"}}>€{prize}.00</span>
      </div>
    
          <div className='driztitexty'>
      <span style={{color:"var(--farba-sivaText)",fontSize:"var(--font-size-small)"}}>Dane</span>
      <span style={{color:"var(--farba-sivaText)",fontSize:"var(--font-size-small)"}}>€{formattedTax}</span>
      </div>
      
          <div className='driztitexty'>
      <span style={{color:"var(--farba-sivaText)",fontSize:"var(--font-size-small)"}}>Celkom</span>
      <span style={{color:"var(--farba-sivaText)",fontSize:"var(--font-size-small)"}}>€{formattedTotal}</span>
      </div>
      
    </div>


        </Tototodrzi>

          {/* <div className="boxHeaderik">Zhrnutie pokladne</div> */}
  

   
    
    

  
          
          
          </div>   
       

        </div>

       
        
   
        
        
    </div>

      
            

          

  );
}



export default Paltbacovidim
