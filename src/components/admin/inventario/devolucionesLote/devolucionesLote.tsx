import { useState } from 'react';
import { botones } from '@/components/admin/tesoreria/bancos/botones';
import { Tablas } from '@/components/layout/Tabla';


export const DevolucionesLote = () => {
    const campos = [
        { key: "factura", label: "Factura" },
        { key: "bodega", label: "Bodega" },
        { key: "codProductos", label: "Codigo Productos." },
        { key: "producto", label: "Producto" },
        { key: "destino", label: "Destino" },
        { key: "cantidad", label: "Cantidad" },
        { key: "precio", label: "Precio" },
        { key: "total", label: "Total" }
    ];

    const datos = [
        { factura: "FAC-001", bodega: "Bodega Central", codProductos: "P001", producto: "Producto A", destino: "Sucursal Norte", cantidad: 100, precio: 5.00, total: 500.00 },
        { factura: "FAC-002", bodega: "Sucursal Norte", codProductos: "P002", producto: "Producto B", destino: "Sucursal Sur", cantidad: 50, precio: 3.50, total: 175.00 },
        { factura: "FAC-003", bodega: "Sucursal Sur", codProductos: "P003", producto: "Producto C", destino: "Bodega Central", cantidad: 80, precio: 4.00, total: 320.00 }
    ];




    const [searchTerm, setSearchTerm] = useState('');
    const filteredBancos = datos.filter(datos =>
        datos.producto.toLowerCase().includes(searchTerm.toLowerCase()) ||
        datos.codProductos.toString().includes(searchTerm)
    );

    return (
        <div className="p-4">
            <div className="grid p-2 mb-4 text-left">
                {botones({ titulo: "Devoluciones por Lote", onSearch: setSearchTerm })}
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