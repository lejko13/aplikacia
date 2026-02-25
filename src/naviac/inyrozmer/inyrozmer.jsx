import './inyrozdiel.css'

import React, { useEffect } from 'react';
import Nahlad from '../nahlad/nahlad'
import Nahlad2 from '../../naviac/nahlad2/nahlad2'

import useBreakpoint from '../../naviac/hook/breakpoint'
import Templatepage from '../../pages/tempaltepage/templatepage'
import { useContext } from "react";
import { GlobalContext } from '../reactcontext/reactcontext'
import { useMediaQuery } from "react-responsive";
const Inyrozmer = ({data,halvnytext,textmaly,druhy}) => {
    // const { isMobile,isTablet,isDesktop } = useBreakpoint();


  const isMobile = useMediaQuery({ maxWidth: 750 });
  const isDesktop = useMediaQuery({ minWidth: 750 });
  const isDesktop2 = useMediaQuery({ maxWidth: 1100 });
    const KOntrolatextu = useMediaQuery({ minWidth: 320 });

       const { pocetOblubene, setPocetOblubene, filter, setFilter,owerlap,seTeraz,teraz ,popokno,setPopokno,
                lajknute,setLajknute,lajkujem,texdo,setTextdo,kontext,setKontext,oblubene,setOblubene,mala,setMala 
               } = useContext(GlobalContext);


        useEffect(() => {
          setPocetOblubene(oblubene.length);
        
        }, [oblubene]);
  return (
<>

<Templatepage
hedericek = {{ height:  "fit-content" }}


header = {
    <div className='horeobl'>
          <div>
          <span className='texticekohlavny'>{halvnytext}</span>
          <div style={{whiteSpace: 'nowrap', fontSize: "var(--font-size-base2)", color: "var(--farba-sivaText)"}}>
{KOntrolatextu && 
<>
  <span>{ isDesktop ? textmaly : druhy}</span>
            
            </>}
           
            
            </div>
          
          </div>
          {/* horene */}
         

        </div>}
>
  <div className='celocekokoko'>
     {isMobile && <div className = "rozmertelefenon">
       <div className='Inyrozmer'>
        
        {data.map((prev,index) => (
<Nahlad2
    ikonaaaaa = {<i class='bx bx-heart' ></i>}
 klikkam={(e) => {
    e.stopPropagation();

    setKontext(prev => !prev);
    lajkujem()
    setTextdo(prev);

    setOblubene(stary => {
      const existuje = stary.some(item => item.id === prev.id);

      if (existuje) {
        setMala(false);
        return stary.filter(item => item.id !== prev.id);
      } else {
        setMala(true);
        return [...stary, prev];
      }
    });
  }}
zmaz2={{ display: "none" }}
      style={{
        padding: "0px",
        width: "100%",
        height: "100%",
      }}
                
                   kontrola = {false}
                  //  prepinam = {}
                   
                fotky={prev.fotky}
      apartman={prev}
      nazov={prev.name}
      location={prev.location}
      krajina={prev.krajina}
      hodnotenie={prev.hodnotenie}

            ></Nahlad2> 
        ))}
           
      
    </div>
     </div>}

 {isDesktop &&
<div className='vrhocelcekk'>
     <div className='Inyrozmer'>
        
        {data.map((prev,index) => (
      <Nahlad2
                    klikkam={(e) => {
          e.stopPropagation();

          setKontext(prev => !prev);
          lajkujem()
          setTextdo(prev);

          setOblubene(stary => {
            const existuje = stary.some(item => item.id === prev.id);

            if (existuje) {
              setMala(false);
              return stary.filter(item => item.id !== prev.id);
            } else {
              setMala(true);
              return [...stary, prev];
            }
          });
        }}
      zmaz2={{ display: "none" }}
            style={{
              padding: "0px",
              width: "100%",
              height: "100%",
            }}
            ikonaaaaa = {<i class='bx bx-heart' ></i>}
                      
                        kontrola = {false}
                        //  prepinam = {}
                        
                      fotky={prev.fotky}
            apartman={prev}
            nazov={prev.name}
            location={prev.location}
            krajina={prev.krajina}
            hodnotenie={prev.hodnotenie}

                  ></Nahlad2> 
        ))}
           
      
    </div> 
   
</div>
    }
  </div>
  
</Templatepage>

 
       
    
  

    
    </>
  )
}

export default Inyrozmer

            
        
               