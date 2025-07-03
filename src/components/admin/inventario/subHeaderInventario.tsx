import { 
    FcFactory, 
    FcFlowChart, 
    FcExport, 
    FcSurvey 
} from 'react-icons/fc';
import { useState } from "react";
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export const SubHeaderInventario  = () => {
    const [items] = useState([
    { nombre: "Recepciones de bodega", ruta: "/proveedores", icon: <FcFactory size={18} /> },
    { nombre: "Movimientos Inventario", ruta: "/clientes", icon: <FcFlowChart size={18} /> },
    { nombre: "Transferencias de bodegas", ruta: "/productos", icon: <FcExport size={18} /> },
    { nombre: "Inventario inicial | físico", ruta: "/productos", icon: <FcSurvey size={18} /> },
  ]);
    
  return (
    <div className="bg-white border-b border-gray-200 p-4 mb-6">
      {/* titulo */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-gray-800">Compras</h2>
      </div>

      {/* Segunda fila - Navegación principal */}
      {items.map((item, index) => (
        <Button
          key={index} asChild variant="ghost"
          className="flex-1 min-w-0 px-2 py-1 h-auto hover:bg-blue-50"
        >
          <Link to={item.ruta} className="flex flex-col items-center justify-center gap-1">
            {item.icon}
            <span className="text-black">{item.nombre}</span>
          </Link>
        </Button>
      ))}

    
    </div>
  );
};