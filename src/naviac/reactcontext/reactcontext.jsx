import { createContext, useState,useRef,useContext, useEffect, use } from "react";
import { FaL } from "react-icons/fa6";

// vytvorenie kontextu
export const GlobalContext = createContext();

// provider, ktorý obalí celý projekt
export const GlobalProvider = ({ children,zmena }) => {

  

const[ano,setAno] = useState(true)
  // const[presun,setPresun] = useState([])


  
 const [presun, setPresun] = useState(() => {

  const navrat = localStorage.getItem('nova');

  if (!navrat) return []; // nič uložené → prázdne pole

  try {
    return JSON.parse(navrat);
  } 
  
  catch (e) {
    console.warn("Nepodarilo sa parsovať localStorage 'nova':", navrat);
    return []; // fallback
  }
});
 
  useEffect(() => {
    localStorage.setItem('nova',JSON.stringify(presun))

  },[presun])









  const [pocetOblubene, setPocetOblubene] = useState(0);
  const[filter,setFilter]  = useState(false)
const[teraz,seTeraz] = useState(false)

const informacie = useRef(null)
const[info,setInfo] = useState(null)
const doplnok = useRef(null);
 const[vidim,setVidim] = useState(false)

const[ceny,setCeny] =useState(false)



const[dospeli,setDospeli] = useState(1)
const[deti,setDeti] = useState(0)
const[batolata,setBatolata] = useState(0)

const[dene,setDene] = useState(0)
const[mesiace,setMesiace] = useState(1)
const[roky,setRoky] = useState(2026)



const objekt1 = useRef(null)


const[random,setRandom] = useState(null)

const[lajknute,setLajknute] =  useState(false)
const[texdo,setTextdo] = useState(null)
const[kontext,setKontext] = useState(false)
const[oblubene,setOblubene] = useState([])
const[mala,setMala] = useState("Odstránené")


const timeoutRef = useRef(null);

const lajkujem = () => {
  setLajknute(true);

  // zrušíme predchádzajúci timeout
  clearTimeout(timeoutRef.current);

  // nastavíme nový
  timeoutRef.current = setTimeout(() => {
    setLajknute(false);
  }, 2000);
};


// useEffect(() => {
//    zmena.current.scrollTo({ top: informacie, behavior: "smooth" });


// },[info])
const[hostia2,setHostia2] = useState(1)

const hodnotenie = useRef(null)
const majitel = useRef(null)
const otazky = useRef(null)


const klikanec = useRef(null)
const[popokno,setPopokno] =  useState(false)

// otvarares len na kontorlu
const[kontorla,setKontrola] = useState(false)

const timeoutRef2 = useRef(null);
// const automatika = () => {
//   setKontrola(true)
//   setTimeout(() => setLajknute(false), 2000);
// }

const automatika = () => {
  setKontrola(true);

  // zrušíme predchádzajúci timeout
  clearTimeout(timeoutRef2.current);

  // nastavíme nový
  timeoutRef2.current = setTimeout(() => {
    setKontrola(false);
  }, 2000);
};
// otvarares len na kontorlu text menis
const[kontorlaText,setKontrolaText] = useState(false)

  const[penaze,setPenaze] = useState(null)
// len na id kontrolu 
const[lentakoko,setLentakoko] = useState("")

const[pocitam2,setPocitam2] = useState(null)
// toto je zobrazvaneioru spravach
const[pravda,setpravda] = useState(false)
  const[hostia,setHostia] = useState(1)
  const [otocene, setOtocene] = useState(false);


  // otto je len na ten kosik

  const[kvalita,setKvalita] = useState([])


const[prize,setPrize] = useState(0)

const[otvrenie,setOtvorenie] = useState(false)


  // zobrazenie cien

  const[cena,setCena] = useState(null)
const scrollToRef = (ref, offset = 0) => {
  if (ref.current && zmena.current) {
    const top = ref.current.offsetTop; // vzdialenosť od vrchu scroll kontajnera
    zmena.current.scrollTo({ top: top - offset, behavior: "smooth" });
  }
};


const[zobrazovanie,setZobrazovanie] = useState("nah2lad")



const[prvydatum,setPrvydatum] = useState(null)
const[druhydatum,setDruhydatum] = useState(null)

const[rozdiel,setRozdiel] = useState(null)


const novicek = useRef()
  return (
    <GlobalContext.Provider value={{ pocetOblubene,setPocetOblubene,filter,setFilter,teraz,seTeraz,popokno,setPopokno,informacie,hodnotenie,setInfo,scrollToRef,
      majitel,otazky,ceny,setCeny,doplnok,
      dospeli,setDospeli,deti,setDeti,batolata,setBatolata,setPresun,presun,objekt1,
      vidim,setVidim,klikanec,random,setRandom,
      lajknute,setLajknute,lajkujem,texdo,setTextdo,kontext,setKontext,oblubene,setOblubene,mala,setMala,
      kontorla,setKontrola,kontorlaText,setKontrolaText,automatika,lentakoko,setLentakoko,
      pravda,setpravda,penaze,setPenaze,pocitam2,setPocitam2,otocene, setOtocene,cena,setCena,kvalita,setKvalita,prize,setPrize,
      zobrazovanie,setZobrazovanie,otvrenie,setOtvorenie,novicek,
      dene,setDene,mesiace,setMesiace,roky,setRoky,
      prvydatum,setPrvydatum,druhydatum,setDruhydatum,rozdiel,setRozdiel,ano,setAno
      }}>
      {children}
    </GlobalContext.Provider>
  );
};