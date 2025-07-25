import { botones } from '../../../layout/botones';
import { Tablas } from '../../../layout/Tabla';
import { useState } from 'react';


export const Cajas = () => {

    const campos = [
        { key: "codigo", label: "Código" },
        { key: "nombre", label: "Nombre" },
        { key: "codContable", label: "Código Contable" }
    ];
    const datos = [
        { codigo: 1, nombre: "Juan", codContable: "0" },
        { codigo: 2, nombre: "Byron", codContable: "1" },
        { codigo: 3, nombre: "Ana", codContable: "2" }

    ];


    const [searchTerm, setSearchTerm] = useState('');
    const filteredCajas = datos.filter(datos =>
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
                    datos={filteredCajas}
                    onRowSelect={(row) => {
                        console.log('Selected row:', row);
                    }}
                />                                
            </div>
        </div>
    )
};
