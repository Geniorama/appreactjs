import React from 'react';
import Logo from '../img/logo-fundaciones.png';

class Sidemenu extends React.Component{
    render(){
        return(
            <div className="sidemenu">
                <div className="brand p-3 text-center"><img src={Logo} className="img-fluid"></img></div>
                <ul className="nav flex-column">
                    <li className="nav-item p-2"><a className="nav-link" href="#"><i class="fa fa-home" aria-hidden="true"></i> Inicio</a></li>
                    <li className="nav-item p-2"><a className="nav-link" href="#">Mis productos</a></li>
                    <li className="nav-item p-2"><a className="nav-link" href="#">Noticias</a></li>
                    <li className="nav-item p-2"><a className="nav-link" href="#">Inicio</a></li>
                    <li className="nav-item p-2"><a className="nav-link" href="#">Inicio</a></li>
                </ul>
            </div>
        )
    }
}

export default Sidemenu;