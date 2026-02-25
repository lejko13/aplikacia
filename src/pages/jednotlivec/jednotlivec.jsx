
import Linka from '../../naviac/linka/linka'
import React from 'react'
// import Footer from '../footer/footer'

import {ikonyPonuk} from '../../naviac/ponuka/ponuka'


import { MyContext } from '../../naviac/providertelefon/providertelefon'
import { GlobalContext } from '../../naviac/reactcontext/reactcontext'
import { useContext } from "react";

import {apartmany,ludia,koment} from '../../naviac/fuzzy/fuzzy'


import Templatepage from '../tempaltepage/templatepage'

import Profiltemplate from '../../naviac/profiltemplate/profiltemplate'


// import {ludia,majitel} from '../../naviac/zoznamosoby/zoznamosoby'

import { useParams, useLocation, data } from 'react-router-dom';

import Profil2 from '../../naviac/profil2/profil2'
  

const Jednotlivec = () => {
   const { id } = useParams(); // z URL získame ID
// const najdeni = ludia.find(item => item.id === id)
const uzivatel = ludia.find(item => item.id === id);

console.log(uzivatel);


const lenid = apartmany.map(item => item.id);

const najdene = ludia.filter(item => uzivatel?.recenzie?.includes(item.id))


// const byt = apartmany.filter(item => item.id === uzivatel.byvanie);

// const byt = apartmany.filter(item => uzivatel.byvanie.includes(item.id));

  const formular = () => {
  setSuborOpen(true)
  setObsahOpen("formular")
}

const openInstagram = () => {
  window.open("https://www.instagram.com/leofudaly/", "_blank");
}

 const { suborOpen,setSuborOpen,obsahOpen,setObsahOpen,subor,setSubor,nazovSuboru,setNazovSuboru,unikattne,setUnikatne,meno} = useContext(MyContext);





const byt = apartmany.filter(item => uzivatel?.byvanie?.includes(item.id))
 

// console.log(uzivatel.recenzie);

// const recenzie = ludia.filter(polozka => polozka.ide === uzivatel.recenzie)


// console.log(uzivatel);

// console.log(byt);


console.log(uzivatel.id);




  return (
    <>
    {/* <div style={{height:"500px",width:"1000px",backgroundColor:"pink"}}></div>
    <span>{uzivatel.byvanie}</span> */}
    {/* <span>{byt}</span> */}


    <Profil2
    data2 = {byt}
    data = {najdene}
    meno = {uzivatel?.meno}
    meno2={uzivatel.priezvisko}
    lokalita = {uzivatel.lokalita}
    // recencie = {uzivatel.vlastne}

    uzivatel = {uzivatel}

    uzivatelMENO = {uzivatel.meno}
    uzivatelEMAIL = {uzivatel.email}
    uzivatelFOTKA =  {uzivatel.fotka}
    uzivatelPRIEZVISKO = {uzivatel.priezvisko}
    loklitkakdeje = {uzivatel.kdebyva}
    recencie = {uzivatel.vlastne}
    // celok={}
    // hodnotim= "kokok"
    ></Profil2>
  {/* // <Profiltemplate
  // // block={block}
  // //       znacka={znacka} 
  // git = {() => openInstagram()}
  // ing = {() => openInstagram()}
  // link2 = {() => openInstagram()}
  // fb = {() => openInstagram()}
  // ing2  = {() => openInstagram()}
  //           fb2  = {() => openInstagram()}
  //           link4  = {() => openInstagram()}
  //           git2 = {() => openInstagram()}

  // zdielat2 = {() => formular()}
  //           zdielat3 = {() => formular()}
  //           zdielat4 = {() => formular()}

  // block = {() => formular()}
  // znacka =  {() => formular()}
  // zdielat =  {() => formular()}
  // // block,znacka,zdielat,ig,fb,link,git
  // sprava = {{ display: "none" }}
  // fotak = {majitel[0].FOTKAMAJITAL}
  // pozadie = {majitel[0].pozadie}
  // meno={majitel[0].klientMeno}
  // meno2={majitel[0].klientPriezvisko}
  // textpod = {majitel[0].titul}
  // lokalita = {majitel[0].klientMesto}

  // popiske = {majitel[0].klientMesto}

  // prezvisko = {majitel[0].klientPriezvisko}
  // komplexnytext = {majitel[0].komplexnytext}

  // vyhoda1 = {majitel[0].vyhoda1}

  // data = {majitel[0].hodnotenie2}
  // data2 = {majitel[0].ponuka}
  // malytext = {"kookoko"}
  // recencie = {majitel[0].recencie}

  // hodnotenie = {majitel[0].hodnotenieeee}

  // recenzie = {majitel[0].recenzie}
  // email = {majitel[0].email}
  // tel = {majitel[0].tel}

  // titul =  {majitel[0].titul}

  // poloha = {majitel[0].poloha}
  // ig = {majitel[0].poloha}
  // facebok = {majitel[0].poloha}
  // twiter = {majitel[0].poloha}
  // link = {majitel[0].poloha}
  // ></Profiltemplate> */}
  </>
      
   
  )
}

export default Jednotlivec
