import './ikonaikona.css'

import React from 'react'
import { MdOutlinePhoto } from "react-icons/md";
import { useLocation, useNavigate } from "react-router-dom";

import { MdOutlineIosShare } from "react-icons/md";
import { BiShareAlt } from "react-icons/bi";
import Ukazovatelko from '../../naviac/ukazovatelko/ukazovatelko'
const Ikonaikona = ({kliknutie,klik}) => {
  const navigate = useNavigate();
  const farba = {
    fontSize:"19px",
  color: "var(--farba-cierna)"
};
  return (
    <div className='rozlozenieeee'>
    <Ukazovatelko
    onClick={() => navigate(-1)}
     style={{ 
      height:"30px",
      width:"30px",
            fontSize: "24px",
        backgroundColor:  "var(--farba-main2"  }}
    >
      <i style = {farba} class='bx bx-left-arrow-alt'></i>

    </Ukazovatelko>

      <div style={{width:"fit-content",flexDirection:"row",gap:"5px",display:"flex"}}>
        <Ukazovatelko
        style={{ 
                 height:"30px",
      width:"30px",
    
      backgroundColor:  "var(--farba-main2" }}
        >
          <i  style = {farba} class='bx bx-heart'></i>

        </Ukazovatelko>
        <Ukazovatelko
        onClick = {klik}
        style={{ 
                fontSize: "18px",
                       height:"30px",
      width:"30px",
            backgroundColor:  "var(--farba-main2" }}
        >
        <BiShareAlt style = {farba} />
        </Ukazovatelko>
        <Ukazovatelko
        onClick = {kliknutie}
        style={{ 
                fontSize: "18px",
                    height:"30px",
      width:"30px",
              backgroundColor:  "var(--farba-main2" }}
        >
          <  MdOutlinePhoto style = {farba} />
        </Ukazovatelko>
      </div>
    </div>
  )
}

export default Ikonaikona
