import React, { useRef,useEffect } from 'react';

import './formular.css' // externý CSS súbor



const Form = ({setSuborOpen,setObsahOpen}) => {

  const referencia = useRef(null);
  useEffect(() => {

  const handle = (e) => {
if (referencia.current && !referencia.current.contains(e.target)) {
  setSuborOpen(false)
  setObsahOpen("")

    }

 
  }
   document.addEventListener('mousedown', handle);
   return () => {
      document.removeEventListener('mousedown', handle);
    };



},[])

console.log(referencia);
  return (
    <div className="form-wrapper" ref={referencia}>
      <form className="form">
        <p className="title">Register</p>
        <p className="message">Signup now and get full access to our app.</p>

        <div className="flex">
          <label>
            <input className="input" type="text" placeholder required />
            <span>Firstname</span>
          </label>
          <label>
            <input className="input" type="text" placeholder required />
            <span>Lastname</span>
          </label>
        </div>

        <label>
          <input className="input" type="email" placeholder required />
          <span>Email</span>
        </label>
        <label>
          <input className="input" type="password" placeholder required />
          <span>Password</span>
        </label>
        <label>
          <input className="input" type="password" placeholder required />
          <span>Confirm password</span>
        </label>

        <button className="submit">Submit</button>
        <p className="signin">
          Already have an account? <a href="#">Signin</a>
        </p>
      </form>
    </div>
  );
};

export default Form;
