import { VentasSubHeader } from '@/components/admin/ventas/ventasSubHeader'

export const CausaNoVentas= () => {
  return (
    <div className="space-y-6">
      <VentasSubHeader />
      
      {/* Resto del contenido del módulo de facturas */}
      <div className="p-6 bg-black rounded-lg shadow">
        {/* ... */}
      </div>
    </div>
  );
};