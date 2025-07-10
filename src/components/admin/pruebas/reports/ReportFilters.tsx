import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";

export function ReportFilters({
  dateRange,
  setDateRange,
  onApply,
}: {
  dateRange: { from: Date; to: Date };
  setDateRange: (range: { from: Date; to: Date }) => void;
  onApply: () => void;
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
      <div className="space-y-2">
        <Label>Desde</Label>
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" className="w-full justify-start text-left font-normal">
              <CalendarIcon className="mr-2 h-4 w-4" />
              {dateRange.from ? format(dateRange.from, "PPP") : <span>Seleccione fecha</span>}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar
              mode="single"
              selected={dateRange.from}
              onSelect={(date) => setDateRange({ ...dateRange, from: date || new Date() })}
              initialFocus
            />
          </PopoverContent>
        </Popover>
      </div>

      <div className="space-y-2">
        <Label>Hasta</Label>
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" className="w-full justify-start text-left font-normal">
              <CalendarIcon className="mr-2 h-4 w-4" />
              {dateRange.to ? format(dateRange.to, "PPP") : <span>Seleccione fecha</span>}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar
              mode="single"
              selected={dateRange.to}
              onSelect={(date) => setDateRange({ ...dateRange, to: date || new Date() })}
              initialFocus
            />
          </PopoverContent>
        </Popover>
      </div>

      <div className="space-y-2">
        <Label>Filtrar por</Label>
        <Input placeholder="Ej: Producto, Cliente..." />
      </div>

      <div className="flex items-end">
        <Button className="w-full" onClick={onApply}>
          Aplicar Filtros
        </Button>
      </div>
    </div>
  );
}