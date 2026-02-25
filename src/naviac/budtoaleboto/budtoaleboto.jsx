import './budtoaleboto.css'

import React from 'react'
import { useContext } from "react";
import { GlobalContext } from '../reactcontext/reactcontext'
import NahladOblubene from '../nahladoblubene/nahladoblubene'

const Budtoaleboto = ({data,}) => {
     const { pocetOblubene, setPocetOblubene, filter, setFilter,owerlap,seTeraz,teraz ,popokno,setPopokno,
        lajknute,setLajknute,lajkujem,texdo,setTextdo,kontext,setKontext,oblubene,setOblubene,mala,setMala 
       } = useContext(GlobalContext);
  return (
    <div className='stylicekzeako'>
    {data.map((prev,index) => (
           

                 
           
      
                <NahladOblubene
                
                klik22={() =>  setOblubene(smola => smola.filter(item => item.id !== prev.id))}
                zmaz = {{display: "none"}}
                style={{
                 
                    // padding:"20px",
                    width: "100%",
                    height:"100%",
                }}
                   kontrola = {false}
                  //  prepinam = {}
                   
                fotky = {prev.fotky}
                apartman={prev}
                nazov = {prev.name}
                location = {prev.location}
                hodnotenie = {prev.hodnotenie}

            >
            
              </NahladOblubene> 
 
     
         
           
                ))}
        
      
    </div>
  )
}

export default Budtoaleboto
