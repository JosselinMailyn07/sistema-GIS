import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';

export const PedidosSection = () => {
  return (
    <div className="space-y-4">
      <h3 className="font-semibold text-lg">Opciones de Pedidos</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="flex items-center space-x-2">
          <Checkbox id="notas-entrega" />
          <Label htmlFor="notas-entrega">Notas de entrega</Label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="productos" />
          <Label htmlFor="productos">Productos</Label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="servicios" />
          <Label htmlFor="servicios">Servicios</Label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="descuento" />
          <Label htmlFor="descuento">Descuento</Label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="seriales" />
          <Label htmlFor="seriales">Seriales</Label>
        </div>
      </div>
    </div>
  );
};