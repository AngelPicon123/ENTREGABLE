// src/components/TrabajadorDetail.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const TrabajadorDetail = () => {
    const { id } = useParams();
    const [trabajador, setTrabajador] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchTrabajador = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/api/trabajadores/${id}`);
                setTrabajador(response.data);
            } catch (error) {
                console.error('Error fetching trabajador:', error);
            }
        };

        fetchTrabajador();
    }, [id]);

    const handleEditClick = () => {
        navigate(`/editar/${id}`);
    };

    return (
        <div>
            {trabajador ? (
                <div>
                    <h2>Detalles del Trabajador</h2>
                    <p><strong>ID:</strong> {trabajador.id}</p>
                    <p><strong>Nombre:</strong> {trabajador.nombre}</p>
                    <p><strong>Apellido:</strong> {trabajador.apellido}</p>
                    <p><strong>Cargo:</strong> {trabajador.cargo}</p>
                    <p><strong>Salario:</strong> {trabajador.salario}</p>
                    <button onClick={handleEditClick}>Editar</button>
                </div>
            ) : (
                <p>Cargando...</p>
            )}
        </div>
    );
};

export default TrabajadorDetail;
