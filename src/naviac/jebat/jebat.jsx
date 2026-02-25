import './jebat.css'

import React from "react";
import Ukazovatelko from '../ukazovatelko/ukazovatelko'
import Upravitdole from '../../naviac/upravitdole/upravitdole'
import Biela from '../../naviac/biela/biela'
import Ludiakolonka from '../../naviac/ludiakolonka/ludiakolonka'

import { FaInstagram } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { RiFacebookCircleLine } from "react-icons/ri";
import { color } from 'framer-motion';
import Ukazka from '../../pages/detail/ukazka/ukazka'

import Linka from '../linka/linka';
const Jebat = ({ulozeneee,cislo2,cislo1,popisek,odhlasenie,setFarba,farba,detaili,profil,superhostile,bloknutypocet,bloknutyklick,pocetkamosov,sprava,fotka,meno,prezvisko,recencie,email,textkratky,Lokalituzobraziť,hodnotenie,ubytovanie,komplexnytext,recenzie,ing2,fb2,link4,git2,zdielat2,zdielat3,zdielat4}) => {
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
            
          obrazok = {<i class='bx bx-cog' ></i>}
          textpvacast = "Upraviť profil"

          style = {{
                     border: farba === 5 ? "1px solid var(--farba-main)" : "1px solid var(--farba-siva)",
           backgroundColor: farba === 5 ? "var(--farba-main)" : "var(--farba-biela)",
                   }}
                   farbaobrazok = {{
                
                     color: farba === 5 ? "white" : "var(--farba-sivaText)"
                   }}
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
           backgroundColor:  "var(--farba-biela)",
                   }}
                   farbaobrazok = {{
                
                     color:  "var(--farba-sivaText)"
                   }}
          ></Biela>
      

        </Upravitdole>
        </div>


      </div>
     

    </div>

    {/*  */}

    {/* <div className="profilevnvjvnj">
        <div style={{width:"100%",display:"flex",alignItems:"center",gap:"10px",justifyContent:"start" }}>
        <div className="profile-image222">
            <img  style ={{height:"100%",width:"100%"}}src={fotka} alt="" />
        </div>

        <div style={{display:"flex",flexDirection:"column"}}>
            <div className="profile-name">
                <span> {meno}</span>
                <span> {prezvisko}</span>
            </div>
            <div className="profile-title">{email}</div>

            <div className="ikonky-container">
                <Ukazovatelko
                onClick = {zdielat2}
                style ={{
                  cursoir:"pointer",
                  color:"var(--farba-cierna)",
                     backgroundColor: "var(--farba-biela)",
                  fontSize:"14px"
                }}
                ><i class='bx bx-share-alt' ></i></Ukazovatelko>

                <Ukazovatelko
                onClick = {zdielat3}
                style ={{
                  color:"var(--farba-cierna)",
                     backgroundColor: "var(--farba-biela)",
                  fontSize:"14px"
                }}
                ><i class='bx bx-bookmark'></i></Ukazovatelko>

                <Ukazovatelko
                 onClick = {zdielat4}
                style ={{
                  color:"var(--farba-cierna)",
                     backgroundColor: "var(--farba-biela)",
                  fontSize:"14px"

                }}
                ><i class='bx bx-block' ></i></Ukazovatelko>
              </div>
        </div>

      </div>

      <div className="profile-info333">
         <div className='viunvien'>
            <p>   {komplexnytext}</p>
        </div>
       
        <div className="profile-bio">
          
       <span>  {textkratky}</span>
   
        </div>
       
      </div>


<button className="cta-button">Napíš správu</button>


      <div className="stats4">

       <div className="stat-item" onClick={Lokalituzobraziť}>
        <div className="stat-value">Priatelia</div>
        <div className="stat-label">{pocetkamosov}</div>
        </div>

       <div className="stat-item" onClick={bloknutyklick}>
        <div className="stat-value">Bloknuty</div>
        <div className="stat-label">{bloknutypocet}</div>
        </div>

            <div className='skrymeej'>
                    <div className="stat-item" onClick={recenzie}>
                    <div className="stat-value">15</div>
                    <div className="stat-label">Recenzie</div>
                    </div>
            </div>
       



        <div className="stat-item" onClick={hodnotenie}>
        <div className="stat-value">4.8</div>
        <div className="stat-label">Hodnotenie</div>
        </div>
      </div>
    </div> */}

    </>
  );
};

export default Jebat;
