import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const EditarTrabajador = () => {
    const { id } = useParams(); // Obtén el ID del trabajador de la URL
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [cargo, setCargo] = useState('');
    const [salario, setSalario] = useState('');
    const navigate = useNavigate(); // Hook para redireccionar

    useEffect(() => {
        // Obtén los datos del trabajador para la edición
        axios.get(`http://localhost:8080/api/trabajadores/${id}`)
            .then(response => {
                const trabajador = response.data;
                setNombre(trabajador.nombre);
                setApellido(trabajador.apellido);
                setCargo(trabajador.cargo);
                setSalario(trabajador.salario);
            })
            .catch(error => console.error('Error al obtener datos del trabajador:', error));
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Actualiza el trabajador en el backend
        axios.put(`http://localhost:8080/api/trabajadores/${id}`, {
            nombre,
            apellido,
            cargo,
            salario
        })
        .then(() => {
            // Redirige a la página anterior después de la actualización
            navigate(-1);
        })
        .catch(error => console.error('Error al actualizar trabajador:', error));
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="nombre" className="form-label">Nombre</label>
                <input
                    type="text"
                    className="form-control"
                    id="nombre"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="apellido" className="form-label">Apellido</label>
                <input
                    type="text"
                    className="form-control"
                    id="apellido"
                    value={apellido}
                    onChange={(e) => setApellido(e.target.value)}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="cargo" className="form-label">Cargo</label>
                <input
                    type="text"
                    className="form-control"
                    id="cargo"
                    value={cargo}
                    onChange={(e) => setCargo(e.target.value)}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="salario" className="form-label">Salario</label>
                <input
                    type="number"
                    className="form-control"
                    id="salario"
                    value={salario}
                    onChange={(e) => setSalario(e.target.value)}
                />
            </div>
            <button type="submit" className="btn btn-primary">Actualizar Trabajador</button>
        </form>
    );
};

export default EditarTrabajador;
