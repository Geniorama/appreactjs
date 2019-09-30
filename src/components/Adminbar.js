import React from 'react';


class Adminbar extends React.Component{
    render(){
        return(
            <div className="adminbar p-1">
                <ul className="nav justify-content-end align-items-center">
                    <li className="nav-item p-1"><a className="nav-link" href="#"><i class="fa fa-envelope" aria-hidden="true"></i></a></li>
                    <li className="nav-item p-1"><a className="nav-link" href="#"><i class="fa fa-bell-o" aria-hidden="true"></i></a></li>
                    <li className="nav-item p-1 profile"><a className="nav-link" href="#"><i class="fa fa-user mr-1" aria-hidden="true"></i> <span className="text">{this.props.nameUser}</span></a></li>
                </ul>
            </div>
        )
    }
}

export default Adminbar;