import { useState } from 'react';
import { Inputs } from '@/components/layout/Inputs';



interface ModalProps {
    onClose: () => void;
}


export const Modal = ({ onClose, ...PropiedadesInput }: ModalProps) => {
    return (
        <>

            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                <div className="  w-2/3 h-full transition-transform rounded shadow bg-white p-8">
                    <div className="grid grid-rows-2 p-2">
                        <h1 className="text-2xl font-bold text-center mb-2">Bancos</h1>
                    </div>
                    <form action='POST' className='grid grid-cols-2 gap-4 p-4'>
                        <div>
                            <label htmlFor="">Codigo: </label>
                            <Inputs placeholder="Codigo..." type='text' {...PropiedadesInput} />
                        </div>
                        <div>
                            <label htmlFor="a">Nombre: </label>
                            <Inputs placeholder="Nombre..." {...PropiedadesInput} />
                        </div>
                        <div>
                            <label htmlFor="a">Cuenta: </label>
                            <Inputs placeholder="Cuenta..." {...PropiedadesInput} />
                        </div>
                        <div>
                            <label htmlFor="a">Direccion: </label>
                            <Inputs placeholder="Direccion..." {...PropiedadesInput} />
                        </div>
                        <div>
                            <label htmlFor="a">Telefonos: </label>
                            <Inputs placeholder="Telefonos..." {...PropiedadesInput} />
                        </div>
                        <div>
                            <label htmlFor="a">Fax: </label>
                            <Inputs placeholder="Numero de Fax..." {...PropiedadesInput} />
                        </div>
                        <div>
                            <label htmlFor="a">Email: </label>
                            <Inputs placeholder="Correo Electronico..." {...PropiedadesInput} />
                        </div>
                        <div>
                            <label htmlFor="a">Contacto: </label>
                            <Inputs placeholder="Contacto..." {...PropiedadesInput} />
                        </div>
                        <div>
                            <label htmlFor="a">Agencia: </label>
                            <Inputs placeholder="Agencia..." {...PropiedadesInput} />
                        </div>
                        <div>
                            <label htmlFor="a">Comision: </label>
                            <Inputs placeholder="Comision..." {...PropiedadesInput} />
                        </div>
                        <div>
                            <label htmlFor="a">Codigo contable: </label>
                            <Inputs placeholder="Codigo Contable..." {...PropiedadesInput} />
                        </div>
                    </form>
                    <div className="flex justify-evenly  mx-10">
                        <button className="px-4 py-2 bg-primary text-white rounded" > Vaciar </button>
                        <button className="px-4 py-2 bg-primary text-white rounded" onClick={onClose}> Cerrar </button>
                    </div>
                </div>
            </div>
        </>
    );
};