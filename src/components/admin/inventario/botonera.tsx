import { Button } from "@/components/ui/button";

export const BotoneraTest = () => {
  return (
    <div>
        <table className="min-w-full border table-auto">
            <tbody>
                <tr>
                    <th>
                        <th><Button className="h-8 px-4 bg-success hover:bg-success/90">Eliminar</Button></th>
                        <th><Button className="h-8 px-4 bg-success hover:bg-success/90">Orden de compra</Button></th>
                        <th><Button className="h-8 px-4 bg-success hover:bg-success/90">productos</Button></th>
                        <th><Button className="h-8 px-4 bg-success hover:bg-success/90">servicios</Button></th>
                        <th><Button className="h-8 px-4 bg-success hover:bg-success/90">Descuento</Button></th>
                    </th>
                    <th>
                        <th><Button className="h-8 px-4 bg-success hover:bg-success/90">Aceptar</Button></th>
                        <th><Button className="h-8 px-4 bg-success hover:bg-success/90">Cancelar</Button></th>
                    </th>
                </tr>
                
                <tr>
                    <th>
                        <th>ruc: </th>
                        <th><textarea className="w-full rounded-lg border border-gray-300"></textarea></th>
                    </th>
                     <th>
                        <th>nombre: </th>
                        <th><textarea className="w-full rounded-lg border border-gray-300"></textarea></th>
                    </th>
                </tr>
                <tr>
                    <th>
                        <th>fecha de emision: </th>
                        <th><textarea className="w-full rounded-lg border border-gray-300"></textarea></th>
                    </th>
                     <th>
                        <th>nombre: </th>
                        <th><textarea className="w-full rounded-lg border border-gray-300"></textarea></th>
                    </th>
                </tr>
            </tbody>
        </table>
    </div>
  );
};