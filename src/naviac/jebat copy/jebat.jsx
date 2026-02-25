import './jebat.css'

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
const Jebat = ({setFarba,farba,detaili,profil,superhostile,bloknutypocet,bloknutyklick,pocetkamosov,sprava,fotka,meno,prezvisko,recencie,email,textkratky,Lokalituzobraziť,hodnotenie,ubytovanie,komplexnytext,recenzie,ing2,fb2,link4,git2,zdielat2,zdielat3,zdielat4}) => {
  return (

    <>

    <div className='profilevnvjvnj'>

      


      {/* <div className='noinokaalenivic'>
        <div className='fotkacastlenooo'>
             <img  style ={{height:"100%",width:"100%"}}src={fotka} alt="" />

        </div>
        <div >
          <div className="profile-name">
                  <span> {meno}</span>
                  <span> {prezvisko}</span>
          </div>
            <div className="profile-title">{email}</div>
        </div>

        <div className='inkonytusuuniclento'>
          <div className='kruzzokick'><FiTwitter  style={{color:"var(--farba-cierna)"}}/></div>
          <div className='kruzzokick'><FaInstagram  style={{color:"var(--farba-cierna)"}}/></div>
          <div className='kruzzokick'> <RiFacebookCircleLine  style={{color:"var(--farba-cierna)"}}/></div>
        </div>

      </div> */}

       
            {/* <Ludiakolonka
style={{ backgroundColor: "pink" ,border:"var(--border)"}}
            ></Ludiakolonka> */}
      {/* <div className='tubudefottkanicviaccc'>
  
        <div className='fotkadrziakkknic'>
         
        </div>
        <div style={{display:"flex",flexDirection:"column",alignItems:"center",gap:"2px"}}>
          <div className="profile-name">
                <span> {meno}</span>
                <span> {prezvisko}</span>
            </div>
              <div className="profile-title">{email}</div>
              <span style={{fontSize:"var(  --font-size-small)"}}>{superhostile}</span>
              
        </div>
        <div className='llkokokertmombutton'>
 Upraviť
        </div>
      
      </div> */}
      <div className='oballspkoko'>
        <div className='lattomnsns'>
          <div className='foteckkkadrziakcik'>
            <img src={fotka} className='fotkanilentotoanoo' alt="" />
          </div>
          <div style={{display: "flex", flexDirection: "column",gap:"1px"}}>
            <div style={{fontSize:"var(  --font-size-base100)",color:"var(--farba-cierna)"}}>{meno} {prezvisko}</div>
            <span style={{fontSize:"var( --font-size-small)",color:"var(--farba-sivaText)"}}>{email}</span>
          </div>

           {/* <Ludiakolonka
                 srdeckourcuje = {{display:"none"}}
                srdieckoko = {{display:"none"}}
                 silooook = {{display:"none"}}
                animovace = {{display:"none"}}
                fotecakkklentak = {{
                  height:"50px",
                  width:"50px",   
                }}
                fotka={fotka}
                teext1 = {meno}
                text3 = {prezvisko}
                text2 = {email}
                style = {{height:"100%",  padding:"0px", }}
                onclickokoko = {() => navigate("/Profil")}
                ></Ludiakolonka> */}

        </div>
        <Linka></Linka>
        
          {/* <Ludiakolonka
style={{ backgroundColor: "pink" ,border:"var(--border)"}}
            ></Ludiakolonka> */}
        <div className='lentakkkokomonvb'>
        <Upravitdole
        upravitdole = "Úpravy"
        >
          <Biela
             onClick={profil}
          obrazok = {<i class='bx bx-cog' ></i>}
          textpvacast = "Upraviť profil"
          ></Biela>
          <Biela
             onClick={detaili}
                obrazok = {<i class='bx bx-user-pin'></i>}
                 textpvacast = "Zobrazit detaily"

          ></Biela>
          
        </Upravitdole>
        

        <Upravitdole
         upravitdole = "Nastavenie"
        >
          <Biela
          onClick={hodnotenie}
          farbaobrazok = {{
            color: farba === 1 ? "var(--farba-main)" : "var(--farba-cierna)"
          }}
                obrazok={<i class='bx bx-check-square'></i>}
          textpvacast="Hodnotenia"
          ></Biela>
{/* voinvioanvoianvbiobva */}
          <Biela
           onClick={recenzie}
            farbaobrazok = {{
            color: farba === 2 ? "var(--farba-main)" : "var(--farba-cierna)"
          }}
                obrazok={<i class='bx bx-comment-dots'></i>}
          textpvacast="Recenzie"
          ></Biela>
{/* voinvioanvoianvbiobva */}
           <Biela
          onClick = {Lokalituzobraziť}
          obrazok={<i class='bx bx-heart' ></i>}
           farbaobrazok = {{
            color: farba === 3 ? "var(--farba-main)" : "var(--farba-cierna)"
          }}
          textpvacast="Priatelia"
          ></Biela>
{/* voinvioanvoianvbiobva */}
          <Biela
          onClick={bloknutyklick}
                obrazok={<i class='bx bx-block' ></i>}
          textpvacast="Zablokovany"
            farbaobrazok = {{
            color: farba === 4 ? "var(--farba-main)" : "var(--farba-cierna)"
          }}
          ></Biela>

        </Upravitdole>

        <Upravitdole
         upravitdole = "Profil"
        >
          <Biela
          obrazok={<i class='bx bx-log-in-circle' ></i>}
           textpvacast="Odhlásiť sa"
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
