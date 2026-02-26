import './profiltemplate.css'
import Linka from '../linka/linka'
import React, { useState,useEffect,useRef } from 'react'
import Footer from '../../pages/footer/footer'

import ProfileCard from '../../naviac/ProfileCard/ProfileCard'
import {ikonyPonuk} from '../ponuka/ponuka'

import {ludia,majitel} from '../zoznamosoby/zoznamosoby'
import Profilswiper from '../../naviac/profilswiper/profilswiper'

import {TestimonialCard} from '../../naviac/TestimonialCard/TestimonialCard'
import Ukazovatelko from '../ukazovatelko/ukazovatelko'
import Templatepage from  '../../pages/tempaltepage/templatepage'
import { useMediaQuery } from "react-responsive";
import Ikonypage from '../../naviac/ikonypage/ikonypage'

import { MdOutlineMail } from "react-icons/md";
import Animuje from '../../naviac/animujem/animuje'
import ProfileCard2 from '../ProfileCardmobile/ProfileCardmobile'
import { LuPhone } from "react-icons/lu";
import Jebat from '../../naviac/jebat/jebat'

import Oknopop from '../../naviac/oknopop/oknopop'
import { color } from 'framer-motion'

import {Karta2} from '../../naviac/karta2/karta2'
// 
import Informacnyowerla from '../../naviac/informacnyowerlap/informacnyowerla'
import Overlapiceko from '../../naviac/mobilnyoweraal/mobilnyoweraal'
import {apartmany} from '../../naviac/fuzzy/fuzzy'
import { useNavigate } from 'react-router-dom';




import { MyContext } from '../../naviac/providertelefon/providertelefon'
import { GlobalContext } from '../../naviac/reactcontext/reactcontext'
import { useContext } from "react";
import Jebko2 from '../../naviac/jebko2/jebko2'
import {TestimonialCard2} from '../../naviac/TestimonialCard2/TestimonialCard2'

import Maleokno from '../../pages/rezervacie/formularovacast/maleokno/maleokno'
import Maleoknodvojka from '../../naviac/maleoknodvojka/maleoknodvojka'
import Lengrind from '../../naviac/lengrind/lengrind'
 
import Lengrindnooo from '../../naviac/lengrindnooo/lengrindnooo'
import Lengriduprava from '../../naviac/lengriduprava/lengriduprava'

import Informaciadvaa from '../../naviac/informaciadvaa/informaciadvaa'

import LengrindPROFIL from '../../naviac/lengrindPROFIL/lengrindPROFIL'


