import './profil2.css'
import Linka from '../linka/linka'
import React, { useState,useEffect,useRef } from 'react'
import Footer from '../../pages/footer/footer'

import ProfileCard from '../ProfileCard/ProfileCard'
import {ikonyPonuk} from '../ponuka/ponuka'

import {ludia,majitel} from '../zoznamosoby/zoznamosoby'
import Profilswiper from '../profilswiper/profilswiper'

import {TestimonialCard} from '../TestimonialCard/TestimonialCard'
import Ukazovatelko from '../ukazovatelko/ukazovatelko'
import Templatepage from  '../../pages/tempaltepage/templatepage'
import { useMediaQuery } from "react-responsive";
import Ikonypage from '../ikonypage/ikonypage'

import { MdOutlineMail } from "react-icons/md";
import Animuje from '../animujem/animuje'
import ProfileCard2 from '../ProfileCardmobile/ProfileCardmobile'
import { LuPhone } from "react-icons/lu";
import Jebat from '../jebat/jebat'

import Oknopop from '../oknopop/oknopop'
import { color } from 'framer-motion'

import {Karta2} from '../karta2/karta2'
// 
import Informacnyowerla from '../informacnyowerlap/informacnyowerla'
import Overlapiceko from '../mobilnyoweraal/mobilnyoweraal'
import {apartmany} from '../fuzzy/fuzzy'
import { useNavigate } from 'react-router-dom';

import Blokujme from '../../naviac/blokujem/blokujem'

import { MyContext } from '../providertelefon/providertelefon'
import { GlobalContext } from '../reactcontext/reactcontext'
import { useContext } from "react";
import Jebko2 from '../jebko2/jebko2'
import {TestimonialCard2} from '../TestimonialCard2/TestimonialCard2'

import Maleokno from '../../pages/rezervacie/formularovacast/maleokno/maleokno'
import Maleoknodvojka from '../maleoknodvojka/maleoknodvojka'
import Lengrind from '../lengrind/lengrind'
import Jebkouzivatel from '../../naviac/jebkouzivatel/jebkouzivatel'
import Lengrind2 from '../../naviac/lengrind2/lengrind2'

import Lengrind2MOBIL from '../../naviac/lengrind2MOBIL/lengrind2MOBIL'
import Jebko2mobil from '../../naviac/jebko2mobil/jebko2mobil'

import Ludiakolonka from '../../naviac/ludiakolonka/ludiakolonka'

import Ludiakolonka2 from '../../naviac/ludiakolonka2/ludiakolonka2'

// import {majitel} from '../../naviac/zoznamosoby/zoznamosoby'




// len inkony nic viec
 import { FaInstagram } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { RiFacebookCircleLine } from "react-icons/ri";
// len inkony nic viec


import Konverzacialava from '../../naviac/konverzacialava/konverzacialava'
import Konverzaciaprava from '../konverzaciaprava/konverzacialava'

