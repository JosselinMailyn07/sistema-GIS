import { useState } from 'react';
import { botones } from '@/components/admin/tesoreria/bancos/botones';
import { Tablas } from '@/components/layout/Tabla';


export const TransferenciasBodegas = () => {
    const campos = [
        { key: "codigo", label: "Código" },
        { key: "descripcion", label: "Descripción" },
        { key: "uni", label: "Uni." },
        { key: "origen", label: "Origen" },
        { key: "destino", label: "Destino" },
        { key: "bultos", label: "Bultos" },
        { key: "cantidad", label: "Cantidad" },
        { key: "costo", label: "Costo" },
        { key: "total", label: "Total" }
    ];

    const datos = [
        { codigo: "P001", descripcion: "Producto A", uni: "Caja", origen: "Bodega Central", destino: "Sucursal Norte", bultos: 10, cantidad: 100, costo: 5.00, total: 500.00 },
        { codigo: "P002", descripcion: "Producto B", uni: "Unidad", origen: "Sucursal Norte", destino: "Sucursal Sur", bultos: 5, cantidad: 50, costo: 3.50, total: 175.00 },
        { codigo: "P003", descripcion: "Producto C", uni: "Paquete", origen: "Sucursal Sur", destino: "Bodega Central", bultos: 8, cantidad: 80, costo: 4.00, total: 320.00 }
    ];



    const [searchTerm, setSearchTerm] = useState('');
    const filteredBancos = datos.filter(datos =>
        datos.uni.toLowerCase().includes(searchTerm.toLowerCase()) ||
        datos.codigo.toString().includes(searchTerm)
    );

    return (
        <div className="p-4">
            <div className="grid p-2 mb-4 text-left">
                {botones({ titulo: "Transferencias de Bodegas", onSearch: setSearchTerm })}
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