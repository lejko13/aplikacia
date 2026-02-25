import React from 'react'
import './malespecial.css'

const Malespecial = ({hodnota,zmena,type,ocomtoje,placeholder,dolezite,kliakkmook}) => {
  return (
    <div className='drziakokmoi0ajkk'>
      <div style={{position:"relative",width:"fit-content"}}>
    <span style={{color:"var(--farba-cierna)",position:"relative",fontSize:"var(--font-size-base2)"}}>{ocomtoje}</span>
    <div className="hviezdicakk" style={dolezite}>*</div>
    </div>
    <div className='obalnainputiikppp'>
      <input
        className="inputkodoleleni00pp"
        type="text"
        placeholder={placeholder}
        value={hodnota}
        onChange={zmena}
      />
      <div className='inokanaodsrdaenini' onClick={kliakkmook}><i class='bx bx-x'></i></div>
    </div>
      
    </div>
  )
}

export default Malespecial
