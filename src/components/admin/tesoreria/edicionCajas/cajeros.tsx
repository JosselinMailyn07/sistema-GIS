import { botones } from '../../../layout/botones';
import { Tablas } from '../../../layout/Tabla';
import { useState } from 'react';


export const Cajeros = () => {

    const campos = [
        { key: "codigo", label: "Código" },
        { key: "nombre", label: "Nombre" },
        { key: "ci", label: "CI / RUC" },
        { key: "direccion", label: "Dirección" },
        { key: "correo", label: "Correo Electrónico" },
        { key: "tel", label: "Número de Teléfono" }
    ];
    const datos = [
        { codigo: 1, nombre: "Juan", ci: "0", direccion: "1", correo: "xd", tel: "123456789" },
        { codigo: 2, nombre: "Byron", ci: "1", direccion: "2", correo: "xd", tel: "987654321" },
        { codigo: 3, nombre: "Ana", ci: "2", direccion: "3", correo: "xd", tel: "456789123" }
    ];


    const [searchTerm, setSearchTerm] = useState('');
    const filteredCajeros = datos.filter(datos =>
        datos.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
        datos.codigo.toString().includes(searchTerm)
    );


    return (
        <div className="grid grid-cols-2 gap-4 p-4">
            <div>
                {botones({ titulo: "Turnos", onSearch: setSearchTerm })}
            </div>
            <div className='col-span-2 p-5 border rounded shadow-xl'>
                <Tablas
                    campos={campos}
                    datos={filteredCajeros}
                    onRowSelect={(row) => {
                        console.log('Selected row:', row);
                    }}
                />
            </div>
        </div>
    )
};
