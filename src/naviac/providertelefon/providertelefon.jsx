import React, { createContext, useState ,useEffect} from "react";

import {ludia,majitel} from '../../naviac/zoznamosoby/zoznamosoby'
import { vyhody } from "../vyhody/vyhody";
// 1️⃣ vytvorenie contextu
export const MyContext = createContext();

// 2️⃣ Provider komponent
export const MyProvider = ({ children }) => {
    const[portal,setPortal] =  useState(null)
    const[animacia,setAnimacia] = useState(null)

    const[mobil,setMobil] = useState(false)


// otvorenieoweralpu subor
    const[suborOpen,setSuborOpen] = useState(false)
// nastavenieobashuv subreo
    const[obsahOpen,setObsahOpen] = useState("")


    // vytvorenie 
    const[subor,setSubor] = useState([])
    // len inicializacia nazvu
    const[nazovSuboru,setNazovSuboru]  = useState("")



    // zpobrazenie DETAIL PAGE

    const[detail,setDetail]  = useState("")
    // otovreniefiltrahome 


    // meno
     const[meno,setMeno]  = useState("")
     const[unikattne,setUnikatne]    = useState("")


// obbhsa na fotky napr
 const[dotadok,setDotadok]  = useState(null)

//  otakza ci chces odstranit toto
const[otazka,setOtazka]  = useState(null)



//  const [rezim, setRezim] = useState(() => {
//   const ulozene = localStorage.getItem("rezim");
//   return ulozene ? JSON.parse(ulozene) : false;
// });

// useEffect(() => {
//   localStorage.setItem("rezim", JSON.stringify(rezim));
// }, [rezim]);



const [rezim, setRezim] = useState(() => {
  const ulozene = localStorage.getItem("rezim");
  return ulozene ? JSON.parse(ulozene) : false;
});

useEffect(() => {
  localStorage.setItem("rezim", JSON.stringify(rezim));

 if (!rezim) {
    document.documentElement.style.setProperty("--farba-main2", "var(--farba-main2ZMENA)");
    document.documentElement.style.setProperty("--farba-biela", "var(--farba-bielaZMENA)");
    document.documentElement.style.setProperty("--farba-siva", "var(--farba-sivaZMENA)");
    document.documentElement.style.setProperty("--farba-sivaText", "var( --farba-sivaTextZMENA)");
    document.documentElement.style.setProperty("--farba-cierna", "var( --farba-ciernaZMENA)");
    document.documentElement.style.setProperty("--farbaSPECIALNABIELA", "var(   --farbaSPECIALNABIELAZMENA)");
  } else {
    document.documentElement.style.setProperty("--farba-main2", "var(--farba-main2kopia)");
    document.documentElement.style.setProperty("--farba-biela", "var(--farba-bielakopia)");
    document.documentElement.style.setProperty("--farba-siva", "var( --farba-sivakopia)");
    document.documentElement.style.setProperty("--farba-sivaText", "var(   --farba-sivaTextkopia)");
    document.documentElement.style.setProperty("--farba-cierna", "var(--farba-ciernakopia)");
    document.documentElement.style.setProperty("--farbaSPECIALNABIELA", "var(--farbaSPECIALNABIELAkopia)");
  }
}, [rezim]);




const[kontrlkaaa,setKontrlkaaa] = useState(false)

     const[halava,setHlava] = useState(false)


      //  toto su kamosi
     const[priatelia,setPriatelia] = useState([])


    //  toto je blok 
     const[okolo,setOkolo] = useState([])


     const[zobraziekamosa,setZobraziekamosa] = useState(null)

// nastavenieceleho meno uz konecen

const[lepsiedalej,setLepsiedalej] = useState({
  meno:majitel[0].klientMeno,
  priezvisko:majitel[0].klientPriezvisko,
  email:majitel[0].email,
  cislo:majitel[0].tel,
  datum:majitel[0].klientDatum,
  krajina:majitel[0].krajina,
  kraj:majitel[0].lokalita,
  mesto:majitel[0].poloha,
  uroven:majitel[0].titul,
  omne:majitel[0].komplexnytext,
  vyhoda1:majitel[0].vyhoda1,
  vyhoda2:majitel[0].vyhoda2,
  vyhoda3:majitel[0].vyhoda3,
  vyhoda4:majitel[0].vyhoda4,

  fotka:majitel[0].FOTKAMAJITAL
})
// tu su len tie na di vpre ostatnych
const[ukazkameno,setUkazkameno] = useState("")
const[ukazkamenoODSTRANENEI,setUkazkamenoODSTRANENIE] = useState("")
// const[,setUkazkameno] = useState("")



  const [tubudechat, setTubudechat] = useState([]);




  const [formData, setFormData] = useState({
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

const[otvorenieposldenho,setOtvorenieposldenho] = useState(false)
const[vypisovaniechyby,setVypisovaniechyby] = useState("")


  const[open,setOpen] = useState(null)
   const[obsah,setObsah] = useState("")
   const[farba,setFarba] = useState(6)
   const[ulozit,setUlozit] = useState("upravit")
  const[otovrene2,setOtvorene2] = useState("profil")


      return (
    <MyContext.Provider value={{ otovrene2,setOtvorene2,portal, setPortal,animacia,setAnimacia,mobil,setMobil,suborOpen,setSuborOpen,obsahOpen,setObsahOpen,subor,setSubor,nazovSuboru,setNazovSuboru,detail,setDetail,meno,setMeno,unikattne,setUnikatne,rezim,setRezim,dotadok,setDotadok,otazka,setOtazka,halava,setHlava ,priatelia,setPriatelia,okolo,setOkolo,zobraziekamosa,setZobraziekamosa,lepsiedalej,setLepsiedalej,
      ukazkameno,setUkazkameno,ukazkamenoODSTRANENEI,setUkazkamenoODSTRANENIE,tubudechat, setTubudechat,kontrlkaaa,setKontrlkaaa,formData, setFormData,otvorenieposldenho,setOtvorenieposldenho,vypisovaniechyby,setVypisovaniechyby,open,setOpen,obsah,setObsah,farba,setFarba,ulozit,setUlozit
    }}>
      {children} {/* všetky deti majú prístup k contextu */}
    </MyContext.Provider>
  );
};