import React, { useState } from 'react';

const Home = ({productosTotal, pizza, ensalada}) => {

    const [ mostrar, cambiarMostrar ] = useState(false);

    const botonMostrar = () => {
        cambiarMostrar(true);
    }

    const filtrarProductos = productosTotal.filter(producto => producto === "Muzzarella");



    return ( 
        <div>
            <h2>Elige algun menu</h2>
            <h3>El total de productos es: {productosTotal.length}</h3>
            <h4>El total de pizzas es: {pizza.length}</h4>
            <h4>El total de ensaladas es: {ensalada.length} </h4>
            <button type="button" className="btn btn-primary btn-lg my-4" onClick={() => botonMostrar()}>Mostrar pedidos</button>
            {mostrar ? filtrarProductos : null}

        </div>
     );
}
 
export default Home;