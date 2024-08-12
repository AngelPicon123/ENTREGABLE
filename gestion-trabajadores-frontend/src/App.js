import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import ListaTrabajadores from './components/ListaTrabajadores';
import FormularioTrabajador from './components/FormularioTrabajador';

function App() {
  return (
    <Router>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link className="navbar-brand" to="/">Gestión de Trabajadores</Link>
        </nav>

        <Switch>
          <Route exact path="/" component={ListaTrabajadores} />
          <Route path="/nuevo" component={FormularioTrabajador} />
          <Route path="/editar/:id" component={FormularioTrabajador} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;