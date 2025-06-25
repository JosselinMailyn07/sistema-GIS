import { TableTemplateTest } from '@/components/admin/inventario/tableTemplate';
import { Button } from '@/components/ui/button';


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

export const RecepcionesBodegas= () => {

  return (
    <div>
      <div className="flex justify-center w-full overflow-x-auto bg-white rounded-lg shadow p-5">
      
        {/* Contenedor interno que mantiene los botones en una sola línea */}
        <div className="flex gap-10 flex-wrap justify-center w-full max-w-full">
          {/* Bloque izquierdo */}
          <div className="flex flex-wrap gap-2 justify-center">
            <Button className="h-8 px-4 bg-success hover:bg-success/90">Eliminar</Button>
            <Button className="h-8 px-4 bg-success hover:bg-success/90">Ordenes de compra</Button>
            <Button className="h-8 px-4 bg-success hover:bg-success/90">Productos</Button>
            <Button className="h-8 px-4 bg-success hover:bg-success/90">Servicios</Button>
            <Button className="h-8 px-4 bg-success hover:bg-success/90">Descuento</Button>
          </div>

          {/* Bloque derecho */}
          <div className="flex flex-wrap gap-2 justify-center">
            <Button className="h-8 px-4 bg-success hover:bg-success/90">Aceptar</Button>
            <Button className="h-8 px-4 bg-success hover:bg-success/90">Cancelar</Button>
          </div>

        </div>
      </div>
      <div className='mb-4'></div>
      <div>
        <TableTemplateTest campos={campos} datos={datos} />
      </div>


    </div>
    
  );
};