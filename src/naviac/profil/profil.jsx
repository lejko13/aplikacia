import './profil.css'
import Linka from '../linka/linka'
import React from 'react'
import Footer from '../footer/footer'

import {ikonyPonuk} from '../ponuka/ponuka'

import {ludia,majitel} from '../zoznamosoby/zoznamosoby'
import Templatepage from '../tempaltepage/templatepage'
const Profil = () => {

  return (
   <Templatepage hedericek = {{display:"none"}}>
     <div className='obahssss'>
      <div className='hornafotka'>
        <div className='fototfotoot'></div>
        <div className='textexttextkoko'></div>
      </div>
      
      <div className='infoakokotinykoki'></div>
  


     </div>
     <Footer></Footer>
        </Templatepage>
      
   
  )
}

export default Profil
