import React from "react";
import { useState, state } from "react";
import StepperC from "../components/stepper";
import { FormConocimiento } from "./FormPages/FormConocimiento";
import { FormConocimientoP2 } from "./FormPages/FormsConocimientoP2";
import "../assets/css/FormC.css";
function FormC() {
  
  const [renderForm, setRenderForm] = useState(FormConocimiento);
  const [contador, setContador] = useState(1);
  const forms = {
    form1 : FormConocimiento, 
    form2 : FormConocimientoP2, 
  }
  function handleSubmit(e) {
    e.preventDefault();
    console.log("You clicked submit.");
    setContador(contador +1);
  }
  function handleVolver(e) {
    e.preventDefault();
    console.log("You clicked submit.");
    setContador(contador -1);
  }
  
  function render(){
    console.log(render)
    if(contador==1){
      return FormConocimiento();
    }else if (contador==2){
      return FormConocimientoP2();
    }
  }
  return (
    <div className="container-fluid  mx-auto  container-form">
      <StepperC enviarActivate={contador} />
      <div className="formularios">
        {render()}
        <button onClick={handleVolver}>Volver</button>
        <button onClick={handleSubmit}>Siguiente</button>
      </div>
    </div>
  );
  
  
  
}

export default FormC;
