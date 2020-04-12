import React,{Fragment,useState} from 'react';
const Formulario = ({busqueda,guardarBusqueda,guardarConsultar}) => {
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
                        onChange={handleChange}
                    />
                    <label htmlFor="ciudad">Ciudad:</label>
                </div>
                <div className="input-filed col s12">
                    <select
                        name="pais"
                        id='pais'
                        onChange={handleChange}
                    >
                        <option value="">----Seleccione un país</option>
                        <option value="US">Estados Unidos</option>
                        <option value="MX">México</option>
                        <option value="AR">Argentina</option>
                        <option value="CO">Colombia</option>
                        <option value="CR">Costa Rica</option>
                        <option value="ES">España</option>
                        <option value="PE">Perú</option>
                        <option value="SV">El Salvador</option>
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
 
export default Formulario;