import './konverzacie.css'
import React, { useState, useRef, useEffect } from 'react';
// import { useState, useEffect } from 'react';
import Templatepage from '../tempaltepage/templatepage'
import {ludia,majitel} from '../../naviac/zoznamosoby/zoznamosoby'
import Linka from '../../naviac/linka/linka'
import Konverzacialava from '../../naviac/konverzacialava/konverzacialava'
import Konverzaciaprava from '../../naviac/konverzaciaprava/konverzacialava'
import Ludiakolonka from '../../naviac/ludiakolonka/ludiakolonka'

import { useMediaQuery } from "react-responsive";

import { FaInstagram } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { RiFacebookCircleLine } from "react-icons/ri";

import { useContext } from "react";


import Logikaludia from '../../naviac/logikaludia/logikaludia'
import Ukazovatelko from '../../naviac/ukazovatelko/ukazovatelko';

import Informacnyowerla from '../../naviac/informacnyowerlap/informacnyowerla'


import Form from '../../naviac/formular/formular'


import { MyContext } from '../../naviac/providertelefon/providertelefon'
import { GlobalContext } from '../../naviac/reactcontext/reactcontext'


import Overlapiceko from '../../naviac/mobilnyoweraal/mobilnyoweraal'
import { useNavigate } from 'react-router-dom';

import Totozakrayjecat from '../../naviac/totozakrayjecat/totozakrayjecat'

