// ciudades
//cantoones 
import React, { useState } from 'react';
import { botones } from '@/components/layout/botones'; // Botones de carpeta layout
// import { botones } from '@/components/admin/tesoreria/botones'; // Botones de carpeta tesoreria (Josué)

// Datos estáticos de provincias
// Hay que traer los datos desde las API's, pero por ahora usamos datos estáticos
const ciudades = [
  { codigo: 0o1012, nombre: 'Sevilla de Oro' },
  { codigo: 2, nombre: 'Guachapala' },
  { codigo: 3, nombre: 'Sigsig' },
  { codigo: 4, nombre: 'Giron' },
  { codigo: 5, nombre: 'Gualaceo' },
  { codigo: 6, nombre: 'Nabon' },
  { codigo: 7, nombre: 'Paute' },
  { codigo: 8, nombre: 'Pucará' },
  { codigo: 9, nombre: 'San Fernando' },
  { codigo: 10, nombre: 'Santa Isabel' },
  { codigo: 11, nombre: 'Oña' },
  { codigo: 12, nombre: 'Cuenca' },
];

export const CiudadesForm = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Filtrar provincias basadas en el término de búsqueda
  const filteredCiudades = ciudades.filter(ciudades =>
    ciudades.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
    ciudades.codigo.toString().includes(searchTerm)
  );

  return (
 /* Ponemos el texto de Provincias a la izquiera, es decir, arriba de los botones  */
    <div className="p-4">
      <div className="grid p-2 mb-4 text-left"> 
        <h1 className="text-2xl font-bold">Ciudades</h1>
        {botones({ titulo: "" })}
      </div>
      <div className="mt-4 p-4 border rounded-lg shadow-md">
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Buscar por Código o Nombre</label>
          <input
            type="text"
            placeholder="Buscar..."
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Código
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Nombre
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredCiudades.map((ciudades) => (
                <tr key={ciudades.codigo}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {ciudades.codigo}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {ciudades.nombre}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
