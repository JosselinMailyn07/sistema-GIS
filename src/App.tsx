import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Login from "./pages/login";
import { AdminLayout } from "./components/layout/AdminLayout";
import { AdminReports } from "./components/admin/pruebas/reports/AdminReports";
import { Factura } from "./components/admin/pruebas/factura/factura";

import { InventarioMain } from "./components/admin/inventario/inventarioMain";


import { Tesoreria } from "./components/admin/tesoreria/tesoreriaTabs";
import { ConfiguracionSubHeader } from "./components/admin/configuracion/ConfiguracionTabs";
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
            <Route path="inventario" element={<InventarioMain/>} />

            





            
            
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