import Ludiakolonkalenmobil from '../../naviac/ludiakolonkalenmobil/Ludiakolonkalenmobil'
import { use } from 'react';
const Konverzacie = () => {
    const navigate = useNavigate();
  const[hover,setHover] = useState("1")
  const[farba,setFarba] = useState("1")
  // const[selektor,setSelektor] = useState(ludia[0])
  

const farba1 = `3px solid var(--farba-biela)`; // ✅
const farba2 = `3px solid var(--farba-main2)`; // ✅


const [text, setText] = useState("");
const referencia = useRef(null)


const chat = useRef(null)





const[hlava,setHlavna] = useState(ludia)


const[aktualny,setAktualny] = useState(ludia[0].id)

const mozno = hlava.find(o => o.id === aktualny)

// console.log(mozno);


// console.log(mozno.konverzacia);















const referencia2 = useRef(null)
const [file, setFile] = useState(null)
const kliknute = () => referencia2.current.click()


  const isMobile = useMediaQuery({ minWidth: 751 });
  const isDesktop = useMediaQuery({ maxWidth: 750 });
   
  

  const[farbaHOVER,setFarbaHOVER] = useState(null)

 const { pocetOblubene, setPocetOblubene, filter, setFilter,owerlap,seTeraz,teraz ,popokno,setPopokno,
       lajknute,setLajknute,lajkujem,texdo,setTextdo,kontext,setKontext,oblubene,setOblubene,mala,setMala,
            pravda,setpravda,automatika,setKontrolaText,setKontrola
      } = useContext(GlobalContext);

        const { suborOpen,setSuborOpen,obsahOpen,setObsahOpen,subor,setSubor,nazovSuboru,setNazovSuboru,unikattne,setUnikatne,meno,priatelia,setPriatelia,okolo,setOkolo,zobraziekamosa,setZobraziekamosa,tubudechat, setTubudechat} = useContext(MyContext);


      const[otovaram,setOtvaram] = useState(null)
      const [overlayContent, setOverlayContent] = useState(null);


      useEffect(() => {
  referencia?.current?.focus()
setText("")
},[aktualny,okolo])
      

const otvorenei = () => {
  setOtvaram("open"),
  setOverlayContent("texthorny")
}
// const zatvaram = () => {
//   setOtvaram(null),
//   setOverlayContent(null)
// }
const formular = () => {
  setSuborOpen(true)
  setObsahOpen("formular")
}

const openInstagram = () => {
  window.open("https://www.instagram.com/leofudaly/", "_blank");
}
const klik = (ale) => navigate(`/Profil/${ale}`);



// logika obmezdit





// console.log(ludia);


// logika obmezdit

// console.log(mozno);





// logika priatelov

const najdem = priatelia.some(item => item.ide === mozno.ide)



    const alee2 = okolo.some(o => o.ide === mozno.ide)



const funkciaee = () => {
const najdem = priatelia.some(item => item.ide === mozno.ide)

if (najdem ) {
  console.log("najdem");
  setPriatelia(prev => prev.filter(item => item.ide != mozno.ide))
  automatika()
setKontrolaText("kamosOdstranieeni")
setZobraziekamosa(<div className='horeeedoelnicvi'><span>{osoba.klientMeno} {osoba.klientPriezvisko} nie je vas priatel</span></div>)

return 
  
}
else 
  setPriatelia(prev => [...prev,mozno])
automatika()

setKontrolaText("kamos")

setZobraziekamosa(<div className='horeeedoelnicvi'><span>{osoba.klientMeno} {osoba.klientPriezvisko} je vas priatel</span></div>)
}





  const osoba = ludia.find(item => item.ide === mozno.ide)


// console.log(osoba);

    const obmezim = () => {

  const uzje = okolo.some(item => item.ide === mozno.ide)
  const najdem = priatelia.some(item => item.ide === mozno.ide)



  if (najdem) {
automatika()
setKontrolaText("odstrani")
setZobraziekamosa(<div className='horeeedoelnicvi'>
  <span>{osoba.klientMeno} {osoba.klientPriezvisko} je vas priatel</span>
  <span style={{fontSize:"var(  --font-size-small)",whiteSpace:"nowrap"}}>Ak ho chcete zablokovať,<span className='malepismenko' onClick={() => funkciaee()}>odstráňte</span> ho z priateľov</span>
  </div>)


  return

    
  }
  else if (uzje) {
     setOkolo(prev => prev.filter(item => item.ide != mozno.ide))
  
     
//      setKontrolaText("blok")
     
// setZobraziekamosa(<div className='horeeedoelnicvi'><span> Zadlokovali ste {osoba.klientMeno} {osoba.klientPriezvisko}</span></div>)
     return
  }


  else{
    setOkolo(prev => [...prev,mozno])
    automatika()
    setKontrolaText("blok")
  setZobraziekamosa(<div className='horeeedoelnicvi'><span> Zablokovali ste {osoba.klientMeno} {osoba.klientPriezvisko}</span></div>)
  }



}

// console.log(priatelia);
// console.log(okolo);
// console.log(mozno);


  const goToProfil = () => {
    navigate('/Profil');
  };



// const najdenekonvefzaacie = tubudechat.find(item => item.ide === mozno.ide )

  // const [tubudechat, setTubudechat] = useState([]);

  // console.log(najdenekonvefzaacie);


const najdemchat = tubudechat?.find(item => item.ide === mozno.ide)


console.log(tubudechat);
console.log(najdemchat);


  
useEffect(() => {

  if (najdemchat) {
    console.log("nic");
    
    return
    
  }
else{
setTubudechat([
    {
      ide: mozno.ide,
      konverzacia: mozno.konverzacia,
      meno: mozno.klientMeno,
      odpovede:mozno.odpovede

    }
  ]);
}

  


}, []);



// console.log(mozno);




const ukaldanie = (unikat,textova,menucko,odpovedammm) => {

  const kontrloa = tubudechat.some(item => item.ide === unikat)

  if (kontrloa) {
    console.log("existuje");
  }
  else  setTubudechat(prev => [...prev,{ide:unikat,konverzacia:textova,meno:menucko, odpovede:odpovedammm}])
  



}
  

  // console.log(tubudechat);
  
  
  


  const funkcia = () => {
if (text.trim() === "") return 


  setTubudechat(prev =>
        prev?.map(item =>{
          if (item.ide === mozno.ide) {
            return{
              ...item,
                konverzacia: [...item.konverzacia, { ja: text }]
            }
          } return item    
      }))

  

  setTimeout(() => {
    setTubudechat(prev =>
    prev?.map(item => {
      if (item.ide === mozno.ide) {

        const nova = item.odpovede
        console.log(nova);
        
      const  random = nova[Math.floor(Math.random() * nova.length)]
console.log(item.id);

        // console.log(nova);
        
        return{
            ...item,
            konverzacia: [...item.konverzacia, {on: random.kluc}]
          }
      }
      return item
    } 
    )
  )

  },1000)
  
  setText("")
}



const[spojazdenie,setSpojazdenie] = useState("")
useEffect(() => {
  if (chat.current) {
    chat.current.scrollTop = chat.current.scrollHeight
  }
}, [tubudechat,spojazdenie])




useEffect(() => {

  const handleKeyDown = (e) => {     

    if (e.key === "Enter") {
     funkcia()
    }
  }

  window.addEventListener("keydown", handleKeyDown)

  return () => {
    window.removeEventListener("keydown", handleKeyDown)
  }
}, [text])


// console.log(tubudechat);
// console.log(mozno);

// console.log(najdemchat?.konverzacia);



// console.log(chat.current);


console.log(najdemchat);

// const mapvanie = 

  return (
    <Templatepage  hedericek = {{display:"none"}}>

      {/* {isDesktop && 
      <div style={{padding:"0px 10px",backgroundColor:"var(--farba-biela)"}}>

        <div className='textCastmain' style={{backgroundColor:"var(--farba-biela)"}}>
          <div>
            <span className='TEXTICEKNEAOVICEK' > Vaše konverzácie</span>
            <p className='textpodhlavnuym'> Na tomto mieste nájdete všetky svoje správy</p>
            </div>
            
        </div>
        </div>} */}


{isDesktop &&  
<>
<Informacnyowerla

      show = {otovaram}

      setOtvaram = {setOtvaram}

    ></Informacnyowerla> 



     <Overlapiceko
     klik = {() => setOtvaram(null) }

    //  stylecekokok = {{height:"50px"}}
      show = {otovaram}
     >
         {overlayContent === "texthorny" && 
         <div className='lenwrappernacelycahmobilw'>

          <div className='tubudechat2' >
              <Totozakrayjecat
              podmienka = {alee2}
              meno = {osoba.klientMeno}
              priezviko={osoba.klientPriezvisko}
              odblokujmme = {() => {
                  setOkolo(prev => prev.filter(polozka => polozka.ide != osoba.ide)),
                           automatika()
                             setKontrolaText("odblok")
  setZobraziekamosa(<div className='horeeedoelnicvi'><span> Odblokovali ste {osoba.klientMeno} {osoba.klientPriezvisko}</span></div>)
              }}

  
              ></Totozakrayjecat>

              <div className='vrcholecekokoksss'>
                 


               
                  <Ludiakolonkalenmobil
                   podminkkak2 = {najdem}
                  srdieckoko = {{display:"none"}}
                   silooook = {{display:"none"}}
                   
                  sprava={() => {klik(mozno.ide),setpravda(false)}}
                  textkamos = {najdem ? "Odstrániť z priateľov" : "Pridať do priateľov"}
                obmedzit={() => obmezim()}
                
                kamos={() => funkciaee()}


                zdielat={() => formular()}
                zablokovat={() => formular()}
                pouzivat={() => formular()}
                 


                 
                  
                fotecakkklentak = {{
                  height:"50px",
                  width:"50px",
               
           
                }}
                fotka={mozno.klientFotky}
                teext1 = {mozno.klientMeno}
                text3 = {mozno.klientPriezvisko}
                text2 =   {mozno.klientMesto}
            
                style = {{flex:1,height:"100%" ,   padding:"0px",}}
                onclickokoko = {() => setpravda(prev => !prev) }
                  // onMouseEnter2 = {() => setpravda(true)}
                  // onMouseLeave2 = {() => setpravda(false)}
                ></Ludiakolonkalenmobil>


                <div className='maeloknoinstagramove'>
                  <Ukazovatelko
              onMouseEnter={() => setFarbaHOVER(1)}
              onMouseLeave={() => setFarbaHOVER(null)}
              onClick = {() => openInstagram()}
                 style={{ 
                    backgroundColor:"var(--farba-biela)",
                   fontSize: "15px" }}
                  ><FiTwitter  style={{color:"var(--farba-cierna)"}}/></Ukazovatelko>
                  <Ukazovatelko
                  onMouseEnter={() => setFarbaHOVER(2)}
              onMouseLeave={() => setFarbaHOVER(null)}
                onClick = {() => openInstagram()}
                     style={{
                       backgroundColor:"var(--farba-biela)",
                      fontSize: "15px"}}
                  ><FaInstagram  style={{color:"var(--farba-cierna)"}}/></Ukazovatelko>
                  <Ukazovatelko
                       onMouseEnter={() => setFarbaHOVER(3)}
              onMouseLeave={() => setFarbaHOVER(null)}
                onClick = {() => openInstagram()}
                     style={{ backgroundColor:"var(--farba-biela)",fontSize: "15px"}}

                  >
                    <RiFacebookCircleLine  style={{color:"var(--farba-cierna)"}}/>
                    </Ukazovatelko>
                </div>

              </div>
            

                <div className='teujetexovacastkokok2' ref={chat}>
                  
                      {najdemchat?.konverzacia?.map((item, index) => {

                        return (
                          <div key={index}>
                            {item.on && (
                              <Konverzacialava
                                onClick={() => klik(mozno.ide)}
                                fotka={mozno.klientFotky}
                              >
                                {item.on}
                              </Konverzacialava>
                            )}

                            {item.ja && (
                              <Konverzaciaprava
                                fotka={mozno.FOTKAMAJITAL}
                                onClick={() => goToProfil()}
                              >
                                {item.ja}
                              </Konverzaciaprava>
                            )}
                          </div>
                        );
                      })}
                </div>

    
     

                        <div className='vrcholecekokoksss2'>
                            <div className='bielyobalcekokokok'>
                                <div style={{display:"flex",gap:"5px",padding:"0px 10px"}}>

                                  <div className='wrapper89090' style={{padding:"0px"}}
                                
                                  >
                                    <div className='kruzeocekomaly'><i class='bx bx-face' ></i></div>
                                  </div>


                                  <div className='wrapper89090' style={{padding:"0px"}}
                                  onClick={() => kliknute()}
                                  >
                                    <div className='kruzeocekomaly'><i class='bx bx-plus' ></i></div>
                                  </div>

                                  <div className='wrapper89090' 
                                  style={{padding:"0px"}}
                                  onClick={() => setText("")}
                                  >
                                    <div className='kruzeocekomaly'><i class='bx bx-trash' ></i></div>
                                  </div>

                                </div>


                                  <input type="file" ref = {referencia2}  style={{display:"none"}}
                                    onChange={(e) => {
                                                      const vybrany = e.target.files[0]
                                                      setFile(vybrany)
                                                      console.log(vybrany)
                                                    }}
                                  />

                                  <input 
                                    ref={referencia}
                                    className='inputekckokokodsvnasdj'
                                    value={text}
                                    onChange={e => setText(e.target.value)}
                                    placeholder="Napíš mi správu..."type="text" name="" id="" />

                                  <div className='wrapper89090'  onClick={() => funkcia()}>
                                    <div style={{height:"35px",width:"35px",backgroundColor:"var(--farba-main)",borderRadius:"99px",
                                      color:"var(--farba-biela)",display:"flex",alignItems:"center",justifyContent:"center"
                                            }} >
                                        <i class='bx bxs-paper-plane' ></i>
                                    </div>

                                  </div>
                            </div>
                        </div>

            </div>
 
            </div>
         }

     </Overlapiceko>
     </>
    }


       




 <div className='Konverzacie'>
          <div className='uvidim2'>
            <div className='infolistrespcah'>
              {/* <div className='tujemenoemom'>


                <Ludiakolonka
                 srdeckourcuje = {{display:"none"}}
                srdieckoko = {{display:"none"}}
                 silooook = {{display:"none"}}
                animovace = {{display:"none"}}
                fotecakkklentak = {{
                  height:"50px",
                  width:"50px",   
                }}
                fotka={majitel[0].FOTKAMAJITAL}
                teext1 = {majitel[0].klientMeno}
                text3 = {majitel[0].klientPriezvisko}
                text2 = {majitel[0].titul}
                style = {{height:"100%",  padding:"0px", }}
                onclickokoko = {() => navigate("/Profil")}
                ></Ludiakolonka>
              </div> */}


              <div className='tusascrolujuuzivatiela'>
{/* toto je chat pre dektop */}
                {isMobile && 
                  <>
                  {ludia.map((item, index) => {
                  // --- Logika pre každý item ---
                  const isActive = item.aktivny === "ano";
                  const isHoveredOrSelected = farba === item.id || hover === item.id;

                  const backgroundColor = isHoveredOrSelected
                    ? "var(--farba-main2)"
                    : "var(--farba-biela)";

                  const borderColor = isHoveredOrSelected ? farba2 : farba1;

                  // --- Funkcie pre jednotlivé udalosti ---
                  const handleMouseEnter = () => setHover(item.id);
                  const handleMouseLeave = () => setHover(null);
                  const handleClick = () => {
                    setFarba(item.id);
                    setAktualny(item.id);

                    ukaldanie(item.ide,item.konverzacia,item.klientMeno,item.odpovede)
                    // setTubudechat(prev => [...prev,{id:item.ide,konverzacia:item.konverzacia,meno:item.klientMeno}])

                  };

                  // --- JSX komponent ---


                  const lll = priatelia.some(len => len.ide === item.ide)
                    const alee = okolo.some(o => o.ide === item.ide)


                  return (
                    <div
                      key={item.id}
                      style={{
                        // backgroundColor: lll ? "red" :"pink",
                         display: "flex", flexDirection: "column", position: "relative" }}
                    >
                      <Ludiakolonka
                       srdeckourcuje = {{display:"none"}}
                      podmienka = {alee}
                      podminkkak = {lll}
                      podminkkak2 = {lll}
                      odblokovat = "Odblokovať"
                      klikluntiiook = {() => {
                        setOkolo(prev => prev.filter(polozka => polozka.ide != item.ide)),
                           automatika()
                             setKontrolaText("odblok")
            setZobraziekamosa(<div className='horeeedoelnicvi'><span> Odblokovali ste {osoba.klientMeno} {osoba.klientPriezvisko}</span></div>)
                           

                      }}
                        animovace={{ display: "none" }}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        onClick={() => {handleClick(),setSpojazdenie(item.id)}}
                        style={{ 
                           overflow: "hidden",
                          backgroundColor,
                          // border: lll ? "1px solid var(--farba-main)" : "1px solid transparent"
                        }}
                        teext1={item.klientMeno}
                        text3={item.klientPriezvisko}
                        text2={item.klientMesto}
                        fotka={item.klientFotky}
                      >

                      {alee === false && <div
                                                className="bodeckaaaaaakok"
                                                onMouseEnter={handleMouseEnter}
                                                onMouseLeave={handleMouseLeave}
                                                onClick={() => {setFarba(item.id)}}
                                                style={{
                                                  zIndex: 110,
                                                  border: borderColor,
                                                  backgroundColor: isActive ? "var(--farba-zelena)" : "var(--farba-cervena)",
                                                }}
                                              ></div> }
                       

                      </Ludiakolonka>
                        <Linka style={{margin:"5px 0px"}}></Linka>
                    </div>
                  );
                })}
               
                </>
                }
{/* toto je chat pre dektop */}             
  {/* onClick = {() => {
                    setFarba(item.id),
                    setAktualny(item.id),
                   
                  }} */}

{/* toto je chat pre mobil */}      
 {isDesktop && 
                  <>
                  {ludia.map((item, index) => {
                  // --- Logika pre každý item ---
                  const isActive = item.aktivny === "ano";
                  const isHoveredOrSelected = farba === item.id || hover === item.id;

                  const backgroundColor = isHoveredOrSelected
                    ? "var(--farba-main2)"
                    : "var(--farba-biela)";

                  const borderColor = isHoveredOrSelected ? farba2 : farba1;

                  // --- Funkcie pre jednotlivé udalosti ---
                  const handleMouseEnter = () => setHover(item.id);
                  
                  const handleMouseLeave = () => setHover(null);

                  const handleClick = () => {
                    setFarba(item.id);
                    setAktualny(item.id);
                     otvorenei()
                     ukaldanie(item.ide,item.konverzacia,item.klientMeno,item.odpovede)
                     setSpojazdenie(item.id)
                  };

                  // --- JSX komponent ---


                  const lll = priatelia.some(len => len.ide === item.ide)
                    const alee = okolo.some(o => o.ide === item.ide)


                  return (
                    <div
                      key={item.id}
                      style={{
                        // backgroundColor: lll ? "red" :"pink",
                         display: "flex", flexDirection: "column", position: "relative" }}
                    >
                      <Ludiakolonka
                       srdeckourcuje = {{display:"none"}}
                      podmienka = {alee}
                      podminkkak = {lll}
                      podminkkak2 = {lll}
                      odblokovat = "Odblokovať"
                     klikluntiiook = {(e) => {
                        e.stopPropagation();

                        setOkolo(prev => prev.filter(polozka => polozka.ide !== item.ide));
                        automatika();
                        setKontrolaText("odblok");
                        setZobraziekamosa(
                          <div className='horeeedoelnicvi'>
                            <span>Odblokovali ste {osoba.klientMeno} {osoba.klientPriezvisko}</span>
                          </div>
                        );
                      }}
                        animovace={{ display: "none" }}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        onClick={handleClick}
                        style={{ 
                           overflow: "hidden",
                          backgroundColor,
                          // border: lll ? "1px solid var(--farba-main)" : "1px solid transparent"
                        }}
                        teext1={item.klientMeno}
                        text3={item.klientPriezvisko}
                        text2={item.klientMesto}
                        fotka={item.klientFotky}
                      >

                      {alee === false && <div
                                                className="bodeckaaaaaakok"
                                                onMouseEnter={handleMouseEnter}
                                                onMouseLeave={handleMouseLeave}
                                                onClick={() => setFarba(item.id)}
                                                style={{
                                                  zIndex: 110,
                                                  border: borderColor,
                                                  backgroundColor: isActive ? "var(--farba-zelena)" : "var(--farba-cervena)",
                                                }}
                                              ></div> }
                       

                      </Ludiakolonka>
                        <Linka style={{margin:"5px 0px"}}></Linka>
                    </div>
                  );
                })}
               
                </>
                }
            
{/* toto je chat pre mobil */}    
                <div></div>
              </div>

            </div>


            
            <div className='tubudechat' >
              {/* totojej ta cas ktoar sa hybe */}
              
              <Totozakrayjecat
              podmienka = {alee2}
              meno = {osoba.klientMeno}
              priezviko={osoba.klientPriezvisko}
              odblokujmme = {() => {
                  setOkolo(prev => prev.filter(polozka => polozka.ide != osoba.ide)),
                           automatika()
                             setKontrolaText("odblok")
  setZobraziekamosa(<div className='horeeedoelnicvi'><span> Odblokovali ste {osoba.klientMeno} {osoba.klientPriezvisko}</span></div>)
              }}

  
              ></Totozakrayjecat>
            
              {/* // style={{
              //   display:alee2 ? "block" : "block",
              //   backgroundColor:alee2 ? "transparent" : "transparent"}} */}
            


                  {/* totojej ta cas ktoar sa hybe */}


{/* toto ovladas */}
              <div className='vrcholecekokoksss'>

            
                  <Ludiakolonka
                   podminkkak2 = {najdem}
                  srdieckoko = {{display:"none"}}
                   silooook = {{display:"none"}}
                   
                  sprava={() => {klik(mozno.ide),setpravda(false)}}
                  textkamos = {najdem ? "Odstrániť z priateľov" : "Pridať do priateľov"}
                obmedzit={() => obmezim()}
                
                kamos={() => {funkciaee(),setpravda(false)}}


                zdielat={() => {formular(),setpravda(false)}}
                zablokovat={() => formular()}
                pouzivat={() => formular()}
                 
                  
                fotecakkklentak = {{
                  height:"50px",
                  width:"50px",
                }}
                fotka={mozno.klientFotky}
                teext1 = {mozno.klientMeno}
                text3 = {mozno.klientPriezvisko}
                text2 =  {mozno.klientMesto}
                text4 = {mozno.kareke}
            
                style = {{flex:1,height:"100%" ,   padding:"0px",}}
                onMouseEnter2 = {() => setpravda(true)}
                onMouseLeave2 = {() => setpravda(false)}
               
                ></Ludiakolonka>


                <div className='maeloknoinstagramove'>
                  <Ukazovatelko
                  onClick = {() => openInstagram()}
              onMouseEnter={() => setFarbaHOVER(1)}
              onMouseLeave={() => setFarbaHOVER(null)}
                 style={{ 
                backgroundColor: (isDesktop || farbaHOVER === 1) ? "var(  --farba-main2)" : "var(--farba-biela)"

                  , fontSize: "15px" }}
                  ><FiTwitter  style={{color:"var(--farba-cierna)"}}/></Ukazovatelko>
                  <Ukazovatelko
                      onClick = {() => openInstagram()}
                  onMouseEnter={() => setFarbaHOVER(2)}
              onMouseLeave={() => setFarbaHOVER(null)}
                     style={{
                       backgroundColor: (isDesktop || farbaHOVER === 2) ? "var(  --farba-main2)" : "var(--farba-biela)",
                      fontSize: "15px"}}
                  ><FaInstagram  style={{color:"var(--farba-cierna)"}}/></Ukazovatelko>
                  <Ukazovatelko
                      onClick = {() => openInstagram()}
                       onMouseEnter={() => setFarbaHOVER(3)}
              onMouseLeave={() => setFarbaHOVER(null)}
                     style={{   backgroundColor: (isDesktop || farbaHOVER === 3) ? "var(  --farba-main2)" : "var(--farba-biela)",fontSize: "15px"}}
                  >
                    <RiFacebookCircleLine  style={{color:"var(--farba-cierna)"}}/>
                    </Ukazovatelko>
                </div>

              </div>
              

                <div className='teujetexovacastkokok' ref={chat}>
                  {najdemchat?.konverzacia.map((item, index) => {

                        return (
                          <div key={index}>
                            {item.on && (
                              <Konverzacialava
                                onClick={() => klik(mozno.ide)}
                                fotka={mozno.klientFotky}
                              >
                                {item.on}
                              </Konverzacialava>
                            )}

                            {item.ja && (
                              <Konverzaciaprava
                                fotka={mozno.FOTKAMAJITAL}
                                onClick={() => goToProfil()}
                              >
                                {item.ja}
                              </Konverzaciaprava>
                            )}
                          </div>
                        );
                      })}
                </div>
     

                        <div className='vrcholecekokoksss2'>


                          {alee2 === false &&   <div className='bielyobalcekokokok'>
                                <div style={{display:"flex",gap:"5px",padding:"0px 10px"}}>

                                  <div className='wrapper89090' style={{padding:"0px"}}
                                
                                  >
                                    <div className='kruzeocekomaly'><i class='bx bx-face' ></i></div>
                                  </div>


                                  <div className='wrapper89090' style={{padding:"0px"}}
                                  onClick={() => kliknute()}
                                  >
                                    <div className='kruzeocekomaly'><i class='bx bx-plus' ></i></div>
                                  </div>

                                  <div className='wrapper89090' 
                                  style={{padding:"0px"}}
                                  onClick={() => setText("")}
                                  >
                                    <div className='kruzeocekomaly'><i class='bx bx-trash' ></i></div>
                                  </div>

                                </div>
                                


                                  <input type="file" ref = {referencia2}  style={{display:"none"}}
                                    onChange={(e) => {
                                                      const vybrany = e.target.files[0]
                                                      setFile(vybrany)
                                                      console.log(vybrany)
                                                    }}
                                  />

                                  <input 
                                    ref={referencia}
                                    className='inputekckokokodsvnasdj'
                                    value={text}
                                    onChange={e => setText(e.target.value)}
                                    placeholder="Napíš mi správu..."type="text" name="" id="" />

                                  <div className='wrapper89090'  onClick={() => funkcia()}>
                                    <div style={{height:"35px",width:"35px",backgroundColor:"var(--farba-main)",borderRadius:"99px",
                                      color:"white",display:"flex",alignItems:"center",justifyContent:"center"
                                            }} >
                                        <i class='bx bxs-paper-plane' ></i>
                                    </div>

                                  </div>
                            </div>
                            }


                             {alee2 === true &&   <div className='bielyobalcekokokok'>
                                <div style={{display:"flex",gap:"5px",padding:"0px 10px"}}>

                                  <div className='wrapper89090' style={{padding:"0px"}}
                                
                                  >
                                    <div className='kruzeocekomaly'><i class='bx bx-face' ></i></div>
                                  </div>


                                  <div className='wrapper89090' style={{padding:"0px"}}
                                  onClick={() => kliknute()}
                                  >
                                    <div className='kruzeocekomaly'><i class='bx bx-plus' ></i></div>
                                  </div>

                                  <div className='wrapper89090' 
                                  style={{padding:"0px"}}
                                  onClick={() => setText("")}
                                  >
                                    <div className='kruzeocekomaly'><i class='bx bx-trash' ></i></div>
                                  </div>

                                </div>
                                


                                  <input type="file" ref = {referencia2}  style={{display:"none"}}
                                    onChange={(e) => {
                                                      const vybrany = e.target.files[0]
                                                      setFile(vybrany)
                                                      console.log(vybrany)
                                                    }}
                                  />

                                  <input 
                                    // ref={referencia}
                                    className='inputekckokokodsvnasdj'
                                    value={text}
                                    onChange={e => setText(e.target.value)}
                                    placeholder="Napíš mi správu..."type="text" name="" id="" />

                                  <div className='wrapper89090'  onClick={() => funkcia()}>
                                    <div style={{height:"35px",width:"35px",backgroundColor:"var(--farba-main)",borderRadius:"99px",
                                      color:"var(--farba-biela)",display:"flex",alignItems:"center",justifyContent:"center"
                                            }} >
                                        <i class='bx bxs-paper-plane' ></i>
                                    </div>

                                  </div>
                            </div>
                            }

                            

                           
                        </div>

            </div>
          </div>
          </div>
       
        
        
        </Templatepage>
      
    
  )
}

export default Konverzacie
