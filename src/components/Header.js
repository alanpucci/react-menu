import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {

    return ( 
        <div className="col-6 mx-auto my-4">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                {/* <a class="navbar-brand" href="#">Navbar</a> */}
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#menu" aria-controls="menu" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="menu">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link to="/" className="nav-link bg-outline-dark">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/pizzas" className="nav-link">Pizzas</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/ensaladas" className="nav-link">Ensaladas</Link>
                        </li>              
                    </ul>
                </div>
            </nav>
        </div>
     );

}
 
export default Header;