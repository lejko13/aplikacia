import React from 'react'
import './totosazobrazuje.css'

const Totosazobrazuje = ({textcotamje, farbaian,name, onChange, type, ocomtoje, placeholder, dolezite, value }) => {
  return (
    <div className='drziakokmoi'>
      <div style={{position:"relative",width:"fit-content"}}>
        <span style={{color:"var(--farba-cierna)",position:"relative",fontSize:"var(--font-size-base2)"}}>
          {ocomtoje}
        </span>
        <div className="hviezdicakk" style={dolezite}>*</div>
      </div>


      <div
       type={type}
        name={name}
        value={value}
        onChange={onChange}
        className="inputkodolelenkokokoi"
        placeholder={placeholder} 
        style={farbaian}
      >{textcotamje}

      </div>


    </div>
  )
}

export default Totosazobrazuje
