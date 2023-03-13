import React from "react";
import { useState, state } from "react";
import StepperC from "../components/stepper";
import { FormConocimiento } from "./FormPages/FormConocimiento";
import { FormConocimientoP2 } from "./FormPages/FormsConocimientoP2";
import { FormSociosDirectos } from "./FormPages/FormSociosDirectos";
import { FormSociosIndirectos } from "./FormPages/FormsSociosIndirectos";
import { FormConocimientoP3 } from "./FormPages/FormsConocimientoP3";
import Button from 'react-bootstrap/Button';
import "../assets/css/FormC.css";
function FormC() {
  
  //const [renderForm, setRenderForm] = useState(FormConocimiento);
  const [contador, setContador] = useState(0);
  const forms = {
    form1 : FormConocimiento, 
    form2 : FormConocimientoP2, 
  }
  function handleSubmit(e) {
    e.preventDefault();
    setContador(contador +1);
  }
  function handleVolver(e) {
    e.preventDefault();
    setContador(contador -1);
  }
  
  function render(){
    if(contador===0){
      return FormConocimiento();
    }else if (contador===1){
      return FormConocimientoP2();
    }
    else if (contador===2){
      return FormConocimientoP3();
    }
    else if (contador===3){
      return FormSociosDirectos();
    }
    else if (contador===4){
      return FormSociosIndirectos();
    }
  }
  return (
    <div className="container-fluid  mx-auto  container-form">
      <StepperC enviarActivate={contador} />
      <div className="formularios">
        {render()}
        <div className="botones">
        <Button className="m-2" onClick={handleVolver}>Volver</Button>
        <Button  className="m-2" onClick={handleSubmit}>Siguiente</Button>
        </div>
      </div>
    </div>
  );
  
  
  
}

export default FormC;
