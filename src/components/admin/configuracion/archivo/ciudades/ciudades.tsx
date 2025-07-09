// ciudades
//cantoones 
import React, { useState } from 'react';
import { botones } from '@/components/layout/botones'; // Botones de carpeta layout
import { Tablas } from '@/components/layout/Tabla';

// import { botones } from '@/components/admin/tesoreria/botones'; // Botones de carpeta tesoreria (Josué)

// Datos estáticos de ciudades
// Hay que traer los datos desde las API's, pero por ahora usamos datos estáticos
const ciudades = [
  { codigo: 1, nombre: 'Cuenca' },
  { codigo: 2, nombre: 'Guaranda' },
  { codigo: 3, nombre: 'Azogues' },
  

  //poner todas las ciudades 

];

// Definir los campos para la tabla de ciudades
const campos = [
  { key: 'codigo', label: 'Código' },
  { key: 'nombre', label: 'Nombre' },
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
        {botones({ titulo: "", onSearch: setSearchTerm })} {/* Se llama a los botones pero no pongan título. Además, se debe poner onSearch: setSearchTerm -> esto es para que la barra de búsqueda funcione, para que al momento de escribir detecte la palabra y aparezca */}
      </div>
      <div className="mt-4 p-4 border rounded-lg shadow-md">    
        {/* Llamamos a la clase tabla para usar el formato de tablas */}
        { /* Se pasa los campos y los datos filtrados a la tabla */}
        <Tablas campos={campos} datos={filteredCiudades} />
      </div>
    </div>

  );
};
