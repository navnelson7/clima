import React from 'react';
import PropTypes from 'prop-types';
const Clima = ({resultado}) => {
    //extrare los valores
    const {name,main} = resultado;
    if(!name) return null; //prevenir que el componente cargue si no hay nobmre

    //grado kelvin
    const kelvin = 273.15;

    return ( 
        <div className="card-panel white cols s12">
            <div className="black-text">
                <h2>Clima de {name} es:</h2>
                <p className="temperatura">
                    {parseFloat(main.temp - kelvin,10).toFixed(2)} <span>&#x2103;</span>
                </p>
                <div className="row">
                    <div className="col s6">
                        Maxima
                        <p className=""> 
                            {parseFloat(main.temp_max - kelvin,10).toFixed(2)} <span>&#x2103;</span>
                        </p>
                    </div>
                    <div className="col s6">
                        Mínima:
                        <p className=""> 
                            {parseFloat(main.temp_min - kelvin,10).toFixed(2)} <span>&#x2103;</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
     );
}
 Clima.propTypes ={
     resultado: PropTypes.object.isRequired
 }
export default Clima;