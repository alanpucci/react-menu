import React from 'react';
import { Switch, Route} from 'react-router-dom';
import Home from './components/Home';
import Pizzas from './components/Pizzas';
import Ensaladas from './components/Ensaladas';
import Pastas from './components/Pastas';

const Routes = ({agregarProductosTotal, productosTotal, pizza, agregarPizza, ensalada, agregarEnsalada, pasta, agregarPasta}) => {
    return ( 
        <Switch>
            <Route exact path="/">
                <Home 
                    productosTotal={productosTotal}
                    pizza={pizza}
                    ensalada={ensalada}
                    pasta={pasta}
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
        </Switch>
     );
}
 
export default Routes;