import { useState } from 'react';
import { botones } from '@/components/admin/tesoreria/bancos/botones';
import { Tablas } from '@/components/layout/Tabla';


export const Bodega = () => {
    const campos = [
        { key: "bodega", label: "Bodega" },
        { key: "nombre", label: "Nombre" },
        { key: "contableinventario", label: "Contable Inventario" },
        { key: "contablecosto", label: "Contable Costo" },
        { key: "contableventa", label: "Contable Venta" }
    ];

    const datos = [
        { bodega: "Bodega Central", nombre: "Producto A", contableinventario: "1101-01", contablecosto: "5101-01", contableventa: "4101-01" },
        { bodega: "Sucursal Norte", nombre: "Producto B", contableinventario: "1101-02", contablecosto: "5101-02", contableventa: "4101-02" },
        { bodega: "Sucursal Sur", nombre: "Producto C", contableinventario: "1101-03", contablecosto: "5101-03", contableventa: "4101-03" }
    ];




    const [searchTerm, setSearchTerm] = useState('');
    const filteredBancos = datos.filter(datos =>
        datos.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
        datos.bodega.toString().includes(searchTerm)
    );

    return (
        <div className="p-4">
            <div className="grid p-2 mb-4 text-left">
                {botones({ titulo: "Bodega", onSearch: setSearchTerm })}
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