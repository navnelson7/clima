import React,{Fragment,useState,useEffect} from 'react';
import Header from './components/Header'
import Formulario from './components/Formulario';
function App() {
  const [busqueda,guardarBusqueda] = useState({
    ciudad:'',
    pais:''
  })
  const [consultar,guardarConsultar] = useState(false);

  const {ciudad,pais} =  busqueda;
  useEffect(()=>{
    consultarAPI = async () => {
      https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=2df0bb2fc6c754d8451180bef92b8431
    }
  },[consultar]);



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
              />
            </div>
            <div className='col m6 s12'>
             
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
