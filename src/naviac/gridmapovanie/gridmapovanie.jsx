import './gridmapovanie.css'
import NahladSpecial from '../../naviac/nahladspecial/nahladspecial'
// import Specialnygrid from'../../naviac/specialnygrid/specialnygrid'
import React from 'react'
import { useNavigate } from 'react-router-dom';


const Gridmapovanie = ({subor}) => {
   const navigate = useNavigate();
console.log(subor);

  
  return (
    <div className='gridmapovanie'>
      {subor.map((item,index) => (

        <NahladSpecial
        key={item.id}
        klik22={() => navigate(`/Detailpagee/${item.id}`)}
         fotky = {item.fotky}
                apartman={item}
                nazov = {item.nazov}
                location = {item.cas}
                hodnotenie = {item.nazov}
        >

          
           
            
        </NahladSpecial>
      ))}
    </div>
  )
}

export default Gridmapovanie
// {navigate(`/Detailpagee/${prev.id}`),ulozTexdoDoPolozky(prev.id)}
//                   }