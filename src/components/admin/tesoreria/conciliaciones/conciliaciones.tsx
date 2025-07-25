import { botones } from '@/components/layout/botones';
import { Tablas } from '@/components/layout/Tabla';
import { useState } from 'react';

export const Conciliaciones = () => {
    const campos = [

        { key: "id", label: "ID" },
        { key: "nombre", label: "Nombre" },
        { key: "edad", label: "Edad" },
        { key: "correo", label: "Correo" }
    ];

    const datos = [
        { id: 1, nombre: "Juan", edad: 28, correo: "" },
        { id: 2, nombre: "Byron", edad: 28, correo: "" },
        { id: 3, nombre: "Ana", edad: 28, correo: "" }
    ];
        const [searchTerm, setSearchTerm] = useState('');


    return (

        <div className="grid grid-cols-2 gap-4 p-4">
            <div>
                {botones({ titulo: "Conciliaciones Bancarias", onSearch: setSearchTerm })}
            </div>
            <div className='col-span-2 p-5 border rounded shadow-xl'>
                <Tablas
                    campos={campos}
                    datos={datos}
                    onRowSelect={(row) => {
                        // handle row selection here
                        console.log('Selected row:', row);
                    }}
                />
            </div>
        </div>
    )
}