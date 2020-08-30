import React from 'react';
import comidas from './comidas';

const Milanesas = ({milanesa, agregarMilanesa, productosTotal, agregarProductosTotal}) => {

    const sumarMilanesa = mila => {
        const buscarMila = comidas.find(comida => comida.name === mila);
        agregarMilanesa([...milanesa, buscarMila]);
        agregarProductosTotal([...productosTotal, buscarMila]);
    }

    const restarMilanesa = mila => {
        const milaEncontrada = milanesa.findIndex(comida => comida.name === mila);
        const milaEnTotalEncontrada = milanesa.findIndex(comida => comida.name === mila);
        if(milaEncontrada >= 0) {
            milanesa.splice(milaEncontrada, 1);
            productosTotal.splice(milaEnTotalEncontrada, 1);
        }
        agregarMilanesa([...milanesa]);
        agregarProductosTotal([...productosTotal]);
    }

    const napoCarne = milanesa.filter(mila => mila.name === "Carne napolitana");
    const aCaballo = milanesa.filter(mila => mila.name === "Carne a caballo");
    const carneSimple = milanesa.filter(mila => mila.name === "Carne simple");
    const supremaSimple = milanesa.filter(mila => mila.name === "Suprema simple");
    const supremaFugazzeta = milanesa.filter(mila => mila.name === "Suprema a la fugazzeta");
    const supremaSuiza = milanesa.filter(mila => mila.name === "Suprema a la suiza");
    const berenjenaNapo = milanesa.filter(mila => mila.name === "Berenjena a la napo");

    return ( 
        <div>
            <h2>Nuestras milanesas</h2>
            <ul>
                <li className="my-3">
                    <span>Carne napolitana </span>
                    <button type="button" className="btn btn-outline-light rounded-circle ml-2" onClick={() => sumarMilanesa("Carne napolitana")}>+</button>
                    <button type="button" className="btn btn-outline-danger rounded-circle ml-2" onClick={() => restarMilanesa("Carne napolitana")}>-</button>
                </li>
                <li className="my-3">
                    <span>Carne a caballo </span>
                    <button type="button" className="btn btn-outline-light rounded-circle ml-2" onClick={() => sumarMilanesa("Carne a caballo")}>+</button>
                    <button type="button" className="btn btn-outline-danger rounded-circle ml-2" onClick={() => restarMilanesa("Carne a caballo")}>-</button>
                </li>
                <li className="my-3">
                    <span>Carne simple </span>
                    <button type="button" className="btn btn-outline-light rounded-circle ml-2" onClick={() => sumarMilanesa("Carne simple")}>+</button>
                    <button type="button" className="btn btn-outline-danger rounded-circle ml-2" onClick={() => restarMilanesa("Carne simple")}>-</button>
                </li>
                <li className="my-3">
                    <span>Suprema simple </span>
                    <button type="button" className="btn btn-outline-light rounded-circle ml-2" onClick={() => sumarMilanesa("Suprema simple")}>+</button>
                    <button type="button" className="btn btn-outline-danger rounded-circle ml-2" onClick={() => restarMilanesa("Suprema simple")}>-</button>
                </li>
                <li className="my-3">
                    <span>Suprema a la fugazzeta</span>
                    <button type="button" className="btn btn-outline-light rounded-circle ml-2" onClick={() => sumarMilanesa("Suprema a la fugazzeta")}>+</button>
                    <button type="button" className="btn btn-outline-danger rounded-circle ml-2" onClick={() => restarMilanesa("Suprema a la fugazzeta")}>-</button>
                </li>
                <li className="my-3">
                    <span>Suprema a la suiza</span>
                    <button type="button" className="btn btn-outline-light rounded-circle ml-2" onClick={() => sumarMilanesa("Suprema a la suiza")}>+</button>
                    <button type="button" className="btn btn-outline-danger rounded-circle ml-2" onClick={() => restarMilanesa("Suprema a la suiza")}>-</button>
                </li>
                <li className="my-3">
                    <span>Berenjena a la napo</span>
                    <button type="button" className="btn btn-outline-light rounded-circle ml-2" onClick={() => sumarMilanesa("Berenjena a la napo")}>+</button>
                    <button type="button" className="btn btn-outline-danger rounded-circle ml-2" onClick={() => restarMilanesa("Berenjena a la napo")}>-</button>
                </li>
            </ul>
            <h4>El total de milanesas es: {milanesa.length} </h4>
            <h5>Tu pedido actual es: <br />
                {napoCarne.length > 0 ? napoCarne.length + " Carne napolitana" : null}<br />
                {aCaballo.length > 0 ? aCaballo.length + " Carne a caballo" : null}<br />
                {carneSimple.length > 0 ? carneSimple.length + " Carne simple" : null}<br />
                {supremaSimple.length > 0 ? supremaSimple.length + " Suprema simple" : null}<br />
                {supremaFugazzeta.length > 0 ? supremaFugazzeta.length + " Suprema a la fugazzeta" : null}<br />
                {supremaSuiza.length > 0 ? supremaSuiza.length + " Suprema a la suiza" : null}<br />
                {berenjenaNapo.length > 0 ? berenjenaNapo.length + " Berenjena a la napo" : null}<br />
            </h5>
        </div>
    );
}
 
export default Milanesas;