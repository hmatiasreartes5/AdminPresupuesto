import React, {Fragment, useState} from 'react';
import Error from './Error'

const Pregunta = ({guardarPresupuesto,guardarPreguntaPresupuesto,guardarRestante}) => {

    const [cantidad, guardarCantidad]= useState(0);
    const [error, guardarError] = useState(false);

    const agregarPresupuesto = (e) => {
        e.preventDefault();

        //validar
        if(cantidad <1 || isNaN(cantidad)){
            guardarError(true);
            return;
        }

        //enviar presupuesto al componente principal
        guardarError(false)
        guardarPresupuesto(cantidad);
        guardarRestante(cantidad);
        guardarPreguntaPresupuesto(false)
    }

    return (  
        <Fragment>
        <h2>Agrega tu presupuesto</h2>

        {error ? <Error mensaje='El Presupuesto es incorrecto' /> : null}
        <form
            onSubmit={agregarPresupuesto}
        >
            <input type='number'
                   className='u-full-width'
                   placeholder='Agregar tu Presupuesto'
                   onChange={ e => guardarCantidad(parseInt(e.target.value,10))}
            />
            <input type='submit' className='button-primary u-full-width' value='Definir Presupuesto' />
        </form>
        </Fragment>

    );
}
 
export default Pregunta;