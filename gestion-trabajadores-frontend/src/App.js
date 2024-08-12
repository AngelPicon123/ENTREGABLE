import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ListaTrabajadores from './components/ListaTrabajadores';
import FormularioTrabajador from './components/FormularioTrabajador';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/lista" element={<ListaTrabajadores />} />
        <Route path="/formulario" element={<FormularioTrabajador />} />
      </Routes>
    </Router>
  );
}

export default App;
