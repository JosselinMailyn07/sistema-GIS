import { useState } from 'react';
import { botones } from '@/components/admin/tesoreria/bancos/botones';
import { Tablas } from '@/components/layout/Tabla';


export const RecepcionesBodegas = () => {
    const campos = [
        { key: "codigo", label: "Código" },
        { key: "bodega", label: "Bodega" },
        { key: "descripcion", label: "Descripción" },
        { key: "unidad", label: "Unidad" },
        { key: "iva", label: "IVA" },
        { key: "bultos", label: "Bultos" },
        { key: "cantidad", label: "Cantidad" }
    ];

    const datos = [
        { codigo: "P001", bodega: "Central", descripcion: "Producto A", unidad: "Caja", iva: "12%", bultos: 10, cantidad: 100 },
        { codigo: "P002", bodega: "Sucursal Norte", descripcion: "Producto B", unidad: "Unidad", iva: "0%", bultos: 5, cantidad: 50 },
        { codigo: "P003", bodega: "Sucursal Sur", descripcion: "Producto C", unidad: "Paquete", iva: "12%", bultos: 8, cantidad: 80 }
    ];

    const [searchTerm, setSearchTerm] = useState('');
    const filteredBancos = datos.filter(datos =>
        datos.bodega.toLowerCase().includes(searchTerm.toLowerCase()) ||
        datos.codigo.toString().includes(searchTerm)
    );

    return (
        <div className="p-4">
            <div className="grid p-2 mb-4 text-left">
                {botones({ titulo: "Recepciones de bodegas", onSearch: setSearchTerm })}
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