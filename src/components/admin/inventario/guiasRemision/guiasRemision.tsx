import { useState } from 'react';
import { botones } from '@/components/admin/tesoreria/bancos/botones';
import { Tablas } from '@/components/layout/Tabla';


export const GuiasRemision = () => {
    const campos = [
        { key: "codigo", label: "Código" },
        { key: "descripcion", label: "Descripción" },
        { key: "cantidad", label: "Cantidad" }
    ];

    const datos = [
        { codigo: "P001", descripcion: "Producto A", cantidad: 100 },
        { codigo: "P002", descripcion: "Producto B", cantidad: 50 },
        { codigo: "P003", descripcion: "Producto C", cantidad: 80 }
        ];




    const [searchTerm, setSearchTerm] = useState('');
    const filteredBancos = datos.filter(datos =>
        datos.descripcion.toLowerCase().includes(searchTerm.toLowerCase()) ||
        datos.codigo.toString().includes(searchTerm)
    );

    return (
        <div className="p-4">
            <div className="grid p-2 mb-4 text-left">
                {botones({ titulo: "Guias de Remision", onSearch: setSearchTerm })}
            </div>
            <div className="mt-4 p-4 border rounded-lg shadow-md">
                <Tablas
                  campos={campos}
                  datos={filteredBancos}
                  onRowSelect={(row) => {
                    // handle row selection here
                    console.log('Selected row:', row);
                  }}
                />
            </div>
        </div>
    );
}