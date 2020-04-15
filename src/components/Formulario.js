import React,{Fragment,useState} from 'react';
import PropTypes from 'prop-types';
const Formulario = ({busqueda,guardarBusqueda,guardarConsultar,resultado}) => {
    //state del formulario
    const [error,guardarError] = useState(false)

    //extraer ciudad y pais
    const {ciudad,pais} = busqueda;
    //funcion que cola los elementes en el state
    const handleChange = e => {
        //actualizar state
        guardarBusqueda({
            ...busqueda,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = e =>{
        e.preventDefault();
        //validar
        if(ciudad.trim()==='' || pais.trim() === ''){
            guardarError(true);
            return;
        }
        guardarError(false);
        //pasarlo al componenete principal
        guardarConsultar(true);
    }
    return ( 
        <Fragment>
            <form
            onSubmit = {handleSubmit}

            >
                {error ? <p className="red error darken-4">Todos los campos son obligatorio</p>: null}
                <div className="input-field col s12">
                    <input 
                        type='text'
                        name='ciudad'
                        id='ciudad'
                        value={ciudad}
                        onChange={handleChange}
                    />
                    <label htmlFor="ciudad">Ciudad:</label>
                </div>
                <div className="input-filed col s12">
                    <select
                        name="pais"
                        id='pais'
                        value={pais}
                        onChange={handleChange}
                    >
                        <option value="">----Seleccione un país</option>
                        <option value="us">Estados Unidos</option>
                        <option value="mx">México</option>
                        <option value="ar">Argentina</option>
                        <option value="co">Colombia</option>
                        <option value="cr">Costa Rica</option>
                        <option value="es">España</option>
                        <option value="pe">Perú</option>
                        <option value="sv">El Salvador</option>
                    </select>
                    <label htmlFor='pais'>País:</label>
                </div>
                <div className='input-field col s12'>
                    <input 
                        type="submit"
                        value="Buscar Clima"
                        className="waves-effect waves-light btn-large btn-block yellow accent-4"
                    />
                </div>
            </form>
        </Fragment>
     );
}
Formulario.propTypes = {
    busqueda: PropTypes.object.isRequired,
    guardarBusqueda: PropTypes.func.isRequired,
    guardarConsultar: PropTypes.func.isRequired
}
export default Formulario;