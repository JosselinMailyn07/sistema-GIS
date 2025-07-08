//auditoria-control.tsx 
import React, { useState } from 'react';
import { botones } from '@/components/layout/botones'; // Botones de carpeta layout
import { Tablas } from '@/components/layout/Tabla';

// Datos estáticos de auditoria
// Hay que traer los datos desde las API's, pero por ahora usamos datos estáticos
const auditoria = [
  { empresa: '1', usuario: 'sa', fechayhora: '2023-10-01 12:00', gestion: 'CFG', opcion: 'Auditoría', operacion: 'ELI', documento: 'Doc 123', sesion: 'Sesión 1'  },
  { empresa: '2', usuario: 'sa', fechayhora: '2023-10-02 14:30', gestion: 'CFG', opcion: 'Auditoría', operacion: 'CER', documento: 'Doc 456', sesion: 'Sesión 2' },
  { empresa: '3', usuario: 'ji', fechayhora: '2023-10-03 09:15', gestion: 'CFG', opcion: 'Auditoría', operacion: 'ENT', documento: 'Doc 789', sesion: 'Sesión 3' },

  
];

const campos = [
  { key: 'empresa', label: 'Empresa' },
  { key: 'usuario', label: 'Usuario' },
  { key: 'fechayhora', label: 'Fecha y Hora' },
  { key: 'gestion', label: 'Gestión' },
  { key: 'opcion', label: 'Opción' },
  { key: 'operacion', label: 'Operación' },
  { key: 'documento', label: 'Documento' },
  { key: 'sesion', label: 'Sesión' },


];


export const AuditoriaForm = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Filtrar provincias basadas en el término de búsqueda
  const filteredAuditoria = auditoria.filter(auditoria =>
    auditoria.empresa.toLowerCase().includes(searchTerm.toLowerCase()) ||
    auditoria.usuario.toString().includes(searchTerm)
  );

 return (
     <div className="p-4">
       <div className="grid p-2 mb-4 text-left"> 
         <h1 className="text-2xl font-bold">Auditoría </h1>
         {/* Se llama a los botones pero no pongan título. Además, se debe poner onSearch: setSearchTerm -> esto es para que la barra de búsqueda funcione, para que al momento de escribir
         detecte la palabra y aparezca */}
         {botones({ titulo: "", onSearch: setSearchTerm })}
       </div>
       <div className="mt-4 p-4 border rounded-lg shadow-md">      
         {/* Llamamos a la clase tabla para usar el formato de tablas */}
         { /* Se pasa los campos y los datos filtrados a la tabla */}
           <Tablas campos={campos} datos={filteredAuditoria} />
     </div>
     </div>
   );
 };
