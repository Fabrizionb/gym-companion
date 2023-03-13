import "./CompanionCard.css";
import React from "react";

const CompanionCard = ({id,bodyPart,equipment, target, gifUrl, nombre }) => {


  
  return (
    <>
    <div className='col-lg-4 col-md-12 mb-4'>
    
        {/* <!-- Card  --> */}
      <div className='card card-ecommerce'>
        {/* <!-- Card image --> */}
        <div className='view overlay d-flex align-items-center text-center'>
          <img src={gifUrl} className='img-fluid align-self-center text-center' alt='' />
        </div>
        {/* <!-- Card image --> */}
        {/* <!-- Card content --> */}
        <div className='card-body'>
          {/* <!-- Category & Title --> */}
          <h5 className='card-title mb-1'>
            <strong>
            {nombre}
            </strong>
          </h5>
          {/* <!-- Card footer --> */}
          <div className='card-footer pb-0'>
            <div className='row mb-0'>
              <span className='float-left mb-2'>
                <strong>Parte del cuerpo: {bodyPart}</strong>
              </span>
              <span className='float-left mb-2'>
                <strong>Equipamiento: {equipment}</strong>
              </span>
              <span className='float-left mb-2'>
                <strong>Musculo trabajado: {target}</strong>
              </span>
            </div>
          </div>
        </div>
        {/* <!-- Card content --> */}
      </div>
      {/* // <!-- Card --> */}
      </div>
      </>
  );
};

export default CompanionCard;
