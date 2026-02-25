import React, { createContext, useContext,useState } from "react";

// 1. Vytvoríme kontext
const DatePickerContext = createContext();

// 2. Provider
export const Providerform = ({ children }) => {

     const [datum, setDatum] = useState("");  // napríklad dátum
     const [rok, setRok] = useState("");

    //  otovreinie celeho
      const [otvorenie, setOtvorenie] = useState(false);
// placeholdern inputu
        
    // otovriene datumu
      const [otovreniedatumu, setOtovreniedatumu] = useState(false);
    // otovriene roku
     const [otovrenieROKU, setOtovrenieROKU] = useState(false);

    //  aktualne nastaveni
      const [aktualnyROK, setaktualnyROK] = useState(2026);
      const[aktuakyMESIAC,setAktualnyMESIAC] = useState("Január");

    // zobrazovanie dat 
    const[mnesic,setMnesic] = useState(0)

    const [krajina, setKrajina] = useState({den:null,mesiac:aktuakyMESIAC,rok:aktualnyROK});


    const[alternativa,setAlternativa] = useState(false)
const[alternativa2,setAlternativa2] = useState(false)
  return (
    <DatePickerContext.Provider value={{ datum, setDatum, rok, setRok ,otvorenie, setOtvorenie,krajina, setKrajina,otovreniedatumu, setOtovreniedatumu,otovrenieROKU, setOtovrenieROKU,aktualnyROK, setaktualnyROK,aktuakyMESIAC,setAktualnyMESIAC,mnesic,setMnesic,alternativa,setAlternativa,alternativa2,setAlternativa2}}>
      {children} 
    </DatePickerContext.Provider>
  );
};


export const useDatePicker = () => {
  const context = useContext(DatePickerContext);
  if (!context) throw new Error("useDatePicker must be used within Providerform");
  return context;
};
