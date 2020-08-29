import React from 'react';
import comidas from './comidas';

const Pastas = ({pasta, agregarPasta, productosTotal, agregarProductosTotal}) => {
    
    const sumarPasta = passta => {
        agregarPasta([...pasta, comidas.find(comida => comida.name === passta)]);
        agregarProductosTotal([...productosTotal, comidas.find(comida => comida.name === passta)]);
        
    }

    const restarPasta = passta => {
        const pastaEncontrada = pasta.findIndex(pasta => pasta.name === passta);
        const pastaEnTotalEncontrada = pasta.findIndex(pasta => pasta.name === passta);
        if(pastaEncontrada >= 0){
            pasta.splice(pastaEncontrada, 1);
            productosTotal.splice(pastaEnTotalEncontrada, 1);
        }
        agregarPasta([...pasta]);
        agregarProductosTotal([...productosTotal]);
    }

    const bolognesa = pasta.filter(pasta => pasta.name === "Spaghetti con bolognesa");
    const estofado = pasta.filter(pasta => pasta.name === "Spaghetti con estofado");
    const sorrjyq = pasta.filter(pasta => pasta.name === "Sorrentinos de jamon y queso");
    const sorrcyq = pasta.filter(pasta => pasta.name === "Sorrentinos de calabaza y queso");
    const ravverd = pasta.filter(pasta => pasta.name === "Ravioles de verdura");
    const ravric = pasta.filter(pasta => pasta.name === "Ravioles de ricota");
    
    return (
        <div>
            <h2>Nuestras pastas</h2>
            <ul>
                <li className="my-3">
                    <span>Spaghetti con bolognesa</span>
                    <button type="button" className="btn btn-outline-light rounded-circle ml-2" onClick={() => sumarPasta("Spaghetti con bolognesa")}>+</button>
                    <button type="button" className="btn btn-outline-danger rounded-circle ml-2" onClick={() => restarPasta("Spaghetti con bolognesa")}>-</button>
                </li>
                <li className="my-3">
                    <span>Spaghetti con estofado</span>
                    <button type="button" className="btn btn-outline-light rounded-circle ml-2" onClick={() => sumarPasta("Spaghetti con estofado")}>+</button>
                    <button type="button" className="btn btn-outline-danger rounded-circle ml-2" onClick={() => restarPasta("Spaghetti con estofado")}>-</button>
                </li>
                <li className="my-3">
                    <span>Sorrentinos de jamon y queso</span>
                    <button type="button" className="btn btn-outline-light rounded-circle ml-2" onClick={() => sumarPasta("Sorrentinos de jamon y queso")}>+</button>
                    <button type="button" className="btn btn-outline-danger rounded-circle ml-2" onClick={() => restarPasta("Sorrentinos de jamon y queso")}>-</button>
                </li>
                <li className="my-3">
                    <span>Sorrentinos de calabaza y queso</span>
                    <button type="button" className="btn btn-outline-light rounded-circle ml-2" onClick={() => sumarPasta("Sorrentinos de calabaza y queso")}>+</button>
                    <button type="button" className="btn btn-outline-danger rounded-circle ml-2" onClick={() => restarPasta("Sorrentinos de calabaza y queso")}>-</button>
                </li>
                <li className="my-3">
                    <span>Ravioles de verdura</span>
                    <button type="button" className="btn btn-outline-light rounded-circle ml-2" onClick={() => sumarPasta("Ravioles de verdura")}>+</button>
                    <button type="button" className="btn btn-outline-danger rounded-circle ml-2" onClick={() => restarPasta("Ravioles de verdura")}>-</button>
                </li>
                <li className="my-3">
                    <span>Ravioles de ricota</span>
                    <button type="button" className="btn btn-outline-light rounded-circle ml-2" onClick={() => sumarPasta("Ravioles de ricota")}>+</button>
                    <button type="button" className="btn btn-outline-danger rounded-circle ml-2" onClick={() => restarPasta("Ravioles de ricota")}>-</button>
                </li>
            </ul>

            <h4>El total de pastas es: {pasta.length}</h4>
            <h5>Tu pedido actual es: </h5>
            <h6>
                {bolognesa.length > 0 ? bolognesa.length + " spaghetti con bolognesa" : null} <br />
                {estofado.length > 0 ? estofado.length + " spaghetti con estofado" : null} <br />
                {sorrjyq.length > 0 ? sorrjyq.length + " sorrentinos de j y q " : null} <br />
                {sorrcyq.length > 0 ? sorrcyq.length + " sorrentinos de c y q " : null} <br />
                {ravverd.length > 0 ? ravverd.length + " ravioles de verdura " : null} <br />
                {ravric.length > 0 ? ravric.length + " ravioles de ricota " : null} <br />
            </h6>
        </div>
     );
}
 
export default Pastas;