const Profil2 = ({uzivatel,loklitkakdeje,popisek,cislo1,cislo2,celok,superhostile,bloknutypocet,pocetkamosov,vyhoda1,komplexnytext,popiske,recencie,sprava,prezvisko,twiter,link,tel,email,data2,facebok,ig,fotak,pozadie,meno,meno2,textpod,data,lokalita,malytext,hodnotenie,recenzie,titul,poloha,git,ing,fb,link2,block,znacka,zdielat,ing2,fb2,link4,git2,zdielat2,zdielat3,zdielat4,uzivatelMENO,uzivatelEMAIL,uzivatelFOTKA,uzivatelPRIEZVISKO}) => {

 const { suborOpen,setSuborOpen,obsahOpen,setObsahOpen,subor,setSubor,nazovSuboru,setNazovSuboru,unikattne,setUnikatne,priatelia,setPriatelia,zobraziekamosa,setZobraziekamosa,
  okolo,setOkolo,lepsiedalej,setLepsiedalej,
     ukazkameno,setUkazkameno,ukazkamenoODSTRANENEI,setUkazkamenoODSTRANENIE,tubudechat, setTubudechat,open,setOpen,obsah,setObsah
} = useContext(MyContext);

 const { lajknute,texdo,setTextdo,kontext,setKontext,mala,setMala,  kontorla,setKontrola,kontorlaText,setKontrolaText,automatika } = useContext(GlobalContext);


    const navigate = useNavigate()



  const isMobile = useMediaQuery({ maxWidth: 750 });

  const isDesktop = useMediaQuery({ minWidth: 750 });


  const okono = useMediaQuery({ maxWidth: 950 });


  const okono2 = useMediaQuery({ minWidth: 1350 });


  const[otovrene,setOtvorene] = useState(null)

  const[otovrene2,setOtvorene2] = useState("profil")

  
  const[hover,setHover] = useState(1)
  const[klik,setKlik] = useState(1)

  const referencia1 = useRef(null)

  const[vysuvam,setVysuvam] = useState(null)

// console.log(recencie);

const[ulozit,setUlozit] = useState("upravit")
const[farba,setFarba] = useState(6)
  




  // 
  // const[open,setOpen] = useState(null)
  // const[obsah,setObsah] = useState("")

  const takze = (no) => apartmany.find(item => item.id === no)

  // console.log(takze);
  
  
  const funkce =  (no) =>  navigate(`/Detail/${no}`)
    // onClick54 = {() =>} 

// const meno32 = (no) =>   apartmany.filter(item => item.id === no ? console.log("mam") : console.log("nemam")

//  )


const[lentu,setLentu] = useState(true)

// console.log(priatelia);



console.log(data);

const kontrolaBloku = okolo.some(item => item.ide === uzivatel.id) 
const kontrolaPraitelov = priatelia.some(item => item.ide === uzivatel.id) 

const odblokovanie = () => {
  automatika()
  setKontrolaText("odblok")
 setZobraziekamosa(`${meno} ${meno2} bol(a) odstránený/á z bloku.`);

  setOkolo(prev =>
    prev.filter(item => item.ide !== uzivatel.id)
  );


};


const odstranenie = () => {
  setPriatelia(prev =>
    prev.filter(item => item.ide !== uzivatel.id)
  );
};

const pridanie = () => {
  const osoba = ludia.find(item => item.ide === uzivatel.id);

  if (!osoba) return;

  setPriatelia(prev => {
    const existuje = prev.some(p => p.ide === osoba.ide);
    if (existuje) return prev;

    return [...prev, osoba];
  });
};

const openInstagram = () => {
  window.open("https://www.instagram.com/leofudaly/", "_blank");
}

// console.log(okolo);

const pridaniebloku = () => {
  // 1. Najprv nájdeme osobu v zozname (predpokladám, že hľadáš v 'ludia')
  const osoba = ludia.find(item => item.ide === uzivatel.id);

  // Ak osoba neexistuje, nepokračujeme
  if (!osoba) return;

  if (kontrolaPraitelov) {
    automatika(),
    console.log("kkjjkjee"),
    
    setKontrolaText("odsraneenipriatela2"),
    setUkazkameno(
    <div className='containeonjcsncjksnjr'
    >
      <span>  {uzivatel.meno} {uzivatel.priezvisko}je vas priatel</span>
      <span style={{fontSize:"var(--font-size-small)"}}> Ak ho chcete zablokovat <span className='textlenciioienkok' onClick={() => odstranenie()}>odstráňte</span> ho z priatelov</span>
    
      </div>)

    return
  }

  setKontrolaText("odsraneenipriatela"),
                 setUkazkameno(<div>{uzivatel.meno} {uzivatel.priezvisko} bol(a) pridaný/á z bloku.</div>)

  // 2. Aktualizujeme stav 'okolo' s kontrolou duplicity
  setOkolo(prev => {
    const existuje = prev.some(p => p.ide === osoba.ide);
    
    // Ak už v zozname je, vrátime pôvodné pole (nič nepridáme)
    if (existuje) return prev;

    // Inak pridáme osobu na koniec poľa
    return [...prev, osoba];
  });
};


// useEffect(() => {
//   setObsah("Hodnotenie")
  
// },[])

               

  

    // console.log(priatelia);
    
    const formular = () => {
  setSuborOpen(true)
  setObsahOpen("formular")
}

// console.log(uzivatel.kamosi);
// console.log(ludia);


const finall = ludia.filter(polozka => uzivatel.kamosi.includes(polozka.ide));
// console.log(finall);


const [text, setText] = useState("");

// console.log(tubudechat);
// console.log(uzivatel);


const  konrtloa = tubudechat.some(item => item.ide === uzivatel.id)

// console.log(konrtloa);




useEffect(() => {
  if (konrtloa === false) 

   setTubudechat([
    {
      ide: uzivatel.id,
      konverzacia: uzivatel.konverzacia,
      meno: uzivatel.meno,
      odpovede:uzivatel.odpovede

    }
  ]);
    
    return;

  // kód, ktorý chceš spustiť len keď niečo platí
}, []);


const najdenekonvefzaacie = tubudechat.find(item => item.ide === uzivatel.id )

// console.log(najdenekonvefzaacie);

// // console.log(majitel.klientMeno);

// console.log(majitel);

  const goToProfil = () => {
    navigate('/Profil');
  };

const referencia = useRef(null)
const referencia2 = useRef(null)
const referencia3 = useRef(null)
const referencia4 = useRef(null)

const [file, setFile] = useState("")


const[ukazaklentak,setUkazaklentak] = useState("")

useEffect(() => {
  if (referencia.current) {
    referencia.current.scrollTop = referencia.current.scrollHeight;
  }
}, [file,tubudechat,referencia,otovrene,otovrene2,okono,obsah,kontrolaBloku,open]);



useEffect(() => {
  if (referencia2) {
  referencia2.current?.focus(); 
  }
}, [otovrene2,okono,obsah,isMobile,otovrene,vysuvam]);




useEffect(() => {
  if (!vysuvam) return;

  const timeout = setTimeout(() => {
    referencia3.current?.focus();
  }, 600); // môžeš dať 50–150ms podľa animácie

  return () => clearTimeout(timeout);
}, [vysuvam,kontrolaBloku,open]);


useEffect(() => {
  

  const timeout = setTimeout(() => {
    referencia4.current?.focus();
  }, 600); // môžeš dať 50–150ms podľa animácie

  return () => clearTimeout(timeout);
}, [open]);




 const funkcia = () => {
if (file.trim() === "") return 


  setTubudechat(prev =>
        prev?.map(item =>{
          if (item.ide === uzivatel.id) {
            return{
              ...item,
                konverzacia: [...item.konverzacia, { ja: file }]
            }
          } return item    
      }))

  

  setTimeout(() => {
    setTubudechat(prev =>
    prev?.map(item => {
      if (item.ide === uzivatel.id) {

        const nova = item.odpovede
        // console.log(nova);
        
      const  random = nova[Math.floor(Math.random() * nova.length)]
// console.log(item.id);

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
  
  setFile("")
}
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
}, [file])


console.log(tubudechat);








  const handleClick2 = (parameter) => {

        navigate(`/Profil/${parameter}`);
    }



    useEffect(() => {
      setObsah("detail")
      console.log("piviiiikokok");
      setOpen(true)
    },[])



  return (
    <>


    {isMobile &&  
<>
<Informacnyowerla

      show = {open}

      setOtvaram = {setOpen}

    ></Informacnyowerla> 



     <Overlapiceko
     klik = {() => setOpen(null) }
      show = {open}
     >
      <div className='wrappereceskkko' style={{padding:"0px"}}>

        


       
           {/* nvasvmominsvdnsaknsvknsvkns */}
          {obsah === "Hodnotenie" && 
          <div className='totosasroclujeaz' style={{padding:kontrolaBloku ? "0px" : "10px"}}> 

                  
             {kontrolaBloku && <Blokujme
           style={{flex:1}}
            odblokovat = {() => odblokovanie()}
            ></Blokujme>}


          

      
          
           <div className='totojewrappekokmmno'>
            


        {data.map((item) => {
            // console.log(data2[0]);
            const abytovobec = data2[0]
            console.log(item);
            
            

            return (

              <>
             

              <Karta2
              // uzivatel = {() => console.log("koko")}
              uzivatel = {() => {handleClick2(item.id),setObsah("detail"),setFarba(6)}}
                sytle={{border:"var(  --border)",height:"fit-content"}}
                key={item.id}          // vždy pridaj key
                hodnotim={item.hodnotim}
                name={item.meno}
                role={item.klientMeno}
                company={item.email}
                text={item.popisek}
                hodnotenie={item.klientHodnotenieVlaste}
                rating={3}
                priezvisko={item.priezvisko}
                image={item.fotka}  // správne použitie obrázku

                 apartamNazov = {abytovobec.name}
                        krajina = {abytovobec.krajina}
                        kraj = {abytovobec.kraj}
                        mesto = {abytovobec.location}
                            klikamm = {() =>funkce(abytovobec.id)}
              />
              
              </>
            
            );
          })}
                </div>


            </div> }
            {/* nvasvmominsvdnsaknsvknsvkns */}


          {/* okokokvaokdsadvva */}

          {obsah === "Recenzie" && 
          <div className='totosasroclujeaz' style={{padding:kontrolaBloku ? "0px" : "10px"}}> 

           {kontrolaBloku && <Blokujme
           style={{flex:1}}
            odblokovat = {() => odblokovanie()}
            ></Blokujme>}
                   <div className='totojewrappekokmmno'>
         {recencie.map((item) => {
                   

                    const byt = apartmany.find(polozka => polozka.id === item.kdetobolo)
                    //  console.log(byt);
                     console.log(byt);
                     

                    return (
                      <>
             <Karta2
                      sytle={{border:"var(  --border)",height:"fit-content"}}
                        klikamm = {() =>funkce(byt.id)}
                        key={uzivatel.id}
                        name={uzivatel.meno}
                        priezvisko={uzivatel.priezvisko}
                        image={uzivatel.fotka}
                        text={item.takasi}
                        hodnotim={item.ohodnotenie}
                        hodnotenie={item.ohodnotenie}
                        company={item.email}
                        apartamNazov = {byt.name}
                        krajina = {byt.krajina}
                        kraj = {byt.kraj}
                        mesto ={byt.location}
                      />
                      </>
                     
                    );
                  })}
                  </div>
            </div>
          }

          {/* okokokvaokdsadvva */}




        {obsah === "priatelia" && 
        <div className='totosasroclujeaz' style={{padding:kontrolaBloku ? "0px" : "10px"}}>

           {kontrolaBloku && <Blokujme
           style={{flex:1}}
            odblokovat = {() => odblokovanie()}
            ></Blokujme>}
             <div className='totojewrappekokmmno'>
              {finall.map((item) => {
        
                 
                
                    return (

                      <>
            
             <Karta2
                        key={item.id}
                        notakzee={
                          <div className="okiinknakka">
                            <i className="bx bx-heart"></i>
                          </div>
                        }
          
                        lentooooolllz={{ display: "none" }}
                        
                        sytle={{ height: "fit-content" }}

                        uzivatel={() => {navigate(`/Profil/${item.ide}`),setOtvorene("profil"),setOtvorene2("profil"),setFarba(6),setObsah("detail"),setFarba(6)}}


                        // setOtvorene2("profil"),
                        //   setUlozit("upravit")
                        nastavenietextu={{
                          display: "-webkit-box",
                          WebkitBoxOrient: "vertical",
                          WebkitLineClamp: 2,
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        }}
                        hodnotim={item.hodnotim}
                        name={item.klientMeno}
                        role={item.klientMeno}
                        company={item.email}
                        text={item.omne}
                        hodnotenie={item.klientHodnotenieVlaste}
                        rating={3}
                        priezvisko={item.klientPriezvisko}
                        image={item.klientFotky}
                      />
                      
                      
                      </>
                     
                    );
                  })}

            
               
            </div>

        </div> }

        {obsah === "profilll" && 
        <div className='totosasroclujeaz' style={{padding:kontrolaBloku ? "0px" : "10px"}}>


           {kontrolaBloku && <Blokujme
            odblokovat = {() => odblokovanie()}
            ></Blokujme>}


           

           {kontrolaBloku === false  && 
            <div className='tujepriateliaaa222'>

                 <div className='tujepriateliaaa222' style={{position:"relative"}}>
                <div className='vrcholecekokoksss45555'  >

            
                  <Ludiakolonka2
                  style={{width: "fit-content",padding:"0px 10px 0px 0px"}}
                  totojetocosahybe = {{display:"none"}}
                   fotka={uzivatel.fotka}
                   teext1 = {uzivatel.meno}
                text3 = {uzivatel.priezvisko}
                text2 =  {uzivatel.kdebyva}
                text4 = {uzivatel.lokalita}


               
              
               
                ></Ludiakolonka2>


                <div className='maeloknoinstagramove'>
                  <Ukazovatelko
                  onClick = {() => openInstagram()}
                  ><FiTwitter   style={{color:"var(--farba-cierna)",fontSize:"15px"}}/></Ukazovatelko>

                  <Ukazovatelko
                      onClick = {() => openInstagram()}
                  ><FaInstagram   style={{color:"var(--farba-cierna)",fontSize:"15px"}}/></Ukazovatelko>


                  <Ukazovatelko
                      onClick = {() => openInstagram()}
                  >
                    <RiFacebookCircleLine  style={{color:"var(--farba-cierna)",fontSize:"15px"}}/>
                    </Ukazovatelko>
                </div>

              </div>


              <div className='tujecahtttlaennicviaxxx' ref={referencia}>
                 {najdenekonvefzaacie?.konverzacia?.map((item, index) => (
                    <div key={index}>
                      {item.on && <Konverzacialava
                      onClick = {() => klik(mozno.ide)
                      }
                        fotka = {uzivatel.fotka}
                      > {item.on}</Konverzacialava>}


                      {item.ja && <Konverzaciaprava
                      fotka = {majitel[0].FOTKAMAJITAL}
                         onClick = {() => goToProfil()
                      }
                      >{item.ja}</Konverzaciaprava>}
                    </div>
                  ))}
              </div>


              <div>


                        <div className='vrcholecekokoksss2'>


                           <div className='bielyobalcekokokok'>
                                <div style={{display:"flex",gap:"5px",padding:"0px 10px"}}>

                                  <div className='wrapper89090' style={{padding:"0px"}}
                                
                                  >
                                    <div className='kruzeocekomaly'><i class='bx bx-face' ></i></div>
                                  </div>


                                  <div className='wrapper89090' style={{padding:"0px"}}
                                  // onClick={() => kliknute()}
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
                                


                                  {/* <input 
                                  type="file" 
                                  // ref = {referencia2} 
                                   style={{display:"none"}}
                                    onChange={(e) => {
                                                      const vybrany = e.target.files[0]
                                                      setFile(vybrany)
                                                      console.log(vybrany)
                                                    }}
                                  /> */}


                                  <input 
                                    ref={referencia4}
                                    className='inputekckokokodsvnasdj'
                                    value={file}
                                    onChange={e => setFile(e.target.value)}
                                    placeholder="Napíš mi správu..."type="text" name="" id="" />

                                  <div className='wrapper89090'  onClick={() => funkcia()}>
                                    <div style={{height:"35px",width:"35px",backgroundColor:"var(--farba-main)",borderRadius:"99px",
                                      color:"white",display:"flex",alignItems:"center",justifyContent:"center"
                                            }} >
                                        <i class='bx bxs-paper-plane' ></i>
                                    </div>

                                  </div>




                            </div>
                            
                        </div>
                
              </div>

                

             

             
              </div>
                {/* <Lengrind
                celok = {celok}
                ></Lengrind> */}

             
              </div>
            }
            
               
          

        </div> }



         {obsah === "detail" && 
          <div className='totosasroclujeaz' style={{padding:kontrolaBloku ? "0px" : "10px"}}> 

           {kontrolaBloku && <Blokujme
           style={{flex:1}}
            odblokovat = {() => odblokovanie()}
            ></Blokujme>}

                   <div className='totojewrappekokmmno'>

                     <Lengrind2MOBIL


                kontrolaPraitelov = {kontrolaPraitelov}
                kontrolaBloku = {kontrolaBloku}

                          fotka = {uzivatel.fotka}
                          meno43 ={uzivatel.meno}
                          prezvisko32 = {uzivatel.priezvisko}
                           popisek = {uzivatel.email}
                          cislo1 ={uzivatel.pocethodnoteteni}
                          cislo2 = {uzivatel.pocetrecenzie}
                          uzivatel = {uzivatel}
       
                ></Lengrind2MOBIL>
                     {/* <Lengrind
                celok = {celok}
                ></Lengrind> */}
         
                  </div>
            </div>
          }
        {/* okokokvaokdsadvva */}

       
      </div>

  
         

     </Overlapiceko>
     </>
    }



    
    <div className='celok32'>
      {isMobile && <div className='textCastmain5353'>
          <div>
            <span className='TEXTICEKNEAOVICEK' > Profil pouzivatela {meno} {meno2}</span>
            <p className='textpodhlavnuym'> Objavte detaily poozivatela {meno} {meno2}</p>
            </div>
           
        </div> }
      
      {/* toto je len mobilna castt */}
      {isMobile && 
      <div className='textovacastkuhiuuui'>
        
        <Jebko2mobil
        kontrolaBloku = {kontrolaBloku}
            kontrolaPraitelov = {kontrolaPraitelov}

     
            odhlaseniebloko = {() => {pridaniebloku(),automatika()}}
            odhlasenie32 = {() => odblokovanie()}





            farba = {farba}
            setFarba = {setFarba}
            superhostile = {superhostile}
           
            bloknutypocet = {bloknutypocet}
            zdielat2 = {zdielat2}
            zdielat3 = {zdielat3}
            zdielat4 = {zdielat4}
            ing2  = {ing2}
            fb2 = {fb2}
            link4 = {link4}
            pocetkamosov = {pocetkamosov}
            git2 = {git2}
                    meno = {meno}
                    odhlasenie = {() => formular()}
                    recencie = {recencie}
                    email = {email}
                    prezvisko = {prezvisko}
                    fotka = {fotak}
                    textkratky = {vyhoda1}
                    komplexnytext = {komplexnytext}
                    profil={() => {setOpen(true),setFarba(5),setObsah("profilll")}}
                    detaili={() => {setOpen(true),setObsah("detail"),setFarba(6)}}
                    bloknutyklick={() => {setOpen(true),setObsah("zablokovany"),setFarba(4)}}
                    hodnotenie={() => {setOpen(true),setObsah("Hodnotenie"),setFarba(1)}}
                    Lokalituzobraziť={() => {setOpen(true),setObsah("priatelia"),setFarba(3)}}
                    recenzie={() => {setOpen(true),setObsah("Recenzie"),setFarba(2)}}


                           odstranit = {() => {odstranenie(),automatika(),setKontrolaText("kamosOdstranieeni"),setZobraziekamosa(`${meno} ${meno2} bol(a) odstraný/á z priateľov.`);
}}
            pradanie = {() => {pridanie(),automatika(),setKontrolaText("kamos"),setZobraziekamosa(`${meno} ${meno2} bol(a) pridaný/á k priateľom.`)}}

                   
                    
            ></Jebko2mobil>
       
     

     


        </div>}
             {/* toto je len mobilna castt */}



{/* toto je tu len ten vrch */}
      {isDesktop && 
      <div className='horekokt333'>

        {/* <div className='skuskamooo'>
     

        </div> */}
        {/* totojeto co sa vysuvan... */}

        {okono &&   
        
        <Animuje 
               otovrene={otovrene}
              setOtvorene={setOtvorene}
              data={data}
              
              setVysuvam ={setVysuvam}
              vysuvam ={vysuvam}
                recencie = {recencie}

                // Hodnotenia
                notakze = {<>
                  {data.map((item) => {
            // console.log(data2[0]);
            const abytovobec = data2[0]
            console.log(item);
            
            

            return (
              <>
              {kontrolaBloku && <Blokujme
            odblokovat = {() => odblokovanie()}
            ></Blokujme>}


             <Karta2
              uzivatel = {() => {handleClick2(item.id),setOtvorene2("profil"),setFarba(6),setOtvorene("profil")}}
                sytle={{border:"var(  --border)"}}
                key={item.id}          // vždy pridaj key
                hodnotim={item.hodnotim}
                name={item.meno}
                role={item.klientMeno}
                company={item.email}
                text={item.popisek}
                hodnotenie={item.klientHodnotenieVlaste}
                rating={3}
                priezvisko={item.priezvisko}
                image={item.fotka}  // správne použitie obrázku

                 apartamNazov = {abytovobec.name}
                        krajina = {abytovobec.krajina}
                        kraj = {abytovobec.kraj}
                        mesto = {abytovobec.location}
                            klikamm = {() =>funkce(abytovobec.id)}
              />
              
              
              </>
              
             
            );
          })}
                
                </>}
                // Hodnotenia


                // Recenzie
                tklllook =   {recencie.map((item) => {
                   

                    const byt = apartmany.find(polozka => polozka.id === item.kdetobolo)
                    //  console.log(byt);
                     console.log(byt);
                     

                    return (
                      <>
                        {kontrolaBloku && <Blokujme
            odblokovat = {() => odblokovanie()}
            ></Blokujme>}
             <Karta2
                      sytle={{border:"var(  --border)"}}
                        klikamm = {() =>funkce(byt.id)}
                        key={uzivatel.id}
                        name={uzivatel.meno}
                        priezvisko={uzivatel.priezvisko}
                        image={uzivatel.fotka}
                        text={item.takasi}
                        hodnotim={item.ohodnotenie}
                        hodnotenie={item.ohodnotenie}
                        company={item.email}
                        apartamNazov = {byt.name}
                        krajina = {byt.krajina}
                        kraj = {byt.kraj}
                        mesto ={byt.location}
                      />
                      </>
                     
                    );
                  })}
                // Recenzie


                // bloky
//                 blokyy = {<>

//                 {okolo.length === 0 &&   <div className='tujepriateliaaa'>
//                  <div className='VYTVOERTETEXT2'>
//                       <div style={{ textAlign: "center" }}>
//                         {`Žiadny zablokovaný `}
//                         <span
//                           className='pisemnkolentakm'
//                           onClick={() =>    
//                                             navigate("/Konverzacie")}
//                         >
//                           používatelia
//                         </span>
//                       </div>
//                     </div>

//               </div>}

//                {okolo.map((item) => 
//                 <Karta2
//                 notakzee = {<div className='okiinknakka'><i class='bx bx-block' ></i></div>}
//                 apartamNazov = "Odstrániť zo zablokovaných"
//                 lentooooolllz = {{display:"none"}}
//                 klikamm = {() => {
//                   setOkolo(prev => prev.filter(polozka => polozka.ide != item.ide )),
//                   console.log("ko")
//                   automatika()
//                   setKontrolaText("kamosOdstranieeni")
// setZobraziekamosa(<div className='horeeedoelnicvi'><span>{item.klientMeno} {item.klientPriezvisko} nie je vas priatel</span></div>)
                  
//                 }}
//                 sytle={{height:"fit-content"}}
//                 uzivatel = {() => navigate(`/Profil/${item.ide}`)}
//                 nastavenietextu = {{
//                     display: '-webkit-box',
//                     WebkitBoxOrient: 'vertical',
//                     WebkitLineClamp: 2,
//                     overflow: 'hidden',
//                     textOverflow: 'ellipsis',

//                                   }}
//                  key={item.id}          // vždy pridaj key
//                 hodnotim={item.hodnotim}
//                 name={item.klientMeno}
//                 role={item.klientMeno}
//                 company={item.email}
//                 text={""}
//                 hodnotenie={item.klientHodnotenieVlaste}
//                 rating={3}
//                 priezvisko={item.klientPriezvisko}
//                 image={item.klientFotky} 
//                 ></Karta2>


//                 )}

                
                
//                 </>}
                  // bloky

                     // tu je info len co a ako
                lppaccco = { 

                  <>
                                     {kontrolaBloku && <Blokujme
            odblokovat = {() => odblokovanie()}
            ></Blokujme>}

             <Lengrind2


                kontrolaPraitelov = {kontrolaPraitelov}
                kontrolaBloku = {kontrolaBloku}

                          fotka = {uzivatel.fotka}
                          meno43 ={uzivatel.meno}
                          prezvisko32 = {uzivatel.priezvisko}
                           popisek = {uzivatel.email}
                          cislo1 ={uzivatel.pocethodnoteteni}
                          cislo2 = {uzivatel.pocetrecenzie}
                          uzivatel = {uzivatel}
       
                ></Lengrind2>
                  
                  </>
                  
                  


                  }
                   // tu je info len co a ako

              // tu je info len co a ako
               detailyoko = {  

                <>
                {kontrolaBloku && <Blokujme
            odblokovat = {() => odblokovanie()}
            ></Blokujme>}

            {kontrolaBloku === false  && 
            <div className='tujepriateliaaa222'>

                 <div className='tujepriateliaaa222' style={{position:"relative"}}>
                <div className='vrcholecekokoksss45555' >

            
                  <Ludiakolonka2
                  style={{width: "fit-content",padding:"0px 10px 0px 0px"}}
                  totojetocosahybe = {{display:"none"}}
                   fotka={uzivatel.fotka}
                   teext1 = {uzivatel.meno}
                text3 = {uzivatel.priezvisko}
                text2 =  {uzivatel.kdebyva}
                text4 = {uzivatel.lokalita}


               
              
               
                ></Ludiakolonka2>


                <div className='maeloknoinstagramove'>
                  <Ukazovatelko
                  onClick = {() => openInstagram()}
                  ><FiTwitter   style={{color:"var(--farba-cierna)",fontSize:"15px"}}/></Ukazovatelko>

                  <Ukazovatelko
                      onClick = {() => openInstagram()}
                  ><FaInstagram   style={{color:"var(--farba-cierna)",fontSize:"15px"}}/></Ukazovatelko>


                  <Ukazovatelko
                      onClick = {() => openInstagram()}
                  >
                    <RiFacebookCircleLine  style={{color:"var(--farba-cierna)",fontSize:"15px"}}/>
                    </Ukazovatelko>
                </div>

              </div>


              <div className='tujecahtttlaennicviaxxx' ref={referencia}>
                 {najdenekonvefzaacie?.konverzacia?.map((item, index) => (
                    <div key={index}>
                      {item.on && <Konverzacialava
                      onClick = {() => klik(mozno.ide)
                      }
                        fotka = {uzivatel.fotka}
                      > {item.on}</Konverzacialava>}


                      {item.ja && <Konverzaciaprava
                      fotka = {majitel[0].FOTKAMAJITAL}
                         onClick = {() => goToProfil()
                      }
                      >{item.ja}</Konverzaciaprava>}
                    </div>
                  ))}
              </div>


              <div>


                        <div className='vrcholecekokoksss2'>


                           <div className='bielyobalcekokokok'>
                                <div style={{display:"flex",gap:"5px",padding:"0px 10px"}}>

                                  <div className='wrapper89090' style={{padding:"0px"}}
                                
                                  >
                                    <div className='kruzeocekomaly'><i class='bx bx-face' ></i></div>
                                  </div>


                                  <div className='wrapper89090' style={{padding:"0px"}}
                                  // onClick={() => kliknute()}
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
                                


                                  {/* <input 
                                  type="file" 
                                  // ref = {referencia2} 
                                   style={{display:"none"}}
                                    onChange={(e) => {
                                                      const vybrany = e.target.files[0]
                                                      setFile(vybrany)
                                                      console.log(vybrany)
                                                    }}
                                  /> */}


                                  <input 
                                    ref={referencia3}
                                    className='inputekckokokodsvnasdj'
                                    value={file}
                                    onChange={e => setFile(e.target.value)}
                                    placeholder="Napíš mi správu..."type="text" name="" id="" />

                                  <div className='wrapper89090'  onClick={() => funkcia()}>
                                    <div style={{height:"35px",width:"35px",backgroundColor:"var(--farba-main)",borderRadius:"99px",
                                      color:"white",display:"flex",alignItems:"center",justifyContent:"center"
                                            }} >
                                        <i class='bx bxs-paper-plane' ></i>
                                    </div>

                                  </div>




                            </div>
                            
                        </div>
                
              </div>

                

             

             
              </div>
                {/* <Lengrind
                celok = {celok}
                ></Lengrind> */}

             
              </div>
            }
            
                
                </>

               }
              // tu je info len co a ako



              // kamosi a ludia
                priatelaiiinfo =   {finall.map((item) => {
        
                 
                
                    return (

                      <>
                                 {kontrolaBloku && <Blokujme
            odblokovat = {() => odblokovanie()}
            ></Blokujme>}
             <Karta2
                        key={item.id}
                        notakzee={
                          <div className="okiinknakka">
                            <i className="bx bx-heart"></i>
                          </div>
                        }
          
                        lentooooolllz={{ display: "none" }}
                        
                        sytle={{ height: "fit-content" }}

                        uzivatel={() => {navigate(`/Profil/${item.ide}`),setOtvorene("profil"),setOtvorene2("profil"),setFarba(6)}}


                        // setOtvorene2("profil"),
                        //   setUlozit("upravit")
                        nastavenietextu={{
                          display: "-webkit-box",
                          WebkitBoxOrient: "vertical",
                          WebkitLineClamp: 2,
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        }}
                        hodnotim={item.hodnotim}
                        name={item.klientMeno}
                        role={item.klientMeno}
                        company={item.email}
                        text={item.omne}
                        hodnotenie={item.klientHodnotenieVlaste}
                        rating={3}
                        priezvisko={item.klientPriezvisko}
                        image={item.klientFotky}
                      />
                      
                      
                      </>
                     
                    );
                  })}
                   // kamosi a ludia
              


            

       

               ></Animuje>}

               
              
                  {/* totojeto co sa vysuvan... */}
            
            <Jebkouzivatel
            kontrolaBloku = {kontrolaBloku}
            kontrolaPraitelov = {kontrolaPraitelov}


            farba = {farba}
            setFarba = {setFarba}
            superhostile = {superhostile}
           
            bloknutypocet = {bloknutypocet}
            popisek = {popisek}
            cislo1= {cislo1}
            cislo2= {cislo2}
            zdielat2 = {zdielat2}
            zdielat3 = {zdielat3}
            zdielat4 = {zdielat4}
            ing2  = {ing2}
            fb2 = {fb2}
            link4 = {link4}
            pocetkamosov = {pocetkamosov}

            odhlasenie = {() => {odblokovanie(),automatika(),setKontrolaText("pridaniekamosa"),
                 setUkazkameno(<div>{uzivatel.meno} {uzivatel.priezvisko} je odblokovany</div>)}}


            odhlaseniebloko = {() => {pridaniebloku(),automatika()}}

            
             odstranit = {() => {odstranenie(),automatika(),setKontrolaText("odsraneenipriatela"),
               setUkazkameno(<div>{uzivatel.meno} {uzivatel.priezvisko} nie je vas priatel</div>)}}



             pradanie = {() => {pridanie(),automatika(),setKontrolaText("pridaniekamosa"),
             setUkazkameno(<div>{uzivatel.meno} {uzivatel.priezvisko} je vas priatel</div>)} }


             pridaniekamosa

            git2 = {git2}
                    meno = {meno}
                    recencie = {recencie}
                    email = {email}
                    prezvisko = {prezvisko}
                    fotka = {fotak}
                    textkratky = {vyhoda1}
                    komplexnytext = {komplexnytext}

                    profil = {() =>
                      {
                       if (okono) {
                            setVysuvam(true)
                            setOtvorene("profil")
                            setFarba(6)
                      }else {
                          setOtvorene2("profil"),setFarba(6)
                          setUlozit("upravit")
                          
                          // setOtvorene2("blok")

                      }

                    }
                     }

                     
                    detaili = {() => {
                       if (okono) {
                            setVysuvam(true)
                            setOtvorene("detail")
                            setFarba(5)
                      }else {
                          setOtvorene2("detail"),setFarba(5)
                          setUlozit("ulozit")
                          // setOtvorene2("blok")

                      }

                    }}
                    

                      
                     bloknutyklick = {() => {

                      if (okono) {
                            setVysuvam(true)
                            setOtvorene("blok")
                      }else {
                          setOtvorene2("blok"),setFarba(4)

                      }}}

                    hodnotenie = {() => {
                      setFarba(1)
                      if (okono) {
                            setVysuvam(true)
                            setOtvorene("Hodnotenia")
                      }else {
                        setOtvorene2("Hodnotim")

                      }}}

                    Lokalituzobraziť = {() => 
                       {
                       if (okono) {
                            setVysuvam(true)
                            setOtvorene("Lokalituzobraziť")
                            setFarba(3)
                      }else {
                         setOtvorene2("Lokalituzobraziť"),setFarba(3)

                      }

                    }}
                    ubytovanie = {() => setOtvorene2()}
                    recenzie = {() => {
                       setFarba(2)
                      if (okono) {
                            setVysuvam(true)
                            setOtvorene("Recenzie")
                      }else {
                        setOtvorene2("Recenzie")

                      }
                  
                   
                    }}
    
                    
            ></Jebkouzivatel>
       
    
 
        
        
     

        
        <div className="textovacaskhiu344"  
        style={{position:"relative",

          padding: kontrolaBloku ? "0px" :"10px",
          overflow:kontrolaBloku ? "hidden" :"auto"
          }}>
            {kontrolaBloku && <Blokujme
            odblokovat = {() => odblokovanie()}
            ></Blokujme>}

          <div className='tusascrolujearenderujem'>
           
              

            {otovrene2 === "Hodnotim" && 
            <>
           {data.map((item) => {
            // console.log(data2[0]);
            const abytovobec = data2[0]
            console.log(item);
            
            

            return (
              <Karta2
              uzivatel = {() => {handleClick2(item.id),setOtvorene2("profil"),setFarba(6)}}
                sytle={{border:"var(  --border)"}}
                key={item.id}          // vždy pridaj key
                hodnotim={item.hodnotim}
                name={item.meno}
                role={item.klientMeno}
                company={item.email}
                text={item.popisek}
                hodnotenie={item.klientHodnotenieVlaste}
                rating={3}
                priezvisko={item.priezvisko}
                image={item.fotka}  // správne použitie obrázku

                 apartamNazov = {abytovobec.name}
                        krajina = {abytovobec.krajina}
                        kraj = {abytovobec.kraj}
                        mesto = {abytovobec.location}
                            klikamm = {() =>funkce(abytovobec.id)}
              />
            );
          })}
                        
           
              </> }


               {otovrene2 === "Recenzie" && 
               <>
                  {recencie.map((item) => {
                   

                    const byt = apartmany.find(polozka => polozka.id === item.kdetobolo)
                    //  console.log(byt);
                     console.log(byt);
                     

                    return (
                      <Karta2
                      sytle={{border:"var(  --border)"}}
                        klikamm = {() =>funkce(byt.id)}
                        key={uzivatel.id}
                        name={uzivatel.meno}
                        priezvisko={uzivatel.priezvisko}
                        image={uzivatel.fotka}
                        text={item.takasi}
                        hodnotim={item.ohodnotenie}
                        hodnotenie={item.ohodnotenie}
                        company={item.email}
                        apartamNazov = {byt.name}
                        krajina = {byt.krajina}
                        kraj = {byt.kraj}
                        mesto ={byt.location}
                      />
                    );
                  })}
               </>}

               {otovrene2 === "Poslaťsprávu" && 
               <>
               
               </>}

               {otovrene2 === "Lokalituzobraziť" && 
               <>
              <div className='tujepriateliaaa' >

               
              {finall.map((item) => {
                 console.log(item);
                 
                
                    return (
                      <Karta2
                        key={item.id}
                        notakzee={
                          <div className="okiinknakka">
                            <i className="bx bx-heart"></i>
                          </div>
                        }
                        // apartamNazov="Odstrániť z priateľov"
                        lentooooolllz={{ display: "none" }}
                        // klikamm={() => {
                        //   setPriatelia(prev =>
                        //     prev.filter(polozka => polozka.ide !== item.ide)
                        //   );
                        //   console.log("ko");
                        //   automatika();
                        //   setKontrolaText("kamosOdstranieeni");
                        //   setZobraziekamosa(
                        //     <div className="horeeedoelnicvi">
                        //       <span>
                        //         {item.klientMeno} {item.klientPriezvisko} nie je váš priateľ
                        //       </span>
                        //     </div>
                        //   );
                        // }}
                        sytle={{ height: "fit-content" }}

                        uzivatel={() => {navigate(`/Profil/${item.ide}`),setOtvorene2("profil"),setFarba(6)}}


                        // setOtvorene2("profil"),
                        //   setUlozit("upravit")
                        nastavenietextu={{
                          display: "-webkit-box",
                          WebkitBoxOrient: "vertical",
                          WebkitLineClamp: 2,
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        }}
                        hodnotim={item.hodnotim}
                        name={item.klientMeno}
                        role={item.klientMeno}
                        company={item.email}
                        text={item.omne}
                        hodnotenie={item.klientHodnotenieVlaste}
                        rating={3}
                        priezvisko={item.klientPriezvisko}
                        image={item.klientFotky}
                      />
                    );
                  })}

              </div>
              
               </>}
              

               {otovrene2 === "profil" && 
               <>
              <div className='tujepriateliaaa222'>

                <Lengrind2


                kontrolaPraitelov = {kontrolaPraitelov}
                kontrolaBloku = {kontrolaBloku}

                          fotka = {uzivatel.fotka}
                          meno43 ={uzivatel.meno}
                          prezvisko32 = {uzivatel.priezvisko}
                           popisek = {uzivatel.email}
                          cislo1 ={uzivatel.pocethodnoteteni}
                          cislo2 = {uzivatel.pocetrecenzie}
                          uzivatel = {uzivatel}
       
                ></Lengrind2>

              </div>
              
               </>}

{/* tu dava chat nic ine  */}
               {otovrene2 === "detail" && 
               <>
              <div className='tujepriateliaaa222' style={{position:"relative"}}>
                <div className='vrcholecekokoksss45555' >

            
                  <Ludiakolonka2
                  style={{width: "fit-content",padding:"0px 10px 0px 0px"}}
                  totojetocosahybe = {{display:"none"}}
                   fotka={uzivatel.fotka}
                   teext1 = {uzivatel.meno}
                text3 = {uzivatel.priezvisko}
                text2 =  {uzivatel.kdebyva}
                text4 = {uzivatel.lokalita}


                // podmienkaaa = {lentu}

                //   onMouseEnter2 = {() => setLentu(true)}
                // onMouseLeave2 = {() => setLentu(false)}


                // lentu,setLentu


                //    podminkkak2 = {najdem}
                //   srdieckoko = {{display:"none"}}
                //    silooook = {{display:"none"}}
                   
                //   sprava={() => klik(mozno.ide)}
                //   textkamos = {najdem ? "Odstrániť z priateľov" : "Pridať do priateľov"}
                // obmedzit={() => obmezim()}
                
                // kamos={() => funkciaee()}


                // zdielat={() => formular()}
                // zablokovat={() => formular()}
                // pouzivat={() => formular()}
                 
                  
                // fotecakkklentak = {{
                //   height:"50px",
                //   width:"50px",
                // }}
               
                
            
                // style = {{flex:1,height:"100%" ,   padding:"0px",}}
              
               
                ></Ludiakolonka2>


                <div className='maeloknoinstagramove'>
                  <Ukazovatelko
                  onClick = {() => openInstagram()}
                  ><FiTwitter   style={{color:"var(--farba-cierna)",fontSize:"15px"}}/></Ukazovatelko>

                  <Ukazovatelko
                      onClick = {() => openInstagram()}
                  ><FaInstagram   style={{color:"var(--farba-cierna)",fontSize:"15px"}}/></Ukazovatelko>


                  <Ukazovatelko
                      onClick = {() => openInstagram()}
                  >
                    <RiFacebookCircleLine  style={{color:"var(--farba-cierna)",fontSize:"15px"}}/>
                    </Ukazovatelko>
                </div>

              </div>


              <div className='tujecahtttlaennicviaxxx' ref={referencia}>
                 {najdenekonvefzaacie?.konverzacia?.map((item, index) => (
                    <div key={index}>
                      {item.on && <Konverzacialava
                      onClick = {() => klik(mozno.ide)
                      }
                        fotka = {uzivatel.fotka}
                      > {item.on}</Konverzacialava>}


                      {item.ja && <Konverzaciaprava
                      fotka = {majitel[0].FOTKAMAJITAL}
                         onClick = {() => goToProfil()
                      }
                      >{item.ja}</Konverzaciaprava>}
                    </div>
                  ))}
              </div>


              <div>


                        <div className='vrcholecekokoksss2'>


                           <div className='bielyobalcekokokok'>
                                <div style={{display:"flex",gap:"5px",padding:"0px 10px"}}>

                                  <div className='wrapper89090' style={{padding:"0px"}}
                                
                                  >
                                    <div className='kruzeocekomaly'><i class='bx bx-face' ></i></div>
                                  </div>


                                  <div className='wrapper89090' style={{padding:"0px"}}
                                  // onClick={() => kliknute()}
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
                                


                                  {/* <input 
                                  type="file" 
                                  // ref = {referencia2} 
                                   style={{display:"none"}}
                                    onChange={(e) => {
                                                      const vybrany = e.target.files[0]
                                                      setFile(vybrany)
                                                      console.log(vybrany)
                                                    }}
                                  /> */}

                                  <input 
                                    ref={referencia2}
                                    className='inputekckokokodsvnasdj'
                                    value={file}
                                    onChange={e => setFile(e.target.value)}
                                    placeholder="Napíš mi správu..."type="text" name="" id="" />

                                  <div className='wrapper89090'  onClick={() => funkcia()}>
                                    <div style={{height:"35px",width:"35px",backgroundColor:"var(--farba-main)",borderRadius:"99px",
                                      color:"white",display:"flex",alignItems:"center",justifyContent:"center"
                                            }} >
                                        <i class='bx bxs-paper-plane' ></i>
                                    </div>

                                  </div>
                            </div>
                            
                        </div>
                
              </div>

                

             

             
              </div>
              
               </>}


         
          </div>
       


        </div>



        


      </div>}
{/* toto je tu len ten vrch */}

      
      {/* <Linka></Linka> */}
      <div className='dolekokt'>
    
         <Profilswiper
                      textMobile = {`Ubytovanie od ${meno} ${meno2}`}
                      textTablet = {`Ubytovanie používateľa ${meno} ${meno2}`}
                     textDesktop = {`Ubytovanie, ktoré  ponuka ${meno} ${meno2}`}

                      textMobileMALY = {`Ubytovanie sa nachadza v oblasti ${loklitkakdeje}`}
                      textTabletMALY = {`Ubytovanie sa nachadza v oblasti ${loklitkakdeje}`}
                      textDesktopMALY = {`Ubytovanie sa nachadza v oblasti ${loklitkakdeje}`}
                      data={data2}
                  ></Profilswiper>
    

        
      </div>
      
      

 
    </div>
    
          
     
  


   
   
   </>
  )
}

export default Profil2


