
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const Compras= () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">Comprar</h1>

      <Card className="bg-white border-admin-border">
        <CardHeader>
          <CardTitle className="text-lg text-gray-700"></CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center py-8">
            <p className="text-admin-secondary">Módulo en desarrollo</p>
            <p className="text-sm text-gray-500 mt-2">Las configuraciones del sistema están siendo implementadas.</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
