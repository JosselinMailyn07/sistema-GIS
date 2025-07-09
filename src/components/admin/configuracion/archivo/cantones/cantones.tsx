//cantoones 
import React, { useState } from 'react';
import { botones } from '@/components/layout/botones'; // Botones de carpeta layout
import { Tablas } from '@/components/layout/tabla';

// Datos estáticos de cantones
// Hay que traer los datos desde las API's, pero por ahora usamos datos estáticos
const cantones = [
  { codigo: 1, nombre: 'Sevilla de Oro' },
  { codigo: 2, nombre: 'Guachapala' },
  { codigo: 3, nombre: 'Sigsig' },
];

const campos = [
  { key: 'codigo', label: 'Código' },
  { key: 'nombre', label: 'Nombre' },
];


export const CantonesForm = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Filtrar provincias basadas en el término de búsqueda
  const filteredCantones = cantones.filter(cantones =>
    cantones.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
    cantones.codigo.toString().includes(searchTerm)
  );

 return (
     <div className="p-4">
       <div className="grid p-2 mb-4 text-left"> 
         <h1 className="text-2xl font-bold">Cantones</h1>
         {/* Se llama a los botones pero no pongan título. Además, se debe poner onSearch: setSearchTerm -> esto es para que la barra de búsqueda funcione, para que al momento de escribir
         detecte la palabra y aparezca */}
         {botones({ titulo: "", onSearch: setSearchTerm })}
       </div>
       <div className="mt-4 p-4 border rounded-lg shadow-md">      
         {/* Llamamos a la clase tabla para usar el formato de tablas */}
         { /* Se pasa los campos y los datos filtrados a la tabla */}
           <Tablas campos={campos} datos={filteredCantones} />
     </div>
     </div>
   );
 };