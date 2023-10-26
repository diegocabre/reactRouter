import React from "react";
import "./contacto.css";

function Contacto() {
  return (
    <div className="contacto">
      <div className="form">
        <h1>Cuentanos, ¿en que te podemos ayudar?</h1>
      </div>
      <form className="form">
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" />
        <label htmlFor="message">Mensaje</label>
        <textarea name="message" id="message" cols="30" rows="10"></textarea>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default Contacto;
