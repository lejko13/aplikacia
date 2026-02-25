import './ikonyhore.css'
import React, { useState } from 'react';
import Ikonypage from '../../../naviac/ikonypage/ikonypage'
import { color } from 'framer-motion';

const Ikonyhore = () => {
  const [hover, setHover] = useState(null);

  return (
    <div className='drazaktentoceleh'>
      <Ikonypage
        onMouseEnter={() => setHover(1)}
        onMouseLeave={() => setHover(null)}
        ikona={<i className='bx bx-info-circle'></i>}
        text={"Ďalšie informácie"}
        style={{
          backgroundColor: hover === 1 ? "var(--farba-main2)" : "transparent",
        }}
        ikonastyle = {{
            color:"var(--farba-cierna)"
        }}
        textStyle = {{
            color:"var(--farba-cierna)"
        }}
      />

      <Ikonypage
        onMouseEnter={() => setHover(2)}
        onMouseLeave={() => setHover(null)}
        ikona={<i className='bx bx-message-alt-dots'></i>}
        text={"Hodnotenie"}
        style={{
          backgroundColor: hover === 2 ? "var(--farba-main2)" : "transparent",
        }}
        ikonastyle = {{
            color:"var(--farba-cierna)"
        }}
        textStyle = {{
            color:"var(--farba-cierna)"
        }}
      />

      <Ikonypage
        onMouseEnter={() => setHover(3)}
        onMouseLeave={() => setHover(null)}
        ikona={<i className='bx bx-user'></i>}
        text={"Majitel"}
        style={{
          backgroundColor: hover === 3 ? "var(--farba-main2)" : "transparent",
        }}
        ikonastyle = {{
            color:"var(--farba-cierna)"
        }}
        textStyle = {{
            color:"var(--farba-cierna)"
        }}
      />

      <Ikonypage
        onMouseEnter={() => setHover(4)}
        onMouseLeave={() => setHover(null)}
        ikona={<i className='bx bx-server'></i>}
        text={"Často kladené otázky"}
        style={{
          backgroundColor: hover === 4 ? "var(--farba-main2)" : "transparent",
        }}
        ikonastyle = {{
            color:"var(--farba-cierna)"
        }}
        textStyle = {{
            color:"var(--farba-cierna)"
        }}
      />
    </div>
  )
}

export default Ikonyhore;
