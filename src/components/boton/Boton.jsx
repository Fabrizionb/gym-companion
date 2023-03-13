import React from 'react';

const BotonCalcular = ({ title , handleClick }) => {
  return (
    <button className='btn btn-info my-2 btn-block button' onClick={handleClick}>
      {title}
    </button>
  );
};

export default BotonCalcular;