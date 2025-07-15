import React, { useState } from 'react';
import { Modal } from '../../layout/modal';


interface Titulo {
    titulo: string;
}



export const BotonesPrueba = ({ titulo = "" }: Titulo) => {
    const [mostrarModal, setMostrarModal] = useState(false);

    return (
        <div className="grid grid-rows-2 p-2">
            <h1 className="text-2xl font-bold text-center mb-4">{titulo}</h1>
            <div className="flex justify-evenly  mx-10">
                <button
                    className="px-4 py-2 bg-primary text-white rounded"
                    onClick={() => setMostrarModal(true)}
                >
                    Nuevo
                </button>
                <button className="px-4 py-2 bg-primary text-white rounded" onClick={() => setMostrarModal(true)}>Editar</button>
                <button className="px-4 py-2 bg-primary text-white rounded" onClick={() => setMostrarModal(true)}>Eliminar</button>
            </div>
            {mostrarModal && (
                <Modal onClose={() => setMostrarModal(false)}
                />
            )}
        </div>
    );
};