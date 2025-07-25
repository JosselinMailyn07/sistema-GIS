import { useState } from 'react';
import { botones } from '@/components/layout/botones';
import { Tablas } from '@/components/layout/Tabla';
import BasicModal from './modalMovimientosBanco';
import { botonestest } from './botonestestmov';


export const MovimientosBanco = () => {
    const campos = [
        { key: "radio", label: "" },
        { key: "id", label: "ID" },
        { key: "nombre", label: "Nombre" },
        { key: "edad", label: "Edad" },
        { key: "correo", label: "Correo" }
    ];

    const datos = [
        { id: 1, nombre: "Juan", edad: 28, correo: "hola@example.com" },
        { id: 2, nombre: "Byron", edad: 28, correo: "hola@example.com" },
        { id: 3, nombre: "Ana", edad: 28, correo: "hola@ejemplo.com" }
    ];
    const [searchTerm, setSearchTerm] = useState('');
    const filteredMovimientosBanco = datos.filter(datos =>
        datos.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
        datos.id.toString().includes(searchTerm)
    );

    // const [openModal, setOpenModal] = useState(false);
    // const handleOpen = () => setOpenModal(true);
    // const handleClose = () => setOpenModal(false);


    return (

        <div className="p-4">
            <div className="grid p-2 mb-4 text-left">

                {botonestest({ titulo: "Movimientos Bancarios", onSearch: setSearchTerm })}
            </div>
            <div className="mt-4 p-4 border rounded-lg shadow-md">
                <Tablas
                    campos={campos}
                    datos={filteredMovimientosBanco}
                    onRowSelect={(row) => {
                        // handle row selection here
                        console.log('Selected row:', row);
                    }}
                />
            </div>


        </div>
    );
}