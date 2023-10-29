import { useState } from "react";
import "./contacto.css";

function Contacto() {
  const [form, setForm] = useState({
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Mensaje enviado!");
    setForm({
      email: "",
      message: "",
    });
  };
  return (
    <div className="contacto">
      <div className="form">
        <h1>Cuentanos, ¿en que te podemos ayudar?</h1>
      </div>
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
        <label htmlFor="message">Mensaje</label>
        <textarea name="message" id="message" cols="30" rows="10" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}></textarea>
        <button type="submit" className="btn" onSubmit={handleSubmit}>Enviar</button>
      </form>
    </div>
  );
}

export default Contacto;
