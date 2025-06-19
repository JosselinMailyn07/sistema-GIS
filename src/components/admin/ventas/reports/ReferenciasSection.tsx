import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export const ReferenciaSection = () => {
  return (
    <div className="space-y-4">
      <h3 className="font-semibold text-lg">Información de Referencia</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label>Vendedor</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Seleccionar vendedor" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="v1">Vendedor 1</SelectItem>
              <SelectItem value="v2">Vendedor 2</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label>Transportista</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Seleccionar transportista" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="t1">Transportista 1</SelectItem>
              <SelectItem value="t2">Transportista 2</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label>Tipo Precio</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Normal" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="normal">Normal</SelectItem>
              <SelectItem value="especial">Especial</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label>Placa | Vehículo</Label>
          <Input placeholder="ABC-1234" />
        </div>
        <div className="space-y-2">
          <Label>Peso (kg)</Label>
          <Input type="number" placeholder="0.00" />
        </div>
      </div>
    </div>
  );
};