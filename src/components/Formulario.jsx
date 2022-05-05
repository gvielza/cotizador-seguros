import React from 'react';
import { MARCAS, YEARS, PLANES } from '../constants/index'
import { Fragment } from 'react';

const Formulario = () => {
    return (
        <>
            <form action="">
                <div className='my-5'>
                    <label htmlFor="marca" className='block mb-3 font-bold text-gray-400 uppercase'>Marca</label>
                    <select name="marca" id="" className='w-full p-3 bg-white border border-gray-200'>
                        <option value="">--Selecciona la marca</option>
                        {MARCAS.map(marca => (
                            <option
                                key={marca.id}
                                value={marca.id}>{marca.nombre}
                            </option>

                        ))}

                    </select>
                    < div className='my-5'>
                        <label htmlFor="año" className='block font-bold text-gray-400 uppercase'>AÑO</label>
                        <select name="año" id="" className='mt-5 w-full p-3 bg-white border border-gray-200'>
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
                <label className="block mb-3 font-bold text-gray-400 uppercase">
                    Elige un Plan
                </label>
                
                    {PLANES.map(plan => (
                        <Fragment key={plan.id}>
                            <label>
                                {plan.nombre}
                            </label>
                            <input
                                type="radio"
                                name="plan"
                                value={plan.id}
                                
                            />
                        </Fragment>
                    ))}
                </div>
                </div>
            </form>
        </>
    );
};

export default Formulario;