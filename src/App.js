import React from 'react';
import './App.css';
import Sidemenu from './components/Sidemenu.js';
import Adminbar from './components/Adminbar.js';

function App() {
  return (
    <div className="App">
        <div className="wrap-sidemenu">
          <Sidemenu/>
        </div>
        <div className="wrap-content">
          <Adminbar nameUser="Juan Pérez" />
          <div className="content mt-5">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <table class="table">
                          <thead>
                            <tr>
                              <th scope="col">Mes</th>
                              <th scope="col">Valor Cuota</th>
                              <th scope="col">Fecha límite de pago</th>
                              <th scope="col">Estado</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <th scope="row">1</th>
                              <td>$435.000</td>
                              <td>23 de abril 2019</td>
                              <td><span className="badge badge-pill badge-danger">EN MORA</span></td>
                            </tr>
                            <tr>
                              <th scope="row">2</th>
                              <td>Jacob</td>
                              <td>Thornton</td>
                              <td><span className="badge badge-pill badge-success">PAGADO</span></td>
                            </tr>
                            <tr>
                              <th scope="row">3</th>
                              <td>Larry</td>
                              <td>the Bird</td>
                              <td>@twitter</td>
                            </tr>
                          </tbody>
                        </table>
                    </div>
                    
                </div>
            </div>
          </div>
        </div>    
    </div>
  );
}

export default App;
