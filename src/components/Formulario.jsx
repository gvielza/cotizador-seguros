
import { MARCAS, YEARS, PLANES } from '../constants/index'
import { Fragment } from 'react';
import useCotizador from '../hooks/useCotizador';
import Error from './Error';

const Formulario = () => {
    const { datos,handleChangeDatos,error,setError ,cotizar} = useCotizador()
    const handleSubmit=e=>{
        e.preventDefault()
        if (Object.values(datos).includes('')) {
            setError('Todos los campos son obligatorios')
            return
        }setError('')
//Todo , cotizar
cotizar()
    }
    return (
        <>{
            error&&<Error/>
        }
            <form action="" onSubmit={handleSubmit}>
                <div className='my-1'>
                    <label htmlFor="marca" className='block mb-1 font-bold text-gray-400 uppercase'>Marca</label>
                    <select name="marca" id="" className='w-full p-1 bg-white border border-gray-200'
                        onChange={e => handleChangeDatos(e)} value={datos.marca}>
                        <option value="">--Selecciona la marca</option>
                        {MARCAS.map(marca => (
                            <option
                                key={marca.id}
                                value={marca.id}>{marca.nombre}
                            </option>

                        ))}

                    </select>
                    < div className='my-1'>
                        <label htmlFor="año" className='block font-bold text-gray-400 uppercase'>AÑO</label>
                        <select name="year" id="" className='mt-5 w-full p-1 bg-white border border-gray-200'
                            onChange={e => handleChangeDatos(e)} value={datos.year}>
                            <option value="">--Selecciona el año</option>
                            {YEARS.map(year => (
                                <option
                                    key={year}
                                    value={year}>{year}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="my-5">
                        <label className="block mb-3 font-bold text-gray-400 uppercase ">
                            Elige un Plan
                        </label>
                        <div className='flex gap-3 items-center'>
                            {PLANES.map(plan => (
                                <Fragment key={plan.id}>
                                    <label>
                                        {plan.nombre}
                                    </label>
                                    <input
                                        type="radio"
                                        name="plan"
                                        value={plan.id}
                                        onChange={e => handleChangeDatos(e)}
                                        
                                    />
                                </Fragment>
                            ))}
                        </div>
                    </div>
                </div>
                <input type="submit" className='w-full bg-indigo-500 hover:bg-indigo-700
                transition-colors text-white cursor-pointer p-1 uppercase font-bold rounded-lg' value="Cotizar"></input>
            </form>
        </>
    );
};

export default Formulario;