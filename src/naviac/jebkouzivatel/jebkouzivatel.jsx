import './jebkouzivatel.css'

import React from "react";
import Ukazovatelko from '../ukazovatelko/ukazovatelko'
import Upravitdole from '../upravitdole/upravitdole'
import Biela from '../biela/biela'
import Ludiakolonka from '../ludiakolonka/ludiakolonka'

import { FaInstagram } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { RiFacebookCircleLine } from "react-icons/ri";
import { color } from 'framer-motion';
import Ukazka from '../../pages/detail/ukazka/ukazka'

import Linka from '../linka/linka';
const Jebkouzivatel = ({odhlaseniebloko,odhlasenie,kontrolaPraitelov,kontrolaBloku,cislo2,cislo1,popisek,odstranit,pradanie,setFarba,farba,detaili,profil,superhostile,bloknutypocet,bloknutyklick,pocetkamosov,sprava,fotka,meno,prezvisko,recencie,email,textkratky,Lokalituzobraziť,hodnotenie,ubytovanie,komplexnytext,recenzie,ing2,fb2,link4,git2,zdielat2,zdielat3,zdielat4}) => {
  return (

    <>

    <div className='profilevnvjvnj'>
      <div className='oballspkoko'>
       
        
        
        <div className='lentakkkokomonvb'>
        <Upravitdole
        style = {{display:"none"}}
        upravitdole = "Úpravy"
        >
          
          <Biela
            
              onClick={profil}
                obrazok = {<i class='bx bx-user-pin'></i>}
                 textpvacast = "Zobrazit detaily"

                  style = {{
                     border: farba === 6 ? "1px solid var(--farba-main)" : "1px solid var(--farba-siva)",
           backgroundColor: farba === 6 ? "var(--farba-main)" : "var(--farba-biela)",
                   }}
                   farbaobrazok = {{
                
                     color: farba === 6 ? "white" : "var(--farba-sivaText)"
                   }}

          ></Biela>
          
          <Biela
           onClick={detaili}
            
          obrazok = {<i class='bx bx-message'></i>}
          textpvacast = "Napisat spravu"

          style = {{
                     border: farba === 5 ? "1px solid var(--farba-main)" : "1px solid var(--farba-siva)",
           backgroundColor: farba === 5 ? "var(--farba-main)" : "var(--farba-biela)",
                   }}
                   farbaobrazok = {{
                
                     color: farba === 5 ? "white" : "var(--farba-sivaText)"
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
          

        </Upravitdole>

        <Upravitdole
         upravitdole = "Profil"
        >

          {kontrolaBloku === false && <>

          {kontrolaPraitelov &&  <Biela
          onClick={odstranit}
          obrazok={<i class='bx bx-sad' ></i>}
           textpvacast="Odstranit z priatelov" 
            style = {{
                     border:  "1px solid var(--farba-siva)",
           backgroundColor:  "var(--farba-biela)",
                   }}
                   farbaobrazok = {{
                
                     color:  "var(--farba-sivaText)"
                   }}
          ></Biela> }

{kontrolaPraitelov === false &&  <Biela
          onClick={pradanie}
          obrazok={<i class='bx bx-happy'></i>}
           textpvacast="Pridat do priatelov"
            style = {{
                     border:  "1px solid var(--farba-siva)",
           backgroundColor:  "var(--farba-biela)",
                   }}
                   farbaobrazok = {{
                
                     color:  "var(--farba-sivaText)"
                   }}
          ></Biela> }
          


          </>}

{kontrolaBloku ===  false && 
<Biela
          onClick={odhlaseniebloko}
          obrazok={<i class='bx bx-block' ></i>}
           textpvacast={"Zablokovat"}
            style = {{
                     border:  "1px solid var(--farba-siva)",
           backgroundColor:  "var(--farba-biela)",
                   }}
                   farbaobrazok = {{
                
                     color:  "var(--farba-sivaText)"
                   }}
          ></Biela>}

          
{kontrolaBloku ===  true && 
<Biela
          onClick={odhlasenie}
          obrazok={<i class='bx bx-block' ></i>}
           textpvacast={"Odblokovat"}
            style = {{
                     border:  "1px solid var(--farba-siva)",
           backgroundColor:  "var(--farba-biela)",
                   }}
                   farbaobrazok = {{
                
                     color:  "var(--farba-sivaText)"
                   }}
          ></Biela>
}
          
      

        </Upravitdole>
        </div>


      </div>
     

    </div>

    

    </>
  );
};

export default Jebkouzivatel;
