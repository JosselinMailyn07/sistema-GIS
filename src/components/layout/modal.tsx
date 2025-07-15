import React from 'react';
import { Inputs } from '@/components/layout/Inputs';
import { BotonesPrueba } from '../admin/tesoreria/pruebabotonesmoda'; // Asegúrate de que la ruta sea correcta


interface ModalProps {
    onClose: () => void;
}

export const Modal = ({ onClose, ...PropiedadesInput }: ModalProps) => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="  w-2/3 h-full transition-transform rounded shadow bg-white p-8">
                <div>
                    { BotonesPrueba({ titulo: "Prueba" }) }
                </div>
                <div className='grid grid-cols-2 gap-4 p-4'>
                    <div>
                        <label htmlFor="">Nombre</label>
                        <Inputs placeholder="id" type='text'/>
                    </div>
                    <div>
                        <label htmlFor="a">a</label>
                        <Inputs placeholder="nombre" {...PropiedadesInput} />
                    </div>
                    <div>
                        <label htmlFor="a">a</label>
                        <Inputs placeholder="correo" {...PropiedadesInput} />
                    </div>
                </div>

                <button onClick={onClose}>Cerrar</button>
            </div>
        </div>
    );
};