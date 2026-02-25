import './pay.css'

import React from 'react'

const Pay = ({dolezite,obrazok,hornytext,dolnytext,onMouseEnter,onMouseLeave,onClick,style,texthre,vnutro,vnutro2}) => {
  return (
    <div className='OBALICEKOO'
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
    onClick={onClick}
    style={style}
    >
        <div className='obrazokceko'><img  className = "obrazocekonunbhyb"src={obrazok} alt="" /></div>
        <div className='textovacstooo'>
         <span className="text-A1b2" style={texthre}>{hornytext}</span>
<span className="text-B3c4">{dolnytext}</span>
 <div className="hviezdicakk343434" style={dolezite}>*</div>

          
        </div>
        <div className='finnnlnecko'>
          <div className='gulciakka'style={vnutro}>
            <div className='insidegulicka' style={vnutro2}></div>
          </div>
        </div>
      
    </div>
  )
}

export default Pay
