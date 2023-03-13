import React from "react";
import headLogo from "../../assets/headLogo.svg";
import "./Home.css";

const Home = () => {
  return (
    <div className='justify-content-center mt-5 mb-5 d-flex row '>
      <div className='textHome align-middle col-sm-12 col-md-6'>
        <h1>Gym Companion</h1>
        <p>Tu compañero de gimnasio virtual.</p>
      </div>
      <div className='logoHome col-sm-12 col-md-6'>
        <img
          src={headLogo}
          className='headLogo img-fluid'
          alt='head logo'
          title='Enter'
        />
      </div>
    </div>
  );
};

export default Home;
