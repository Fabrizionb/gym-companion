import React, { useEffect, useState } from "react";
import CompanionCard from "../companionCard/CompanionCard";
import NotFound from "../notFound/NotFound.jsx";
import BotonCalcular from "../boton/Boton";
import "./CompanionList.css";

const CompanionList = ({ data, sortMinus, sortPlus }) => {
  const [bodyPart, setBodyPart] = useState("");
  const [target, setTarget] = useState("");
  const [equipment, setEquipment] = useState("");

  const [filter, setfilter] = useState("");
  const [muscle, setMuscle] = useState("");

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
  const [itemsPerPage, setItemsPerPage] = useState(6);
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

    setMuscle("");
    setEquipment("");
    setCurrentPage(1);
    setLastPage(1);

    setEquipment("")
    setBodyPart("")
    setTarget("")
  };

  useEffect(() => {}, [bodyPart, muscle, equipment]);
  // Obtener lista de opciones únicas para el primer select
  const bodyPartOptions = Array.from(
    new Set(data.map((item) => item.bodyPart))
  );
  // Obtener lista de opciones únicas para el segundo select
  const targetOptions = Array.from(
    new Set(
      data
        .filter((item) => item.bodyPart === bodyPart)
        .map((item) => item.target)
    )
  );
  // Obtener lista de opciones únicas para el tercer select
  const equipmentOptions = Array.from(
    new Set(
      data
        .filter((item) => item.bodyPart === bodyPart && item.target === target)
        .map((item) => item.equipment)
    )
  );

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

      <div className='container pt-4 w-100'>
        <div className='col'>



          {/* <!-- Sidebar --> */}
          <div className='row d-flex '>
            <select
              id='bodyPartSelect'
              value={bodyPart}
              onChange={(e) => setBodyPart(e.target.value)} className='selects col-4 form-select'>
              <option value=''>Selecciona una parte del cuerpo</option>
              {bodyPartOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>

            <select
              id='targetSelect'
              value={target}
              onChange={(e) => setTarget(e.target.value)} className='selects col-4 form-select'>
              <option value=''>Selecciona un músculo</option>
              {targetOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>

            <select
              id='equipmentSelect'
              value={equipment}
              onChange={(e) => setEquipment(e.target.value)} className='selects col-4 form-select'  >
              <option value=''>Selecciona un equipamiento </option>
              {equipmentOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <div className='col-12 mt-3'>
              <BotonCalcular
                title={"Borrar Filtros"}
                handleClick={handleClick}
              />
            </div>
          </div>
        </div>
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
              <div className='paginationContainer d-flex align-items-center justify-content-center'>
                <button
                  type='button'
                  className='btn btn-secondary btn-sm'
                  onClick={prevPage}
                  disabled={currentPage === 0}>
                  Anterior
                </button>
                <span className='paginationPage btn'>
                  Page: {currentPage} de{" "}
                  {Math.round(filteredData.length / itemsPerPage)}
                </span>
                <button
                  type='button'
                  className='btn btn-secondary btn-sm'
                  onClick={nextPage}
                  disabled={currentPage === filteredData.length}>
                  Siguiente
                </button>
              </div>
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
