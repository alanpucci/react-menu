import React from 'react';
import { Switch, Route, Link} from 'react-router-dom';
import Home from './components/Home';
import Pizzas from './components/Pizzas';
import Ensaladas from './components/Ensaladas';
import Pastas from './components/Pastas';
import Milanesas from './components/Milanesas';
import comidas from './components/comidas';
import { Navbar, Nav, NavLink, NavItem, Button, Form, FormControl } from 'react-bootstrap';
 
const Routes = ({agregarProductosTotal, productosTotal, pizza, agregarPizza, ensalada, agregarEnsalada, pasta, agregarPasta, 
                 milanesa, agregarMilanesa, search, setSearch                    
}) => {

    const cogerValorBuscador = e => {
        setSearch(e.target.value)
    }
    
    const buscado = comidas.findIndex(comida => comida.name === search);
    console.log(buscado);

    const buscar = () => {
        if(buscado >= 0 && buscado < 4){
            return "/ensaladas"
        }
        if(buscado > 3 && buscado < 8){
            return "/pizzas"
        }
        if(buscado > 7 && buscado < 14){
            return "/pastas"
        }
        if(buscado > 13 && buscado < 21){
            return "/milanesas"
        }
    }


    return ( 
        <div>
        <div>
          <Navbar>
            <Navbar.Brand as={Link} to="/" >Home</Navbar.Brand>
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
                <FormControl type="text" name="search" onChange={cogerValorBuscador} value={search} placeholder="Search" className="mr-sm-2 ml-auto w-50"/>
                <Link className="btn btn-sm btn-outline-warning" to={buscar}>Search</Link>
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