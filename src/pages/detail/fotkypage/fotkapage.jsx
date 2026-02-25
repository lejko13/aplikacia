import './fotkypage.css'

import React from 'react'

const Fotkapage = ({data}) => {
  return (
    <div className='Fotkapage'>
        <div className='kontainerkoko'>
        {data.map((item) => 
        <div className='foteckakak'>
            <img  className = "fototoofotokoko"src={item} alt="" />

        </div>
        )}
        </div>
      
    </div>
  )
}

export default Fotkapage
