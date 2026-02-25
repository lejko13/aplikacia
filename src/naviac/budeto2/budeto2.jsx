import './budeto2.css'

import React from 'react'
import { useContext } from "react";
import { GlobalContext } from '../reactcontext/reactcontext'
import NahladSpecial from '../../naviac/nahladspecial/nahladspecial'

const Budeto2= ({data}) => {
     const { pocetOblubene, setPocetOblubene, filter, setFilter,owerlap,seTeraz,teraz ,popokno,setPopokno,
        lajknute,setLajknute,lajkujem,texdo,setTextdo,kontext,setKontext,oblubene,setOblubene,mala,setMala 
       } = useContext(GlobalContext);
  return (
    <div className='stylicekzeako2'>
    {data.map((item,index) => (
           

                 
           
      
                    <NahladSpecial
                    style={{
                          width: "100%",
                    height:"100%",
                    }}
        key={item.id}
        klik22={() => navigate(`/Detailpagee/${item.id}`)}
         fotky = {item.fotky}
         unikatne = {item.id}
                apartman={item}
                nazov = {item.nazov}
                location = {`tu ${item.nazov}`}
                hodnotenie = {item?.datum}
                
              fotka69={ <div class="my-div">
                  {item?.zbierka.length > 0  &&   <img className = "foktafotkafotkateofkeke2" src = {item?.zbierka[0]?.nova44?.fotky[0]}  />}
</div>}
                fotka1 = {
                <div class="my-div">
                  {item?.zbierka.length > 0  &&   <img className = "foktafotkafotkateofkeke" src = {item?.zbierka[0]?.nova44?.fotky[0]}  />}

                


                </div>}
               

                fotka2 = {<div className="my-div">
                  {item.zbierka.length > 1 &&  <img className = "foktafotkafotkateofkeke" src = {item?.zbierka[1]?.nova44?.fotky[0]} alt="popis obrázk" /> }
                 
                </div>}
                fotka3 = {<div  className="my-div">
                     {item.zbierka.length > 2 &&  <img className = "foktafotkafotkateofkeke" src = {item?.zbierka[2]?.nova44?.fotky[0]} alt="popis obrázk" /> }
                 

                </div>}
                fotka4 = {<div className="my-div">
                      {item.zbierka.length > 3 &&  <img className = "foktafotkafotkateofkeke" src = {item?.zbierka[3]?.nova44?.fotky[0]} alt="popis obrázk" /> }
                 

                </div>}
        >

          
           
            
        </NahladSpecial>
     
         
           
                ))}
        
      
    </div>
  )
}

export default Budeto2
