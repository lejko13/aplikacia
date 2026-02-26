import './footer.css'

import React, { useRef, useEffect, useState } from 'react'
import  Ukazovatelko from '../../naviac/ukazovatelko/ukazovatelko'
import Linka from '../../naviac/linka/linka'
import { use } from 'react'
import { useMediaQuery } from "react-responsive";
import { useContext } from "react";
import { GlobalContext } from '../../naviac/reactcontext/reactcontext'


import { Link, useNavigate } from "react-router-dom";
const Footer = ({ setDomov,scrollToTop }) => {
   const navigate = useNavigate();

     
       const { pocetOblubene, setPocetOblubene, filter, setFilter,owerlap,seTeraz,teraz ,popokno,setPopokno,
          lajknute,setLajknute,lajkujem,texdo,setTextdo,kontext,setKontext,oblubene,setOblubene,mala,setMala,novicek,novicek2
         } = useContext(GlobalContext);

  const[hover,setHover] = useState(null)
 const farba = {
  fontSize: '20px',
  color: 'var(--farba-cierna)',
  whiteSpace: 'nowrap', // pridane
}

const text = {
  fontSize: 'var( --fontspecialny)',
  color: 'var(--farba-cierna)',
  whiteSpace: 'nowrap', // pridane
}

  const isMobile = useMediaQuery({ maxWidth: 900 });

  const mobilcek = useMediaQuery({ maxWidth: 750 });

  const isDesktop = useMediaQuery({ minWidth: 901 });

  const koko = useMediaQuery({ maxWidth: 1000 });
  const koko2 = useMediaQuery({ minWidth: 1100 });




const handleClick = () => {
  novicek.current?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  })
  scrollToTop()
  
}

const handleClick2 = () => {

  window.scrollTo({
    top: 0,
    behavior: "smooth" // plynulé scrollovanie
  })
}


console.log(novicek2);




