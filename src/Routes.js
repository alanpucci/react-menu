import React from 'react';
import { Switch, Route, Link} from 'react-router-dom';
import Home from './components/Home';
import Pizzas from './components/Pizzas';
import Ensaladas from './components/Ensaladas';
import Pastas from './components/Pastas';
import Milanesas from './components/Milanesas';
import comidas from './components/comidas';
import {Nav, NavLink, FormControl } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
 
const Routes = ({agregarProductosTotal, productosTotal, pizza, agregarPizza, ensalada, agregarEnsalada, pasta, agregarPasta, 
                 milanesa, agregarMilanesa, search, setSearch                    
}) => {

    const cogerValorBuscador = e => {
        setSearch(e.target.value)
    }
    
    const buscado = comidas.find(comida => comida.name === search);

    const buscar = () => {
        if(!buscado){
            return;
        }
        if(buscado.tipo === "ensalada"){
            return "/ensaladas";
        }
        if(buscado.tipo === "pizza"){
            return "/pizzas"
        }
        if(buscado.tipo === "pasta"){
            return "/pastas"
        }
        if(buscado.tipo === "milanesa"){
            return "/milanesas"
        }
    }


    return ( 
        <div>
            <div>
            <Navbar>
                <Navbar.Brand as={Link} to="/">Home</Navbar.Brand>
                <Navbar.Collapse className="mr-auto">
                <Nav>
                    <NavLink as={Link} to="/pizzas">Pizzas</NavLink>
                </Nav>
                <Nav>
                    <NavLink as={Link} to ="/ensaladas">Ensaladas</NavLink>
                </Nav>
                <Nav>
                    <NavLink as={Link} to="/pastas">Pastas</NavLink>
                </Nav>
                <Nav>
                    <NavLink as={Link} to="/milanesas">Milanesas</NavLink>
                </Nav>
                <Nav inline className="ml-auto">
                    <FormControl type="text" name="search" placeholder="Search" onChange={cogerValorBuscador} value={search} className="mr-sm-2 ml-auto w-50"/>
                    <Link className="btn btn-outline-light" to={buscar}>Search</Link>
                </Nav>
                </Navbar.Collapse>
            </Navbar>
            
            </div>
        <div>
          <Switch>
            <Route exact path='/'>
                <Home 
                    productosTotal={productosTotal}
                    pizza={pizza}
                    ensalada={ensalada}
                    pasta={pasta}
                    milanesa={milanesa}
                />
            </Route>
            <Route path="/pizzas">
                <Pizzas 
                    agregarProductosTotal={agregarProductosTotal} 
                    productosTotal={productosTotal}
                    pizza={pizza}
                    agregarPizza={agregarPizza}
                />
            </Route>
            <Route path="/ensaladas">
                <Ensaladas 
                    agregarProductosTotal={agregarProductosTotal} 
                    productosTotal={productosTotal}
                    ensalada={ensalada}
                    agregarEnsalada={agregarEnsalada}
                />
            </Route>
            <Route path="/pastas">
                <Pastas 
                    agregarProductosTotal={agregarProductosTotal}
                    productosTotal={productosTotal}
                    pasta={pasta}
                    agregarPasta={agregarPasta}
                />
            </Route>
            <Route path="/milanesas">
                <Milanesas 
                    milanesa={milanesa}
                    agregarMilanesa={agregarMilanesa}
                    productosTotal={productosTotal}
                    agregarProductosTotal={agregarProductosTotal}
                />
            </Route>
          </Switch>
        </div>
      </div>
     );
}
 
export default Routes;