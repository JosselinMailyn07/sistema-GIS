import { 
  FcAddDatabase,
  FcPackage,
  FcServices,
  FcDocument,
  FcMoneyTransfer,
  FcBusinessman,
  FcSurvey,
  FcSalesPerformance
} from 'react-icons/fc';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export const VentasSubHeader  = () => {
  return (
    <div className="bg-white border-b border-gray-200 p-4 mb-6">
      {/* Primera fila - Módulo principal */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-gray-800">Ventas</h2>
      </div>
      
      {/* Segunda fila - Navegación principal */}
      <div className="flex flex-wrap items-center gap-2">
        <Button asChild variant="ghost" className="hover:bg-blue-50 gap-2 flex-1 min-w-[150px]">
          <Link to="/clientes/registro" className="flex items-center justify-center">
            <FcAddDatabase size={18} />
            <span>Registro de Cliente</span>
          </Link>
        </Button>
        
        <Button asChild variant="ghost" className="flex-1 min-w-0 px-2 py-1 h-auto hover:bg-blue-50">
          <Link to="/productos" className="flex flex-col items-center justify-center gap-1">
            <FcPackage size={16} />
            <span className="text-xs whitespace-nowrap">Productos</span>
          </Link>
        </Button>
        
        <Button asChild variant="ghost" className="flex-1 min-w-0 px-2 py-1 h-auto hover:bg-blue-50">
          <Link to="/servicios" className="flex flex-col items-center justify-center gap-1">
            <FcServices size={16} />
            <span className="text-xs whitespace-nowrap">Servicios</span>
          </Link>
        </Button>
        
        <Button asChild variant="ghost" className="flex-1 min-w-0 px-2 py-1 h-auto hover:bg-blue-50">
          <Link to="/facturas/nueva" className="flex flex-col items-center justify-center gap-1">
            <FcDocument size={16} />
            <span className="text-xs whitespace-nowrap">Factura</span>
          </Link>
        </Button>
        
        <Button asChild variant="ghost" className="flex-1 min-w-0 px-2 py-1 h-auto hover:bg-blue-50">
          <Link to="/cobranzas" className="flex flex-col items-center justify-center gap-1">
            <FcMoneyTransfer size={16} />
            <span className="text-xs whitespace-nowrap">Cobranzas</span>
          </Link>
        </Button>
        
        <Button asChild variant="ghost" className="flex-1 min-w-0 px-2 py-1 h-auto hover:bg-blue-50">
          <Link to="/clientes" className="flex flex-col items-center justify-center gap-1">
            <FcBusinessman size={16} />
            <span className="text-xs whitespace-nowrap">Clientes</span>
          </Link>
        </Button>
        
        <Button asChild variant="ghost" className="flex-1 min-w-0 px-2 py-1 h-auto hover:bg-blue-50">
          <Link to="/cotizaciones" className="flex flex-col items-center justify-center gap-1">
            <FcSurvey size={16} />
            <span className="text-xs whitespace-nowrap">Cotizaciones</span>
          </Link>
        </Button>
        
        <Button asChild variant="ghost" className="flex-1 min-w-0 px-2 py-1 h-auto hover:bg-blue-50">
          <Link to="/pos" className="flex flex-col items-center justify-center gap-1">
            <FcSalesPerformance size={16} />
            <span className="text-xs whitespace-nowrap">P.O.S.</span>
          </Link>
        </Button>
      </div>
    </div>
  );
};