import './Detailpagee.css'


import { useParams } from 'react-router-dom'  // <- importujeme hook
import Templatepage from '../tempaltepage/templatepage'
import { useContext, useState, useRef ,useEffect} from "react";
import { MyContext } from '../../naviac/providertelefon/providertelefon'
import Footer from '../footer/footer';
import Posledny from '../../naviac/posledny/posledny'
import { useMediaQuery } from "react-responsive";
import { Link, useNavigate } from "react-router-dom";
import Templatelogika from '../../naviac/templatelogika/templatelogika'
import Uravitlogika from '../../naviac/upravitlogika/upravitlogika'
import Dalsi from '../../naviac/dalsi/dalsi';
import Posledny2 from '../../naviac/posledny2/posledny2'


const Detailpagee = ({stilikak}) => {
  const { id } = useParams()  // <- tu získame parameter z URL
   const navigate = useNavigate();
   const mojaRef = useRef(null);
const [otvorenie, setOtvorenie] = useState(false);
const[abysomvedel,setAbysomvedel] = useState("");

   const { suborOpen,setSuborOpen,obsahOpen,setObsahOpen,subor,setSubor,halava,setHlava} = useContext(MyContext);
//    console.log(subor);

  const isMobile = useMediaQuery({ maxWidth: 1049 });
const isMobile2 = useMediaQuery({ minWidth: 350, maxWidth: 1049 });
const lentqk = useMediaQuery({ maxWidth: 350})
  const isDesktop = useMediaQuery({ minWidth: 1050 });
  const akotobube = useMediaQuery({ minWidth: 510 });
  const akotobube2 = useMediaQuery({ maxWidth: 509 });


   const pretipovanie = Number(id)
// console.log(typeof id);
// console.log(typeof pretipovanie);
const najdeny = subor?.find(item => item.id === pretipovanie)
//    const najdeny =  subor.find(item => item.id===id)
// const najdeny = subor.find(item => item.id === Number(id));
// console.log(id);
// console.log(najdeny.zbierka);

  console.log(abysomvedel); // tu vypíšeš hodnotu do konzoly

const klik = (ale) => navigate(`/Detail/${ale}`);


useEffect(() => {
  const html = document.documentElement;
  const body = document.body;

  const prevHtmlOverflow = html.style.overflow;
  const prevBodyOverflow = body.style.overflow;

  html.style.overflow = "hidden";
  body.style.overflow = "hidden";

  return () => {
    html.style.overflow = prevHtmlOverflow;
    body.style.overflow = prevBodyOverflow;
  };
}, []);

// const novy = () => setSubor(item => item.id === pretipovanie ? {...item,zbierka:item.zbierka.filter(x => x.id != abysomvedel)} :subor )
const novy = (no) => {
  setSubor(prev =>
    prev.map(item =>
      item.id === pretipovanie // alebo Number(id)
        ? {
            ...item,
            zbierka: item.zbierka.filter(x => x.nova44.id !== no)
          }
        : item
    )
  );
  setSuborOpen(false),
  setObsahOpen("")
};


const zatvorenie = () => {setSuborOpen(false),setObsahOpen("")}


const odstranenie = (id) => {
  setSuborOpen(false),
  setObsahOpen("")}


const formular = () => {
  setSuborOpen(true)
  setObsahOpen("formular")
}

const odsrraneniekazda = (no) => {
  setSuborOpen(true)
  setObsahOpen("odsrraneniekazda")
  setHlava(
  <Templatelogika
   klikatelko3 = {{display:"none"}}
           klikatelko = {{display:"none"}}
            text = "Odstranit ubytovanie"
            uprava={{ backgroundColor: "pink" }}
            spodocekosti = {{display:"none"}}
  >
    <Uravitlogika
   input = {{display:"none"}}
            fletextsmall = {{display:"none"}}
            dajhe = {{display:"none"}}
                  focus = {mojaRef}
                  children2  = 
                  {<div style={{width:"100%",height:"45px",display:"flex",justifyContent:"space-between"}}>

                    <div style={{width:"80px",backgroundColor:"var(--farba-main2)",cursor:"pointer",color:"var(--farba-sivaText)",display:"flex",justifyContent:"center",alignItems:"center",borderRadius:"12px",fontSize:"var(  --font-size-base100)"}}
                         onClick={() => {zatvorenie()}}
                    >Zrušit</div>

                    <div
                    style={{width:"110px",backgroundColor:"var(--farba-main)",cursor:"pointer",color:"var(--farba-biela)",display:"flex",justifyContent:"center",alignItems:"center",borderRadius:"12px",fontSize:"var(  --font-size-base100)"}}

                     onClick = {() => novy(no)}
             
                    >Odstraniť</div>

                  </div>}
    > <div style={{height:"100%",textAlign:"center",color:"var( --farba-sivaText)",fontSize:"var(  --font-size-base69)"}}>{`Ubytovanie bude
  natrvalo odstránene zo zoznamu ${najdeny.nazov} `}</div></Uravitlogika>
  </Templatelogika>)
}



  if (!najdeny) {
    return (
      <Templatepage hedericek={{ display: "none" }}>
        <div className = "ryhslockaaa">
          ❌ Tento záznam neexistuje
        </div>
      </Templatepage>
    );
  }
  return (
    <Templatepage hedericek = {{display:"none"}}>

        <div className='tujevsetkposlendee'>
            <div className='textCastmain5' style={stilikak}>


                <div>
                    <span className='TEXTICEKNEAOVICEK4' >{najdeny.nazov}</span>

{isDesktop && <p className='textpodhlavnuym4'>
                    {`Preskúmajte svoj ${najdeny.nazov} zoznam a objavte všetky položky, ktoré ste si pridali alebo označili ako obľúbené.`}
                 </p> }
                 
{isMobile2 &&  <p className='textpodhlavnuym4'>
                    {`Preskúmajte svoj ${najdeny.nazov} zoznam`}
                </p> }

{lentqk &&  <p style={{color:"var(--farba-biela)",fontSize: "var(   --font-size-small)"}}>
                   {`p`}
                </p>}
               
                 

                </div>


                <div className='vytvorenireacas'>
                  <div className = "horetextoxoo">
{/*                    
                    <span className='texticekooookiktiti'>Dátum vytvorenia</span>
                    <span className='texticekooookiktiti2'>{najdeny.datum}</span> */}

                  </div>
                  <div className = "doleetextoxoo">
                     <span className='texticekooookiktiti3'>Počet ubytovaní</span>
              
                    <div style={{display:"flex",gap:"3PX",fontSize:"12px"}}>
                    <span style={{color:"gold"}}><i class='bx bx-home-alt-2'></i></span>
                          <span className='texticekooookiktiti4'>{najdeny.zbierka.length}</span>
                    </div>

                  </div>
                

                </div>


           
            </div>


        <div className='tujevesetkonicviac'>
            <div className='lentekdrhuhjevovnturru'>

{najdeny?.zbierka?.length === 0 && (
  <div className='VYTVOERTETEXT2'>
    <div style={{ textAlign: "center" }}>
      {`Pridajte položky do ${najdeny.nazov} zoznamu preskúmaním `}
      <span
        className='pisemnkolentakm'
         onClick={() =>    
                          {navigate("/"),handleClick(),setDomov("domov")}}
      >
        ponuky
      </span>
    </div>
  </div>
)}


            {akotobube && <>
            {najdeny?.zbierka?.map((item) => <Posledny
                name = {item.nova44.name}
                location = {item.nova44.location}

                hodnotenie = {item.nova44.hodnotenie}
                nazovnazov = {item.nova44.name}
                jeden = {item.nova44.krajina}
                dva = {item.nova44.kraj}
                tri = {item.nova44.location}
                fotky = {item.nova44.fotky}
                penezi = {item.nova44.cena}
                klikk332 = {() => formular()}
                zdielamelen = {() => formular()}
                odsranenei = {() => odsrraneniekazda(item.nova44.id)}
                onClick4444 = {() => (klik(item.nova44.id))}
                // fotky = {item}
                
                ></Posledny>)}
            
            </>}

            {akotobube2 && <>
            {najdeny?.zbierka?.map((item) => <Posledny2

                name = {item.nova44.name}
                location = {item.nova44.location}

                hodnotenie = {item.nova44.hodnotenie}
                nazovnazov = {item.nova44.name}
                jeden = {item.nova44.krajina}
                dva = {item.nova44.kraj}
                tri = {item.nova44.location}
                fotky = {item.nova44.fotky}
                penezi = {item.nova44.cena}
                klikk332 = {() => formular()}
                zdielamelen = {() => formular()}
                odsranenei = {() => odsrraneniekazda(item.nova44.id)}
                onClick4444 = {() => (klik(item.nova44.id))}
                // fotky = {item}
                
                ></Posledny2>)}
            
            </>}
                
             

        </div>
            
    
           
</div>


    
    

        </div>
        {/* <Footer></Footer> */}

    </Templatepage>
  )
}

export default Detailpagee


