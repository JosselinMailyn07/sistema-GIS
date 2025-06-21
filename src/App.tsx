import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Login from "./pages/login";
import { AdminLayout } from "./components/layout/AdminLayout";
import { AdminReports } from "./components/admin/ventas/reports/AdminReports";
import { Factura } from "./components/admin/ventas/factura/factura";
import { Compras } from "./components/admin/compras/compras";
import { NotasEntrega } from "./components/admin/ventas/notas-entrega/notas-entrega";
import { Toast } from "@/components/ui/toast";
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
            {/* Rutas de Ventas */}
            <Route path="reports" element={<AdminReports />} />
            <Route path="factura" element={<Factura />} />
              <Route path="nota-entrega" element={<NotasEntrega/>} />
            
            {/* Rutas de Compras/Gastos */}
            <Route path="compras" element={<Compras />} />
            
            {/* Rutas de Clientes */}
            
            {/* Ruta por defecto para /admin */}
            <Route index element={<Navigate to="reports" replace />} />
          </Route>

          {/* 404 Not Found */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;