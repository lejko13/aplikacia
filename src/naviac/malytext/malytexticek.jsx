import React from 'react';
import './malytexticek.css';
import { useMediaQuery } from "react-responsive";


const Malytexticek = ({ ikona, text, text2, className = '',ikonastyle,textstyle,textstyel2 }) => {

    const BREKPOINT = useMediaQuery({ minWidth: 450 });
  
  return (
    <div className={`malytexticek ${className}`}>
    
      <span className="malytexticek-ikona"style={ikonastyle}>{ikona}</span>
       {BREKPOINT &&  <span className="malytexticek-text" style={textstyle}>{text}</span>}
      <span className="malytexticek-text" style={textstyel2}>{text2}</span>
    </div>
  );
};

export default Malytexticek;