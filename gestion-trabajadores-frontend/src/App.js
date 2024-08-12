import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ListaTrabajadores from './components/ListaTrabajadores';
import FormularioTrabajador from './components/FormularioTrabajador';
import EditarTrabajador from './components/EditarTrabajador';
import TrabajadorDetail from './components/TrabajadorDetail';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ListaTrabajadores />} />
        <Route path="/nuevo" element={<FormularioTrabajador />} />
        <Route path="/editar/:id" element={<EditarTrabajador />} />
        <Route path="/trabajador/:id" element={<TrabajadorDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
