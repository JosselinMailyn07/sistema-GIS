import { useState } from 'react';
import { botones } from '@/components/admin/tesoreria/bancos/botones';
import { Tablas } from '@/components/layout/Tabla';


export const Bancos = () => {
    const campos = [
        { key: "codigo", label: "Código" },
        { key: "nombre", label: "Nombre" },
        { key: "cuenta", label: "Cuenta" },
        { key: "direccion", label: "Direccion" },
        { key: "tel", label: "Número de Teléfono" },
        { key: "correo", label: "Correo Electrónico" },
        { key: "contacto", label: "Contacto" },
        { key: "agencia", label: "Agencia" },
        { key: "comision", label: "Comisión" }
    ];

    const datos = [
        { codigo: 1, nombre: "Banco A", cuenta: "123456789", direccion: "Calle 1", tel: "1234567890", correo: "", contacto: "Juan Perez", agencia: "Agencia 1", comision: "0.5%" },
        { codigo: 2, nombre: "Banco B", cuenta: "987654321", direccion: "Calle 2", tel: "0987654321", correo: "", contacto: "Maria Lopez", agencia: "Agencia 2", comision: "0.7%" },
        { codigo: 3, nombre: "Banco C", cuenta: "456789123", direccion: "Calle 3", tel: "4567891230", correo: "", contacto: "Carlos Gomez", agencia: "Agencia 3", comision: "0.6%" }
    ];
    const [searchTerm, setSearchTerm] = useState('');
    const filteredBancos = datos.filter(datos =>
        datos.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
        datos.codigo.toString().includes(searchTerm)
    );

    return (
        <div className="p-4">
            <div className="grid p-2 mb-4 text-left">
                {botones({ titulo: "Bancos", onSearch: setSearchTerm })}
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