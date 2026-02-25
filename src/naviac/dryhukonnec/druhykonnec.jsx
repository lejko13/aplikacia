import React, { Component, useState, useContext, useEffect,useRef } from 'react';
import './druhykonnec.css'
// import Boxhore from './boxhore/boxhore'
import Boxhore from "../../naviac/koneccc/boxhore/boxhore"
import { data } from 'react-router-dom';

import { useMediaQuery } from "react-responsive";
import { GlobalContext } from '../reactcontext/reactcontext';
import Linka from '../linka/linka';
import { MyContext } from '../../naviac/providertelefon/providertelefon'
import { useNavigate } from 'react-router-dom';




const Druhykonnec = ({sharekliknutie,klikam,onClick}) => {
  // console.log(zbierka);
  
const isMobile = useMediaQuery({ minWidth: 600 });
const isMobile2 = useMediaQuery({ maxWidth: 599 });

const kontroafocusu = useMediaQuery({ minWidth: 750 });


 const navigate = useNavigate();

  const { presun,setPresun,cena,setCena,kvalita,setKvalita,prize,setPrize, kontorla,setKontrola,kontorlaText,setKontrolaText,automatika,  zobrazovanie,setZobrazovanie } = useContext(GlobalContext); 

  
  const { suborOpen,setSuborOpen,obsahOpen,setObsahOpen,subor,setSubor,nazovSuboru,setNazovSuboru,unikattne,setUnikatne,meno,dotadok,setDotadok,otazka,setOtazka,kontrlkaaa,setKontrlkaaa} = useContext(MyContext);

    const couponRef2 = useRef(null);
  console.log(kvalita);

  const odstraneneiKvality = (id,cena) => {
    setKvalita(prev => prev.filter(item => item.apartman.id !== id ))
    setPrize(prev => prev - cena)
  }

    const [coupon, setCoupon] = useState("");

    const [discountApplied, setDiscountApplied] = useState(false);
  const [sledujem,setSledujem] = useState("null")






 const applyCoupon = () => {
  if (kvalita.length > 0) {  // ✅ length, nie lenght
    if (coupon.toUpperCase() === "LEJKO" && !discountApplied) {
      setPrize(prev => prev - 20);
      setDiscountApplied(true);
      console.log("Kupón LEJKO použitý");
      setCoupon("")
      automatika();
  setKontrolaText("uspecnepridany");

    setKontrlkaaa(true)
    } else {
      automatika();
      setKontrolaText("iny");
      return;
    }
  } else {
    automatika();
    setKontrolaText("vypln");
  }
};
  const couponRef = useRef(null);

// useEffect(() => {
//   if (kvalita.length > 0 || kontroafocusu  ) {
//       couponRef.current?.focus();
//   }
  
//   else{


    
//   }
  
//   }, [kvalita.length]);



 useEffect(() => {
    // keď sa komponent renderuje, nastav fokus
    if (couponRef2.current) {
      couponRef2.current.focus();
    }
  }, []); 








     const handleClick32 = () => {
        navigate(`/Formularovacastposldena`);
    }



  const funkce = () => {
  const pocet = kvalita.length


  if (pocet=== 0 ) {
    automatika()
    console.log("Nula")
  }
  else{
    console.log("vic");
    // setZobrazovanie("nah2la3d")
    // setOtvorenie(true)
    handleClick32()
    
  }
}

const finalPrice = Math.floor(prize) * 0.1;
const tax = Math.floor(prize) * 0.1;
const formattedTax = tax.toFixed(2);
const total = prize + Number(formattedTax);
const formattedTotal = total.toFixed(2);
    return (

      <div className="containerMain">
        <div className='tusazbrieraalennivia'>
          {kvalita?.map((item) => 

          <Boxhore
          apartamnnazov = {item.apartman.name}
          apartamnlocation = {item.apartman.location}
          sharekliknutie = {sharekliknutie}
          fotkaa2 ={item.apartman.fotky[0]}
          krajina = {item.apartman.krajina}
          kraj = {item.apartman.kraj}
          location = {item.apartman.location}
          cena = {item.prepocet}
          trashkliknutie = {() => 
             odstraneneiKvality(item.apartman.id,item.prepocet)
          
          }
         onClick = {() => navigate(`/Detail/${item.apartman.id}`)}
         
          ></Boxhore>

          )}


        </div>


  <div className="boxik">
    {/* <div className="boxHeaderik">Použiť kupón</div>
        <Linka></Linka> */}
{kontrlkaaa  === false &&  <form className="couponForm"  onSubmit={(e) => {
    e.preventDefault();
    applyCoupon();
  }}>
      <input
        type="text"
         ref={couponRef}
        className="couponInput"
        placeholder="Zadajte zľavový kupón"
        value={coupon}
        onChange={(e) => setCoupon(e.target.value)}
      />

      <button className="couponBtn2" 
      >
        Pouzit
      </button>
    </form> }
    
{kontrlkaaa && 
<div className='formazeuzkuponapllikovany'>
  <div className='ttoojetujenapsienzeuske'>Zľavový kupón bol prijatý</div>

  </div>}  
  </div>
{/* totoje klasika */}
  {isMobile && 
  <div className="boxcheckoutBoxik">
    <div className="boxHeaderik">Zhrnutie pokladne</div>
    <Linka></Linka>

    <div className="summaryDetailiks">
      <div className='driztitexty'>
          <span style={{color:"var(--farba-sivaText)",fontSize:"var(--font-size-small)"}}>Ubytovanie</span>
           <span style={{color:"var(--farba-sivaText)",fontSize:"var(--font-size-small)"}}>€{prize}.00</span>
      </div>
    
          <div className='driztitexty'>
      <span style={{color:"var(--farba-sivaText)",fontSize:"var(--font-size-small)"}}>Dane</span>
      <span style={{color:"var(--farba-sivaText)",fontSize:"var(--font-size-small)"}}>€{formattedTax}</span>
      </div>
      
    </div>
        {/* <Linka></Linka> */}
        <div style={{height:"10px"}}></div>

    <div className="checkoutFooterik">
      <div className='ttoodzricenuuu'>

              <div className='textceklencos2'>
        
                            
                            
                              <span  
                              
                            
                              id='cena'
                            onClick={() => {
                              setPenaze(prev => !prev)}}
                              style={{fontSize:"var(--font-size-large)",color:"var(--farba-cierna)",textDecoration:"underline",cursor:"pointer"}}
                      
                              >€{formattedTotal} </span>
                              
                              {/* <span  style={{fontSize:"var( --font-size-base2)",color:"var(--farba-sivaText)"}}>za 2 noci</span> */}
        
        
              </div>

      </div>
    
      
      
      <button className="checkoutBtn" 
      onClick={klikam}
      >Späť</button>
    

      <div style={{position:"relative"}}>
                <div className='buttonjetaotakze' 
                onClick={() => 
                 funkce()
           
                  
                }>Vyplňte kontaktné údaje</div>
                {kvalita?.length > 0 && <div className='malykruzok' style={{}}>{kvalita.length}</div>}
                
                </div>
    </div>
  </div> }


{/* tu je switch */}



{isMobile2 && 
<div className="boxcheckoutBoxik2">
    {/* <div className="boxHeaderik">Zhrnutie pokladne</div>
    <Linka></Linka> */}

    <div className="summaryDetailiks2">
      <div className='tootjelenkanarozdelnie2'> 
        <div className='driztitexty32'>
          <span style={{color:"var(--farba-sivaText)",fontSize:"var( --font-size-small)"}}>Ubytovanie</span>
          
           <span style={{color:"var(--farba-sivaText)",fontSize:"var(--font-size-small)"}}>€{prize}.00</span>
      </div>
    
          <div className='driztitexty32'>
            <span style={{color:"var(--farba-sivaText)",fontSize:"var( --font-size-small)"}}>Dane</span>
            <span style={{color:"var(--farba-sivaText)",fontSize:"var( --font-size-small)"}}>€{formattedTax}</span>
        </div>
          <div className='driztitexty32'>
            <span style={{color:"var(--farba-sivaText)",fontSize:"var(--font-size-small)"}}>Celkom</span>
            <span style={{color:"var(--farba-sivaText)",fontSize:"var( --font-size-small)"}}>€{formattedTotal}</span>
        </div>
      </div>

   
     
      
      
    </div>
    

      {/* <Linka></Linka> */}

    <div className="checkoutFooterik">
      
    
      
      
      <button className="checkoutBtn"
      style={{padding:"0px 16px"}} 
      onClick={klikam}
      >Späť</button>
    

      <div style={{position:"relative"}}>
                <div className='buttonjetaotakze' 
                onClick={() => {
                  if (kvalita.length=== 0 ) {
                    automatika()
                    setKontrolaText("vypln")
                   return null
                    
                  }

    funkce()

                }}>Vyplňte kontaktné údaje</div>
                {kvalita?.length > 0 && <div className='malykruzok'

                style={{border:"3px solid var(--farba-main2)"}}
                >{kvalita.length}</div>}
                
                </div>
    </div>
  </div> }
  

</div>

      
    );
  }


export default Druhykonnec
