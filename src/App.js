import React,  {useState} from 'react';
import Routes from './Routes';
import Header from './components/Header';
import styled from '@emotion/styled';

const Contenedor = styled.div `
  background: rgba(57,108,196,1);
  background: -moz-linear-gradient(left, rgba(57,108,196,1) 0%, rgba(97,153,179,1) 47%, rgba(165,175,212,1) 100%);
  background: -webkit-gradient(left top, right top, color-stop(0%, rgba(57,108,196,1)), color-stop(47%, rgba(97,153,179,1)), color-stop(100%, rgba(165,175,212,1)));
  background: -webkit-linear-gradient(left, rgba(57,108,196,1) 0%, rgba(97,153,179,1) 47%, rgba(165,175,212,1) 100%);
  background: -o-linear-gradient(left, rgba(57,108,196,1) 0%, rgba(97,153,179,1) 47%, rgba(165,175,212,1) 100%);
  background: -ms-linear-gradient(left, rgba(57,108,196,1) 0%, rgba(97,153,179,1) 47%, rgba(165,175,212,1) 100%);
  background: linear-gradient(to right, rgba(57,108,196,1) 0%, rgba(97,153,179,1) 47%, rgba(165,175,212,1) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#396cc4', endColorstr='#a5afd4', GradientType=1 );
  -webkit-box-shadow: 10px 10px 18px -9px rgba(0,0,0,0.75);
  -moz-box-shadow: 10px 10px 18px -9px rgba(0,0,0,0.75);
  box-shadow: 10px 10px 18px -9px rgba(0,0,0,0.75);
  border-radius: 26px 26px 26px 26px;
  -moz-border-radius: 26px 26px 26px 26px;
  -webkit-border-radius: 26px 26px 26px 26px;
  border: 4px solid #2b53e3;
  padding: 30px
`

//function App() {
const App = () => {

  const [ productosTotal, agregarProductosTotal] = useState([]);

  const [ pizza , agregarPizza ] = useState([]);
  const [ ensalada, agregarEnsalada ] = useState([]);
  const [ pasta, agregarPasta ] = useState([]);
  

  return (
    <div className="container vh-100 bg-light">
       <div className="row bg-light h-100">
         <Contenedor className="col-6 my-auto mx-auto">
          <Header />

          <Routes 
            agregarProductosTotal={agregarProductosTotal}
            productosTotal={productosTotal} 
            pizza={pizza}
            agregarPizza={agregarPizza}
            ensalada={ensalada}
            agregarEnsalada={agregarEnsalada}
            pasta={pasta}
            agregarPasta={agregarPasta}
          />
         </Contenedor>
       </div>

    </div>

    );
}

export default App;