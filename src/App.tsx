import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Login from "./pages/login";
import Registro from "./pages/registro";
import { AdminLayout } from "./components/layout/AdminLayout";

import { AdminReports } from "./components/admin/ventas/reports/AdminReports";
import { Factura } from "./components/admin/ventas/factura/factura";
import { NotasEntrega } from "./components/admin/ventas/notas-entrega/notas-entrega";
import { Toast } from "@/components/ui/toast";
import { Pedidos } from "./components/admin/ventas/pedidos/pedidos";
import { Cotizaciones } from "./components/admin/ventas/cotizaciones/cotizaciones";
import { Clientes } from "./components/admin/ventas/clientes/clientes";
import { Cobranzas } from "./components/admin/ventas/cobranzas/cobranzas";
import { MovimientosClientes } from "./components/admin/ventas/movimientos-clientes/movimientos-clientes";
import { RutasVisitas } from "./components/admin/ventas/rutas-visitas/rutas-visitas";
import { MantenimientoRutas } from "./components/admin/ventas/mantenimiento-rutas/mantenimiento-rutas";
import { EstimadoVentas } from "./components/admin/ventas/estimado-ventas/estimado-ventas";
import { CausaNoVentas } from "./components/admin/ventas/causa-no-ventas/causa-no-ventas";
import { GruposClientes } from "./components/admin/ventas/grupos-clientes/grupos-clientes";
import { Compras } from "./components/admin/compras/compras/compras";
import { Recepciones } from "./components/admin/compras/recepciones/recepciones";
import { OrdenesCompra } from "./components/admin/compras/ordenes-compra/ordenes-compra";
import { Requisiciones } from "./components/admin/compras/requisiciones/requisiciones";
import { RegistroProductos } from "./components/admin/compras/registro-productos/registro-productos";
import { AjustesPrecios } from "./components/admin/compras/ajustes-precios/ajustes-precios";
import { Proveedores } from "./components/admin/compras/proveedores/proveedores";
import { Pagos } from "./components/admin/compras/pagos/pagos";
import { MovimientosProveedores } from "./components/admin/compras/movimientos-proveedores/movimientos-proveedores";
import { GruposProveedores } from "./components/admin/compras/grupos-proveedores/grupos-proveedores";
import { InventarioMain } from "./components/admin/inventario/inventarioMain";

import { Tesoreria } from "./components/admin/tesoreria/tesoreriaTabs";
import { ConfiguracionSubHeader } from "./components/admin/configuracion/ConfiguracionTabs";
import { AdminReports } from "./components/admin/pruebas/reports/AdminReports";
import { Factura } from "./components/admin/pruebas/factura/factura";

import { RecepcionesBodegas } from "./components/admin/inventario/recepciones-bodegas/recepciones-bodega";

import { Tesoreria } from "./components/admin/tesoreria/tesoreriaTabs";
import { ConfiguracionSubHeader } from "./components/admin/configuracion/ConfiguracionSubheader";
import { Ventas } from "./components/admin/ventas/ventasTabs";
import { Compras } from "./components/admin/compras/comprasTabs";
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Redirect root to admin dashboard */}
          <Route path="/" element={<Navigate to="/admin/reports" replace />} />
          

          {/* Login Route */}
          <Route path="/login" element={<Login />} />
          <Route path="/registro" element={<Registro />} />


          {/* Admin Routes */}
          <Route path="/admin/*" element={<AdminLayout />}>
            {/* Rutas de PRUEBAS */}
            <Route path="reports" element={<AdminReports />} />
            <Route path="factura" element={<Factura />} />
            
    

            
    
            {/* Rutas de Configuración  */}
            {/* Solo esta, ya que contendrán todas las opciones en el subheader */}
            <Route path="configuracion" element={<ConfiguracionSubHeader />} /> 




            {/* Rutas de Ventas */}
            <Route path="ventas" element={<Ventas/>} />




            {/* Rutas de Compras/Gastos */}
            <Route path="compras" element={<Compras/>} />
            
            
            {/* Rutas de Clientes */}



            {/* Rutas de inventario */}
            <Route path="inventario" element={<InventarioMain />} />

            





            
            
            {/* Ruta por defecto para /admin */}
            <Route index element={<Navigate to="reports" replace />} />


          {/* Rutas de tesorería */}

            <Route path="tesoreria" element={<Tesoreria />} />




          </Route>

          {/* 404 Not Found */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;