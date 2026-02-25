import './otazky.css'
import React, { useState } from 'react'
import Hybemkomponent from '../hybemkomponent/hybemkomponent'

import { useMediaQuery } from "react-responsive";

const Otazky = ({odpoved1,otazka1,odpoved2,otazka2,odpoved3,otazka3,odpoved4,otazka4,odpoved5,otazka5}) => {
  const [aktualnyIndex, setAktualnyIndex] = useState(1) // index rozbalenej komponenty

    const textdesktop = useMediaQuery({ minWidth: 450 });


  const klikHandler = (index) => {
    setAktualnyIndex(index);
  }

  return (
    <div className='Otazky'>
      <Hybemkomponent
      aktualnyIndex = {aktualnyIndex}
      odpoved = {odpoved1}
      texthore = {otazka1}
        index={1}
        zvacseny={aktualnyIndex === 1}
        onClick={() => klikHandler(1)}
      />
      <Hybemkomponent
       

       odpoved = {odpoved2}
      texthore = {otazka2}
        index={2}
        zvacseny={aktualnyIndex === 2}
        onClick={() => klikHandler(2)}
      />
      <Hybemkomponent
      odpoved = {odpoved3}
      texthore = {otazka3}
          
        index={3}
        zvacseny={aktualnyIndex === 3}
        onClick={() => klikHandler(3)}
      />
      <Hybemkomponent
        odpoved = {odpoved4}
      texthore = {otazka4}
        index={4}
        zvacseny={aktualnyIndex === 4}
        onClick={() => klikHandler(4)}
      />
      <Hybemkomponent
      
    

      odpoved = {odpoved5}
      texthore = {otazka5}
        index={5}
        zvacseny={aktualnyIndex === 5}
        onClick={() => klikHandler(5)}
      />
      
    </div>
  )
}

export default Otazky
