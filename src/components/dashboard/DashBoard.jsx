import React from "react";
import userDashboard from "../../assets/image/ricardo.gif";
import imcImage from "../../assets/image/IMC-05.png";
import tmbImage from "../../assets/image/tmb.png";
import weightImage from "../../assets/image/weightImg.png";
import waterImage from "../../assets/image/water.png";
import "./DashBoard.css";
import { GlobalContext } from "../globalState/GlobalContext.jsx";
import { useEffect, useContext, useState } from "react";



const DashBoard = () => {
    const [globalState, setGlobalState] = useContext(GlobalContext);
    const { gender, age, weight, height, activityLevel } = globalState;
    const [tmb, setTmb] = useState(0);
    const [maintenance, setMaintenance] = useState(0);
    const [loseWeight, setLoseWeight] = useState(0);
    const [gainWeight, setGainWeight] = useState(0);
    const [waterD, setWaterD] = useState(0);
    const [imc, setImc] = useState(0);
    let normalHeight
    function calculate() {
      const tmbValue = 655 + 9.6 * weight + 1.8 * height - 4.7 * age;
      const maintenanceValue = Math.round(tmbValue * Number(activityLevel));
      const loseWeightValue = maintenanceValue - 450;
      const gainWeightValue = maintenanceValue + 450;
      const waterDValue = (weight * 35) / 1000;
      normalHeight = height / 100
      const imcValue = (weight / (normalHeight * normalHeight)).toFixed(2)


      setTmb(tmbValue);
      setMaintenance(maintenanceValue);
      setLoseWeight(loseWeightValue);
      setGainWeight(gainWeightValue);
      setWaterD(waterDValue);
      setImc(imcValue);
    }
  
    useEffect(() => {
      calculate();
     
    }, [globalState]);
  

  return (
    <div className="container py-4 py-xl-5">
    <div className="row mb-5">
        <div className="col-md-8 col-xl-6 text-center mx-auto">
            <h2>Resultados</h2>
            <p>Estos calculos son orientativos, si quieres un calculo riguroso y confiable, acude a tu medico de cabecera.</p>
        </div>
    </div>

    <div className="row gy-4 row-cols-1 row-cols-md-2 row-cols-xl-3">

        <div className="col flip-card cardResult">
            <div className="card flip-card-inner">
                <div className="card-body p-4 flip-card-back">
                    <h2 className="card-title mb-5 mt-5">Tasa Metabolica Basal</h2>
                    <p className="card-text mb-5"><strong>La tasa metabólica basal (TMB) es la cantidad mínima de energía que necesita tu cuerpo para sobrevivir realizando las funciones básicas, tales como respirar, parpadear, filtrar la sangre, regular la temperatura del cuerpo o sintetizar hormonas.</strong></p>
                    <p className="card-text mb-5"><strong>Su TMB es de {tmb}.</strong></p>
                </div>
                <div className="card-body  flip-card-front">
                <img src={tmbImage} className="imgFlip img-fluid tmb img-fluid  w-75 text-center" alt="Avatar" />
                </div>
            </div>
        </div>

        <div className="col flip-card cardResult">
            <div className="card flip-card-inner">
                <div className="card-body p-4 flip-card-back">
                <h2 className="card-title mb-5 mt-5">Peso</h2>
                <p className="card-text mb-5"><strong>Si su intencion es mantener su peso actual, usde deberia consumir aproximadamente {maintenance} kc al dia.</strong></p>
                    <p className="card-text mb-5"><strong>Si su intencion es perder peso, usde deberia consumir aproximadamente {loseWeight} kc al dia.</strong></p>
                    <p className="card-text mb-5"><strong>Si su intencion es ganar peso, usde deberia consumir aproximadamente {gainWeight} kc al dia.</strong></p>
                </div>
                <div className="card-body  flip-card-front">
                <img src={weightImage} className="imgFlip img-fluid tmb img-fluid  w-75 text-center" alt="Avatar" />
                </div>
            </div>
        </div>

        <div className="col flip-card cardResult">
            <div className="card flip-card-inner">
            <div className="card-body  flip-card-front">
                <img src={imcImage} className="imgFlip img-fluid tmb img-fluid  text-center" alt="Avatar" />
                </div>
                <div className="card-body p-4 flip-card-back">
                <h2 className="card-title mb-5 mt-5">Indice de Masa Corporal</h2>
                <p className="card-text mb-5"><strong>El índice de masa corporal (IMC) es un número que se calcula con base en el peso y la estatura de la persona. Para la mayoría de las personas, el IMC es un indicador confiable de la gordura y se usa para identificar las categorías de peso que pueden llevar a problemas de salud.
                    </strong></p>
                <p className="card-text mb-5"><strong>Su IMC es {imc}</strong></p>
                </div>
            </div>
        </div>

        <div className="col flip-card cardResult">
            <div className="card flip-card-inner">
                <div className="card-body p-4 flip-card-back">
                <h2 className="card-title mb-5 mt-5">Hidratacion</h2>
                <p className="card-text mb-5"><strong>La hidratación del cuerpo es importante para transportar hidratos de carbono, proteínas, vitaminas, minerales y otros nutrientes esenciales, así como oxígeno, a las células. De esta forma, las células son capaces de producir la energía necesaria para un buen funcionamiento del cuerpo.</strong></p>
                <p className="card-text mb-5"><strong>Se aconseja beber al menos {waterD} de litros de agua al dia.</strong></p>
                </div>
                <div className="card-body  flip-card-front">
                <img src={waterImage} className="imgFlip img-fluid tmb img-fluid  w-75 text-center" alt="Avatar" />
                </div>
            </div>
        </div>

    </div>

</div>
  );
};

export default DashBoard;






// Nos tomamos la privacidad muy en serio. En companion toda la informacion recabada, solo vive
//                                en tu ordenador.
//                                Toda la informacion se destruira cuando reinicies el navegador o lo cierres.
//                                La app estara disponible para tus consultas cuantas veces quieras.