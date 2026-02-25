import './mobillayout.css'

import React from 'react'

const Mobillayout = () => {
  return (
    <div>
          <div className='ubodiceke'>
                 <Tabulecak
                 hodnoteie = {apartman.info?.hostia}
                 hosnoteniepocet = {apartman.info?.spalne}
                 lozka =  {apartman.info?.lozka}
                 kupelna =  {apartman.info?.kupelna}
                 nazov = {apartman.info?.lokalita}
                 cislo = {apartman.info?.hodnotenie}
                 ohod = {apartman.info?.reference}
            
                 onClick = {() => {seTeraz(true),

                  setRandom(<Hybesa
                  onClick={() => seTeraz(false)}
                  >
                    <Hybesto
                    premenna={premenna}

                    ></Hybesto>


                  </Hybesa>
                  )}}
                  >
                 </Tabulecak>
                 <div className='styliskitka'>

                  <Dalsi
                  meno = {apartman.veduci?.meno}
                  priezvisko = {apartman.veduci?.priezvisko}
                  fotka = {apartman.veduci?.fotka}
                  popisek = {apartman.veduci?.popisek}
                  Linkastyle = {{ display: "none" }}
                  onClick = {() => {seTeraz(true),

                    setRandom(<Form></Form>)
                  }}
                  ></Dalsi>
                 </div> 
              
                </div>

     
    </div>
  )
}

export default Mobillayout
