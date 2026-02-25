import './gridfotky.css'

import React from 'react'

const Gridfotky = ({jeden,dva,tri,styri}) => {
  return (
    <div className='Gridfotky'>
     <div className='fotka'><img className = "foteckaosus" src={jeden} alt="" /></div>
     <div className='fotka'><img  className = "foteckaosus"src={dva} alt="" /></div>
     <div className='fotka'><img  className = "foteckaosus"src={tri} alt="" /></div>
     <div className='fotka'><img  className = "foteckaosus"src={styri} alt="" /></div>
     <div style={{height:"20px",width:"100%"}}></div>
    </div>
  )
}

export default Gridfotky
