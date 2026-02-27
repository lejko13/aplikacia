
import Linka from '../../naviac/linka/linka'
import { useEffect } from "react";
// import Footer from '../footer/footer'

import {ikonyPonuk} from '../../naviac/ponuka/ponuka'


import { MyContext } from '../../naviac/providertelefon/providertelefon'
import { GlobalContext } from '../../naviac/reactcontext/reactcontext'
import { useContext } from "react";


import {ludia,majitel} from '../../naviac/zoznamosoby/zoznamosoby'
import Templatepage from '../tempaltepage/templatepage'

import Profiltemplate from '../../naviac/profiltemplate/profiltemplate'

  

const Profil = () => {

console.log(majitel[0].hodnotenie2);


  const formular = () => {
  setSuborOpen(true)
  setObsahOpen("formular")
}

const openInstagram = () => {
  window.open("https://www.instagram.com/leofudaly/", "_blank");
}

 const { suborOpen,setSuborOpen,obsahOpen,setObsahOpen,subor,setSubor,nazovSuboru,setNazovSuboru,unikattne,setUnikatne,meno,
  priatelia,setPriatelia,
  okolo,setOkolo,lepsiedalej,setLepsiedalej
} = useContext(MyContext);






  return (
  <Profiltemplate
  // block={block}

  celok = {lepsiedalej}
  //       znacka={znacka} 
  git = {() => openInstagram()}
  ing = {() => openInstagram()}
  link2 = {() => openInstagram()}
  fb = {() => openInstagram()}
  ing2  = {() => openInstagram()}
            fb2  = {() => openInstagram()}
            link4  = {() => openInstagram()}
            git2 = {() => openInstagram()}

  zdielat2 = {() => formular()}
            zdielat3 = {() => formular()}
            zdielat4 = {() => formular()}

  block = {() => formular()}
  znacka =  {() => formular()}
  zdielat =  {() => formular()}
  // block,znacka,zdielat,ig,fb,link,git
  sprava = {{ display: "none" }}
  fotak = {majitel[0].FOTKAMAJITAL}
  pozadie = {majitel[0].pozadie}


  meno={lepsiedalej.meno}
   prezvisko = {lepsiedalej.priezvisko}

  meno2={lepsiedalej.priezvisko}
  textpod = {majitel[0].titul}
  lokalita = {majitel[0].klientMesto}

  popiske = {majitel[0].klientMesto}

 
  komplexnytext = {majitel[0].komplexnytext}

  vyhoda1 = {majitel[0].vyhoda1}

  data = {majitel[0].hodnotenie2}

  data2 = {majitel[0].ponuka}
  malytext = {"kookoko"}
  recencie = {majitel[0].recencie}

  hodnotenie = {majitel[0].hodnotenieeee}

  recenzie = {majitel[0].recenzie}
  email = {majitel[0].email}
  tel = {majitel[0].tel}

  titul =  {majitel[0].titul}

  poloha = {majitel[0].poloha}
  ig = {majitel[0].poloha}
  facebok = {majitel[0].poloha}
  twiter = {majitel[0].poloha}
  link = {majitel[0].poloha}
  popisek = {majitel[0].email}
  cislo1 = {majitel[0].hodnotenieeee}
  cislo2 = {majitel[0].recenzie}

  pocetkamosov = {priatelia.length}

  bloknutypocet = {okolo.length}
  superhostile = {majitel[0].titul}
  lovvns= {majitel[0].lokalita}

  ></Profiltemplate>
      
   
  )
}

export default Profil
