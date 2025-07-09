import { 
  UserPlus, 
  Package, 
  Settings, 
  FileText, 
  DollarSign, 
  Users,
  FileSearch
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export function ReportsSubHeader() {
  return (
    <div className="bg-white border-b border-gray-200 p-2 mb-6">
      <div className="flex flex-wrap items-center gap-1">
        {/* Botones de navegación principales - más grandes */}
        <Button asChild variant="ghost" className="hover:bg-blue-50 gap-2 flex-1 min-w-[150px]">
          <Link to="/clientes/registro" className="flex items-center justify-center">
            <UserPlus size={18} className="text-blue-600" />
            <span>Registro de Cliente</span>
          </Link>
        </Button>
        
        <Button asChild variant="ghost" className="hover:bg-blue-50 gap-2 flex-1 min-w-[150px]">
          <Link to="/productos" className="flex items-center justify-center">
            <Package size={18} className="text-blue-600" />
            <span>Productos</span>
          </Link>
        </Button>
        
        <Button asChild variant="ghost" className="hover:bg-blue-50 gap-2 flex-1 min-w-[150px]">
          <Link to="/servicios" className="flex items-center justify-center">
            <Settings size={18} className="text-blue-600" />
            <span>Servicios</span>
          </Link>
        </Button>
        
        <Button asChild variant="ghost" className="hover:bg-blue-50 gap-2 flex-1 min-w-[150px]">
          <Link to="/facturas/nueva" className="flex items-center justify-center">
            <FileText size={18} className="text-blue-600" />
            <span>Nueva Factura</span>
          </Link>
        </Button>
        
        <Button asChild variant="ghost" className="hover:bg-blue-50 gap-2 flex-1 min-w-[150px]">
          <Link to="/cobranzas" className="flex items-center justify-center">
            <DollarSign size={18} className="text-blue-600" />
            <span>Cobranzas</span>
          </Link>
        </Button>
        
        <Button asChild variant="ghost" className="hover:bg-blue-50 gap-2 flex-1 min-w-[150px]">
          <Link to="/clientes" className="flex items-center justify-center">
            <Users size={18} className="text-blue-600" />
            <span>Clientes</span>
          </Link>
        </Button>
        
        <Button asChild variant="ghost" className="hover:bg-blue-50 gap-2 flex-1 min-w-[150px]">
          <Link to="/cotizaciones" className="flex items-center justify-center">
            <FileSearch size={18} className="text-blue-600" />
            <span>Cotizaciones</span>
          </Link>
        </Button>
        
        <Button asChild variant="ghost" className="hover:bg-blue-50 gap-2 flex-1 min-w-[150px]">
          <Link to="/pos" className="flex items-center justify-center">
            <span className="font-bold">P.O.S.</span>
          </Link>
        </Button>
      </div>
    </div>
  );
}