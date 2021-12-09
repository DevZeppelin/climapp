import React from 'react'
import PropTypes from 'prop-types'

function Clima({resultado}) {

    //extraer valores
    const {name, main} = resultado

    if(!name) return null

    //restar en grados kelvin
    const kelvin = 273.15

    return (
        <div className="card-panel white col s12">
            <div className="clack-text">
                <h2>El clima de {name} es:
                    <p className="temperatura">
                        {parseFloat(main.temp - kelvin, 10).toFixed(2)}<span>&#x2103;</span>
                    </p>
                    <p>Temperatura máxima:
                        {parseFloat(main.temp_max - kelvin, 10).toFixed(2)}<span>&#x2103;</span>
                    </p>
                    <p>Temperatura mínima:
                        {parseFloat(main.temp_min - kelvin, 10).toFixed(2)}<span>&#x2103;</span>
                    </p>
                </h2>

            </div>
            
        </div>
    )
}

Clima.propTypes = {
    resultado: PropTypes.object.isRequired
}

export default Clima