const Profiltemplate = ({lovvns,popisek,cislo1,cislo2,celok,superhostile,bloknutypocet,pocetkamosov,vyhoda1,komplexnytext,popiske,recencie,sprava,prezvisko,twiter,link,tel,email,data2,facebok,ig,fotak,pozadie,meno,meno2,textpod,data,lokalita,malytext,hodnotenie,recenzie,titul,poloha,git,ing,fb,link2,block,znacka,zdielat,ing2,fb2,link4,git2,zdielat2,zdielat3,zdielat4,uzivatelMENO,uzivatelEMAIL,uzivatelFOTKA,uzivatelPRIEZVISKO}) => {

 const { suborOpen,setSuborOpen,obsahOpen,setObsahOpen,subor,setSubor,nazovSuboru,setNazovSuboru,unikattne,setUnikatne,priatelia,setPriatelia,zobraziekamosa,setZobraziekamosa,okolo,setOkolo,lepsiedalej,setLepsiedalej,obsah,setObsah,open,setOpen,farba,setFarba,ulozit,setUlozit} = useContext(MyContext);

 const { lajknute,texdo,setTextdo,kontext,setKontext,mala,setMala,  kontorla,setKontrola,kontorlaText,setKontrolaText,automatika } = useContext(GlobalContext);


    const navigate = useNavigate()



  const isMobile = useMediaQuery({ maxWidth: 750 });
  const isDesktop = useMediaQuery({ minWidth: 750 });
  const okono = useMediaQuery({ maxWidth: 950 });
  const okono2 = useMediaQuery({ minWidth: 1350 });


  const[otovrene,setOtvorene] = useState(null)

  useEffect(() => {
    setFarba(6)
  },[])
  const[otovrene2,setOtvorene2] = useState("profil")
  const[hover,setHover] = useState(1)
  const[klik,setKlik] = useState(1)

  const referencia1 = useRef(null)

  const[vysuvam,setVysuvam] = useState(null)

// console.log(recencie);



  


  // 
  const goToProfil = (id) => {
    navigate(`/Profil/${id}`);
    setObsah("detail")
  };


 

  const takze = (no) => apartmany.find(item => item.id === no)

  // console.log(takze);
  
  
  const funkce =  (no) =>  navigate(`/Detail/${no}`)
    // onClick54 = {() =>} 

// const meno32 = (no) =>   apartmany.filter(item => item.id === no ? console.log("mam") : console.log("nemam")

//  )

// console.log(meno32);

console.log(data);


useEffect(() => {
  console.log("kokokok");
  
},[lepsiedalej])




    const handleClick2 = (parameter) => {

        navigate(`/Profil/${parameter}`);
    }

    // console.log(priatelia);
    
    const formular = () => {
  setSuborOpen(true)
  setObsahOpen("formular")
}



 const goToUpozornenia = () => {
    navigate("/Upozornenia");
  };
  return (
    <>


    {isMobile &&  
<>
<Informaciadvaa

      show = {open}

      setOtvaram = {setOpen}
      klik = {() => {setOpen(false),setObsah("") }}
      // klikacka = {console.log("koarrrkmrm")}


    ></Informaciadvaa> 



     <Overlapiceko
     klik = {() => {setOpen(null),setObsah("")}}
      show = {open}
     >
      <div className='wrappereceskkko'>
       
       
          {obsah === "Hodnotenie" && 
          <div className='totosasroclujeaz'> 
           <div className='totojewrappekokmmno'>


          {data.map((item) => (
                  <TestimonialCard
                  style ={{height:"90px"}}
                  hodnotim = {item.hodnotim}
                    key={item.id}          // vždy pridaj key
                    name={item.klientMeno}
                    role={item.klientMeno}
                    company={item.email}
                    text={item.klientHodnotenie}
                    hodnotenie = {item.klientHodnotenieVlaste}
                    rating={3}
                    priezvisko ={item.klientPriezvisko}
                    image={item.klientFotky}  // správne použitie obrázku
                    uzivatel = {() => goToProfil(item.ide)}
                  />
                ))}
                </div>
            </div> }



          {obsah === "Recenzie" && 
          <div className='totosasroclujeaz'> 
                   <div className='totojewrappekokmmno'>
          {recencie.map((item) => {
                    takze(item.id)                    
                    const nazov = takze
                     const apartman2 = takze(item.byt); // tu dostaneš objekt
                    console.log(apartman2);           // vypíše celý objekt
 
                    
                    return (
                      <Karta2
                      sytle={{border:"var(  --border)"}}
                        klikamm = {() =>funkce(apartman2.id)}
                        key={item.id}
                        name={item.klientMeno}
                        priezvisko={item.klientPriezvisko}
                        image={item.klientFotky}
                        text={item.klientHodnotenie}
                        hodnotim={item.hodnotim}
                        hodnotenie={item.klientHodnotenieVlaste}
                        company={item.email}
                        apartamNazov = {apartman2.name}
                        krajina = {apartman2.krajina}
                        kraj = {apartman2.kraj}
                        mesto ={apartman2.location}
                      />
                    );
                  })}
                  </div>
            </div>
          }




        {obsah === "priatelia" && 
        <div className='totosasroclujeaz'>
             <div className='totojewrappekokmmno'>

            {priatelia.length === 0 && <div className='totojedolezitevelkmi'>

                  <div className='VYTVOERTETEXT2'>
                      <div style={{ textAlign: "center" }}>
                        {`Pridajte ľudí do zoznamu `}
                        <span
                          className='pisemnkolentakm'
                          onClick={() =>    
                                            navigate("/Konverzacie")}
                        >
                          priatelia
                        </span>
                      </div>
                    </div>



 
                  
                </div> }
                {priatelia.map((item) => 
                <Karta2
                      sytle={{height:"fit-content",padding:"10px 10px 30px 10px"}}
                notakzee = {<div className='okiinknakka'><i class='bx bx-heart'></i></div>}
                apartamNazov = "Odstrániť z priateľov"
                lentooooolllz = {{display:"none"}}
                klikamm = {() => {
                  setPriatelia(prev => prev.filter(polozka => polozka.ide != item.ide )),
                  console.log("ko")
                  automatika()
                  setKontrolaText("kamosOdstranieeni")
setZobraziekamosa(<div className='horeeedoelnicvi'><span>{item.klientMeno} {item.klientPriezvisko} nie je vas priatel</span></div>)
                  
                }}
         
                uzivatel = {() => navigate(`/Profil/${item.ide}`)}
                nastavenietextu = {{
                    display: '-webkit-box',
                    WebkitBoxOrient: 'vertical',
                    WebkitLineClamp: 2,
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',

                                  }}
                 key={item.id}          // vždy pridaj key
                hodnotim={item.hodnotim}
                name={item.klientMeno}
                role={item.klientMeno}
                company={item.email}
                text={item.omne}
                hodnotenie={item.klientHodnotenieVlaste}
                rating={3}
                priezvisko={item.klientPriezvisko}
                image={item.klientFotky} 
                ></Karta2>


                )}
            </div>

        </div> }




        {obsah === "zablokovany" && 
        <div className='totosasroclujeaz'>
              {okolo.length === 0 &&   <div className='tujepriateliaaa'>
                 <div className='VYTVOERTETEXT2'>
                      <div style={{ textAlign: "center" }}>
                        {`Žiadny zablokovaný `}
                        <span
                          className='pisemnkolentakm'
                          onClick={() =>    
                                            navigate("/Konverzacie")}
                        >
                          používatelia
                        </span>
                      </div>
                    </div>

              </div>}

               {okolo.map((item) => 
                <Karta2
                notakzee = {<div className='okiinknakka'><i class='bx bx-block' ></i></div>}
                apartamNazov = "Odstrániť zo zablokovaných"
                lentooooolllz = {{display:"none"}}
                klikamm = {() => {
                  setOkolo(prev => prev.filter(polozka => polozka.ide != item.ide )),
                  console.log("ko")
                  automatika()
                  setKontrolaText("kamosOdstranieeni")
setZobraziekamosa(<div className='horeeedoelnicvi'><span>{item.klientMeno} {item.klientPriezvisko} nie je vas priatel</span></div>)
                  
                }}
                sytle={{height:"fit-content"}}
                uzivatel = {() => navigate(`/Profil/${item.ide}`)}
                nastavenietextu = {{
                    display: '-webkit-box',
                    WebkitBoxOrient: 'vertical',
                    WebkitLineClamp: 2,
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',

                                  }}
                 key={item.id}          // vždy pridaj key
                hodnotim={item.hodnotim}
                name={item.klientMeno}
                role={item.klientMeno}
                company={item.email}
                text={"oko"}
                lenfarbatexiku = {{color:"var(--farba-biela)"}}
                hodnotenie={item.klientHodnotenieVlaste}
                rating={3}
                priezvisko={item.klientPriezvisko}
                image={item.klientFotky} 
                ></Karta2>


                )}

          

        </div> }





         {obsah === "detail" && 
          <div className='totosasroclujeaz'> 
          {/* <span>lll</span> */}

              <Lengrind
                ulozit = {ulozit}
                setUlozit = {setUlozit}
                farba = {farba}
                setFarba = {setFarba}
                celok = {celok}
                ></Lengrind>

        
                   
            </div>
          }


         {obsah === "dalsei" && 
          <div className='totosasroclujeaz'>
            {/* <span>ppp</span> */}


             <LengrindPROFIL
                          fotka = {fotak}
                          meno43 = {meno}
                          prezvisko32 = {prezvisko}
                           popisek = {popisek}
        cislo1 = {cislo1}
        cislo2 = {cislo2}
                farba = {farba}
                setFarba = {setFarba}
                celok = {celok}
                ulozit = {ulozit}
                setUlozit = {setUlozit}
                ></LengrindPROFIL>


       
              </div>
          }

       
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
        
        <Jebko2
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

                        ulozeneee = {() =>{setFarba(69),goToUpozornenia()}}

                        
                    komplexnytext = {komplexnytext}
                    // profil={() => {setOpen(true),setFarba(6),setObsah("dalsei")}}
                    uzjaneveim={() => {setOpen(true),setObsah("detail"),setFarba(5),  setUlozit("ulozit")}}
                    bloknutyklick={() => {setOpen(true),setObsah("zablokovany"),setFarba(4)}}
                    hodnotenie={() => {setOpen(true),setObsah("Hodnotenie"),setFarba(1)}}

                    Lokalituzobraziť={() => {setOpen(true),setObsah("priatelia"),setFarba(3)}}

                    
                    recenzie={() => {setOpen(true),setObsah("Recenzie"),setFarba(2)}}
                    picauprava = {() => {setOpen(true),setFarba(6),setObsah("dalsei"),setUlozit("upravit")}}
                   
                    
            ></Jebko2>
       
     

     


        </div>}
             {/* toto je len mobilna castt */}


      {isDesktop && 

      
      <div className='horekokt333'>

        {/* <div className='skuskamooo'>
     

        </div> */}
        {/* totojeto co sa vysuvan... */}

        {okono &&   <Animuje
               otovrene={otovrene}
              setOtvorene={setOtvorene}
              data={data}
              
              setVysuvam ={setVysuvam}
              vysuvam ={vysuvam}

                recencie = {recencie}

                profil = {<>diikok</>}
                
                notakze = {<>{recencie.map((item) => {
                    takze(item.id)                    
                    const nazov = takze
                     const apartman2 = takze(item.byt); // tu dostaneš objekt
                    console.log(apartman2);           // vypíše celý objekt
 
                    
                    return (
                      <Karta2
                      sytle={{border:"var(  --border)"}}
                        klikamm = {() =>funkce(apartman2.id)}
                        key={item.id}
                        name={item.klientMeno}
                        priezvisko={item.klientPriezvisko}
                        image={item.klientFotky}
                        text={item.klientHodnotenie}
                        hodnotim={item.hodnotim}
                        hodnotenie={item.klientHodnotenieVlaste}
                        company={item.email}
                        apartamNazov = {apartman2.name}
                        krajina = {apartman2.krajina}
                        kraj = {apartman2.kraj}
                        mesto ={apartman2.location}
                      />
                    );
                  })}</>}


                tklllook = {<>
                 {data.map((item) => {
            console.log(item); // vypíše celý objekt do konzoly

            return (
              <TestimonialCard
              uzivatel = {() => handleClick2(item.ide)}
                sytle={{border:"var(  --border)"}}
                key={item.id}          // vždy pridaj key
                hodnotim={item.hodnotim}
                name={item.klientMeno}
                role={item.klientMeno}
                company={item.email}
                text={item.klientHodnotenie}
                hodnotenie={item.klientHodnotenieVlaste}
                rating={3}
                priezvisko={item.klientPriezvisko}
                image={item.klientFotky}  // správne použitie obrázku
              />
            );
          })}
                

                </>}
                
                blokyy = {<>

                {okolo.length === 0 &&   <div className='tujepriateliaaa'>
                 <div className='VYTVOERTETEXT2'>
                      <div style={{ textAlign: "center" }}>
                        {`Žiadny zablokovaný `}
                        <span
                          className='pisemnkolentakm'
                          onClick={() =>    
                                            navigate("/Konverzacie")}
                        >
                          používatelia
                        </span>
                      </div>
                    </div>

              </div>}

               {okolo.map((item) => 
                <Karta2
                notakzee = {<div className='okiinknakka'><i class='bx bx-block' ></i></div>}
                apartamNazov = "Odstrániť zo zablokovaných"
                lentooooolllz = {{display:"none"}}
                klikamm = {() => {
                  setOkolo(prev => prev.filter(polozka => polozka.ide != item.ide )),
                  console.log("ko")
                  automatika()
                  setKontrolaText("kamosOdstranieeni")
setZobraziekamosa(<div className='horeeedoelnicvi'><span>{item.klientMeno} {item.klientPriezvisko} nie je vas priatel</span></div>)
                  
                }}
                sytle={{height:"fit-content"}}
                uzivatel = {() => navigate(`/Profil/${item.ide}`)}
                nastavenietextu = {{
                    display: '-webkit-box',
                    WebkitBoxOrient: 'vertical',
                    WebkitLineClamp: 2,
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',

                                  }}
                 key={item.id}          // vždy pridaj key
                hodnotim={item.hodnotim}
                name={item.klientMeno}
                role={item.klientMeno}
                company={item.email}
                text={""}
                hodnotenie={item.klientHodnotenieVlaste}
                rating={3}
                priezvisko={item.klientPriezvisko}
                image={item.klientFotky} 
                ></Karta2>


                )}

                
                
                </>}


                lppaccco = {
                   <div className='tujepriateliaaa222'>
                             {/* <div>okoko</div> / */}
                                <Lengriduprava
                          fotka = {fotak}
                          meno43 = {meno}
                          prezvisko32 = {prezvisko}
                           popisek = {popisek}
        cislo1 = {cislo1}
        cislo2 = {cislo2}
                farba = {farba}
                setFarba = {setFarba}
                celok = {celok}
                ulozit = {ulozit}
                setUlozit = {setUlozit}
                ></Lengriduprava>
                   </div>
         
        
              
            
            }



               detailyoko = {  
               
                  <div className='tujepriateliaaa222'>
                    {/* <div>2</div> */}
                    <Lengrindnooo
                ulozit = {ulozit}
                setUlozit = {setUlozit}
                farba = {farba}
                setFarba = {setFarba}
                celok = {celok}
                ></Lengrindnooo>
                    
                    
         
              </div>

             
           }

                // lppaccco = {<div>pikoko</div>}
                priatelaiiinfo = {<>
                 {priatelia.length === 0 && <div className='totojedolezitevelkmi'>

                  <div className='VYTVOERTETEXT2'>
                      <div style={{ textAlign: "center" }}>
                        {`Pridajte ľudí do zoznamu `}
                        <span
                          className='pisemnkolentakm'
                          onClick={() =>    
                                            navigate("/Konverzacie")}
                        >
                          priatelia
                        </span>
                      </div>
                    </div>



 
                  
                </div> }

                 {priatelia.map((item) => 
                <Karta2
                notakzee = {<div className='okiinknakka'><i class='bx bx-heart'></i></div>}
                apartamNazov = "Odstrániť z priateľov"
                lentooooolllz = {{display:"none"}}
                klikamm = {() => {
                  setPriatelia(prev => prev.filter(polozka => polozka.ide != item.ide )),
                  console.log("ko")
                  automatika()
                  setKontrolaText("kamosOdstranieeni")
setZobraziekamosa(<div className='horeeedoelnicvi'><span>{item.klientMeno} {item.klientPriezvisko} nie je vas priatel</span></div>)
                  
                }}
                sytle={{height:"fit-content"}}
                uzivatel = {() => navigate(`/Profil/${item.ide}`)}
                nastavenietextu = {{
                    display: '-webkit-box',
                    WebkitBoxOrient: 'vertical',
                    WebkitLineClamp: 2,
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',

                                  }}
                 key={item.id}          // vždy pridaj key
                hodnotim={item.hodnotim}
                name={item.klientMeno}
                role={item.klientMeno}
                company={item.email}
                text={item.omne}
                hodnotenie={item.klientHodnotenieVlaste}
                rating={3}
                priezvisko={item.klientPriezvisko}
                image={item.klientFotky} 
                ></Karta2>


                )}
                

              
                </>}

       

               ></Animuje>}
              
                  {/* totojeto co sa vysuvan... */}
            
            <Jebat
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
             odhlasenie = {() => formular()}
            git2 = {git2}
                    meno = {meno}
                    recencie = {recencie}
                    email = {email}
                    prezvisko = {prezvisko}
                    fotka = {fotak}
                    textkratky = {vyhoda1}
                    komplexnytext = {komplexnytext}
                    ulozeneee = {() =>{setFarba(69),goToUpozornenia()}}
                    profil = {() =>
                      {
                       if (okono) {
                        
                        console.log("debuggg");
                            setUlozit("upravit")
                        
                            setVysuvam(true)
                            setOtvorene("profil"),setFarba(6)
                      }else {
                          setOtvorene2("profil"),setFarba(6)
                          setUlozit("upravit")
                          // console.log("debuggg");
                     
                          // setOtvorene2("blok")

                      }

                    }
                     }
                    detaili = {() => {
                       if (okono) {
                        console.log("picakk")
                         setUlozit("ulozit")
                            setVysuvam(true)
                            setOtvorene("detail"),setFarba(5)
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
    
                    
            ></Jebat>
       
    
 
        
        
     

        
        <div className="textovacaskhiu344">

          <div className='tusascrolujearenderujem'>

            {otovrene2 === "Hodnotim" && 
            <>
           {data.map((item) => {
            console.log(item.byt);
            
            const naslisme = apartmany.find(polozka => polozka.id === item.byt)
            console.log(naslisme);
            


            return (
              <Karta2
              uzivatel = {() => handleClick2(item.ide)}
                sytle={{border:"var(  --border)"}}
                key={item.id}          // vždy pridaj key
                hodnotim={item.hodnotim}
                name={item.klientMeno}
                role={item.klientMeno}
                company={item.email}
                text={item.klientHodnotenie}
                hodnotenie={item.klientHodnotenieVlaste}
                rating={3}
                priezvisko={item.klientPriezvisko}
                image={item.klientFotky}  // správne použitie obrázku
                apartamNazov = {naslisme.name}
                        krajina = {naslisme.krajina}
                        kraj = {naslisme.kraj}
                        mesto = {naslisme.location}
                            klikamm = {() =>funkce(naslisme.id)}
                // apartamNazov = {apartman2.name}
                //         krajina = {apartman2.krajina}
                //         kraj = {apartman2.kraj}
                //         mesto ={apartman2.location}
              />
            );
          })}
                        
           
              </> }


               {otovrene2 === "Recenzie" && 
               <>
                  {recencie.map((item) => {
                    takze(item.id)                    
                    const nazov = takze
                     const apartman2 = takze(item.byt); // tu dostaneš objekt
                    console.log(apartman2);           // vypíše celý objekt
 
                    
                    return (
                      <Karta2
                      sytle={{border:"var(  --border)"}}
                        klikamm = {() =>funkce(apartman2.id)}
                        key={item.id}
                        name={lepsiedalej.meno}
                        priezvisko={lepsiedalej.priezvisko}
                        image={item.klientFotky}
                        text={item.klientHodnotenie}
                        hodnotim={item.hodnotim}
                        hodnotenie={item.klientHodnotenieVlaste}
                        company={lepsiedalej.email}
                        apartamNazov = {apartman2.name}
                        krajina = {apartman2.krajina}
                        kraj = {apartman2.kraj}
                        mesto ={apartman2.location}
                      />
                    );
                  })}
               </>}

               {otovrene2 === "Poslaťsprávu" && 
               <>
               
               </>}

               {otovrene2 === "Lokalituzobraziť" && 
               <>
              <div className='tujepriateliaaa'>

                {priatelia.length === 0 && <div className='totojedolezitevelkmi'>

                  <div className='VYTVOERTETEXT2'>
                      <div style={{ textAlign: "center" }}>
                        {`Pridajte ľudí do zoznamu `}
                        <span
                          className='pisemnkolentakm'
                          onClick={() =>    
                                            navigate("/Konverzacie")}
                        >
                          priatelia
                        </span>
                      </div>
                    </div>



 
                  
                </div> }
                {priatelia.map((item) => 
                <Karta2
                notakzee = {<div className='okiinknakka'><i class='bx bx-heart'></i></div>}
                apartamNazov = "Odstrániť z priateľov"
                lentooooolllz = {{display:"none"}}
                klikamm = {() => {
                  setPriatelia(prev => prev.filter(polozka => polozka.ide != item.ide )),
                  console.log("ko")
                  automatika()
                  setKontrolaText("kamosOdstranieeni")
setZobraziekamosa(<div className='horeeedoelnicvi'><span>{item.klientMeno} {item.klientPriezvisko} nie je vas priatel</span></div>)
                  
                }}
                sytle={{height:"fit-content"}}
                uzivatel = {() => navigate(`/Profil/${item.ide}`)}
                nastavenietextu = {{
                    display: '-webkit-box',
                    WebkitBoxOrient: 'vertical',
                    WebkitLineClamp: 2,
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',

                                  }}
                 key={item.id}          // vždy pridaj key
                hodnotim={item.hodnotim}
                name={item.klientMeno}
                role={item.klientMeno}
                company={item.email}
                text={item.omne}
                hodnotenie={item.klientHodnotenieVlaste}
                rating={3}
                priezvisko={item.klientPriezvisko}
                image={item.klientFotky} 
                ></Karta2>


                )}
              </div>
              
               </>}
               {otovrene2 === "blok" && 
               <>

                {okolo.length === 0 &&   <div className='tujepriateliaaa'>
                 <div className='VYTVOERTETEXT2'>
                      <div style={{ textAlign: "center" }}>
                        {`Žiadny zablokovaný `}
                        <span
                          className='pisemnkolentakm'
                          onClick={() =>    
                                            navigate("/Konverzacie")}
                        >
                          používatelia
                        </span>
                      </div>
                    </div>

              </div>}

               {okolo.map((item) => 
                <Karta2
                notakzee = {<div className='okiinknakka'><i class='bx bx-block' ></i></div>}
                apartamNazov = "Odstrániť zo zablokovaných"
                lentooooolllz = {{display:"none"}}
                klikamm = {() => {
                  setOkolo(prev => prev.filter(polozka => polozka.ide != item.ide )),
                  console.log("ko")
                  automatika()
                  setKontrolaText("kamosOdstranieeni")
setZobraziekamosa(<div className='horeeedoelnicvi'><span>{item.klientMeno} {item.klientPriezvisko} nie je vas priatel</span></div>)
                  
                }}
                sytle={{height:"fit-content"}}
                uzivatel = {() => navigate(`/Profil/${item.ide}`)}
                nastavenietextu = {{
                    display: '-webkit-box',
                    WebkitBoxOrient: 'vertical',
                    WebkitLineClamp: 2,
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',

                                  }}
                 key={item.id}          // vždy pridaj key
                hodnotim={item.hodnotim}
                name={item.klientMeno}
                role={item.klientMeno}
                company={item.email}
                text={""}
                hodnotenie={item.klientHodnotenieVlaste}
                rating={3}
                priezvisko={item.klientPriezvisko}
                image={item.klientFotky} 
                ></Karta2>


                )}


             
              
               </>}

               {otovrene2 === "profil" && 
               <>
              <div className='tujepriateliaaa222'>
                <Lengrind
                          fotka = {fotak}
                          meno43 = {meno}
                          prezvisko32 = {prezvisko}
                           popisek = {popisek}
        cislo1 = {cislo1}
        cislo2 = {cislo2}
                farba = {farba}
                setFarba = {setFarba}
                celok = {celok}
                ulozit = {ulozit}
                setUlozit = {setUlozit}
                ></Lengrind>

              </div>
              
               </>}

               {otovrene2 === "detail" && 
               <>
              <div className='tujepriateliaaa222'>
                <Lengrind
                ulozit = {ulozit}
                setUlozit = {setUlozit}
                farba = {farba}
                setFarba = {setFarba}
                celok = {celok}
                ></Lengrind>

             
              </div>
              
               </>}


         
          </div>
       


        </div>



        


      </div>}
      
      {/* <Linka></Linka> */}
      <div className='dolekokt'>
    
         <Profilswiper
                      textMobile = {`Ubytovanie od ${meno} ${prezvisko}`}
                      textTablet = {`Ubytovanie používateľa ${meno} ${prezvisko}`}
                     textDesktop = {`Ubytovanie, ktoré  ponuka ${meno} ${prezvisko}`}

                      textMobileMALY = {`Ubytovanie sa nachadza v oblasti ${lovvns}`}
                      textTabletMALY = {`Ubytovanie sa nachadza v oblasti ${lovvns}`}
                      textDesktopMALY = {`Ubytovanie sa nachadza v oblasti ${lovvns}`}
                      data={data2}
                  ></Profilswiper>
    

        
      </div>
      
      

 
    </div>
    
          
      {/* <Footer></Footer> */}

  


   
   
   </>
  )
}

export default Profiltemplate


