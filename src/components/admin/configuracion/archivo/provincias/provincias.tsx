import React, { useState } from 'react';
import { botones } from '@/components/layout/botones'; // Botones de carpeta layout 
import { Tablas } from '@/components/layout/Tabla';
// import { botones } from '@/components/admin/tesoreria/botones'; // Botones de carpeta tesoreria (Josué)

// Datos estáticos de provincias
// Hay que traer los datos desde las API's, pero por ahora usamos datos estáticos
const provincias = [
  { codigo: 1, nombre: 'AZUAY' },
  { codigo: 2, nombre: 'BOLIVAR' },
  { codigo: 3, nombre: 'CAÑAR' },
  
];

export const ProvinciasForm = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Filtrar provincias basadas en el término de búsqueda
  const filteredProvincias = provincias.filter(provincia =>
    provincia.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
    provincia.codigo.toString().includes(searchTerm)
  );

  // Define los campos que deseas mostrar en la tabla
  const campos = [
    { key: 'codigo', label: 'Código' },
    { key: 'nombre', label: 'Nombre' },
  ];

  return (
    <div className="p-4">
      <div className="grid p-2 mb-4 text-left"> 
        <h1 className="text-2xl font-bold">Provincias</h1>
        {/* Se llama a los botones pero no pongan título. Además, se debe poner onSearch: setSearchTerm -> esto es para que la barra de búsqueda funcione, para que al momento de escribir
        detecte la palabra y aparezca */}
        {botones({ titulo: "", onSearch: setSearchTerm })}
      </div>
      <div className="mt-4 p-4 border rounded-lg shadow-md">      
        {/* Llamamos a la clase tabla para usar el formato de tablas */}
        { /* Se pasa los campos y los datos filtrados a la tabla */}
          <Tablas campos={campos} datos={filteredProvincias} />
    </div>
    </div>
  );
};
