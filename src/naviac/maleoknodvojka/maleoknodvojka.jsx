import React from 'react'
import './maleoknodvojka.css'

const Maleoknodvojka = ({type,ocomtoje,placeholder,dolezite,still}) => {
  return (
    <div className='drziakokmoi'>
      <div style={{position:"relative",width:"fit-content"}}>
    <span style={{color:"var(--farba-cierna)",position:"relative",fontSize:"var(--font-size-base2)"}}>{ocomtoje}</span>
    <div className="hviezdicakk" style={dolezite}>*</div>
    </div>
    <div className = "inputkodoleleni00pp4455" style={still}>{placeholder}</div>
      
    </div>
  )
}

export default Maleoknodvojka