const openInstagram = () => {
  window.open("https://www.instagram.com/leofudaly/", "_blank");
}
  return (
    <div className='footer'>
      <div style={{padding:"15px 0px"}}>
      {/* <Linka></Linka> */}
      </div>
      <div className='obsahfooter'>
        <div className='horecekook'>
          <div className='celokcekokok'>
            <div className='wrapperekokotikskoko'>
              <div className='tabulka'>
                <span style={text}>Hlavné stránky webu</span>
                <div className='odkazisaem'>
                  <p className='textsposokfooter'
                  onClick={() =>{
                    if (mobilcek) {
                    handleClick2(),setDomov("domov"),navigate("/")
                  }else 
                    navigate("/"),handleClick(),setDomov("domov")
                }}
                  >Domov</p>
                  <p className='textsposokfooter'
                  onClick={() =>    
                          navigate("/Rezervacie")}
                  >Moje rezervácie</p>

                  <p className='textsposokfooter'
                  onClick={() =>    
                          navigate("/Konverzacie")}
                  >Konverzácia</p>

                  <p className='textsposokfooter'
                  onClick={() =>    
                          navigate("/Upozornenia")}
                  >Oblúbené</p>

                  <p className='textsposokfooter' 
                      onClick={() =>    
                          navigate("/Profil")}
                          >Profil</p>
                </div>
              </div>

               

              <div className='tabulka2'>
                <span style={text}>Kategórie</span>
                <div className='odkazisaem'>
                  <div className='odkazisaem'>
                  <p className='textsposokfooter'

                    onClick = {() => {
                       if (mobilcek) {
                         navigate("/"),handleClick2(),setDomov("S bazénom"),setAnimacia(false)
                       }
                      navigate("/"),handleClick(),setDomov("S bazénom"),setAnimacia(false)
                    }}
                  >S bazénom</p>
                  <p className='textsposokfooter'
                  onClick = {() => {
                     if (mobilcek) {
 navigate("/"),setDomov("Vidiek"),handleClick2(),setAnimacia(false)

                     }
                    navigate("/"),setDomov("Vidiek"),handleClick(),setAnimacia(false)}}
                  >Vidiek</p>
                  <p className='textsposokfooter'
                  onClick = {() => {
                     if (mobilcek) {
 navigate("/"),setDomov("Vidiek"),handleClick2(),setAnimacia(false)

                     }
                    navigate("/"),setDomov("Pre dvoch"),handleClick(),setAnimacia(false)}}
                  >Pre dvoch</p>
                  {/* <p className='textsposokfooter'
                    onClick = {() => {navigate("/"),setDomov(" Prémiové"),setAnimacia(false)}}
                  >Prémiové</p>
                  <p className='textsposokfooter'>Mestské</p> */}
                
                
                </div>
                </div>
              </div>

               <div className='tabulka2'>
                <span style={text}>Podpora</span>
                <div className='odkazisaem'>
                  <div className='odkazisaem'>
                  <p className='textsposokfooter'

                    onClick = {() => {
                         if (mobilcek) {
                          handleClick2(),  navigate("/Centrum"),setAnimacia(false)
                         }

                      navigate("/Centrum"),setAnimacia(false)}}
                  >Centrum pomoci</p>
                  <p className='textsposokfooter'
                  onClick = {() => {


                      if (mobilcek) {
                    handleClick2(),navigate("/Centrum"),setAnimacia(false)
                         }


                    navigate("/Centrum"),setAnimacia(false)}}
                  >Pomoc – problém s bezpečnosťou</p>


                  {/* <p className='textsposokfooter'
                  onClick = {() => {navigate("/"),setDomov("Pre dvoch"),setAnimacia(false)}}
                  >Cestovné poistenie</p>
                  <p className='textsposokfooter'
                    onClick = {() => {navigate("/"),setDomov(" Prémiové"),setAnimacia(false)}}
                  >Zákaz diskriminácie</p>
                  <p className='textsposokfooter'>Nahlásiť problém so štvrťou</p> */}
                
                
                </div>
                </div>
              </div>
          

              
            </div>

            

           <div  className='celkonwesletter'>
            <p style={text}>Prihlás sa na odber noviniek</p>
            <span className='textsposokfooter2'>Získaj darček a prvý pohľad na špeciálne ponuky a nové apartmány. Žiadny spam, len inšpiráciu na tvoje cesty.</span>

           <form 
            onSubmit={(e) => {
              e.preventDefault();
              alert("Ďakujeme za prihlásenie!"); // tu bude tvoja logika
            }}
        className='kokonbtiaeuvna'
          >
            <input 
              type="email" 
              className='inputeekcekc'
              placeholder="Zadaj svoj e-mail" 
              required
            style={{ 
            padding: '10px',
            borderRadius: 'var(--border-radius-maly)', 
            border: '1px solid #ccc', 
            width: "200px", 
            height: "40px",
            outline: 'none',        // vypne modrý focus outline
            boxShadow: 'none'       // vypne akýkoľvek shadow pri focus
          }}
    />
    <button 
      type="submit" 
      className='buttonkorinvian'

    >
      Prihlásiť sa
    </button>
  </form>
           </div>
          </div>

         
       

        </div>
       <div style={{padding:"3px 0px"}}>
      <Linka></Linka>
      </div>
        <div className='spodok'>
          <div>
          <div class="logo textlaky kok">
            <div style={{display:"flex",gap:"10px",flexDirection:"row"}}>

              <span style={{
                fontSize:"var(--font-size-base)",
                whiteSpace:"nowrap"
              }}>© 2025</span> 

              <span style={{
                fontSize:"var(--font-size-base)",
                color:"var(--farba-main)",
                fontWeight:700
              }}>LOGO</span> 
            </div>

            <span
            onMouseEnter={() => setHover(10)}
            onMouseLeave={() => setHover(null)}
               onClick = {() => {navigate("/Centrum")}}
            style={{
                 fontSize:"var(--font-size-base2)",
              cursor:"pointer",
              transition:"var(--transition)",
              color:hover === 10 ? "var(--farba-cierna)" : "var(--farba-sivaText)"
            }}
            >Súkromie</span>

             <span
    onClick = {() => {navigate("/Centrum")}}
             onMouseEnter={() => setHover(11)}
            onMouseLeave={() => setHover(null)}
            style={{
              cursor:"pointer",
               fontSize:"var(--font-size-base2)",
              transition:"var(--transition)",
              color:hover === 11 ? "var(--farba-cierna)" : "var(--farba-sivaText)"
            }}
             >Podmienky</span>
             
          </div>

{koko &&   <div
          style={{display:"flex" ,gap:"15px"}}
          > <span className='textsposokfooter'>Leo.fudaly@gamil.com</span> <span className='textsposokfooter'>+421 908 836 584</span>
         </div>}
           

         </div>
          <div  className = "duruhastaranokoko">
        <Ukazovatelko
        onClick = {() => openInstagram()}
            onMouseEnter={() => setHover(1)}
            onMouseLeave={() => setHover(null)}
            style={{
              backgroundColor: hover === 1 ? "var(--farba-biela)" : "var(--farba-main2)"
            }}
          >
            <i style={farba} className='bx bxl-instagram'></i>
          </Ukazovatelko>

          <Ukazovatelko
                 onClick = {() => openInstagram()}
            onMouseEnter={() => setHover(2)}
            onMouseLeave={() => setHover(null)}
            style={{
              backgroundColor: hover === 2 ? "var(--farba-biela)" : "var(--farba-main2)"
            }}
          >
            <i style={farba} className='bx bxl-twitter'></i>
          </Ukazovatelko>

          <Ukazovatelko
                 onClick = {() => openInstagram()}
            onMouseEnter={() => setHover(3)}
            onMouseLeave={() => setHover(null)}
            style={{
              backgroundColor: hover === 3 ? "var(--farba-biela)" : "var(--farba-main2)"
            }}
          >
            <i style={farba} className='bx bxl-facebook'></i>
          </Ukazovatelko>

          <Ukazovatelko
                 onClick = {() => openInstagram()}
            onMouseEnter={() => setHover(4)}
            onMouseLeave={() => setHover(null)}
            style={{
              backgroundColor: hover === 4 ? "var(--farba-biela)" : "var(--farba-main2)"
            }}
          >
            <i style={farba} className='bx bxl-pinterest'></i>
          </Ukazovatelko>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
