import  { useState, useContext, useEffect } from 'react';
import BotonCalcular from '../boton/Boton';
import { GlobalContext } from '../globalState/GlobalContext.jsx';

 function Form() {

  const [gender, setGender] = useState('');
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [activityLevel, setActivityLevel] = useState('');

  const [globalState, setGlobalState] = useContext(GlobalContext)

  const handleSubmit = (event) => {
    event.preventDefault(); // Evita que la página se recargue al hacer submit
  
    const formData = {};

    // Verificar que todos los campos tengan un valor
    if (gender && age && weight && height && activityLevel) {
      formData.gender = gender;
      formData.age = age;
      formData.weight = weight;
      formData.height = height;
      formData.activityLevel = activityLevel;
      setGlobalState(formData);
    }
  };
  
  return (
    
    <form className='border border-light p-5 container formWebApp d-flex row' onSubmit={handleSubmit}>
      <div className='gap-1 d-flex'>
        <input
          type='number'
          className='form-control input dataEntry mb-2 col'
          placeholder='Ingrese su peso en kilogramos Ej: 78'
          value={weight}
          onChange={(event) => setWeight(event.target.value)}
        />
        <input
          type='number'
          className='form-control input dataEntry mb-2 col'
          placeholder='Ingrese su altura En centímetros Ej: 177 (1.77)'
          value={height}
          onChange={(event) => setHeight(event.target.value)}
        />
        <input
          type='number'
          className='form-control input dataEntry mb-2 col'
          placeholder='Ingrese su edad'
          value={age}
          onChange={(event) => setAge(event.target.value)}
        />
      </div>
      <select
        className='browser-default custom-select mb-2 col-5'
        value={gender}
        onChange={(event) => setGender(event.target.value)}
      >
        <option value='' disabled>
          Sexo biológico
        </option>
        <option value='1'>Masculino</option>
        <option value='2'>Femenino</option>
      </select>
      <div className='col-2'></div>
      <select
        className='browser-default custom-select mb-2 col-5'
        value={activityLevel}
        onChange={(event) => setActivityLevel(event.target.value)}
      >
        <option value='' disabled>
          Elije una cantidad estimada
        </option>
        <option value='1.2'>Sedentario 0-1 Veces por Semana</option>
        <option value='1.375'>Poca atividad 2-3 Veces por Semana</option>
        <option value='1.55'>Actividad moderada 3-4 Veces por Semana</option>
        <option value='1.725'>Actividad intensa 4-5 Veces por Semana</option>
        <option value='1.9'>Actividad muy intensa +5 Veces por Semana</option>
      </select>
    <BotonCalcular title={"Calcular"}></BotonCalcular>
    </form>
  );
}

export default Form