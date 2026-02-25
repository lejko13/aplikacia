import React from 'react'
import Druhykonnec from '../../naviac/dryhukonnec/druhykonnec'
import './pokladna.css'
import { useNavigate } from 'react-router-dom';
import Picus from '../../naviac/picus/picus'
const Pokladna = () => {



 const navigate = useNavigate();
const navigovanesapt = () => navigate("/Rezervacie")
//  const klik = () => navigate(`/Pokladna`);

  return (
    <div className='tootjepokladnaaaa'>

        <Picus
                  klikam = {() => {navigovanesapt()}
        
                    
                    // {setOtvorenie(false) ,setAno(true)}
                }
            //  sharekliknutie = {() => FORMULAR()}
             sharekliknutie = {() =>console.log("koko")}
            //  onClick = {}

             ></Picus>
      
    </div>
  )
}

export default Pokladna
