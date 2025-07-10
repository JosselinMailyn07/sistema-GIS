import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';

export const ResumenFinanciero = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      <div className="space-y-2">
        <Label>Neto</Label>
        <Input value="0,00" readOnly />
      </div>
      <div className="space-y-2">
        <Label>Descuento</Label>
        <Input value="0,00" readOnly />
      </div>
      <div className="space-y-2">
        <Label>IVA</Label>
        <Input value="0,00" readOnly />
      </div>
      <div className="space-y-2">
        <Label>Total</Label>
        <Input value="0,00" readOnly className="font-bold" />
      </div>
    </div>
  );
};