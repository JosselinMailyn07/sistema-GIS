import { useState } from 'react';
import { botones } from '@/components/admin/tesoreria/bancos/botones';
import { Tablas } from '@/components/layout/Tabla';


export const MovimientosProductos = () => {
    const campos = [
        { key: "codigoproductos", label: "Código Productos" },
        { key: "bodega", label: "Bodega" },
        { key: "fecha", label: "Fecha" },
        { key: "tipo", label: "No. Documento" },
        { key: "noDoc", label: "IVA" },
        { key: "unidad", label: "Unidad" },
        { key: "cantidad", label: "Cantidad" },
        { key: "origen", label: "Origen" }
    ];

    const datos = [
        { codigoproductos: "P001", bodega: "Central", fecha: "2025-07-28", tipo: "FAC-001", noDoc: "12%", unidad: "Caja", cantidad: 100, origen: "Compra" },
        { codigoproductos: "P002", bodega: "Sucursal Norte", fecha: "2025-07-27", tipo: "NE-002", noDoc: "0%", unidad: "Unidad", cantidad: 50, origen: "Transferencia" },
        { codigoproductos: "P003", bodega: "Sucursal Sur", fecha: "2025-07-26", tipo: "DEV-003", noDoc: "12%", unidad: "Paquete", cantidad: 80, origen: "Devolución" }
    ];


    const [searchTerm, setSearchTerm] = useState('');
    const filteredBancos = datos.filter(datos =>
        datos.bodega.toLowerCase().includes(searchTerm.toLowerCase()) ||
        datos.codigoproductos.toString().includes(searchTerm)
    );

    return (
        <div className="p-4">
            <div className="grid p-2 mb-4 text-left">
                {botones({ titulo: "Movimientos de Productos", onSearch: setSearchTerm })}
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