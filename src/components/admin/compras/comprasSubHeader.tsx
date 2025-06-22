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

export const ComprasSubHeader  = () => {
  return (
    <div className="bg-white border-b border-gray-200 p-4 mb-6">
      {/* Primera fila - Módulo principal */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-gray-800">Compras</h2>
      </div>

      {/* Segunda fila - Navegación principal */}
      <div className="flex flex-wrap items-center gap-2">
        <Button asChild variant="ghost" className="flex-1 min-w-0 px-2 py-1 h-auto hover:bg-blue-50">
          <Link to="" className="flex flex-col items-center justify-center gap-1">
            <FcAddDatabase size={18} />
            <span>Proveedores</span>
          </Link>
        </Button>
        
        <Button asChild variant="ghost" className="flex-1 min-w-0 px-2 py-1 h-auto hover:bg-blue-50">
          <Link to="" className="flex flex-col items-center justify-center gap-1">
            <FcPackage size={16} />
            <span className="text-xs whitespace-nowrap">Registro de Productos</span>
          </Link>
        </Button>
        
        <Button asChild variant="ghost" className="flex-1 min-w-0 px-2 py-1 h-auto hover:bg-blue-50">
          <Link to="" className="flex flex-col items-center justify-center gap-1">
            <FcServices size={16} />
            <span className="text-xs whitespace-nowrap">Nueva Compra</span>
          </Link>
        </Button>
        
        <Button asChild variant="ghost" className="flex-1 min-w-0 px-2 py-1 h-auto hover:bg-blue-50">
          <Link to="" className="flex flex-col items-center justify-center gap-1">
            <FcDocument size={16} />
            <span className="text-xs whitespace-nowrap">Pagos</span>
          </Link>
        </Button>
        
        <Button asChild variant="ghost" className="flex-1 min-w-0 px-2 py-1 h-auto hover:bg-blue-50">
          <Link to="" className="flex flex-col items-center justify-center gap-1">
            <FcMoneyTransfer size={16} />
            <span className="text-xs whitespace-nowrap">Catálogo de Proveedores</span>
          </Link>
        </Button>
        
        <Button asChild variant="ghost" className="flex-1 min-w-0 px-2 py-1 h-auto hover:bg-blue-50">
          <Link to="" className="flex flex-col items-center justify-center gap-1">
            <FcBusinessman size={16} />
            <span className="text-xs whitespace-nowrap">Catálogo de Compras</span>
          </Link>
        </Button>
      </div>
    </div>
  );
};