import React, { useState, useEffect, useRef,useContext, use } from 'react';
import './loading.css'
const Loading = ({show}) => {

  useEffect(() => {
  if (show) {
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
    document.documentElement.style.overflow = "";
  }

  return () => {
    document.body.style.overflow = "";
    document.documentElement.style.overflow = "";
  };
}, [show]);


  return (
    <div>
 
<div class="loader"></div>
    </div>
  )
}

export default Loading
