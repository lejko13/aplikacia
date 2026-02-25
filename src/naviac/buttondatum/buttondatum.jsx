import './buttondatum.css'
import React, { useState, useRef,useContext,useEffect } from 'react';
import { AnimatePresence, color, motion } from 'framer-motion'
import Texticek from '../../naviac/texticek/texticek'


import { GlobalContext } from '../../naviac/reactcontext/reactcontext'

import Linka from '../linka/linka';
import Datumdvojka from '../datumdvojka/datumdvojka'
export const Buttondatum = ({setPocetzekolko,pocitam,props,setUkladanie1,setUkladanie2,setPrichod,setOdchod,setPrepocet}) => {


      const { pocetOblubene, setPocetOblubene, filter, setFilter,owerlap,seTeraz,teraz ,popokno,setPopokno,
         lajknute,setLajknute,lajkujem,texdo,setTextdo,kontext,setKontext,oblubene,setOblubene,mala,setMala,
         
          dene,setDene,mesiace,setMesiace,roky,setRoky,automatika,setKontrolaText,
          prvydatum,setPrvydatum,druhydatum,setDruhydatum,rozdiel,setRozdiel

        } = useContext(GlobalContext);


  const [open, setOpen] = useState(false)
  const[open2,setOpen2] = useState(false)
 
  const referencia = useRef(null)
 const referencia3 = useRef(null)

  const [otocenie,setOtocenie] = useState(false)


const[renderovaneokno,setRenderovaneokno] = useState("prveoknok")
  

  const referencia2 = useRef(null)

 useEffect(() => {
    const handleClickOutside = (e) => {
      // ak klik NIE je vo vnútri ani referencia ani referencia2 → zavri panel
      if (
        referencia.current &&
        referencia2.current &&
        referencia3.current && 
        !referencia.current.contains(e.target) &&
        !referencia2.current.contains(e.target) &&
        !referencia3.current.contains(e.target)
        
      ) {
        setOpen(false)
        setOpen2(false)
        setOtocenie(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])



  

      // const pocetdni = new Date(roky,mesiace + 1,dene).getDate();
 
      // const prvyden = new Date(roky,mesiace,1).getDay();

      // const offset = prvyden === 0 ? 6 : prvyden - 1;

      // const dni = Array.from({ length: pocetdni }, (_, i) => i + 1);
      
      // const prazdnePolicka = Array.from({ length: offset }, () => null);

      // const kalendar = [...prazdnePolicka, ...dni];


      const pocetdni = new Date(roky, mesiace + 1, 0).getDate(); // posledný deň mesiaca
const prvyden = new Date(roky, mesiace, 1).getDay();
const offset = prvyden === 0 ? 6 : prvyden - 1;

const dni = Array.from({ length: pocetdni }, (_, i) => i + 1);
const prazdnePolicka = Array.from({ length: offset }, () => null);

let kalendar = [...prazdnePolicka, ...dni];

// doplni prázdne bunky na koniec, aby počet buniek bol násobok 7
while (kalendar.length % 7 !== 0) {
  kalendar.push(null);
}


      // const polemojevlastne = Array.from()
// console.log(pocetdni);
// console.log(prvyden);



// hover a farba hornych btn
const[tusudni,setTusudni] = useState(1)
const[hoverrkoko,setHoverrkoko] = useState(1)
// hover a farba hornych btn

// hovermesiace len a farba
const[meniseee,setMeniseee] = useState(1)
const[hovermeniseee,sethovermeniseee] = useState(1)
// const[hoverrkoko,setHoverrkoko] = useState(1)

const[farbucka,setFarbucka] = useState(2026)

const[farbahoverkoko,setFarbahoverkoko] = useState(2026)
// hovermesiace len a farba

const[tootcidles,setTootcidles] = useState(1)
const[hoverkooo,setHovoerkoko] = useState(1)

// const[farbahoverkoko,setFarbahoverkoko] = useState(2026)


// hoverdni len a farba

// hoverdni len a farba


// hoverroky len a farba

// hoverroky len a farba

const rokooooy = [];
for (let rok = 2026; rok <= 2030; rok++) {
  rokooooy.push(rok);
}



const mesiaceObjekty = [
  { cislo: 0, nazov: "Január" ,ciselko: 1},
  { cislo: 1, nazov: "Február",ciselko: 2 },
  { cislo: 2, nazov: "Marec" ,ciselko: 3},
  { cislo: 3, nazov: "Apríl",ciselko: 4 },
  { cislo: 4, nazov: "Máj",ciselko: 5 },
  { cislo: 5, nazov: "Jún",ciselko: 6 },
  { cislo: 6, nazov: "Júl",ciselko: 7 },
  { cislo: 7, nazov: "August",ciselko: 8 },
  { cislo: 8, nazov: "September",ciselko: 9 },
  { cislo: 9, nazov: "Október",ciselko: 10 },
  { cislo: 10, nazov: "November",ciselko: 11 },
  { cislo: 11, nazov: "December",ciselko: 12 }
];
// Teraz môžeš mapovať

console.log(rokooooy);
const alelele = "DD.MM.YYYY"


const [primarneM, setPrimarneM] = useState(2);
const [primarneR, setPrimarneR] = useState(2026);
const [primarneD, setPrimarneD] = useState(1);

const[mesiacdoplnok,setMesiacdoplnok] = useState(1)


const[lenzemna,setLeznamn] = useState(false)

const[zistenie,setZistenie] = useState(false)


// primarneD
// primarneR

// console.log();




  const date = new Date(primarneR, mesiacdoplnok, primarneD +2);
// tojeuz druhy co sa zobrazuje kalednar aj logika vseko proste .....

const den333 = date.getDate();       // deň v mesiaci
const mesiac = date.getMonth();   // 0–11
const rok = date.getFullYear()


const[novyuplneDEN,setNovyuplneDEN] = useState(den333)

// toto je zozbrazenie len nanic ine to niene
const[novyuplneMESIAC,setNovyuplneMESIAC] = useState(mesiac +1)
// toto je zozbrazenie len nanic ine to niene

// mesiac na fungovanie
const[fungujucimesiac,setFungujucimesiac] = useState(mesiac)
// mesiac na fungovanie

const[novyuplneROK,setNovyuplneROK] = useState(rok)
// const novykalendar = 


useEffect(() => {
  setNovyuplneDEN(date.getDate());
  setNovyuplneMESIAC(date.getMonth() + 1);
  setNovyuplneROK(date.getFullYear());
  setFungujucimesiac(mesiac)
}, [date]);



const funkcia = () =>{ 

  console.log(novyuplneDEN)
  console.log(den333)
  console.log(mesiac)
  console.log(rok)

  console.log(novyuplneMESIAC);

  console.log(fungujucimesiac);
  
  
}
// tojeuz druhy co sa zobrazuje kalednar aj logika vseko proste .....
 
const[hotovokonec,setHotovokonec] = useState(false)

// const kaldarikdruha = new Date(novyuplneROK,mesiac + 1,0).getDate()
// const prvydenvtyzdni = new Date(novyuplneROK, mesiac, 1).getDay();

// const offset2 = prvydenvtyzdni === 0 ? 6 : prvydenvtyzdni - 1;

//       const dni2 = Array.from({ length: kaldarikdruha }, (_, i) => i + 1);
      
//       const prazdnePolicka2 = Array.from({ length: offset2 }, () => null);


//       const kalendar2 = [...prazdnePolicka2, ...dni2];

// počet dní v mesiaci
const kaldarikdruha = new Date(novyuplneROK, mesiac + 1, 0).getDate();

// prvý deň mesiaca (0 = nedeľa, 1 = pondelok, ...)
const prvydenvtyzdni = new Date(novyuplneROK, mesiac, 1).getDay();

// offset, aby sme začali pondelkom
const offset2 = prvydenvtyzdni === 0 ? 6 : prvydenvtyzdni - 1;

// pole s dňami mesiaca
const dni2 = Array.from({ length: kaldarikdruha }, (_, i) => i + 1);

// prázdne bunky pred prvým dňom
const prazdnePolicka2 = Array.from({ length: offset2 }, () => null);

// spojenie prázdnych polí a dní
let kalendar2 = [...prazdnePolicka2, ...dni2];

// doplni prázdne bunky na konci, aby počet buniek bol násobok 7
while (kalendar2.length % 7 !== 0) {
  kalendar2.push(null);
}



// console.log(mesiac);




const noveuprevane = mesiaceObjekty.filter(item => item.cislo >= fungujucimesiac)
const rokynoveeee = rokooooy.filter(item => item >= rok)
console.log(noveuprevane);
console.log(rokynoveeee);



// klikohoretlacidkakomopnedva
const[kliknutiedva,setKliknutiedva] = useState(1)
const[kilknudtiedvhover,setKilknudtiedvhover] = useState(1)

// rok

const[druhykomplet,setDruhkykomplte] = useState("den")




// hover a kliknutei DNI2
// const[klikanmmhover,setKlikamhoverr] = useState(1)
const[totonaklik,setTotonakli] = useState(1)
const[totonaklikteraz,setTotonaklikteraz] = useState(1)
// hover a kliknutei MESIAC2

const[hoverlenrok,setHoverlenrok] = useState(rok)
const[hoverlenrokeeee,setHoverlenrokeeee] = useState(rok)

// hover a kliknutei ROK2


const alelele2 = "DD.MM.YYYY"


// const[zobrazvanieeodsranenei,setZobrazvanieeodsranenei]


const odstranenieeewew = () => {
  setLeznamn(false)
 setPrimarneM(2);
setPrimarneR(2026);
setPrimarneD(1);

setNovyuplneDEN(den333)
  setNovyuplneMESIAC(mesiac +1)


  setZistenie(false)
  setRenderovaneokno("prveoknok")
  setTusudni(1)
  setHotovokonec(false)
  setDruhkykomplte("den")
  

  setPrepocet(null)

 setPocetzekolko(2)

  // setDruhkykomplte("den")
}



const[alternativa,setAlternativa] = useState(false)
// uplne novy kalsndar dalsei posedny uz
const[rokoo,setRokoo] = useState(2026)
const[mesiacc,setMesiacc] = useState(0)

// počet dní v mesiaci
const poslednykalndar = new Date(rokoo, mesiacc + 1, 0).getDate();

// prvý deň mesiaca (0 = nedeľa, 1 = pondelok, ...)
const dnik = new Date(rokoo, mesiacc, 1).getDay();

console.log(poslednykalndar);
console.log(dnik);

// offset na začiatok týždňa (pondelok)
const centrovanie = dnik === 0 ? 6 : dnik - 1;

// pole s dňami mesiaca
const dnimapovanie = Array.from({ length: poslednykalndar }, (_, i) => i + 1);

// prázdne bunky pred prvým dňom
const pradznednilentak = Array.from({ length: centrovanie }, () => null);

// spojenie prázdnych polí a dní
let kalendaropsledny = [...pradznednilentak, ...dnimapovanie];

// doplnenie prázdnych buniek na koniec, aby počet buniek bol násobok 7
while (kalendaropsledny.length % 7 !== 0) {
  kalendaropsledny.push(null);
}



// len na zobrazovanie toho spravneho 
const[klikammm,setKlikammm] = useState(0)

const[pomocny,setPomocny] = useState(0)
// renderroku

const[noveroky,setNoveroky] = useState(false)



const rokpovodny = () => {
  setRokoo(novyuplneROK)
  setMesiacc(novyuplneMESIAC -1)

}

const rokooooy2 = rokooooy.filter(item => item > primarneR)

// const rokooooy2 = [];
// for (let rok = 2027; rok <= 2030; rok++) {
//   rokooooy2.push(rok);
// }




const ulozenieprvehp = () => {
  const datum1 = `${primarneR}-${String(primarneM).padStart(2,"0")}-${String(primarneD).padStart(2,"0")}`
  setPrvydatum(datum1)
}
const ulozeniee = () => {


const datum1 = `${primarneR}-${String(primarneM).padStart(2,"0")}-${String(primarneD).padStart(2,"0")}`
const datum2 = `${novyuplneROK}-${String(novyuplneMESIAC).padStart(2,"0")}-${String(novyuplneDEN).padStart(2,"0")}`



// setPrichod(datum1)

const kalsika = `${primarneD}.${primarneM}.${primarneR}`;
const kalsika2 = `${novyuplneDEN}.${novyuplneMESIAC}.${novyuplneROK}`;

setPrichod(kalsika)
setOdchod(kalsika2)
// setPrichod,setOdchod

console.log(primarneD, primarneM ,primarneR) // 2026-02-03
console.log(datum2) // 2026-02-19

// console.log(funkcianaukaldanie1);
// console.log(funkcianaukaldanie2);


const rozdielDni = Math.floor(
  (new Date(datum2) - new Date(datum1)) / (1000 * 60 * 60 * 24)
)

console.log("Rozdiel dní:", rozdielDni)  // 16
 
 setRozdiel(true)
const deleniedni = rozdielDni / 2
const vypocetcelkou = deleniedni*pocitam
console.log(vypocetcelkou);

 setPrepocet(vypocetcelkou)

 setPocetzekolko(rozdielDni)


}

// console.log(pocitam);



  return (

    <>

{lenzemna === true &&    <div className='anulovanievsetkoho'
onClick={() => odstranenieeewew()}
><i class='bx bx-x'></i></div>}
 



   <div className='rovnaka900'>
     <div className="Buttondatum" style={{
      backgroundColor:zistenie === true ? "var(  --farba-main)" : "var(--farba-biela)"
    }}>
      <div  ref={referencia2}
      className='tototodrizlceletexanieco'
      onClick={() => {
        if (renderovaneokno === "druheoknoko") {
          setKontrolaText("zvolobchod")
          automatika()
          return
        }
        setOpen(prev => !prev),setLeznamn(true),setOpen2(prev => !prev),setRenderovaneokno("prveoknok")
        }}>
        <Texticek
          hore="Prichod"
          horetextuic = {{color:zistenie ? "white" : "var(--farba-cierna)"}}
          tujelegikadolle = {{color:zistenie ? "white" : "var(--farba-sivaText"}}
          //  dole={`${dene}/${mesiace}/${roky}`}
      dole = {lenzemna ? `${primarneD}.${primarneM}.${primarneR}` : alelele}


        />
        <div className="takzevybertlacidlaaa" 
        
        style={{
          transform:open2 ? 'rotate(180deg)' : 'rotate(0deg)',

          color: zistenie ? "white" : "var(--farba-cierna)"
        }}>

       
          <i className="bx bx-chevron-down"></i>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
          ref={referencia}
             initial={{ opacity: 0, y: 0 }}     
             animate={{ opacity: 1, y: 0 }}       
             exit={{ opacity: 0, y: 0 }}        
            transition={{ duration: 0.2, ease: "easeInOut" }} 
            className="datum-panel"
          >
         
         {renderovaneokno === "prveoknok" && 
            <div className='horeklikackyy'>
               <button className='takzetujebuttonjeden'
              onClick={() => setTusudni(1) }

              onMouseEnter={() => setHoverrkoko(1)}
              onMouseLeave={() => setHoverrkoko(0)}
              style={{
                backgroundColor:hoverrkoko === 1  ? "var(--farba-main)" :  tusudni === 1 ? "var(--farba-main)" : "var(--farba-main2)",
                 color:hoverrkoko === 1  ? "white" :  tusudni === 1 ? "white" : "var(--farba-cierna)",
                  border:hoverrkoko === 1  ? "1px solid var(--farba-main)" :  tusudni === 1 ? "1px solid var(--farba-main)" : "1px solid var(--farba-siva)",
                
              }}

              >Den</button>

              <button className='takzetujebuttonjeden'
              onClick={() => setTusudni(3) }
               onMouseEnter={() => setHoverrkoko(3)}
              onMouseLeave={() => setHoverrkoko(0)}
              style={{
                   backgroundColor:hoverrkoko === 3  ? "var(--farba-main)" :  tusudni === 3 ? "var(--farba-main)" : "var(--farba-main2)",
                 color:hoverrkoko === 3  ? "white" :  tusudni === 3 ? "white" : "var(--farba-cierna)",
                  border:hoverrkoko === 3  ? "1px solid var(--farba-main)" :  tusudni === 3 ? "1px solid var(--farba-main)" : "1px solid var(--farba-siva)",
              }}

              >Mesiac</button>
              <button className='takzetujebuttonjeden'
                onClick={() => setTusudni(2) }
                 onMouseEnter={() => setHoverrkoko(2)}
              onMouseLeave={() => setHoverrkoko(0)}
             style={{
                   backgroundColor:hoverrkoko === 2  ? "var(--farba-main)" :  tusudni === 2 ? "var(--farba-main)" : "var(--farba-main2)",
                 color:hoverrkoko === 2  ? "white" :  tusudni === 2 ? "white" : "var(--farba-cierna)",
                  border:hoverrkoko === 2  ? "1px solid var(--farba-main)" :  tusudni === 2 ? "1px solid var(--farba-main)" : "1px solid var(--farba-siva)",
              }}

              >Rok</button>
             
    
            </div>}
         


         {renderovaneokno === "druheoknoko" && 


            <div className='horeklikackyy222'>

{/* kliknam na den ked je nemenim mesiac   */}
{(alternativa === false && klikammm === 0) &&
    <button className='takzetujebuttonjeden'
              onClick={() => {setDruhkykomplte("den"),setKliknutiedva(1)} }

              onMouseEnter={() => setHoverrkoko(1)}
              onMouseLeave={() => setHoverrkoko(0)}
              style={{
                //  backgroundColor:"green",
                backgroundColor:hoverrkoko === 1  ? "var(--farba-main)" :  kliknutiedva === 1 ? "var(--farba-main)" : "var(--farba-main2)",
                 color:hoverrkoko === 1  ? "white" :  kliknutiedva === 1 ? "white" : "var(--farba-cierna)",
                  border:hoverrkoko === 1  ? "1px solid var(--farba-main)" :  kliknutiedva === 1 ? "1px solid var(--farba-main)" : "1px solid var(--farba-siva)",
                
              }}

              >Den</button>}
{/* kliknam na den ked je nemenim mesiac   */}

{/* kliknam na den ked je nemenim mesiac   */}
{(alternativa === false && klikammm === 1) &&
    <button className='takzetujebuttonjeden'
              onClick={() => { 
               
               setDruhkykomplte("denostatne"),setKliknutiedva(1)

              
              } }

              onMouseEnter={() => setHoverrkoko(1)}
              onMouseLeave={() => setHoverrkoko(0)}
              style={{
                //  backgroundColor:"blue",
                backgroundColor:hoverrkoko === 1  ? "var(--farba-main)" :  kliknutiedva === 1 ? "var(--farba-main)" : "var(--farba-main2)",
                 color:hoverrkoko === 1  ? "white" :  kliknutiedva === 1 ? "white" : "var(--farba-cierna)",
                  border:hoverrkoko === 1  ? "1px solid var(--farba-main)" :  kliknutiedva === 1 ? "1px solid var(--farba-main)" : "1px solid var(--farba-siva)",
                
              }}

              >Den</button>}
{/* kliknam na den ked je nemenim mesiac   */}





{/* totoje den na  zadany rok  */}

{alternativa === false  && 
  <button className='takzetujebuttonjeden'
                  onClick={() => {
                    setDruhkykomplte("mesiac"),setKliknutiedva(3)} }
               onMouseEnter={() => setHoverrkoko(3)}
              onMouseLeave={() => setHoverrkoko(0)}
              style={{
                // backgroundColor:"pink",
                   backgroundColor:hoverrkoko === 3  ? "var(--farba-main)" :  kliknutiedva === 3 ? "var(--farba-main)" : "var(--farba-main2)",
                 color:hoverrkoko === 3  ? "white" :  kliknutiedva === 3 ? "white" : "var(--farba-cierna)",
                  border:hoverrkoko === 3  ? "1px solid var(--farba-main)" :  kliknutiedva === 3 ? "1px solid var(--farba-main)" : "1px solid var(--farba-siva)",
              }}

              >Mesiac</button>}

{/* totoje den na  zadany rok  */}



{alternativa   &&
    <button className='takzetujebuttonjeden'

              onClick={() => {
                 if (pomocny === 1) {
rokpovodny()
setDruhkykomplte("denostatne")
                  console.log("terazpovodnyz minula len iny rok ");
                  return null
                  
                  
                }else 
                
                setDruhkykomplte("denostatne"),setKliknutiedva(1)
              } }

              onMouseEnter={() => setHoverrkoko(1)}
              onMouseLeave={() => setHoverrkoko(0)}
              style={{
                // backgroundColor:"green",
                backgroundColor:hoverrkoko === 1  ? "var(--farba-main)" :  kliknutiedva === 1 ? "var(--farba-main)" : "var(--farba-main2)",
                 color:hoverrkoko === 1  ? "white" :  kliknutiedva === 1 ? "white" : "var(--farba-cierna)",
                  border:hoverrkoko === 1  ? "1px solid var(--farba-main)" :  kliknutiedva === 1 ? "1px solid var(--farba-main)" : "1px solid var(--farba-siva)",
                
              }}

              >Den</button>
}
           
            
{alternativa  &&  
 <button className='takzetujebuttonjeden'
                  onClick={() => {
                    setDruhkykomplte("mesiacesteraz"),setKliknutiedva(3)} }
               onMouseEnter={() => setHoverrkoko(3)}
              onMouseLeave={() => setHoverrkoko(0)}
              style={{
                // backgroundColor:"green",
                   backgroundColor:hoverrkoko === 3  ? "var(--farba-main)" :  kliknutiedva === 3 ? "var(--farba-main)" : "var(--farba-main2)",
                 color:hoverrkoko === 3  ? "white" :  kliknutiedva === 3 ? "white" : "var(--farba-cierna)",
                  border:hoverrkoko === 3  ? "1px solid var(--farba-main)" :  kliknutiedva === 3 ? "1px solid var(--farba-main)" : "1px solid var(--farba-siva)",
              }}

              >Mesiac</button> 




}



<button className='takzetujebuttonjeden'
                     onClick={() => {setDruhkykomplte("rok"),setKliknutiedva(2)}}
                 onMouseEnter={() => setHoverrkoko(2)}
              onMouseLeave={() => setHoverrkoko(0)}

             style={{
                   backgroundColor:hoverrkoko === 2  ? "var(--farba-main)" :  kliknutiedva === 2 ? "var(--farba-main)" : "var(--farba-main2)",
                 color:hoverrkoko === 2  ? "white" :  kliknutiedva === 2 ? "white" : "var(--farba-cierna)",
                  border:hoverrkoko === 2  ? "1px solid var(--farba-main)" :  kliknutiedva === 2 ? "1px solid var(--farba-main)" : "1px solid var(--farba-siva)",
              }}
>Rok</button>
             
    
            </div>
         
         }
         

            <Linka></Linka>


           


{renderovaneokno === "prveoknok" && 
<>
  {tusudni === 1 && 

  
            <>
              <div className='tubudedatummmlenni'>
              <span className='JEDNAIKONNAAAA'>PO</span>
              <span className='JEDNAIKONNAAAA'>UT</span>
              <span className='JEDNAIKONNAAAA'>ST</span>
              <span className='JEDNAIKONNAAAA'>ŠT</span>
              <span className='JEDNAIKONNAAAA'>PI</span>
              <span className='JEDNAIKONNAAAA'>SO</span>
              <span className='JEDNAIKONNAAAA' style={{border:"none"}}>NE</span>

            </div> 
             <Linka></Linka>
             <div className="calendar-grid">
               {kalendar.map((den, i) => (
              <div key={i} className="JEDNAIKONNAAAA2">
                {den !== null 
                  ? <span className="dkkmoomoen"
                  onMouseEnter={() => setHovoerkoko(den)}
                  onMouseLeave={() => setHovoerkoko(null)}
                  style={{
                    backgroundColor: hoverkooo === den ? "var(--farba-main)" :  tootcidles === den ? "var(--farba-main)" : "var(--farba-main2)",
                    color: hoverkooo === den ? "var(--farba-biela)" : tootcidles === den ? "var(--farba-biela)" :"var(--farba-cierna)",
                    border: hoverkooo === den ? "1px solid var(--farba-main)" : tootcidles === den ? "1px solid var(--farba-main)" : "1px solid var(--farba-siva)"
                  }}
                  onClick={() => {setPrimarneD(den),setTootcidles(den)}}

                  >
                    
                           {den}


                    
               
                    </span>  
                  : <span className="prázdne-policko" style={{backgroundColor:"pink"}}></span> 
                }
              </div>
            ))}
              </div>
            
            </>
          

            }

           

            {tusudni === 3 && <div className='scroollmesiaceleen'>
              {mesiaceObjekty.map((item) => 
              <div className='clabtuttonnnelnincvi'
              onMouseEnter={() => sethovermeniseee(item.cislo)}
              onMouseLeave={() => sethovermeniseee(null)}

              style={{
                backgroundColor:hovermeniseee === item.cislo ? " var(--farba-main)" : meniseee === item.cislo ?"var(--farba-main)" : "var(--farba-main2)",
                border:hovermeniseee === item.cislo ? "1px solid var(--farba-main)" : meniseee === item.cislo ?"1px solid var(--farba-main)" : "1px solid var(--farba-siva)",
                color:hovermeniseee === item.cislo ? "var(--farba-biela)" : meniseee === item.cislo ?"var(--farba-biela)" : "var(--farba-cierna)",
              }}
                  onClick={() => {setTusudni(1),setPrimarneM(item.ciselko),setMesiace(item.cislo),setMeniseee(item.cislo),setMesiacdoplnok(item.cislo)}}
              >{item.nazov}</div>
              )}
             

            </div> }





             {tusudni === 2 && <div className='scroollmesiaceleen'>
               {rokooooy.map((item) => 
              <div className='clabtuttonnnelnincvi'
              
              style={{
                backgroundColor:farbahoverkoko === item ? " var(--farba-main)" : farbucka === item ? "var(--farba-main)" : "var(--farba-main2)",
                 border:farbahoverkoko === item ? "1px solid var(--farba-main)" : farbucka === item ? "1px solid var(--farba-main)" : "1px solid var(--farba-siva)",
                color:farbahoverkoko === item ? "var(--farba-biela)" : farbucka === item ? "var(--farba-biela)" : "var(--farba-cierna)"

              }}
              onMouseEnter={() => setFarbahoverkoko(item) }
              onMouseLeave={() => setFarbahoverkoko(null) }
              onClick={() => {setTusudni(1),setPrimarneR(item),setRoky(item),setFarbucka(item),setRokoo(item)}}
              >{item}</div>
              )}
             

            </div> }

</>
}


{renderovaneokno === "druheoknoko" && 
<>


{/* tlacidla */}
{druhykomplet === "den" &&
<>
<div className='tubudedatummmlenni'>
              <span className='JEDNAIKONNAAAA'>PO</span>
              <span className='JEDNAIKONNAAAA'>UT</span>
              <span className='JEDNAIKONNAAAA'>ST</span>
              <span className='JEDNAIKONNAAAA'>ŠT</span>
              <span className='JEDNAIKONNAAAA'>PI</span>
              <span className='JEDNAIKONNAAAA'>SO</span>
              <span className='JEDNAIKONNAAAA' style={{border:"none"}}>NE</span>

            </div> 
               <Linka></Linka>
</>}          
{druhykomplet === "den" &&  <div className="calendar-grid">
                {kalendar2.map((den, i) => (
              <div key={i} className="JEDNAIKONNAAAA2">
                {den !== null  &&  den >= den333
                  ? <span className="dkkmoomoen"
                  onClick={() => setNovyuplneDEN(den)}

                  onMouseEnter={() => setKilknudtiedvhover(den) }
                  onMouseLeave={() => setKilknudtiedvhover(null)}
                  style={{
                   

                     backgroundColor:kilknudtiedvhover === den ? "var(--farba-main)" :  novyuplneDEN === den ? "var(--farba-main)" : "var(--farba-main2)",
                    color: kilknudtiedvhover === den ? "var(--farba-biela)" :  novyuplneDEN === den ? "var(--farba-biela)" :"var(--farba-cierna)",
                    border:kilknudtiedvhover === den ? "1px solid var(--farba-siva)" :  novyuplneDEN === den ? "1px solid var(--farba-main)" : "1px solid var(--farba-siva)"

                  }}
                  // style={{
                  //   backgroundColor:tootcidles === den ? "var(--farba-main)" : "var(--farba-main2)",
                  //   color:tootcidles === den ? "var(--farba-biela)" :"var(--farba-cierna)",
                  //   border:tootcidles === den ? "1px solid var(--farba-main)" : "1px solid var(--farba-siva)"
                  // }}
                  // onClick={() => {setPrimarneD(den),setTootcidles(den)}}

                  >
                    
                           {den}


                    
               
                    </span>  
                  : <span className="prázdne-policko"></span> 
                }
              </div>
            ))}
</div> }
{/* kalendar */}






{/* kompletny */}
{druhykomplet === "denostatne" &&
<>
<div className='tubudedatummmlenni'>
              <span className='JEDNAIKONNAAAA'>PO</span>
              <span className='JEDNAIKONNAAAA'>UT</span>
              <span className='JEDNAIKONNAAAA'>ST</span>
              <span className='JEDNAIKONNAAAA'>ŠT</span>
              <span className='JEDNAIKONNAAAA'>PI</span>
              <span className='JEDNAIKONNAAAA'>SO</span>
              <span className='JEDNAIKONNAAAA' style={{border:"none"}}>NE</span>

            </div> 
               <Linka></Linka>
</>

}

{druhykomplet === "denostatne" &&
<>
 <div className="calendar-grid" style={{backgroundColor:"red"}}>

     {kalendaropsledny.map((den, i) => (
              <div key={i} className="JEDNAIKONNAAAA2">
                {den !== null  
                  ? <span className="dkkmoomoen"
                  onClick={() => setNovyuplneDEN(den)}
                  onMouseEnter={() => setKilknudtiedvhover(den) }
                  onMouseLeave={() => setKilknudtiedvhover(null)}
                  style={{
                   

                     backgroundColor:kilknudtiedvhover === den ? "var(--farba-main)" :  novyuplneDEN === den ? "var(--farba-main)" : "var(--farba-main2)",
                    color: kilknudtiedvhover === den ? "var(--farba-biela)" :  novyuplneDEN === den ? "var(--farba-biela)" :"var(--farba-cierna)",
                    border:kilknudtiedvhover === den ? "1px solid var(--farba-siva)" :  novyuplneDEN === den ? "1px solid var(--farba-main)" : "1px solid var(--farba-siva)"

                  }}
                  

                  >
                    
                           {den}


                    
               
                    </span>  
                  : <span className="prázdne-policko"></span> 
                }
              </div>
            ))}

  {/* {kalendaropsledny.map(item => 
  <div>{item}</div>)} */}
</div> 
</>

}
{/* kompletny */}





{/*toto su mesiace pre aktuany rok*/}
{druhykomplet === "mesiac" &&  
<div className='scroollmesiaceleen' >

  {noveuprevane.map((item) => 

  <div className='clabtuttonnnelnincvi'
  onMouseEnter={() => setTotonaklikteraz(item.cislo)}
  onMouseLeave={() => setTotonaklikteraz(null)}

    onClick={() => {
      if (item.cislo === fungujucimesiac) {
        console.log("totoje ten spravny");
           setNovyuplneMESIAC(item.ciselko),setTotonakli(item.cislo),setDruhkykomplte("den"),setKliknutiedva(1),  setKlikammm(0)
        return null 
      }
      else{
        setDruhkykomplte("denostatne")
     
        setMesiacc(item.cislo)
        setNovyuplneMESIAC(item.ciselko)
        setTotonakli(item.cislo)
        setKlikammm(1)

        
      }

    }}

   // onMouseEnter={() => sethovermeniseee(item.cislo)}
            //   onMouseLeave={() => sethovermeniseee(null)}

              style={{
                backgroundColor:totonaklikteraz === item.cislo ? " var(--farba-main)" : novyuplneMESIAC-1 === item.cislo ?"var(--farba-main)" : "var(--farba-main2)",
                border:totonaklikteraz === item.cislo ? "1px solid var(--farba-main)" : novyuplneMESIAC-1 === item.cislo ?"1px solid var(--farba-main)" : "1px solid var(--farba-siva)",
                color:totonaklikteraz === item.cislo ? "var(--farba-biela)" : novyuplneMESIAC-1 === item.cislo ?"var(--farba-biela)" : "var(--farba-cierna)",
              }}
  >{item.nazov}</div>
  
  )}


              </div>}
{/*toto su mesiace pre aktuany rok*/}      





{druhykomplet === "mesiacesteraz" &&  
<div className='scroollmesiaceleen' >

  {mesiaceObjekty.map((item) => 

  <div className='clabtuttonnnelnincvi'
   onMouseEnter={() => setTotonaklikteraz(item.cislo)}
  onMouseLeave={() => setTotonaklikteraz(null)}
  // setTotonakli = {() => }

    // onClick={() => {setNovyuplneMESIAC(item.ciselko),setTotonakli(item.cislo),setDruhkykomplte("denostatne"),setKliknutiedva(1)}}
    onClick={() => {
      if (item.ciselko < primarneM ) {
        
        console.log("januar");
        setNoveroky(true)
         setDruhkykomplte("denostatne"),setTotonakli(item.cislo),setMesiacc(item.cislo),setNovyuplneMESIAC(item.ciselko),setPomocny(0)
        return null
        
      }
     



         setNoveroky(false),setDruhkykomplte("denostatne"),setTotonakli(item.cislo),setMesiacc(item.cislo),setNovyuplneMESIAC(item.ciselko),setPomocny(0)
    }}
  // setNovyuplneMESIAC(item.ciselko),setTotonakli(item.cislo),setDruhkykomplte("den"),
 

           style={{
                backgroundColor:totonaklikteraz === item.cislo ? " var(--farba-main)" : totonaklik === item.cislo ?"var(--farba-main)" : "var(--farba-main2)",
                border:totonaklikteraz === item.cislo ? "1px solid var(--farba-main)" : totonaklik === item.cislo ?"1px solid var(--farba-main)" : "1px solid var(--farba-siva)",
                color:totonaklikteraz === item.cislo ? "var(--farba-biela)" : totonaklik === item.cislo ?"var(--farba-biela)" : "var(--farba-cierna)",
              }}
  >{item.nazov}</div>
  
  )}


              </div>
               }






             
{druhykomplet === "rok" &&  
<div  className='scroollmesiaceleen' >
  {noveroky === false  && <>
       {rokynoveeee.map((item) => 
            <div className='clabtuttonnnelnincvi'
            onMouseEnter={() => setHoverlenrokeeee(item)}
              onMouseLeave={() => setHoverlenrokeeee(null)}

              style={{
                backgroundColor:hoverlenrokeeee === item ? " var(--farba-main)" : novyuplneROK === item ?"var(--farba-main)" : "var(--farba-main2)",
                border:hoverlenrokeeee === item ? "1px solid var(--farba-main)" : novyuplneROK === item ?"1px solid var(--farba-main)" : "1px solid var(--farba-siva)",
                color:hoverlenrokeeee === item ? "var(--farba-biela)" : novyuplneROK === item ?"var(--farba-biela)" : "var(--farba-cierna)",
              }}

            onClick={() => {
              if (item === rok) {
                // console.log("tenjeden");
                setDruhkykomplte("mesiac")
                setHoverlenrok(item)
                  setNovyuplneROK(item)
                setKliknutiedva(1)
                    setAlternativa(false)
              }
              else{

                console.log("ostatne");
              
                // druhykomplet === "mesiac"
                 setHoverlenrok(item)
                    setKliknutiedva(3)
                setDruhkykomplte("mesiacesteraz")
                setNovyuplneROK(item)
                setAlternativa(true)
                setRokoo(item)

                  setPomocny(1)
                
                // setTotonakli(null)
              }


            }}


            >{item}</div>
            )}
  </>}



  {noveroky === true  && <>
       {rokooooy2.map((item) => 
            <div className='clabtuttonnnelnincvi' 
            onMouseEnter={() => setHoverlenrokeeee(item)}
              onMouseLeave={() => setHoverlenrokeeee(null)}

              style={{
                backgroundColor:hoverlenrokeeee === item ? " var(--farba-main)" : hoverlenrok === item ?"var(--farba-main)" : "var(--farba-main2)",
                border:hoverlenrokeeee === item ? "1px solid var(--farba-main)" : hoverlenrok === item ?"1px solid var(--farba-main)" : "1px solid var(--farba-siva)",
                color:hoverlenrokeeee === item ? "var(--farba-biela)" : hoverlenrok === item ?"var(--farba-biela)" : "var(--farba-cierna)",
              }}

            onClick={() => {
              if (item === rok) {
                // console.log("tenjeden");
                setDruhkykomplte("mesiac")
                setHoverlenrok(item)
                  setNovyuplneROK(item)
                setKliknutiedva(1)
                    setAlternativa(false)
              }
              else{

                console.log("ostatne");
              
                // druhykomplet === "mesiac"
                 setHoverlenrok(item)
                    setKliknutiedva(3)
                setDruhkykomplte("mesiacesteraz")
                setNovyuplneROK(item)
                setAlternativa(true)
                setRokoo(item)

                  setPomocny(1)
                
                // setTotonakli(null)
              }


            }}


            >{item}</div>
            )}
  </>}
       
       
              </div>
               }
            

            











</>

}
          
                 <Linka></Linka>












{renderovaneokno === "prveoknok" && 
<>
 <div className='buttonnaulozenie'
                 onClick={() => {funkcia(),setZistenie(true),setOpen2(false),setRenderovaneokno("druheoknoko"),setOtocenie(true),setTusudni(null),ulozenieprvehp()}}
                 ><span >Ulozit</span></div>

</>
}


{renderovaneokno === "druheoknoko" && <>
 <div className='buttonnaulozenie'
                 onClick={() => {setOpen(false),setHotovokonec(true),setOtocenie(false),ulozeniee()
                        if (props) {       // zavolá sa len ak existuje
          props();         // tu sa spustí funkcia z vonku
        }
                 }}
                 ><span >Potvrdit</span></div>

</>}
                



            
          </motion.div>
        )}
      </AnimatePresence>
    </div>
    </div>


       <div className='rovnaka20000'
        style={{
          backgroundColor: hotovokonec ?  "var(--farba-main)": "var(--farba-biela)"
        }}>
        
        <div className='takzezatotokolkooko' ref={referencia3} 

        
        onClick={() => {
          if (renderovaneokno === "prveoknok") {
            automatika()
            setKontrolaText("vyberkedy")
            return 
            
          }
          else
             setOpen(prev => !prev)
             setOtocenie(prev => !prev)
        }
       

        }
             >
                <Texticek
            hore = "Odchod"
            dole = {renderovaneokno === "druheoknoko"  ? `${novyuplneDEN}.${novyuplneMESIAC}.${novyuplneROK}` : alelele2}

            horetextuic = {{color:hotovokonec ? "white" : "var(--farba-cierna)"}}
          tujelegikadolle = {{color:hotovokonec ? "white" : "var(--farba-sivaText"}}
            ></Texticek>

            <div className="takzevybertlacidlaaa333"
              style={{
          transform:otocenie ? 'rotate(180deg)' : 'rotate(0deg)',

          color: hotovokonec ? "white" : "var(--farba-cierna)"
        }}
             >  <i class='bx bx-chevron-down'></i></div>

          
        </div>
          
      </div>


    
    </>

   
  )


}
