import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory, useParams } from 'react-router-dom';

function FormularioTrabajador() {
  const [trabajador, setTrabajador] = useState({ nombre: '', apellido: '', cargo: '', salario: '' });
  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      axios.get(`http://localhost:8080/api/trabajadores/${id}`)
        .then(response => {
          setTrabajador(response.data);
        })
        .catch(error => {
          console.error('Error al cargar trabajador:', error);
        });
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTrabajador(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      axios.put(`http://localhost:8080/api/trabajadores/${id}`, trabajador)
        .then(() => {
          history.push('/');
        })
        .catch(error => {
          console.error('Error al actualizar trabajador:', error);
        });
    } else {
      axios.post('http://localhost:8080/api/trabajadores', trabajador)
        .then(() => {
          history.push('/');
        })
        .catch(error => {
          console.error('Error al crear trabajador:', error);
        });
    }
  };

  return (
    <div>
      <h2>{id ? 'Editar Trabajador' : 'Nuevo Trabajador'}</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Nombre</label>
          <input type="text" className="form-control" name="nombre" value={trabajador.nombre} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Apellido</label>
          <input type="text" className="form-control" name="apellido" value={trabajador.apellido} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Cargo</label>
          <input type="text" className="form-control" name="cargo" value={trabajador.cargo} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Salario</label>
          <input type="number" className="form-control" name="salario" value={trabajador.salario} onChange={handleChange} required />
        </div>
        <button type="submit" className="btn btn-primary">Guardar</button>
      </form>
    </div>
  );
}

export default FormularioTrabajador;