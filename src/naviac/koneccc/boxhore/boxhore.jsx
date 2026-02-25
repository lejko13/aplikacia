import './boxhore.css'

import React from 'react'
import { useMediaQuery } from "react-responsive";

const Boxhore = ({silll,onClick,fotkaa2,sharekliknutie,cena,trashkliknutie,apartamnnazov,apartamnlocation,krajina,kraj,location}) => {

  const isMobile = useMediaQuery({ maxWidth: 1000 });
  const isDesktop = useMediaQuery({ minWidth: 1001 });
  const lentext = useMediaQuery({ minWidth: 1351 });
  const zas = useMediaQuery({  minWidth: 421, maxWidth: 1200 });
const medz = useMediaQuery({ minWidth: 1201, maxWidth: 1350 });
  // 1000 tu sa lamu texty

    const novy = useMediaQuery({ maxWidth: 420 });
    const novy2 = useMediaQuery({ minWidth: 421 });

    
  return (
   <div className="box2 ">
    <div className="boxHeader23">
      
      {novy &&  <span className='abytobolorovnoajtentext' style={{fontSize:"var( --font-size-small)"}}> <i class='bx bx-location-plus'></i> {kraj} / {location}</span> }

      {novy2 &&  <span className='abytobolorovnoajtentext' style={{fontSize:"var( --font-size-small)"}}> <i class='bx bx-location-plus'></i>{krajina} / {kraj} / {location}</span> }

     

      <div className='tujejednaikona' style={silll}>
             <div className='kruzocekknicvia' 
             onClick={sharekliknutie}
             ><i class='bx bx-share-alt' ></i></div>


        <div className='kruzocekknicvia'
              onClick={trashkliknutie}
        ><i class='bx bx-trash' ></i></div>
   
      </div>
      
      </div>

    <div className="itemList2">
      <div className="itemRowikoo">
        <div className='drzaknafotkunicvic' onClick={onClick}>
          <img 
          style={{height:"100%",width:"100%"}}
          src={fotkaa2} alt="" />
       

        </div>
        {/* <svg viewBox="0 0 60 60" width={60} height={60} xmlns="http://www.w3.org/2000/svg">
          <rect fill="#FAF0E6" rx="8" width="60" height="60" />
          <circle cx="30" cy="30" r="10" fill="#FFA500" />
        </svg> */}
       


         <div className="drzaiikovnaonv">
          
            <span className="itemName2" onClick={onClick}>{apartamnnazov}</span>



            {lentext &&   <span className="itemOption3"  style={{color:"var(--farba-sivaText)",fontSize:"var(  --font-size-small)"}}>{krajina} / {kraj} / {location}</span>}
            {zas &&   <span className="itemOption3"  style={{color:"var(--farba-sivaText)",fontSize:"var(  --font-size-small)"}}>{krajina} / {kraj} / {location}</span>}
            {medz &&   <span className="itemOption3"  style={{color:"var(--farba-sivaText)",fontSize:"var(  --font-size-small)"}}>{krajina} / {location}</span>}

            {novy && <span className="itemOption3"  style={{color:"var(--farba-sivaText)",fontSize:"var(  --font-size-small)"}}>{krajina} / {location}</span>}
           
        </div>
         


          <div className="itemPrice22">{cena}.00 €</div>
        </div>
      
       
     
    </div>
  </div>
  )
}

export default Boxhore
