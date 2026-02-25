import './nastavenia.css'

import React, { useState } from 'react';
import Templatepage from '../tempaltepage/templatepage'
import Biela from '../../naviac/biela/biela'
import Footer from '../footer/footer'
import {Kategorie} from '../../naviac/datalennanastavenie/datalennanastavenia'
import Upravitdole from '../../naviac/upravitdole/upravitdole'
import Zborazenietextov from '../../naviac/zborazenietextov/zborazenietextov'

import { useMediaQuery } from "react-responsive";


import Overlapiceko from '../../naviac/mobilnyoweraal/mobilnyoweraal'

import Informacnyowerla from '../../naviac/informacnyowerlap/informacnyowerla'

import Druhezobrazenie from '../../naviac/druhezobrazenie/druhezobrazenie'

const Nastavenia = () => {
  const [farba,setFarba] = useState(1)
  const [hover,setHover] = useState(1)
  const [klik,setKlik] = useState("A")
  const [farbaklik,setFarbaklik] = useState(1)


  const najdeny =  Kategorie.find(item => item.ide ===  klik )



  console.log(najdeny.otazky);


console.log(klik);
console.log(farbaklik);


  const finalneNajdeny =  najdeny.otazky.find(item => item.id === farbaklik)
  console.log(finalneNajdeny);


       const redner = useMediaQuery({ minWidth: 751 });
       const rendereovany =  useMediaQuery({ maxWidth: 750 });
  
  const[otvaram,setOtvaram] =  useState(false)
  return (
    <Templatepage  hedericek = {{display:"none"}}
  
    >
{rendereovany  && <>

<Informacnyowerla

      show = {otvaram}

      setOtvaram = {setOtvaram}

    ></Informacnyowerla> 



     <Overlapiceko
     klik = {() => setOtvaram(null) }

    //  stylecekokok = {{height:"50px"}}
      show = {otvaram}
     >


         <div className='lenwrappernacelycahmobilw'>

          <div className='totopotrebujemnasivuu'>
            <Druhezobrazenie
               halvny = {finalneNajdeny.komplet}
            dalsi = {finalneNajdeny.varovnySignal}
            cislo = {finalneNajdeny.id}

            jeden = {finalneNajdeny.odpoved}
            dva = {finalneNajdeny.preco}
            trie = {finalneNajdeny.coUrobit}
            stiri={finalneNajdeny.detail}
            pat={finalneNajdeny.detail2}
            sets={finalneNajdeny.detail3}
            ></Druhezobrazenie>
              


          </div>

          

         
 
            </div>
  

     </Overlapiceko>

</>}
      

      <div className='tusukkotinnyrtext32332y'>
        <div className='ttotojelenwraperr'>
              <div className='tumamotakzy'>
                {Kategorie.map((item,index) => 
                <Upravitdole
                upravitdole ={item.nazov}
                >
                  {item.otazky.map((polozka) => <Biela
                  onMouseEnter={() => setHover(polozka.id)}
                  onMouseLeave={() => setHover(null)}
                  onClick = {() => {setFarba(polozka.id),setKlik(item.ide),setFarbaklik(polozka.id),setOtvaram(true)}}
                    style={{
                      backgroundColor: hover === polozka.id ? "var(--farba-main)" : farbaklik === polozka.id ? "var(--farba-main)" : "var(--farba-biela)"
                    }}
                  farbaobrazok = {{
                    color:hover === polozka.id ? "white" : farbaklik === polozka.id ? "white" : "var(--farba-sivaText)"}}
                  obrazok = {polozka.id}
                  textpvacast = {polozka.nazov}
                  ></Biela> )}
                </Upravitdole>)}

                {/* <Upravitdole
                upravitdole = "kokoko"
                ></Upravitdole> */}
        
        </div>
      </div>

      {redner &&      <div className='tumamodpvodedete'>
          <div className='vnutronaswieprmoznoe'>

            <Zborazenietextov
            halvny = {finalneNajdeny.komplet}
            dalsi = {finalneNajdeny.varovnySignal}
            cislo = {finalneNajdeny.id}

            jeden = {finalneNajdeny.odpoved}
            dva = {finalneNajdeny.preco}
            trie = {finalneNajdeny.coUrobit}
            stiri={finalneNajdeny.detail}
            pat={finalneNajdeny.detail2}
            sets={finalneNajdeny.detail3}

            ></Zborazenietextov>


          </div>

        </div>  }


      



      </div>
 
        
<Footer></Footer>
     
    </Templatepage>
  )
}

export default Nastavenia
