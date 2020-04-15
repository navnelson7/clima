import React,{Fragment,useState,useEffect} from 'react';
import Header from './components/Header'
import Formulario from './components/Formulario';
import Clima from './components/Clima';
import Error from './components/Error';
function App() {
  const [busqueda,guardarBusqueda] = useState({
    ciudad:'',
    pais:''
  })

  const [consultar,guardarConsultar] = useState(false);
  const [resultado,guardarResultado] = useState(({}))
  const {ciudad,pais} =  busqueda;
  const [error,guardarError] = useState(false);

  useEffect(()=>{
    const consultarAPI = async () => {
      if(consultar){
        const appId = 'a07b5338dad76a1fece951f0d78b8698';
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        guardarResultado(resultado);
        guardarConsultar(false);

        //detecta si hay resultado en la consulta
        if(resultado.cod==="404"){
          guardarError(true);
        }else{
          guardarError(false);
        }
      }
    }
    consultarAPI();
  },[consultar,busqueda,ciudad,pais]);

  let componente;
  if(error){
    componente = <Error mensaje="No hay resultado para esa ciudad" />
  }else{
    componente =  <Clima 
                  resultado={resultado}
                  />
  }

  return (
    <Fragment>
      <Header 
        titulo='Clima React App'
      />
      <div className='contenedor-form'>
        <div className='container'>
          <div className='row'>
            <div className='col m6 s12'>
              <Formulario 
                busqueda={busqueda}
                guardarBusqueda={guardarBusqueda}
                guardarConsultar={guardarConsultar}
                resultado={resultado}
              />
            </div>
            <div className='col m6 s12'>
                {componente}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
