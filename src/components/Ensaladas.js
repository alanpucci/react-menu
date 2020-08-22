import React from 'react';

const Ensaladas = ({ensalada, agregarEnsalada, productosTotal, agregarProductosTotal}) => {

    const sumarEnsalada = salad => {
        agregarEnsalada([...ensalada, salad]);
        agregarProductosTotal([...productosTotal, salad]);
    }

    const cobb = ensalada.filter(ensalada => ensalada === "Cobb");

    const quitarCobb = () => {
        cobb.pop();
    }

    const choclo = ensalada.filter(ensalada => ensalada === "Choclo");

    const cesar = ensalada.filter(ensalada => ensalada === "Cesar");

    const mayo = ensalada.filter(ensalada => ensalada === "Mayonesa de ave");


    return (
        <div>
            <h2>Nuestras ensaladas</h2>
            <ul>
                <li className="my-3">
                    <span>Ensalada Cobb</span>
                    <button type="button" className="btn btn-outline-light rounded-circle ml-2" onClick={() => sumarEnsalada("Cobb")}>+</button>
                    <button type="button" className="btn btn-outline-danger rounded-circle ml-2" onClick={() => quitarCobb()}>-</button>
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
            {cobb.length > 0 ? " " + cobb.length + " cobb" : null}<br />
            {choclo.length > 0 ? " " + choclo.length + " ens.choclo" : null}<br />
            {cesar.length > 0 ? " " + cesar.length + " cesar" : null}<br />
            {mayo.length > 0 ? " " + mayo.length + " mayonesa de ave" : null}

         </h5>
        </div>
    );
}
 
export default Ensaladas;