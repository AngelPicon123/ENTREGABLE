import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function ListaTrabajadores() {
  const [trabajadores, setTrabajadores] = useState([]);

  useEffect(() => {
    cargarTrabajadores();
  }, []);

  const cargarTrabajadores = () => {
    axios.get('http://localhost:8080/api/trabajadores')
      .then(response => {
        setTrabajadores(response.data);
      })
      .catch(error => {
        console.error('Error al cargar trabajadores:', error);
      });
  };

  const eliminarTrabajador = (id) => {
    axios.delete(`http://localhost:8080/api/trabajadores/${id}`)
      .then(() => {
        cargarTrabajadores();
      })
      .catch(error => {
        console.error('Error al eliminar trabajador:', error);
      });
  };

  return (
    <div>
      <h2>Lista de Trabajadores</h2>
      <Link to="/nuevo" className="btn btn-primary mb-3">Nuevo Trabajador</Link>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Cargo</th>
            <th>Salario</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {trabajadores.map(trabajador => (
            <tr key={trabajador.id}>
              <td>{trabajador.id}</td>
              <td>{trabajador.nombre}</td>
              <td>{trabajador.apellido}</td>
              <td>{trabajador.cargo}</td>
              <td>{trabajador.salario}</td>
              <td>
                <Link to={`/editar/${trabajador.id}`} className="btn btn-warning btn-sm">Editar</Link>
                <button onClick={() => eliminarTrabajador(trabajador.id)} className="btn btn-danger btn-sm ml-2">Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListaTrabajadores;