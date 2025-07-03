import { TableTemplateTest } from '@/components/admin/inventario/tableTemplate';
import { Button } from "@/components/ui/button";
import { BotoneraTest } from '@/components/admin/inventario/botonera';


export default function Funcion() {

  const campos = [
    { key: "id", label: "ID" },
    { key: "nombre", label: "Nombre" },
    { key: "edad", label: "Edad" },
    { key: "correo", label: "Correo" },
  ];

  const datos = [
    { id: 1, nombre: "Juan", edad: 28, correo: "juan@example.com" },
    { id: 2, nombre: "María", edad: 34, correo: "maria@example.com" },
    { id: 3, nombre: "Carlos", edad: 25, correo: "carlos@example.com", },
    
  ];

  return (
   <div className="bg-white border-b border-gray-200 p-4 mb-6">
       <div>
        <BotoneraTest/>
       </div>
        
        <div className="gap-2 p-4 mb-6">
          <TableTemplateTest campos={campos} datos={datos}/>
        </div>
        
   </div>
  );
}
