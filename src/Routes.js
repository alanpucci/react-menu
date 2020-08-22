import React from 'react';
import { Switch, Route} from 'react-router-dom';
import Home from './components/Home';
import Pizzas from './components/Pizzas';
import Ensaladas from './components/Ensaladas';

const Routes = ({agregarProductosTotal, productosTotal, pizza, agregarPizza, ensalada, agregarEnsalada}) => {
    return ( 
        <Switch>
            <Route exact path="/">
                <Home 
                    productosTotal={productosTotal}
                    pizza={pizza}
                    ensalada={ensalada}
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
        </Switch>
     );
}
 
export default Routes;