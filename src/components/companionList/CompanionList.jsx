import React, { useEffect, useState } from "react";
import CompanionCard from "../companionCard/CompanionCard";
import NotFound from "../notFound/NotFound.jsx";
import BotonCalcular from "../boton/Boton";
import "./CompanionList.css";

const CompanionList = ({ data, sortMinus, sortPlus }) => {
  const [filter, setfilter] = useState("");
  const [bodyPart, setbodyPart] = useState("cuello");
  const [muscle, setMuscle] = useState("");
  const [equipment, setEquipment] = useState("");
  const filteredData = data.filter(function (element) {
    return (
      (filter
        ? element.title.toLowerCase().includes(filter.toLowerCase())
        : true) &&
      (bodyPart ? element.bodyPart === bodyPart : true) &&
      (muscle ? element.target === muscle : true) &&
      (equipment ? element.equipment === equipment : true)
    );
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(9);
  const [lastPage, setLastPage] = useState(0);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  function nextPage() {
    setLastPage(filteredData.length);
    setCurrentPage((page) => page + 1);
  }

  function prevPage() {
    setLastPage(filteredData.length);
    setCurrentPage((page) => page - 1);
  }

  const handleClick = (event) => {
    event.preventDefault(); // Evita que la página se recargue al hacer submit
    setbodyPart("");
    setMuscle("");
    setEquipment("");
    setCurrentPage(1);
    setLastPage(1);
  };

  useEffect(() => {}, [bodyPart, muscle, equipment]);

  return (
    <div className='container companion mt-2 pt-3'>
      <div className='alert alert-danger mt-3' role='alert'>
        Estimado/a usuario/a, me complace informarle que Gym Companion es una
        impresionante{" "}
        <strong> Base de Datos que cuenta con más de 1300 ejercicios</strong>.
        Cada uno de estos ejercicios contiene una imagen animada en formato gif,
        lo que le permitirá ver claramente cómo realizar cada ejercicio de forma
        segura y efectiva. Es importante tener en cuenta que el uso de Gym
        Companion puede generar gastos por el uso de datos si se utiliza con una
        red de telefonía móvil, por lo que se recomienda utilizarlo con
        moderación y preferiblemente con una conexión Wi-Fi. Le invitamos a
        explorar nuestra base de datos de ejercicios y esperamos que le resulte
        útil para alcanzar sus metas de fitness.
      </div>
      <form className='row'>
        <select
          className='browser-default custom-select mb-2 col-4'
          value={bodyPart}
          onChange={(event) => setbodyPart(event.target.value)}>
          <option value='' disabled>
            Seleccione una sección del cuerpo
          </option>
          <option value='espalda'>espalda</option>
          <option value='cardio'>cardio</option>
          <option value='pecho'>pecho</option>
          <option value='antebrazos'>antebrazos</option>
          <option value='piernas inferiores'>piernas inferiores</option>
          <option value='cuello'>cuello</option>
          <option value='hombros'>hombros</option>
          <option value='brazos superiores'>brazos superiores</option>
          <option value='piernas superiores'>piernas superiores</option>
          <option value='cintura'>cintura</option>
        </select>

        <select
          className='browser-default custom-select mb-2 col-4'
          value={muscle}
          onChange={(event) => setMuscle(event.target.value)}>
          <option value='' disabled>
            Seleccione un músculo del cuerpo
          </option>
          <option value='abductores'>abductores</option>
          <option value='abdominales'>abdominales</option>
          <option value='aductores'>aductores</option>
          <option value='bíceps'>bíceps</option>
          <option value='pantorrillas'>pantorrillas</option>
          <option value='sistema cardiovascular'>sistema cardiovascular</option>
          <option value='deltoides'>deltoides</option>
          <option value='antebrazos'>antebrazos</option>
          <option value='glúteos'>glúteos</option>
          <option value='isquiotibiales'>isquiotibiales</option>
          <option value='lumbares'>lumbares</option>
          <option value='elevador de la escapula'>
            elevador de la escapula
          </option>
          <option value='pectoral'>pectoral</option>
          <option value='cuadriceps'>cuadriceps</option>
          <option value='serrato anterior'>serrato anterior</option>
          <option value='columna vertebral'>columna vertebral</option>
          <option value='trapecios'>trapecios</option>
          <option value='tríceps'>tríceps</option>
          <option value='espalda alta'>espalda alta</option>
        </select>

        <select
          className='browser-default custom-select mb-2 col-4'
          value={equipment}
          onChange={(event) => setEquipment(event.target.value)}>
          <option value='' disabled>
            Seleccione un equipamiento
          </option>
          <option value='asistido'>asistido</option>
          <option value='banda elastica'>banda elastica</option>
          <option value='barra con pesas'>barra con pesas</option>
          <option value='peso corporal'>peso corporal</option>
          <option value='pelota Bosu'>pelota Bosu</option>
          <option value='maquina de cable'>maquina de cable</option>
          <option value='pesa (mancuerna)'>pesa (mancuerna)</option>
          <option value='maquina elíptica'>maquina elíptica</option>
          <option value='barra EZ'>barra EZ</option>
          <option value='martillo'>martillo</option>
          <option value='pesa rusa (kettlebell)'>pesa rusa (kettlebell)</option>
          <option value='maquina de palanca'>maquina de palanca</option>
          <option value='balón medicinal'>balón medicinal</option>
          <option value='barra olímpica'>barra olímpica</option>
          <option value='banda de resistencia'>banda de resistencia</option>
          <option value='rodillo de espuma'>rodillo de espuma</option>
          <option value='cuerda'>cuerda</option>
          <option value='maquina de esquí (skierg)'>
            maquina de esquí (skierg)
          </option>
          <option value='maquina de arrastre'>maquina de arrastre</option>
          <option value='maquina Smith'>maquina Smith</option>
          <option value='pelota de estabilidad'>pelota de estabilidad</option>
          <option value='bicicleta estática'>bicicleta estática</option>
          <option value='escaladora de escalones'>
            escaladora de escalones
          </option>
          <option value='neumático'>neumático</option>
          <option value='barra trampa'>barra trampa</option>
          <option value='ergómetro de cuerpo superior'>
            ergómetro de cuerpo superior
          </option>
          <option value='con peso'>con peso</option>
          <option value='rodillo de rueda'>rodillo de rueda</option>
        </select>
        <BotonCalcular title={"Borrar Filtros"} handleClick={handleClick} />
      </form>
      <div className='row pt-4 w-100'>
        {/* <!-- Sidebar --> */}

        {/* <!-- Sidebar --> */}

        {/* <!-- Content --> */}
        <div className='col-lg-12'>
          {/* <!-- Products Grid --> */}
          <section className='section pt-4'>
            {/* <!-- Grid row --> */}
            <div className='row'>
              {currentItems.length == 0 ? (
                <NotFound />
              ) : (
                currentItems.map((item) => (
                  <CompanionCard
                    key={item.id}
                    bodyPart={item.bodyPart}
                    equipment={item.equipment}
                    target={item.target}
                    gifUrl={item.gifUrl}
                    nombre={item.nombre}
                    id={item.id}
                  />
                ))
              )}
              <divc className='paginationContainer d-flex align-items-center justify-content-center'>
                <button
                  type='button'
                  class='btn btn-secondary btn-sm'
                  onClick={prevPage} disabled={currentPage === 0}>
                  Anterior
                </button>
                <span className='paginationPage btn'>
                  Page: {currentPage} de {filteredData.length}
                </span>
                <button
                  type='button'
                  class='btn btn-secondary btn-sm'
                  onClick={nextPage} disabled={currentPage === filteredData.length}>
                  Siguiente
                </button>
              </divc>
            </div>
            {/* <!-- Grid row --> */}
          </section>
          {/* <!-- Products Grid --> */}
        </div>
        {/* <!-- Content --> */}
      </div>
    </div>
  );
};

export default CompanionList;
