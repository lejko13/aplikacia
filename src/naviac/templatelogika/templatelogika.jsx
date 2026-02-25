import './templatelogika.css';
import { useRef, useState, useEffect, Children } from "react";
import { motion } from "framer-motion";
import Linka from '../linka/linka';
import Ukazovatelko from '../../naviac/ukazovatelko/ukazovatelko';
import { MyContext } from '../providertelefon/providertelefon';
import { useContext } from "react";
import Ikonypage from '../../naviac/ikonypage/ikonypage';
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

const Templatelogika = ({klikatelko3, letkokonitna,stylecekokok,text, children, uprava, spodocekosti, alternativna, text4,infookliku,klikatelko,klikatelko2 }) => {
  const navigate = useNavigate();
  const { suborOpen, setSuborOpen, obsahOpen, setObsahOpen, subor, setSubor, nazovSuboru, setNazovSuboru } = useContext(MyContext);
  
  const zatvorenie = useRef(null);

const[hover,setHover] = useState(null)

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!zatvorenie?.current.contains(e.target)) {
        setSuborOpen(false);
        setNazovSuboru("")
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [setSuborOpen]);

  const kontrola = () => {
    if (nazovSuboru.trim() === "") return null;
    setSubor(prev => [
      ...prev,
      {
        id: Date.now(),
        nazov: nazovSuboru,
        cas: new Date().toLocaleString()
      }
    ]);
    setNazovSuboru("");
    setObsahOpen(false);
    setSuborOpen(false);
  }

  const malo4         = useMediaQuery({ maxWidth: 530 }); 

  return (
    <motion.div
    style={stylecekokok}
      className='Tujelogikatempalte'
      ref={zatvorenie}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className='vrhocelcekokokt' style={letkokonitna}>
        <div style={klikatelko}>
         <Ukazovatelko
      
          style={{ position: "absolute", top: "10px", left: "0px", color: "var(--farba-cierna)",
            backgroundColor:hover === 2 ? "var(--farba-main2)" : "transparent" }}
          onMouseEnter={() => setHover(2)}
          onMouseLeave={() => setHover(null)}
          onClick={infookliku}
        >
          <i class='bx bx-chevron-left' ></i>
        </Ukazovatelko>
        </div>
        <span style={{color:"var(--farba-cierna)",fontSize:"var(  --font-size-base4)"}}>{text}</span>
        <div style={klikatelko2}>
        <Ukazovatelko
      
         style={{
  position: "absolute",
  top: malo4 ? "-3px" : "10px",
  right: "0px",
  color: "var(--farba-cierna)",
  backgroundColor: hover === 1 ? "var(--farba-main2)" : "transparent"
}}
          onMouseEnter={() => setHover(1)}
          onMouseLeave={() => setHover(null)}
          onClick={() => {setSuborOpen(false),setNazovSuboru("")}}
        >
          <i className='bx bx-x'></i>
        </Ukazovatelko>
        </div>

        <div style={klikatelko3}>
        <Ukazovatelko
      
          style={{ position: "absolute", top: "0px", right: "0px", color: "var(--farba-cierna)",
            backgroundColor:hover === 1 ? "var(--farba-main2)" : "transparent" }}
          onMouseEnter={() => setHover(1)}
          onMouseLeave={() => setHover(null)}
          onClick={() => {setSuborOpen(false),setNazovSuboru("")}}
        >
          <i className='bx bx-x'></i>
        </Ukazovatelko>
        </div>
      </div>

      <div className='strednyobsah' style={uprava}>
        {children}
      </div>

      <div className="spodokecekostkos" style={spodocekosti}>
        <Ikonypage
          onClick={() => setSuborOpen(false)}
          text="Zrusit"
        />
        <Ikonypage
          onClick={kontrola}
          text="Vytvorit"
        />
      </div>

     
    </motion.div>
  );
}

export default Templatelogika;
