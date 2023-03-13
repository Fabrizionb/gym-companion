import React from "react";
import { useEffect, useContext } from "react";
import "./WebApp.css";
import Form from "../form/Form.jsx";
import { GlobalContext } from "../globalState/GlobalContext.jsx";
import DashBoard from "../dashboard/DashBoard";

 const WebApp = () => {
  const [globalState, setGlobalState] = useContext(GlobalContext);

  return (
    <div className='container webApp'>
      <div className='col-12 mt-5'>
        <h1>Atención</h1>
        <p className='text-justify-justify'>
          ¡Bienvenido a nuestra sección de conocimiento, salud y bienestar!{" "}
          <br />
          En esta app, podrás obtener información aproximada sobre tu índice de
          masa muscular, tasa metabólica basal, horas recomendadas de sueño,
          cantidad de agua diaria recomendada, así como también una aproximación
          de las calorías que necesitas consumir para bajar, subir o mantener tu
          peso. <br />
          Es importante tener en cuenta que esta información es aproximada y no
          debe ser tomada al pie de la letra, ya que cada organismo es único.{" "}
          <br />
          Te recomendamos consultar con un profesional de la salud antes de
          tomar cualquier decisión que pueda afectar tu salud. <br />
          También queremos hacer hincapié en la importancia de la
          concientización de los problemas de peso, como la anorexia y la
          bulimia, y la necesidad de tomar medidas saludables para alcanzar tus
          objetivos. <br />
          ¡Cuidar de tu salud es lo más importante!
        </p>
      </div>
      <Form />
      <div className='contenidoWebApp'>
        <div className='row d-flex align-items-center justify-content-center'>
          { globalState.length !== 0 ? (
           <DashBoard></DashBoard>
          ) : (
           null
          )}
        </div>
        <div className='alert alert-primary mt-3' role='alert'>
          En Gym Companion nos tomamos la privacidad muy en serio. Los datos
          ingresados solo viven en tu navegador. No se guardaran ni enviaran a
          ningun lado. Se destruiran al momento de actualizar la pagina o
          cerrarla.
        </div>
      </div>
    </div>
  );
};

export default WebApp;
