import './rezervacie.css'

import React, { useState, useEffect, useRef,useContext } from 'react';
import Templatepage from '../tempaltepage/templatepage'
import { useLocation } from 'react-router-dom';
import { GlobalContext } from '../../naviac/reactcontext/reactcontext';
import Card from '../../naviac/portalpop/portalpop';
import Nakup from '../../naviac/nakup/nakup'
import Nakup2 from '../../naviac/nakup2/nakup2'

import { MyContext } from '../../naviac/providertelefon/providertelefon'
import Koneec from '../../naviac/koneccc/koneccc'
import Spodokdetail from '../../naviac/spodokdetail/spodokdetail'
import Samostatnacast from './samostatnacast/samostatnacast'
import Formularovacast from './formularovacast/formularovacast'
import Oknocosavzsuva from '../../naviac/oknocosavzsuva/oknocosavzsuva'

import { useMediaQuery } from "react-responsive";
import Druhykonnec from '../../naviac/dryhukonnec/druhykonnec'

import Linka from '../../naviac/linka/linka';
import { useNavigate } from 'react-router-dom';

import Footer from '../footer/footer'
const Rezervacie = () => {
const { presun,setPresun,cena,setCena,kvalita,setKvalita,prize,setPrize,zobrazovanie,setZobrazovanie,otvrenie,setOtvorenie,automatika,setKontrolaText,rozdiel,setRozdiel ,ano,setAno} = useContext(GlobalContext); 

    const { suborOpen,setSuborOpen,obsahOpen,setObsahOpen,subor,setSubor,nazovSuboru,setNazovSuboru,unikattne,setUnikatne,meno,dotadok,setDotadok,otazka,setOtazka,formData, setFormData,otvorenieposldenho,setOtvorenieposldenho,vypisovaniechyby,setVypisovaniechyby} = useContext(MyContext);
    const location = useLocation();
    const navigate = useNavigate();
    


const navigoavanie = () =>
     setOtvorenieposldenho(true)


const referencia = useRef(null)

 const chodDomov = () => {
    navigate("/");
  };



 const isMobile = useMediaQuery({ maxWidth: 1200 });
  const isDesktop = useMediaQuery({ minWidth: 1201 });

  const doplnky = useMediaQuery({ maxWidth: 750});
  const doplnok2 = useMediaQuery({ minWidth: 560});
  const doplnok3 = useMediaQuery({ maxWidth: 559});

  const maximu = useMediaQuery({ maxWidth: 360});
  const minmum = useMediaQuery({ minWidth: 361});


    // console.log(presun[0].apartman);
    // console.log(presun);

    useEffect(() => {
      setRozdiel(false)
    },[])

        const[skusam,setSukusam] = useState([])
        const[mozno,setMozno] = useState([])
    // const premenna2 = (id,hodnota) => {
    //   setPresun(prev => prev.map((polozka) => polozka.apartman.id === id ? {...polozka,apartman:{...polozka.apartman,cena:polozka.apartman.cena + hodnota}}
    //   : polozka
    // ))
    // }
    const[interne,setinterne] = useState(null)

// tu pises logiku pre dany 

const kontrolujem = (totokontrolujem) =>  {
  const premenenenapole = Object.entries(totokontrolujem)
    const jeValid = premenenenapole.every(([kluc,hodnota]) => {


    if (kluc === "otazka1" && hodnota === "") {
      automatika()
      setKontrolaText('kontolaformularu')
      setVypisovaniechyby("Chyba pri zadavani MENA")
        // console.log("Hodnota otazka1:", hodnota);
        return false
    } 

    
    if (kluc === "otazka2" && hodnota === "") {
      automatika()
      setKontrolaText('kontolaformularu')
      setVypisovaniechyby("Chyba pri zadavani PRIEZVISKA")
        // console.log("Hodnota otazka1:", hodnota);
        return false
    } 

    // emial     // emial     // emial     // emial     // emial     // emial
    
    if (kluc === "otazka3" && hodnota === "") {
      automatika()
      setKontrolaText('kontolaformularu')
      setVypisovaniechyby("Chyba pri zadavani EMAIL")
        // console.log("Hodnota otazka1:", hodnota);
        return false
    } 
    if (kluc === "otazka3" &&  !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(hodnota)) {
       automatika()
      setKontrolaText('kontolaformularu')
      setVypisovaniechyby("Chyba pri zadavani EMAIL")
      
      
    }
       // emial     // emial     // emial     // emial     // emial


      //  TELEFON  //  TELEFON  //  TELEFON  //  TELEFON  //  TELEFON  //  TELEFON
    if (kluc === "otazka4" && hodnota === "") {
      automatika()
      setKontrolaText('kontolaformularu')
      setVypisovaniechyby("Chyba pri zadavani TEL.ČISLA")
        // console.log("Hodnota otazka1:", hodnota);
        return false
    } 
    if (kluc === "otazka4" && !/^\+?\d{8,15}$/.test(hodnota)) {
      automatika()
      setKontrolaText('kontolaformularu')
      setVypisovaniechyby("Chyba pri zadavani TEL.ČISLA")
        // console.log("Hodnota otazka1:", hodnota);
        return false
    } 
     //  TELEFON  //  TELEFON  //  TELEFON  //  TELEFON  //  TELEFON


    if (kluc === "otazka5" && hodnota === "") {
      automatika()
      setKontrolaText('kontolaformularu')
      setVypisovaniechyby("Chyba pri zadavani ADRESA")
        // console.log("Hodnota otazka1:", hodnota);
        return false
    } 
    
    // KRAJINA     // KRAJINA     // KRAJINA     // KRAJINA    // KRAJINA     // KRAJINA
    if (kluc === "otazka6" && hodnota === "") {
      automatika()
      setKontrolaText('kontolaformularu')
      setVypisovaniechyby("Chyba pri zadavani KRAJINA")
        // console.log("Hodnota otazka1:", hodnota);
        return false
    } 
    // KRAJINA     // KRAJINA     // KRAJINA     // KRAJINA    // KRAJINA     // KRAJINA


// DATUM // DATUM // DATUM// DATUM// DATUM// DATUM// DATUM// DATUM// DATUM
        if (kluc === "otazka7" && hodnota === "") {
      automatika()
      setKontrolaText('kontolaformularu')
      setVypisovaniechyby("Chyba pri zadavani DATUM NARODENIA")
        // console.log("Hodnota otazka1:", hodnota);
        return false
    } 
        if (kluc === "otazka7" && !/^[^\/]+ \/ [^\/]+ \/ [^\/]+$/.test(hodnota)) {
      automatika()
      setKontrolaText('kontolaformularu')
      setVypisovaniechyby("Chyba pri zadavani DATUM NARODENIA")
        // console.log("Hodnota otazka1:", hodnota);
        return false
    } 
// DATUM // DATUM // DATUM// DATUM// DATUM// DATUM// DATUM// DATUM// DATUM

        if (kluc === "otazka8" && hodnota === "") {
      automatika()
      setKontrolaText('kontolaformularu')
      setVypisovaniechyby("Chyba pri zadavani MESTO")
        // console.log("Hodnota otazka1:", hodnota);
        return false
    } 


// PSC.    // PSC    // PSC    // PSC   // PSC
        if (kluc === "otazka9" && hodnota === "") {
      automatika()
      setKontrolaText('kontolaformularu')
      setVypisovaniechyby("Chyba pri zadavani PSC")
        // console.log("Hodnota otazka1:", hodnota);
        return false
    } 
        if (kluc === "otazka9" && !/^\d{3}\s?\d{2}$/.test(hodnota)) {
      automatika()
      setKontrolaText('kontolaformularu')
      setVypisovaniechyby("Chyba pri zadavani PSC")
        // console.log("Hodnota otazka1:", hodnota);
        return false
    } 
// PSC.    // PSC    // PSC    // PSC   // PSC
        if (kluc === "otazka10" && hodnota === "") {
      automatika()
      setKontrolaText('kontolaformularu')
      setVypisovaniechyby("Chyba pri zadavani KRAJ")
        // console.log("Hodnota otazka1:", hodnota);
        return false
    } 
        if (kluc === "otazka11" && hodnota === "") {
      automatika()
      setKontrolaText('kontolaformularu')
      setVypisovaniechyby("Chyba pri zadavani PLATBA")
        // console.log("Hodnota otazka1:", hodnota);
        return false
    } 
    
 

 
    

return true

  }
    

  )

    if (jeValid) {
    console.log("ano");
    navigoavanie()
  }

  return jeValid;

}



    











      // console.log(presun[0]);
      console.log(kvalita); 

      const navara = () => setFormData({
  otazka1: "",
  otazka2: "",
  otazka3: "",
  otazka4: "",
  otazka5: "",
  otazka6: "",
  otazka7: "",
  otazka8: "",
  otazka9: "",
  otazka10: "",
  otazka11: "",
  otazka100: "",
});


    const plusDOSLELI = (id,hodnota) => {
      setPresun(prev => prev.map((polozka) => polozka.apartman.id === id ? {...polozka,pocitam:polozka.pocitam + hodnota}: polozka))
      setPresun(prev => prev.map((polozka) => polozka.apartman.id === id ? {...polozka,dospeli:polozka.dospeli + 1}: polozka))
      setPresun(prev => prev.map((polozka) => polozka.apartman.id === id ? {...polozka,hostia:polozka.hostia + 1}: polozka))

      console.log("plu");
      
    } 
    const plusDETI = (id,hodnota) => {
       setPresun(prev => prev.map((polozka) => polozka.apartman.id === id ? {...polozka,pocitam:polozka.pocitam + hodnota}: polozka))
         setPresun(prev => prev.map((polozka) => polozka.apartman.id === id ? {...polozka,deti:polozka.deti + 1}: polozka))
      setPresun(prev => prev.map((polozka) => polozka.apartman.id === id ? {...polozka,hostia:polozka.hostia + 1}: polozka))
    }

  
    const minusDOSPELI = (id,hodnota) => {
      setPresun(prev => prev.map((polozka) =>  polozka.apartman.id === id ? {...polozka,pocitam:polozka.pocitam - hodnota}: polozka))
       setPresun(prev => prev.map((polozka) => polozka.apartman.id === id ? {...polozka,dospeli:polozka.dospeli - 1}: polozka))
       setPresun(prev => prev.map((polozka) => polozka.apartman.id === id ? {...polozka,hostia:polozka.hostia - 1}: polozka))
    }
    
  
    const minusDETI = (id,hodnota) => {
      setPresun(prev => prev.map((polozka) => polozka.apartman.id === id ? {...polozka,pocitam:polozka.pocitam - hodnota}: polozka))
         setPresun(prev => prev.map((polozka) => polozka.apartman.id === id ? {...polozka,deti:polozka.deti - 1}: polozka))
      setPresun(prev => prev.map((polozka) => polozka.apartman.id === id ? {...polozka,hostia:polozka.hostia - 1}: polozka))
    }
    
    const plusBATOLCE = (id,hodnota) => {
       setPresun(prev => prev.map((polozka) => polozka.apartman.id === id ? {...polozka,pocitam:polozka.pocitam + hodnota}: polozka))
         setPresun(prev => prev.map((polozka) => polozka.apartman.id === id ? {...polozka,batolata:polozka.batolata + 1}: polozka))
      setPresun(prev => prev.map((polozka) => polozka.apartman.id === id ? {...polozka,hostia:polozka.hostia + 1}: polozka))
    }

    
  
    const minusBATOLCE = (id,hodnota) => {
      setPresun(prev => prev.map((polozka) => polozka.apartman.id === id ? {...polozka,pocitam:polozka.pocitam - hodnota}: polozka))
         setPresun(prev => prev.map((polozka) => polozka.apartman.id === id ? {...polozka,batolata:polozka.batolata - 1}: polozka))
      setPresun(prev => prev.map((polozka) => polozka.apartman.id === id ? {...polozka,hostia:polozka.hostia - 1}: polozka))
    }
    
 const FORMULAR = () => {
  setObsahOpen("formular")
  setSuborOpen(true)
 }


  const skrol = useRef(null)
  const premenna = () => {
 skrol.current.scrollIntoView({ behavior: 'smooth' });
  }


  const[lenprechod,setLenprechod] = useState()

    console.log(lenprechod);

 const zatvorenie = () => {setSuborOpen(false),setObsahOpen("")}

// cast kde mam okno ci je ok vsetko

        const existuje = (id) => {
            setSuborOpen(true)
        setObsahOpen("otazka")

      
          const odstarenei = () => {
            zatvorenie()
      setPresun(prev => prev.filter((polozka) => polozka.apartman.id !==  id))
        }

 
  setOtazka(
  <Samostatnacast 
  id = {id}
    setLenprechod = {setLenprechod}
  volam = {() =>odstarenei()}
  ></Samostatnacast>)

 }

   const function2 = (jeden) => {
    const debile = kvalita.some(item => item.apartman.id === jeden )

    if (debile) {
      console.log("ano");
      
      
    }
    else (
      console.log("nie")
      
    )
 }
// 


  

console.log(presun);


    // const handleClick2 = (parameter) => {

    //     navigate(`/Profil/${parameter}`);
    // }



    const kontolamala = (data) => {
      isFormValid(formData)

      if (valid) {
        console.log("vsetkovyplnene");
        return null
      }
      else{
        console.log("neiecle");
        
      }
    }

//     useEffect(() => {
//   const html = document.documentElement;
//   const body = document.body;

//   const prevHtmlOverflow = html.style.overflow;
//   const prevBodyOverflow = body.style.overflow;

//   html.style.overflow = "hidden";
//   body.style.overflow = "hidden";

//   return () => {
//     html.style.overflow = prevHtmlOverflow;
//     body.style.overflow = prevBodyOverflow;
//   };
// }, []);


const klik = () => navigate(`/Pokladna`);
const funkce = () => {
  const pocet = kvalita.length


   


    if (pocet=== 0 ) {

    automatika()
    setKontrolaText("vypln")
    console.log("Nula")
  }
  
  else if (doplnky) {
     console.log("vic");
    // setOtvorenie(true)
    setAno(false)
    klik()
  }


  else{
    console.log("vic");
    setOtvorenie(true)
    setAno(false)
    // klik()
    
  }
}


  return (
    <Templatepage hedericek = {{ display: "none" }}>

      <div className='celokutokimjn'>

        <div className='obashutujekonecnce'>

{doplnky &&     
<div className='textCastmain900' >
          <div>
            <span className='TEXTICEKNEAOVICEK909' >
              {minmum && "Zoznam vašich rezervácií "}
              {maximu && "Zoznam rezervácií "}
              
              </span>
            <p className='textpodhlavnuym909'> 
  
               {minmum && "Tu nájdete prehľad všetkých svojich rezervácií"}
              {maximu && "Tu nájdete prehľad rezervácií"}
              </p>
            </div>
         
        </div>}

            
          <div className='wrappericekoko'>
           


      <div className="flex-border-box">
        
            <div className='tusazbiera'>


   


  
            {/* {kvalita?.length > 0 && zobrazovanie === "nah2la3d"  && 
                                    <Formularovacast
                                    onClick = {() => {setZobrazovanie(""),
                                      navara()}}
                                    onClick2 = {() => {
                                      kontrolujem(formData)

                                      

                                    }}
                                    
                                    ></Formularovacast>
                                
                } */}

                  
             
             {/* // const klik = () => ); */}

 
      <div className='tujetoceellelel' ref={referencia}>

          

                {/* tswithc na cisto teelfon */}

                   {doplnok3 && 
                 presun?.map((item, index) => (


                  <Nakup2 key={index}



                    prichod = {item.prichod}
                  odchod = {item.odchod}
                  onClick54 = {() => navigate(`/Detail/${item.apartman.id}`)}

                  mozno = {mozno}
              
                  datutjem = {item}
                  hlas={item.apartman.id}


                  pridanie={() => {
                        const existuje = kvalita.some(el => el.apartman.id === item.apartman.id);

                        if (!existuje) {
                          setKvalita(prev => [item, ...prev]); 
                          setPrize(prev => prev + item.prepocet); 
                        } else {
                          console.log("Item už existuje");
                        }
                      }}
                    zdielamelen = {() => FORMULAR()}
                  
                    
                                     
                  odsranenei = {() =>  existuje(item.apartman.id)}
                   penezi = {item.prepocet}
                      pocetnoci = {item.pocetzekolko}
                  //  pocetnoci = {item.pocetzekolko}
                 pripocotamvamDOSPELI={() => plusDOSLELI(item.apartman.id,5)}
                 odpocitavamDOSPELE = {() => minusDOSPELI(item.apartman.id,5)}

                 odpocitavamDETI = {() => minusDETI(item.apartman.id,5)}
                pripocitavamDETI = {() => plusDETI(item.apartman.id,5)}

                odpocitavamBATOLATA = {() => minusBATOLCE(item.apartman.id,5)}
                pripocitavamBATOLATA = {() => plusBATOLCE(item.apartman.id,5)}
                hostia = {item.hostia}
     
                    name={item?.apartman.name}
                  fotky={item?.apartman.fotky}
                  hodnotenie={item?.apartman.hodnotenie}
                  location = {item?.apartman.location}


                  menoDALSI = {item?.clovek.meno}

                  priezviskomenoDALSI = {item?.clovek.priezvisko}
                  fotkamenoDALSI = {item?.clovek.fotka}
                  popisekmenoDALSI ={item?.clovek.aktivny}

                  nazovnazov = {item?.apartman.name}

                    jeden = {item.apartman.krajina}
                    dva = {item.apartman.kraj}
                    tri = {item.apartman.location}
                  
                  >
                    
                
                  </Nakup2>
                ))}
                
           
                {doplnok2 && 
                 presun?.map((item, index) => (


                  <Nakup key={index}

                  prichod = {item.prichod}
                  odchod = {item.odchod}

                  mozno = {mozno}
                  datutjem = {item}
                  hlas={item.apartman.id}
                  onClick = {() => navigate(`/Detail/${item.apartman.id}`)}
                  // onClick54 = {() => )}


                  pridanie={() => {
                        const existuje = kvalita.some(el => el.apartman.id === item.apartman.id);

                        if (!existuje) {
                          setKvalita(prev => [item, ...prev]); 
                          setPrize(prev => prev + item.prepocet); 
                        } else {
                          console.log("Item už existuje");
                        }
                      }}
                    zdielamelen = {() => FORMULAR()}
                  
                    
                                     
                  odsranenei = {() =>  existuje(item.apartman.id)}
                  penezi = {item.prepocet}
                  pocetnoci = {item.pocetzekolko}
               
                 pripocotamvamDOSPELI={() => plusDOSLELI(item.apartman.id,5)}
                 odpocitavamDOSPELE = {() => minusDOSPELI(item.apartman.id,5)}

                 odpocitavamDETI = {() => minusDETI(item.apartman.id,5)}
                pripocitavamDETI = {() => plusDETI(item.apartman.id,5)}

                odpocitavamBATOLATA = {() => minusBATOLCE(item.apartman.id,5)}
                pripocitavamBATOLATA = {() => plusBATOLCE(item.apartman.id,5)}
                hostia = {item.hostia}
     
                    name={item?.apartman.name}
                  fotky={item?.apartman.fotky}
                  hodnotenie={item?.apartman.hodnotenie}
                  location = {item?.apartman.location}


                  menoDALSI = {item?.clovek.meno}

                  priezviskomenoDALSI = {item?.clovek.priezvisko}
                  fotkamenoDALSI = {item?.clovek.fotka}
                  popisekmenoDALSI ={item?.clovek.aktivny}

                  nazovnazov = {item?.apartman.name}

                    jeden = {item.apartman.krajina}
                    dva = {item.apartman.kraj}
                    tri = {item.apartman.location}
                  
                  >
                    
                
                  </Nakup>
                ))}
               

              </div>
{/* 
              {doplnky && <Linka></Linka>} */}
              
              {isMobile &&  
              <div className='taktomaleoknoko'>
             
                <div style={{
                  position:"relative",
                  display:"flex",
                  justifyContent:"space-between" ,
       
                  width:"100%",
                  flexDirection:"row"
                  }}>

                   <div className='buttonjetaotakze'
                   onClick={() => chodDomov()}
                    >Pridat polozku</div>
                <div className='buttonjetaotakze' 
                onClick={() => {
                  // if (doplnky) {

                  //     klik()
                  //   console.log("kar");
                  //   return null
                    
                  // }

// console.log("kar");
                  funkce()
                  // klik()
              
                  
                }}>Prejsť k pokladni</div>
                {kvalita?.length > 0 && <div className='malykruzok'>{kvalita.length}</div>}
                
                </div>

                </div>}

              




              {isMobile &&     
              <Oknocosavzsuva
              otvrenie = {otvrenie}
              >
                  <Druhykonnec
                  klikam = {() => {setOtvorenie(false) ,setAno(true)}}
             sharekliknutie = {() => FORMULAR()}
            //  onClick = {}

             ></Druhykonnec>
                
                </Oknocosavzsuva>}

            

              
         
             

            


               
              


            </div>  

            
      </div>


{isDesktop &&  <div className="tusahybeko">
            

             <Koneec
             anooooo = {() =>kontrolujem(formData) }
             sharekliknutie = {() => FORMULAR()}

             ></Koneec>
            </div>}
     
          </div>
       
        </div>

      </div>
   
      {/* <Footer></Footer> */}
    </Templatepage>
  )
}

export default Rezervacie
