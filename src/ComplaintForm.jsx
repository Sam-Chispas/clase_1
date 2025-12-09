import React, { useState } from 'react';

const ComplaintForm = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    mensaje: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Queja enviada: ' + JSON.stringify(formData)); // Aquí puedes integrar con una API real
    setFormData({ nombre: '', correo: '', mensaje: '' });
  };

  return (
    <section className="form-section">
      <h2>Formulario de Quejas</h2>
      <form onSubmit={handleSubmit} className="complaint-form">
        <input
          type="text"
          name="nombre"
          placeholder="Nombre"
          value={formData.nombre}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="correo"
          placeholder="Correo"
          value={formData.correo}
          onChange={handleChange}
          required
        />
        <textarea
          name="mensaje"
          placeholder="Mensaje"
          value={formData.mensaje}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
};

export default ComplaintForm;