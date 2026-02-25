import React from "react";
 // alebo môžeš nahradiť vlastnou SVG hviezdičkou
import './TestimonialCard2.css'

export const TestimonialCard2 = ({
  name,
  role,
  nastavenietextu,
  company,
  text,
  rating = 5,
  image,
  hodnotenie,
  priezvisko,
  hodnotim,
  uzivatel,
  sytle,
  stylikk,
  className = "",
  ...props
}) => {
  // console.log(hodnotim);
  
  return (
    <div className={`testimonial-card ${className}`} {...props} style={sytle}>
      {/* <div className="testimonial-quote">"</div> */}

      <div className="testimonial-content" style={stylikk}>
        <div className="testimonial-author" onClick={uzivatel}>
          {image && (
            <div className="testimonial-avatar" >
              <img src={image} alt={name} />
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

        

        <span className="text" style={nastavenietextu}>{text}</span>
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
    </div>
  );
};
