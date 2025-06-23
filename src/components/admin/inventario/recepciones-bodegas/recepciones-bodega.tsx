import { Button } from '@/components/ui/button';

export const RecepcionesBodegas= () => {
 
  return (
    <div className="flex justify-center w-full overflow-x-auto bg-white rounded-lg shadow p-5">
      
      {/* Contenedor interno que mantiene los botones en una sola línea */}
      <div className="flex gap-10 flex-wrap justify-center w-full max-w-full">
        {/* Bloque izquierdo */}
        <div className="flex flex-wrap gap-2 justify-center">
          <Button className="h-8 px-4 bg-success hover:bg-success/90">Eliminar</Button>
          <Button className="h-8 px-4 bg-success hover:bg-success/90">Ordenes de compra</Button>
          <Button className="h-8 px-4 bg-success hover:bg-success/90">Productos</Button>
          <Button className="h-8 px-4 bg-success hover:bg-success/90">Servicios</Button>
          <Button className="h-8 px-4 bg-success hover:bg-success/90">Descuentos</Button>
        </div>

        {/* Bloque derecho */}
        <div className="flex flex-wrap gap-2 justify-center">
          <Button className="h-8 px-4 bg-success hover:bg-success/90">Aceptar</Button>
          <Button className="h-8 px-4 bg-success hover:bg-success/90">Cancelar</Button>
        </div>

      </div>
    </div>
   
  );
};