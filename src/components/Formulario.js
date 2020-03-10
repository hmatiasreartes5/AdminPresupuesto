import React,{useState} from 'react';
import Error from './Error';
import shortid from 'shortid';

const Formulario = ({guardarGasto,guardarCrearGasto}) => {

    //state
    const [nombreGasto,guardarNombreGasto] = useState('');
    const [cantidadGasto,guardarCantidadGasto] = useState(0);
    const [error,guardarError] = useState(false);

    const agregarGasto = e => {
        e.preventDefault();
        
        //validar
        if(cantidadGasto <1 || isNaN(cantidadGasto) || nombreGasto ===''){
            guardarError(true);
            return;
        }

        //creo un objeto
        const gasto ={
            nombreGasto,
            cantidadGasto,
            id : shortid.generate()
        }
        
        //envio el gasto al componente principal
        guardarGasto(gasto);
        guardarError(false);
        guardarCrearGasto(true);

        //resetear el form
        guardarNombreGasto('');
        guardarCantidadGasto('');

    }

    return (  
        <form
            onSubmit={agregarGasto}
        >
            <h2>Agrega tus gastos Aqui</h2>
            {error ? <Error mensaje='Ambos campos tienen que estar completos' /> : null}

            <div className='campo'>
                <label>Nombre del Gasto</label>
                <input
                    type='text'
                    className='u-full-width'
                    placeholder='Ej Transporte'
                    onChange = {e => guardarNombreGasto(e.target.value)}
                    value={nombreGasto}
                />
            </div>
            <div className='campo'>
                <label>Nombre del Gasto</label>
                <input
                    type='text'
                    className='u-full-width'
                    placeholder='200'
                    onChange= {e => guardarCantidadGasto(parseInt(e.target.value,10))}
                    value= {cantidadGasto}
                />
            </div>

            <input type='submit' className='button-primary u-full-width' value='Agregar Gastos' />
        </form>
    );
}
 
export default Formulario;