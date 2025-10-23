import { useState } from 'react';

import { Tablas } from '@/components/layout/Tabla';
import { useEffect } from 'react';
import { botonesBanco } from './botonesBanco';


export const Bancos = () => {
    const campos = [
        { key: "codigobanco", label: "Código" },
        { key: "nombre", label: "Nombre" },
        { key: "cuenta", label: "Cuenta" },
        { key: "codigocontable", label: "Código Contable" },
        { key: "direccion", label: "Dirección" },
        { key: "telefonos", label: "Teléfonos" },
        { key: "fax", label: "Fax" },
        { key: "email", label: "Email" },
        { key: "contacto", label: "Contacto" },
        { key: "agencia", label: "Agencia" },
        { key: "comision", label: "Comisión (%)" },
        { key: "saldo", label: "Saldo ($)" },
    ];

    const [datos, setDatos] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    "http://localhost:3001/api/tesoreria/bancos"
                ); // cambia el endpoint
                const data = await response.json();

                // Opcional: limpieza de datos
                const cleaned = data.map((banco) => ({
                    ...banco,
                    nombre: banco.nombre?.trim() ?? "",
                }));

                setDatos(cleaned);
            } catch (error) {
                console.error("Error al obtener los bancos:", error);
            }
        };

        fetchData();
    }, []);
    const [searchTerm, setSearchTerm] = useState('');
    const filteredBancos = datos.filter(
        (banco) =>
            banco.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
            banco.codigobanco.includes(searchTerm) ||
            banco.cuenta.includes(searchTerm)
    );

    return (
        <div className="p-4">
            <div className="grid p-2 mb-4 text-left">
                {botonesBanco({ titulo: "Bancos", onSearch: setSearchTerm })}
            </div>
            <div className="mt-4 p-4 border rounded-lg shadow-md">
                <Tablas
                    campos={campos}
                    datos={filteredBancos}
                    onRowSelect={(row) => {
                        console.log('Selected row:', row);
                    }}
                />
            </div>
        </div>
    );
}