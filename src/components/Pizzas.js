import React, { useState } from 'react';

const Pizzas = ({agregarProductosTotal, productosTotal, pizza, agregarPizza}) => {

    const [ pizzaMuzza, agregarMuzzas ] = useState([]);
    const [ mostrarMuzza, cambiarMostrarMuzza ] = useState(false);

    const [ pizzaNapo, agregarNapos ] = useState([]);
    const [ mostrarNapo, cambiarMostrarNapo ] = useState(false);

    const [ pizzaAmericana, agregarAmericanas ] = useState([]);
    const [ mostrarAmericana, cambiarMostrarAmericana ] = useState(false);

    const [ pizzaRoque, agregarRoques ] = useState([]);
    const [ mostrarRoque, cambiarMostrarRoque ] = useState(false);

    const [ pizzaTotal, agregarPizzaTotal ] = useState([]);
    const [ mostrarPizzaTotal, cambiarMostrarPizzaTotal ] = useState(false); 

    const agregarMuzza = () => {
        agregarMuzzas([...pizzaMuzza, "Muzzarella"]);
        cambiarMostrarMuzza(true);
        agregarPizzaTotal([...pizzaTotal, "Muzzarella"]);
        cambiarMostrarPizzaTotal(true);

        agregarProductosTotal([...productosTotal, "Muzzarella"]);
        agregarPizza([...pizza, "Muzzarella"]);
    }

    const agregarNapo = () => {
        agregarNapos([...pizzaNapo, "Napolitana"]);
        cambiarMostrarNapo(true);
        agregarPizzaTotal([...pizzaTotal, "Napolitana"]);
        cambiarMostrarPizzaTotal(true);

        agregarProductosTotal([...productosTotal, "Napolitana"]);
        agregarPizza([...pizza, "Napolitana"]);
    }

    const agregarAmericana = () => {
        agregarAmericanas([...pizzaAmericana, "Americana"]);
        cambiarMostrarAmericana(true);
        agregarPizzaTotal([...pizzaTotal, "Americana"]);
        cambiarMostrarPizzaTotal(true);

        agregarProductosTotal([...productosTotal, "Americana"]);
        agregarPizza([...pizza, "Americana"]);
    }

    const agregarRoque = () => {
        agregarRoques([...pizzaRoque, "Roquefort"]);
        cambiarMostrarRoque(true);
        agregarPizzaTotal([...pizzaTotal, "Roquefort"]);
        cambiarMostrarPizzaTotal(true);

        agregarProductosTotal([...productosTotal, "Roquefort"]);
        agregarPizza([...pizza, "Roquefort"]);

    }

    return ( 
        <div>
            <h2>Nuestras pizzas</h2>
            <ul>
                <li className="my-3">
                    <span>Muzzarella </span>
                    <button type="button" className="btn btn-outline-light rounded-circle ml-2" onClick={() => agregarMuzza()}>+</button>
                </li>
                <li className="my-3">
                    <span>Napolitana </span>
                    <button type="button" className="btn btn-outline-light rounded-circle ml-2" onClick={() => agregarNapo()}>+</button>
                </li>
                <li className="my-3">
                    <span>Americana </span>
                    <button type="button" className="btn btn-outline-light rounded-circle ml-2" onClick={() => agregarAmericana()}>+</button>
                </li>
                <li className="my-3">
                    <span>Roquefort </span>
                    <button type="button" className="btn btn-outline-light rounded-circle ml-2" onClick={() => agregarRoque()}>+</button>
                </li>
            </ul>

            <h3>Tu pedido es de: 
                {mostrarMuzza ? pizzaMuzza.length + " Muzarrella " : null}
                {mostrarNapo ? pizzaNapo.length + " Napolitana " : null}
                {mostrarAmericana ? pizzaAmericana.length + " Americana " : null}
                {mostrarRoque ? pizzaRoque.length + " Roquefort " : null}
                <br />
                {mostrarPizzaTotal ? "Pedido actual: " + pizzaTotal.length + " pizzas" : null}
                <br />
                Tu pedido total es: {pizza.length} pizzas
            </h3>
        </div>
     );
}
 
export default Pizzas;