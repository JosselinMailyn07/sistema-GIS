import { useState } from 'react';
import { botones } from '@/components/admin/tesoreria/bancos/botones';
import { Tablas } from '@/components/layout/Tabla';


export const InventarioInicialFinal = () => {
    const campos = [
        { key: "codigo", label: "Código" },
        { key: "descripcion", label: "Descripción" },
        { key: "unidad", label: "Unidad" },
        { key: "grupo", label: "Grupo" },
        { key: "iva", label: "IVA" },
        { key: "cantidad", label: "Cantidad" },
        { key: "pvp", label: "PVP" },
        { key: "precioCosto", label: "Precio Costo" },
        { key: "total", label: "Total" },
    ];

    const datos = [
        { codigo: "P001", descripcion: "Producto A", unidad: "Caja", grupo: "Bebidas", iva: "12%", cantidad: 100, pvp: 6.00, precioCosto: 5.00, total: 500.00 },
        { codigo: "P002", descripcion: "Producto B", unidad: "Unidad", grupo: "Snacks", iva: "0%", cantidad: 50, pvp: 4.00, precioCosto: 3.50, total: 175.00 },
        { codigo: "P003", descripcion: "Producto C", unidad: "Paquete", grupo: "Lácteos", iva: "12%", cantidad: 80, pvp: 4.80, precioCosto: 4.00, total: 320.00 }
    ];





    const [searchTerm, setSearchTerm] = useState('');
    const filteredBancos = datos.filter(datos =>
        datos.descripcion.toLowerCase().includes(searchTerm.toLowerCase()) ||
        datos.codigo.toString().includes(searchTerm)
    );

    return (
        <div className="p-4">
            <div className="grid p-2 mb-4 text-left">
                {botones({ titulo: "inventario Inicial|Final", onSearch: setSearchTerm })}
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