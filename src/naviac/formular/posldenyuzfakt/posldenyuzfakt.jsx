import React from 'react'
import './Posldenyuzfakt.css'
const Posldenyuzfakt = (  {textice,stilko}) => {
  return (
    <input
      type="text"
  className="Posldenyuzfakt"
  style={stilko}
//   value={textice}
placeholder={textice}

//   onChange={(e) => setTextice(e.target.value)}
  >

    </input>
  )
}

export default Posldenyuzfakt
