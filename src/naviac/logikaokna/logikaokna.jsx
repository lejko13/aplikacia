import React from 'react'
import { useState, useEffect } from "react";
import { MyContext } from '../providertelefon/providertelefon'
import { useContext } from "react";

const useLogikaokna = () => {

     const { suborOpen,setSuborOpen,obsahOpen,setObsahOpen,subor,setSubor,nazovSuboru,setNazovSuboru,meno,setMeno} = useContext(MyContext);
const klikam = () => {setSuborOpen(true),setObsahOpen("maleokno")}
  return {
klikam
  }

}

export default useLogikaokna
