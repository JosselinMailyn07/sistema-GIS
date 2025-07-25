import { botones } from '../../../layout/botones';
import { Tablas } from '../../../layout/Tabla';
import { useState } from 'react';


export const Turnos = () => {

    const campos = [
        { key: "codigo", label: "Código" },
        { key: "desc", label: "Descripción" },
        { key: "horaInicial", label: "Hora Inicial" },
        { key: "horaFinal", label: "Hora Final" }
    ];
    const datos = [
        { codigo: 1, desc: "Juan", horaInicial: "0", horaFinal: "1" },
        { codigo: 2, desc: "Byron", horaInicial: "1", horaFinal: "2" },
        { codigo: 3, desc: "Ana", horaInicial: "2", horaFinal: "3" }
    ];


    const [searchTerm, setSearchTerm] = useState('');
    const filteredTurnos = datos.filter(datos =>
        datos.desc.toLowerCase().includes(searchTerm.toLowerCase()) ||
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
                    datos={filteredTurnos}
                    onRowSelect={(row) => {
                        console.log('Selected row:', row);
                    }}
                />                                
            </div>
        </div>
    )
};
