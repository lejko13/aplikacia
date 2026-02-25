import './detailpage.css'
import { MyContext } from '../providertelefon/providertelefon'
import { useContext } from "react";
import Footer from '../../pages/footer/footer'
import { useParams } from 'react-router-dom';
import Templatepage from '../../pages/tempaltepage/templatepage'
import React from 'react'
import Logo from '../../naviac/logo/logo'
import NahladSwiper from '../../naviac/nahladSwiper/nahladSwiper'
const Detailpage = () => {      
 
    
      const { id } = useParams(); 
    const { suborOpen,setSuborOpen,obsahOpen,setObsahOpen,subor,setSubor,nazovSuboru,setNazovSuboru,detail,setDetail} = useContext(MyContext);
 console.log(subor);
 
      const current = subor.find(item => item.id.toString() === id);
      const premenna = subor.filter(item => item.id.toString() === id)



      if (!current) return <div>Subor neexistuje</div>;

  return ( 
  <>
    <Templatepage header={<div className='hlavanacast'><Logo></Logo></div>}>
    <div className='Detailpage'>
        <p>{current?.nazov}</p> 

            {current.zbierka.map((z, index) => (
            <div key={index}>
              <p>{z.nova44.krajina}</p>
              <p>{z.nova44.name}</p>
            </div>
          ))}
     
  
  {/* {subor.map((item,index) => (
    <div>{current?.nazov2}</div>
  ))} */}

  
    {/* <NahladSwiper
  nazov={current?.nazov2}
  fotky={current?.fotky}    // predpoklad: NahladSwiper vie pracovať s poľom
  location={current?.location}
  hodnotenie={current?.hodnotenie}
/> */}
    </div>
    <Footer></Footer>
    </Templatepage> 
   </>
  )
}

export default Detailpage
