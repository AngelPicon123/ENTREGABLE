import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function FormularioTrabajador() {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [cargo, setCargo] = useState('');
  const [salario, setSalario] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post('http://localhost:8080/api/trabajadores', {
        nombre,
        apellido,
        cargo,
        salario
      });
      navigate(-1); // Navegar a la lista de trabajadores después de guardar
    } catch (error) {
      console.error('Error al guardar el trabajador:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nombre:</label>
        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Apellido:</label>
        <input
          type="text"
          value={apellido}
          onChange={(e) => setApellido(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Cargo:</label>
        <input
          type="text"
          value={cargo}
          onChange={(e) => setCargo(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Salario:</label>
        <input
          type="number"
          value={salario}
          onChange={(e) => setSalario(e.target.value)}
          required
        />
      </div>
      <button type="submit">Guardar</button>
    </form>
  );
}

export default FormularioTrabajador;
