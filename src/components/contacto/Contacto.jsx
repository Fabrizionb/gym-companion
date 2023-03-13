import React from 'react'
import "./Contacto.css";
const Contacto = () => {
  return (
    <div className="container contact  d-flex justify-content-center align-items-center mt-5">
  <div className="d-flex flex-column">
    <h3 className="subtitle" id="contact">Contacto</h3>
    <section className="formContainer mt-4">
      <form className="form" action="https://formsubmit.co/b1ef2fbdc605ec95dce0b7912af17b9b" method="POST">
        <label htmlFor="nombre">Nombre</label>
        <input className="input mt-2" type="text" name="name" placeholder="Ingrese su nombre" />
        <label htmlFor="email">Email</label>
        <input className="input mt-2" type="email" name="email" placeholder="Ingrese su email" />
        <label htmlFor="comments">Mensaje</label>
        <textarea className='textarea' name="comments" rows="6" placeholder="Ingrese su mensaje."></textarea>
        <input type="hidden" className="mt-2" name="_next" value="https://fabriziobertolo.vercel.app/" />
        <input type="hidden" className="mt-2" name="_template" value="box" />
        <input className="button mt-4" type="submit" value="Enviar" />
      </form>
    </section>
  </div>
</div>
  )
}

export default Contacto