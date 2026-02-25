import React, { Component, useState, useContext, useEffect,useRef } from 'react';
import './konec.css'
import Boxhore from './boxhore/boxhore'
import { data } from 'react-router-dom';
import { MyContext } from '../../naviac/providertelefon/providertelefon'
import { GlobalContext } from '../../naviac/reactcontext/reactcontext';
import { useNavigate } from 'react-router-dom';
import Linka from '../linka/linka';
const Koneec = ({anooooo,sharekliknutie}) => {
  // console.log(zbierka);
   const navigate = useNavigate();
  


  const { presun,setPresun,cena,setCena,kvalita,setKvalita,prize,setPrize, kontorla,setKontrola,kontorlaText,setKontrolaText,automatika,  zobrazovanie,setZobrazovanie } = useContext(GlobalContext); 

  
  const { suborOpen,setSuborOpen,obsahOpen,setObsahOpen,subor,setSubor,nazovSuboru,setNazovSuboru,unikattne,setUnikatne,meno,dotadok,setDotadok,otazka,setOtazka,kontrlkaaa,setKontrlkaaa,formData, setFormData,otvorenieposldenho,setOtvorenieposldenho} = useContext(MyContext);
console.log(prize);

 const navara = () => setFormData({
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


    const couponRef = useRef(null);


  const odstraneneiKvality = (id,cena) => {
    setKvalita(prev => prev.filter(item => item.apartman.id !== id ))
    setPrize(prev => prev - cena)
  }

    const [coupon, setCoupon] = useState("");

    const [discountApplied, setDiscountApplied] = useState(false);
  const [sledujem,setSledujem] = useState("null")



 const applyCoupon = () => {
  if (kvalita.length > 0) {  // ✅ length, nie lenght
   if (coupon.trim().toUpperCase() === "LEJKO" && !discountApplied) {
  setPrize(prev => prev - 20);
  setDiscountApplied(true);
  setCoupon("");

   automatika();
  setKontrolaText("uspecnepridany");
  setKontrlkaaa(true)
} else {
  automatika();
  setKontrolaText("iny");
}
  } else {
    automatika();
    setKontrolaText("vypln");
  }
};


 const funkce = () => {
  const pocet = kvalita.length


  if (pocet=== 0 ) {
    automatika()
    console.log("Nula")
  }
  else{
    console.log("vic");
    setOtvorenie(true)
    
  }
}


//  const navigoavanie = () =>
//      navigate("/Zhrnutie");




const kontralo = () => {
  if (zobrazovanie === "nah2la3d") {
    setOtvorenieposldenho(true)
    // navigoavanie()
      // setObsahOpen("formular")
  // setSuborOpen(true)
    
    
  }

    if (kvalita.length <= 0  ) {
       automatika(),
   setKontrolaText("vypln")
    }
    else if (kvalita.length > 0) {
  
      setZobrazovanie("nah2la3d")
      
    }
    
 
 
}

useEffect(() => {
  if (kvalita.length === 0) {
    setZobrazovanie("nahlad")
  
  }


},[kvalita.length])

useEffect(() => {
  if (kvalita.length > 0  ) {
      couponRef.current?.focus();
  }else{


    
  }
  
  }, [kvalita.length]);

const finalPrice = Math.floor(prize) * 0.1;
const tax = Math.floor(prize) * 0.1;
const formattedTax = tax.toFixed(2);
const total = prize + Number(formattedTax);


const formattedTotal = total.toFixed(2);


console.log(prize);

console.log(kvalita);

 const FORMULAR = () => {
  setObsahOpen("formular")
  setSuborOpen(true)
 }







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
          onClick = {() => navigate(`/Detail/${item.apartman.id}`)}
          trashkliknutie = {() => {
            if (kvalita.length === 1) {
               navara()
              // console.log("teraz");
                   odstraneneiKvality(item.apartman.id,item.prepocet),
          setOtvorenieposldenho(false)
          return 
              
            }

           
          odstraneneiKvality(item.apartman.id,item.prepocet),
          setOtvorenieposldenho(false)
          
          }}
         
          ></Boxhore>

          )}


        </div>


  <div className="box">
    {/* <div className="boxHeader">Použiť kupón</div>
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

  <div className="boxcheckoutBox">
    <div className="boxHeader">Zhrnutie pokladne</div>
    <Linka></Linka>


    <div className="summaryDetails">
      <div className='driztitexty'>
          <span style={{color:"var(--farba-sivaText)",fontSize:"var( --font-size-small)"}}>Ubytovanie</span>
           <span style={{color:"var(--farba-sivaText)",fontSize:"var(--font-size-small)"}}>€{prize}.00</span>
      </div>
    
          <div className='driztitexty'>
      <span style={{color:"var(--farba-sivaText)",fontSize:"var(--font-size-small)"}}>Dane</span>
      <span style={{color:"var(--farba-sivaText)",fontSize:"var( --font-size-small)"}}>€{formattedTax}</span>
      </div>
      
    </div>
    

    <div className="checkoutFooter">
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
{/* koko */}
 {/* <span className="totalPrice" style={{fontSize:"var(--font-size-large)",color:"var(--farba-cierna)",cursor:"pointer"}}
               >{prize}.00 €</span> */}
      </div>
    
      
      
      {/* <button className="checkoutBtn" 
      onClick={() => 
      }
      >Pokračovať</button> */}
 {otvorenieposldenho === false &&    <div style={{position:"relative"}}>


                <div className='buttonjetaotakze' 


                onClick={() => 
                {
                  if (zobrazovanie === "nah2la3d") {
                    console.log("kokoko");
                    anooooo()
                    return null
                    
                  }
                
                 kontralo()

         
                  // setZobrazovanie("nah2lad")


                }
                 
                  
                }>
                  {zobrazovanie === "nah2la3d" ? "Zobrazit zhurnutie" : "Vyplnit udaje" }
                 </div>
                {kvalita?.length > 0 && <div className='malykruzok' style={{border: " 3px solid var(--farba-biela)"}}>{kvalita.length}</div>}
                
                </div>   }  



{otvorenieposldenho  &&    <div style={{position:"relative"}}>
                <div className='buttonjetaotakze'
                onClick={() => FORMULAR()}
                >
                Záväzne objednať
                 </div>
                {kvalita?.length > 0 && <div className='malykruzok' style={{border: " 3px solid var(--farba-biela)"}}>{kvalita.length}</div>}
                
                </div>   }        

    </div>
  </div>
</div>

      
    );
  }


export default Koneec
