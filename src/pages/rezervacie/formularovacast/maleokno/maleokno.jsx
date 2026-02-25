import React from 'react'
import './maleokno.css'

const Maleokno = ({ farbaian,name, onChange, type, ocomtoje, placeholder, dolezite, value }) => {
  return (
    <div className='drziakokmoi'>
      <div style={{position:"relative",width:"fit-content"}}>
        <span style={{color:"var(--farba-cierna)",position:"relative",fontSize:"var(--font-size-base2)"}}>
          {ocomtoje}
        </span>
        <div className="hviezdicakk" style={dolezite}>*</div>
      </div>
      
      <input 
        type={type}
        name={name}
        value={value}
         autoComplete="off"
        onChange={onChange}
        className="inputkodoleleni"
        placeholder={placeholder} 
        style={farbaian}
      />
    </div>
  )
}

export default Maleokno
