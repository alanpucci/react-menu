import React,  {useState} from 'react';
import Routes from './Routes';
import Header from './components/Header';

//function App() {
const App = () => {

  const [ productosTotal, agregarProductosTotal] = useState([]);

  const [ pizza , agregarPizza ] = useState([]);
  const [ ensalada, agregarEnsalada ] = useState([]);
  

  return (
    <div className="container vh-100 bg-light">
       <div className="row bg-secondary h-100">
         <div className="col-6 bg-info my-auto mx-auto rounded border">
          <Header />

          <Routes 
            agregarProductosTotal={agregarProductosTotal}
            productosTotal={productosTotal} 
            pizza={pizza}
            agregarPizza={agregarPizza}
            ensalada={ensalada}
            agregarEnsalada={agregarEnsalada}
          />
         </div>
       </div>

    </div>

    );
}

export default App;