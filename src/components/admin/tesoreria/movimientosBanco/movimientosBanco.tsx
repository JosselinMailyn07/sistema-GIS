import { useState } from 'react';
import { botones } from '@/components/layout/botones';
import { Tablas } from '@/components/layout/Tabla';
import BasicModal from './modalnuevo';
import { botonestest } from './botonestestmov';


export const MovimientosBanco = () => {
    const campos = [
        { key: "codigo", label: "Código Banco" },
        { key: "fecha", label: "Fecha" },
        { key: "tipo", label: "Tipo" }, 
        { key: "numdocumento", label: "No. Documento" },
        { key: "concepto", label: "Concepto" },
        { key: "valor", label: "Valor" },
        { key: "beneficiario", label: "Beneficiario" },
        { key: "origen", label: "Origen" }
    ];

    const datos = [
        { id: 1, codigo: "001", fecha: "2023-10-01", tipo: "Ingreso", numdocumento: "12345", concepto: "Pago Servicio", valor: 1000, beneficiario: "Empresa A", origen: "Cuenta A" },
        { id: 2, codigo: "002", fecha: "2023-10-02", tipo: "Egreso", numdocumento: "12346", concepto: "Compra Materiales", valor: 500, beneficiario: "Proveedor B", origen: "Cuenta B" },
        // Agrega más datos según sea necesario
    ];
    const [searchTerm, setSearchTerm] = useState('');
    const filteredMovimientosBanco = datos.filter(datos =>
        datos.origen.toLowerCase().includes(searchTerm.toLowerCase()) ||
        datos.codigo.toString().includes(searchTerm)
    );




    return (

        <div className="p-4">
            <div className="grid p-2 mb-4 text-left">

                {botonestest({ titulo: "Movimientos Bancarios", onSearch: setSearchTerm })}
            </div>
            <div className="mt-4 p-4 border rounded-lg shadow-md">
                <Tablas
                    campos={campos}
                    datos={filteredMovimientosBanco}
                    onRowSelect={(row) => {
                        // handle row selection here
                        console.log('Selected row:', row);
                    }}
                />
            </div>


        </div>
    );
}