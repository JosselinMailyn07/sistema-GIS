import React, { useState } from 'react';
import { botones } from '@/components/layout/botones'; // Botones de carpeta layout 
import { Tablas } from '@/components/admin/tesoreria/Tabla';
// import { botones } from '@/components/admin/tesoreria/botones'; // Botones de carpeta tesoreria (Josué)

// Datos estáticos de provincias
// Hay que traer los datos desde las API's, pero por ahora usamos datos estáticos
const provincias = [
  { codigo: 1, nombre: 'AZUAY' },
  { codigo: 2, nombre: 'BOLIVAR' },
  { codigo: 3, nombre: 'CAÑAR' },
  { codigo: 4, nombre: 'CARCHI' },
  { codigo: 5, nombre: 'COTOPAXI' },
  { codigo: 6, nombre: 'CHIMBORAZO' },
  { codigo: 7, nombre: 'EL ORO' },
  { codigo: 8, nombre: 'ESMERALDAS' },
  { codigo: 9, nombre: 'GUAYAS' },
  { codigo: 10, nombre: 'IMBABURA' },
  { codigo: 11, nombre: 'LOJA' },
  { codigo: 12, nombre: 'LOS RIOS' },
  { codigo: 13, nombre: 'MANABI' },
  { codigo: 14, nombre: 'MORONA SANTIAGO' },
  { codigo: 15, nombre: 'NAPO' },
  { codigo: 16, nombre: 'PASTAZA' },
  { codigo: 17, nombre: 'PICHINCHA' },
  { codigo: 18, nombre: 'TUNGURAHUA' },
  { codigo: 19, nombre: 'ZAMORA CHINCHIPE' },
  { codigo: 20, nombre: 'GALAPAGOS' },
  { codigo: 21, nombre: 'SUCUMBIOS' },
  { codigo: 22, nombre: 'ORELLANA' },
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
        {botones({ titulo: "", onSearch: setSearchTerm })}
      </div>
      
        {/* Llamamos a la clase tabla para usar el formato de tablas */}
          <Tablas campos={campos} datos={filteredProvincias} />
    </div>
  );
};
