import { useState } from 'react';
// Update this import to match the actual export from './ReportsSubHeader'
import { ReportsSubHeader } from './ReportsSubHeader';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { PedidosSection } from './PedidoSection';
import { BuscarSection } from './BuscarSection';
import { ResumenFinanciero } from './ResumenFinanciero';
import { ReferenciaSection } from './ReferenciasSection';
import { Import } from 'lucide-react';
import { VentasSubHeader } from '../ventasSubHeader';
export const AdminReports = () => {
  const [activeSection, setActiveSection] = useState<'pedidos' | 'buscar' | 'referencia' | null>(null);

  return (
    <div className="space-y-6">
      <VentasSubHeader  />
      
      <Card className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <Button 
            variant={activeSection === 'pedidos' ? 'default' : 'outline'}
            onClick={() => setActiveSection('pedidos')}
          >
            Pedidos
          </Button>
          <Button 
            variant={activeSection === 'buscar' ? 'default' : 'outline'}
            onClick={() => setActiveSection('buscar')}
          >
            Buscar
          </Button>
          <Button 
            variant={activeSection === 'referencia' ? 'default' : 'outline'}
            onClick={() => setActiveSection('referencia')}
          >
            Referencia
          </Button>
          <Button variant="outline" className="bg-red-100 hover:bg-red-200 text-red-600">
            Cancelar
          </Button>
        </div>

        {activeSection === 'pedidos' && <PedidosSection />}
        {activeSection === 'buscar' && <BuscarSection />}
        {activeSection === 'referencia' && <ReferenciaSection />}

        <div className="mt-8 p-4 border-t">
          <ResumenFinanciero />
        </div>
      </Card>
    </div>
  );

 
};