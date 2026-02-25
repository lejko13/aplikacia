import './ProfileCardmobile.css'

import React from "react";
import Ukazovatelko from '../../naviac/ukazovatelko/ukazovatelko'

const ProfileCard2 = ({hodnotenie,fotka,meno,prezvisko,email,textkratky,komplexnytext,miesto,recenize,block,znacka,zdielat,ing,fb,link2,git}) => {
  return (
    <div className="profilevnvjvnj">
        <div style={{width:"100%",display:"flex",alignItems:"center",gap:"10px",justifyContent:"start" }}>
        <div className="profile-image">
            <img  style ={{height:"100%",width:"100%"}}src={fotka} alt="" />
        </div>

        <div style={{display:"flex",flexDirection:"column"}}>
            <div className="profile-name2">
                <span> {meno}</span>
                <span> {prezvisko}</span>
            </div>
            <div className="profile-title">{email}</div>

            <div className="ikonky-container">
                <Ukazovatelko
                onClick = {zdielat}
                style ={{
                  color:"var(--farba-cierna)",
                 backgroundColor: "var(--farba-biela)",
                  fontSize:"14px"
                }}
                ><i class='bx bx-share-alt' ></i></Ukazovatelko>

                <Ukazovatelko
                 onClick = {znacka}
                style ={{
                              backgroundColor: "var(--farba-biela)",
                  color:"var(--farba-cierna)",
                  fontSize:"14px"
                }}
                ><i class='bx bx-bookmark'></i></Ukazovatelko>

                <Ukazovatelko
                 onClick = {block}
                style ={{
                              backgroundColor: "var(--farba-biela)",
                  color:"var(--farba-cierna)",
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
            <div className='inkjbj'> <i class='bx bx-like' ></i>
            </div>
               
       <span>  {textkratky}</span>
   
        </div>
       
      </div>

      <div className="social-links">
        <button className="social-btn " onClick={ing}><i class='bx bxl-facebook' ></i></button>
        <button className="social-btn " onClick={fb}><i class='bx bxl-instagram' ></i></button>
        <button className="social-btn" onClick={link2}><i class='bx bxl-linkedin' ></i></button>
        <button className="social-btn" onClick={git}><i class='bx bxl-github' ></i></button>
      </div>

<button className="cta-button">Napíš správu</button>


      <div className="stats">
       <div className="stat-item"
                onClick={miesto}
       >
        <div className="stat-value">Miesto</div>
        <div className="stat-label">Lokalita</div>
        </div>

 
       

        <div className="stat-item"
         onClick={recenize}
        >
        <div className="stat-value">82</div>
        <div className="stat-label">Recenzie</div>
        </div>
     

        <div className="stat-item"
        onClick={hodnotenie}>
        <div className="stat-value">4.8</div>
        <div className="stat-label">Hodnotenie</div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard2;
