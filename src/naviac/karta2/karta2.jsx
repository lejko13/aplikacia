import React from "react";
 // alebo môžeš nahradiť vlastnou SVG hviezdičkou
import './karta2.css'

export const Karta2 = ({
  name,
  role,
  company,
  lenfarbatexiku,
  text,
  rating = 5,
  image,
  notakzee,
  hodnotenie,
  priezvisko,
  hodnotim,
  uzivatel,
  sytle,
  stylikk,
  apartamNazov,
  krajina,
  kraj,
  klikamm,
  mesto,
  lentooooolllz,
  className = "",
  ...props
}) => {
  // console.log(hodnotim);
  
  return (
    <div className={`testimonialcard2 ${className}`} {...props} style={sytle}>
      {/* <div className="testimonial-quote">"</div> */}

      <div className="testimonial-content" style={stylikk}>
        <div className="testimonial-author" onClick={uzivatel}>
          {image && (
            <div className="testimonial-avatar" >
              <img src={image} alt={name} />
               <div>{notakzee}</div>
            </div>
          )}

          <div className="author-info">
            <span className="author-name">
              <span>{name}</span>
              <span> {priezvisko}</span>
             
              </span>
            <p className="author-role">
             {company && ` ${company}`}
            </p>
          </div>

         
        </div>

        

        <span className="text000909" style={lenfarbatexiku}>{text}</span>
        {/* <div>lpokoko</div> */}
        {hodnotim > 0 && (
          <div className="hodnotentei">
            <p>{hodnotenie}</p>
            {Array.from({ length: 5 }).map((_, index) => (
                <i
                        key={index}
                        className={`bx bxs-star ${index < hodnotim ? "star filled" : "star empty"}`}
                        ></i>
                        
               
            
            ))}
          </div>
        )}

        
      </div>
      <div className="tujetenzejaku">
       <span className="textApartman" onClick={klikamm}>{apartamNazov}</span> 
        <div className="mojdoloiv" style={lentooooolllz}>
          <span>    <i class='bx bx-been-here'></i></span>
          <span >    {krajina} / {mesto}</span>
        </div>

    

    

      </div>
    </div>
  );
};
