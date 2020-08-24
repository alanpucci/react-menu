import React from 'react';
import comidas from './comidas';
import uuid from 'react-uuid';

const Ensaladas = ({ensalada, agregarEnsalada, productosTotal, agregarProductosTotal}) => {

    const sumarEnsalada = salad => {
        // agregarEnsalada([...ensalada, comidas.find(comida => comida.name === salad)]);
        ensalada[salad] = ensalada[salad] + 1;
        agregarEnsalada(ensalada);
        agregarProductosTotal([...productosTotal, salad]);
    }

    const restarEnsalada = salad => {
        // const quitar = ensalada.filter(comida => comida.name === salad);
        // quitar.pop();
        ensalada[salad] = ensalada[salad] - 1;
        agregarEnsalada(ensalada);
        const posicion = productosTotal.indexOf(salad);
        const productosAux = [...productosTotal];
        productosAux.splice(posicion, 1);
        agregarProductosTotal([...productosAux]);
    }


    // const cobb = ensalada.filter(ensalada => ensalada.name === "Cobb");
    // const choclo = ensalada.filter(ensalada => ensalada.name === "Choclo");
    // const cesar = ensalada.filter(ensalada => ensalada.name === "Cesar");
    // const mayo = ensalada.filter(ensalada => ensalada.name === "Mayonesa de ave");

    return (
        <div>
            <h2>Nuestras ensaladas</h2>
            <ul>
                <li className="my-3">
                    <span>Ensalada Cobb</span>
                    <button type="button" className="btn btn-outline-light rounded-circle ml-2" onClick={() => sumarEnsalada("Cobb")}>+</button>
                    <button type="button" className="btn btn-outline-danger rounded-circle ml-2" onClick={() => restarEnsalada("Cobb")}>-</button>
                </li>
                <li className="my-3">
                    <span>Ensalada choclo</span>
                    <button type="button" className="btn btn-outline-light rounded-circle ml-2" onClick={() => sumarEnsalada("Choclo")}>+</button>
                </li>
                <li className="my-3">
                    <span>Ensalada Cesar</span>
                    <button type="button" className="btn btn-outline-light rounded-circle ml-2" onClick={() => sumarEnsalada("Cesar")}>+</button>
                </li>
                <li className="my-3">
                    <span>Mayonesa de ave</span>
                    <button type="button" className="btn btn-outline-light rounded-circle ml-2" onClick={() => sumarEnsalada("Mayonesa de ave")}>+</button>
                </li>
                
            </ul>

        <h4>El total de ensaladas es: {ensalada.length}</h4>
        <h5>Tu pedido actual es: <br />
            {ensalada["Cobb"]}
            
            {/* {cobb.length > 0 ? " " + cobb.length + " cobb" : null}<br />
            {choclo.length > 0 ? " " + choclo.length + " ens.choclo" : null}<br />
            {cesar.length > 0 ? " " + cesar.length + " cesar" : null}<br />
            {mayo.length > 0 ? " " + mayo.length + " mayonesa de ave" : null} */}

         </h5>
        </div>
    );
}
 
export default Ensaladas;