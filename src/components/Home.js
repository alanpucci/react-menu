import React, { useState } from 'react';
import styled from '@emotion/styled';

const Boton = styled.button `
    background-color: red
`;

const Home = ({productosTotal, pizza, ensalada, pasta}) => {

    
    const [ show, setShow ] = useState(false);
    const [ total , setTotal ] = useState(0);


    const mostrarEnsaladas = salad => {
        const ensaladaNombre = ensalada.map(ensalada => ensalada.name);
        ensaladaNombre.sort();
        const primerValor = ensalada.findIndex(ensalada => ensalada.name === salad);
        const ultimoValor = ensalada.lastIndexOf(ensalada.find(ensalada => ensalada.name === salad));
        console.log(primerValor, ultimoValor);
    }

    const precioTotal = () => {
        if(productosTotal.length > 0){
            const precios = productosTotal.map(producto => producto.price);
            const suma = precios.reduce((product1, product2) => product1 + product2);
            setShow(!show);
            setTotal(suma);
        }
    }

    return ( 
        <div>
            <h2>Elige algun menu</h2>
            <h3>El total de productos es: {productosTotal.length}</h3>
            <h4>El total de pizzas es: {pizza.length}</h4>
            <h4>El total de ensaladas es: {ensalada.length} </h4>
            {/* <h5>El total de a pagar es: {ensalada["Cobb"] * comidas[0].price}</h5> */}
            <h4>El total de pastas es: {pasta.length}</h4>
            <button type="button" className="btn btn-primary btn-lg my-4" onClick={() => mostrarEnsaladas()}>Mostrar pedidos</button> <br />
            <Boton type="button" className="btn btn-primary btn-sm mb-4" onClick={() => precioTotal()}>Mostrar total</Boton>
            {show ? <h2 className="d-inline ml-3 bg-dark rounded text-info ">${total}</h2> : null}
        </div>
     );
}
 
export default Home;