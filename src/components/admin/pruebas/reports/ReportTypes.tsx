import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const reportTypes = [
  { id: 'sales', name: 'Ventas', icon: '💰' },
  { id: 'inventory', name: 'Inventario', icon: '📦' },
  { id: 'purchases', name: 'Compras', icon: '🛒' },
  { id: 'financial', name: 'Financieros', icon: '📊' },
];

export function ReportTypes({ onSelect }: { onSelect: (type: string) => void }) {
  return (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle className="text-lg">Ventas</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {reportTypes.map((type) => (
            <Button
              key={type.id}
              variant="outline"
              className="flex flex-col h-24 gap-2"
              onClick={() => onSelect(type.id)}
            >
              <span className="text-2xl">{type.icon}</span>
              <span>{type.name}</span>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}