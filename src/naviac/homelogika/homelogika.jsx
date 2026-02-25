import './homelogika.css'
import Tujelogika from '../../naviac/tujelogika/tujelogika'
import React, { useRef, useState, useEffect } from 'react';
import { MyContext } from '../providertelefon/providertelefon'
import { GlobalContext } from '../reactcontext/reactcontext'
import NahladSwiper from '../../naviac/nahladSwiper/nahladSwiper'
import { useContext } from "react";
import Ukazovatelko from '../../naviac/ukazovatelko/ukazovatelko'
import Ikonypage from '../../naviac/ikonypage/ikonypage'
import { color } from 'framer-motion';
import Linka from '../linka/linka';
import Polozkaitem from '../../naviac/polozkaitem/polozkaitem'
import { useNavigate } from 'react-router-dom';

const Homelogika = ({text4,focus}) => {


  const navigate = useNavigate();
  const[hover,setHover] = useState(null)
    const zatvarame = useRef(null)
      const { lajknute,texdo,setTextdo,kontext,setKontext,mala,setMala,oblubene,setOblubene, kontorla,setKontrola,kontorlaText,setKontrolaText,automatika } = useContext(GlobalContext);
      const { suborOpen,setSuborOpen,obsahOpen,setObsahOpen,subor,setSubor,nazovSuboru,setNazovSuboru,detail,setDetail,rezim,setRezim} = useContext(MyContext);


      const vymazac = () => 
         setOblubene(prev => prev.filter(item => item?.id !== texdo?.id))
      
      
    


const final = (id) => {
  let shouldNavigate = false;

  setSubor(prev =>
    prev.map(item => {
      if (item.id !== id) 
        
        return item;

        const exists = item.zbierka.some(
        obj => obj.nova44?.id === texdo.id
      );

      if (exists) {
        console.log("pica");
        automatika()
        setKontrolaText("kontola")

        return item;
      }

      shouldNavigate = true;

      return {
        ...item,
        zbierka: [...item.zbierka, { nova44: texdo }]
      };
    })
  );

  if (shouldNavigate) {
    navigate(`/Detailpagee/${id}`);
  }
};




  const zatvorenie = () => {
    setSuborOpen(false)
  }
  // const lentak = () => {
  //   setKontrola(true)
  // }

  // const funkce = (id) => setOblubene(prev => prev.map((item) => item.id === id ? ))
     
// const final2 = (id) => 
//   setSubor(prev => prev.map((item) =>{
//     console.log("koko");
    
//     item.id === id ? {...item,zbierka:[...item.zbierka , {nova: texdo}]} : item}
//   ))
    //  const zorbazenieCisla = subor.
    console.log(subor);
    
  return (
    <>
    
   <div className='vrchvrcholcovc'>
     <Linka></Linka>
       <div className='strednyobsahswiper'>
        <div className='obalobal'>
            <NahladSwiper
klikkomomo = {() => {(navigate(`/Detail/${texdo.id}`)),setSuborOpen(false)}}

            style={{border: rezim  === true ? "1px solid white" : "1px solid var(--farba-siva)"}}
            nazov = {texdo.name}
            fotky = {texdo.fotky}
            location = {texdo.location}
           
             
            
                
                hodnotenie = {texdo.hodnotenie}
            ></NahladSwiper>
            </div>
            <div className='lavastranaaaa'>
              {/* <input  
              type="text"        // určuje typ
              value={nazovSuboru}      // riadenie hodnoty
              onChange={e => setNazovSuboru(e.target.value)} /> */}
              <div className='mapovaniezoznamnomv'>

               {subor.length >= 1 &&  <div className='totosajedinescroluje'>

                {subor.map((prev,index) => (

                  <Polozkaitem
                  kliknutie = {() =>
                    
                    {
             
                    final(prev.id),
                  vymazac(),
                zatvorenie(),
                console.log("Kokokt")
                
              }
                  }
                  dizajnpolozky = {{padding:"10px"}}
                  nazov={prev?.nazov}
                  hodnotenie = {prev?.zbierka?.length}
                  lokacia = {"Počet ubytovaný"}
                  ikona = {<i class='bx bx-home-alt-2' ></i>}
                  
                  >{prev?.id}</Polozkaitem>
                ))}
                
                </div> }
               

                
              </div>

            </div>

           
       </div>
       <Linka></Linka>
         <div className='alternativa' >
        <Ikonypage
        onMouseEnter={() => setHover(1)}
        onMouseLeave={() => setHover(0)}
          onClick={() => {setObsahOpen("logikaNovehoSuboru")}}
          style={{ 
            backgroundColor: hover === 1 ? "var(--farba-main2)" : "var(--farba-main)", 
            // color:"white",
            width: "100%" }}
          text={text4}
          textStyle = {{
            color:"white", 
          }}
        />
      </div>
       </div>
       </>
      
  )
}

export default Homelogika
