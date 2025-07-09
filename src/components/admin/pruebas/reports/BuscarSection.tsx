import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Calendar } from '@/components/ui/calendar';
import { Button } from '@/components/ui/button';
import { CalendarIcon } from 'lucide-react';
import React, { useState } from 'react';

export const BuscarSection = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <div className="space-y-4">
      <h3 className="font-semibold text-lg">Búsqueda</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label>Nombre</Label>
          <Input placeholder="Buscar por nombre..." />
        </div>
        <div className="space-y-2">
          <Label>Pedidos</Label>
          <Input placeholder="Número de pedido..." />
        </div>
      </div>
      
      <div className="space-y-2">
        <Label>Fecha de Emisión</Label>
        <div className="flex items-center gap-2">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border"
          />
          <Button variant="outline">
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date ? date.toLocaleDateString() : "Seleccionar fecha"}
          </Button>
        </div>
      </div>
      
      <div className="space-y-2">
        <Label>Dirección de envío</Label>
        <Input placeholder="Ingrese dirección..." />
      </div>
      
      <div className="space-y-2">
        <Label>Comentarios</Label>
        <Input placeholder="Notas adicionales..." />
      </div>
    </div>
  );
};