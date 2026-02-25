import './jebko2.css'

import React from "react";
import Ukazovatelko from '../ukazovatelko/ukazovatelko'
import Upravitdole from '../upravitdole/upravitdole'
import Biela from '../biela/biela'
import Ludiakolonka from '../ludiakolonka/ludiakolonka'

import { FaInstagram } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { RiFacebookCircleLine } from "react-icons/ri";
import { color } from 'framer-motion';

import Linka from '../linka/linka';
const Jebko2 = ({ulozeneee,uzjaneveim,picauprava,odhlasenie,setFarba,farba,detaili,profil,superhostile,bloknutypocet,bloknutyklick,pocetkamosov,sprava,fotka,meno,prezvisko,recencie,email,textkratky,Lokalituzobraziť,hodnotenie,ubytovanie,komplexnytext,recenzie,ing2,fb2,link4,git2,zdielat2,zdielat3,zdielat4}) => {
  return (

    <>

    <div className='profilevnvjvnj23'>

      <div className='oballspkoko34'>
        {/* <div className='lattomnsns'>
          <div className='foteckkkadrziakcik'>
            <img src={fotka} className='fotkanilentotoanoo' alt="" />
          </div>
          <div style={{display: "flex", flexDirection: "column",gap:"1px"}}>
            <div style={{fontSize:"var(  --font-size-base100)",color:"var(--farba-cierna)"}}>{meno} {prezvisko}</div>
            <span style={{fontSize:"var( --font-size-small)",color:"var(--farba-sivaText)"}}>{email}</span>
          </div>

        

        </div>
        <Linka></Linka> */}
        
       
        <div className='lentakkkokomonvb45'>
        <Upravitdole
            style = {{display:"none"}}
        upravitdole = "Úpravy"
        >
          <Biela
              style = {{
            border: farba === 6 ? "1px solid var(--farba-main)" : "1px solid var(--farba-siva)",
  backgroundColor: farba === 6 ? "var(--farba-main)" : "var(--farba-biela)",
          }}
          farbaobrazok = {{
       
            color: farba === 6 ? "white" : "var(--farba-sivaText)"
          }}
      
             onClick={picauprava}
     
              obrazok = {<i class='bx bx-user-pin'></i>}
            textpvacast = "Zobrazit detaily"
     
          ></Biela>


          <Biela
           style = {{
            border: farba === 5 ? "1px solid var(--farba-main)" : "1px solid var(--farba-siva)",
  backgroundColor: farba === 5 ? "var(--farba-main)" : "var(--farba-biela)",
          }}
          farbaobrazok = {{
       
            color: farba === 5 ? "white" : "var(--farba-sivaText)"
          }}
             onClick={uzjaneveim}
                 obrazok = {<i class='bx bx-cog' ></i>}
                     textpvacast = "Upraviť profil"
               

          ></Biela>

          <Biela
        
             onClick={ulozeneee}
              
                     obrazok = {<i class='bx bx-save'></i>}
                               textpvacast = "Zobrazit oblubene"
                     
                               style = {{
                                          border: farba === 69 ? "1px solid var(--farba-main)" : "1px solid var(--farba-siva)",
                                backgroundColor: farba === 69 ? "var(--farba-main)" : "var(--farba-biela)",
                                        }}
                                        farbaobrazok = {{
                                     
                                          color: farba === 69 ? "white" : "var(--farba-sivaText)"
                                        }}
               

          ></Biela>
          
        </Upravitdole>
        

        <Upravitdole
         upravitdole = "Nastavenie"
        >
          <Biela
          onClick={hodnotenie}
          style = {{
            border: farba === 1 ? "1px solid var(--farba-main)" : "1px solid var(--farba-siva)",
  backgroundColor: farba === 1 ? "var(--farba-main)" : "var(--farba-biela)",
          }}
          farbaobrazok = {{
       
            color: farba === 1 ? "white" : "var(--farba-sivaText)"
          }}
                obrazok={<i class='bx bx-check-square'></i>}
          textpvacast="Hodnotenia"
          ></Biela>
{/* voinvioanvoianvbiobva */}
          <Biela
           onClick={recenzie}
            style = {{
            border: farba === 2 ? "1px solid var(--farba-main)" : "1px solid var(--farba-siva)",
  backgroundColor: farba === 2 ? "var(--farba-main)" : "var(--farba-biela)",
          }}
          farbaobrazok = {{
       
            color: farba === 2 ? "white" : "var(--farba-sivaText)"
          }}
                obrazok={<i class='bx bx-comment-dots'></i>}
          textpvacast="Recenzie"
          ></Biela>
{/* voinvioanvoianvbiobva */}
           <Biela



          onClick = {Lokalituzobraziť}
          obrazok={<i class='bx bx-heart' ></i>}
           style = {{
            border: farba === 3 ? "1px solid var(--farba-main)" : "1px solid var(--farba-siva)",
  backgroundColor: farba === 3 ? "var(--farba-main)" : "var(--farba-biela)",
          }}
          farbaobrazok = {{
       
            color: farba === 3 ? "white" : "var(--farba-sivaText)"
          }}
          textpvacast="Priatelia"
          ></Biela>
{/* voinvioanvoianvbiobva */}
          <Biela
          onClick={bloknutyklick}
                obrazok={<i class='bx bx-block' ></i>}
          textpvacast="Zablokovany"
             style = {{
            border: farba === 4 ? "1px solid var(--farba-main)" : "1px solid var(--farba-siva)",
  backgroundColor: farba === 4 ? "var(--farba-main)" : "var(--farba-biela)",
          }}
          farbaobrazok = {{
       
            color: farba === 4 ? "white" : "var(--farba-sivaText)"
          }}
          ></Biela>

        </Upravitdole>

        <Upravitdole
         upravitdole = "Profil"
        >
          <Biela
          onClick={odhlasenie}
          obrazok={<i class='bx bx-log-in-circle' ></i>}
           textpvacast="Odhlásiť sa"
                 style = {{
            border:  "1px solid var(--farba-siva)",
  backgroundColor: "var(--farba-biela)",
          }}
          farbaobrazok = {{
       
            color:  "var(--farba-sivaText)"
          }}
          ></Biela>
      

        </Upravitdole>
        </div>


      </div>
     

    </div>

 
   

    </>
  );
};

export default Jebko2;
