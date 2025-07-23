// src/components/admin/configuracion/ParametrosDocumentosForm.tsx
import React, { useState } from 'react';
import { Box, Tab, Paper } from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import {
  FaFileAlt, FaTags, FaList, FaExchangeAlt, FaCashRegister,
  FaUserShield, FaChartLine, FaTools, FaExclamationTriangle
} from 'react-icons/fa';

// Importa los componentes de formulario para cada pestaña
import ClientesForm from './editar/parametros-documentos/Clientes/ClientesForm';
import FacturasVentasForm from './editar/parametros-documentos/Facturas Ventas/FacturasVentasForm';
import PuntoVentaForm from './editar/parametros-documentos/Punto de Venta/PuntoVentaForm';
import PedidosForm from './editar/parametros-documentos/Pedidos/PedidosForm';
import CotizacionesForm from './editar/parametros-documentos/Cotizaciones/CotizacionesForm';
import NotasEntregaForm from './editar/parametros-documentos/Notas de Entrega/NotasEntregaForm';
import FacturasComprasForm from './editar/parametros-documentos/Facturas Compras/FacturasComprasForm';
import OrdenCompraForm from './editar/parametros-documentos/Orden de Compra/OrdenCompra';
import RecepcionesForm from './editar/parametros-documentos/Recepciones/RecepcionesForm';
import TransferenciaBodegaForm from './editar/parametros-documentos/Transferencia de Bodega/TransferenciaBodegaForm';
import TesoreriaForm from './editar/parametros-documentos/Tesoreria/TesoreriaForm';
import ContadoresDocumentosForm from './editar/parametros-documentos/Contadores de Documentos/ContadoresDocumentosForm';
import TipoContabilidadForm from './editar/parametros-documentos/Tipo Contabilidad/TipoContabilidadForm';
import SistemaForm from './editar/parametros-documentos/Sistema/SistemaForm';


export const ParametrosDocumentosForm = () => {
  const [value, setValue] = useState('clientes');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, width: '100%' }}>
      <TabContext value={value}>
        <Paper elevation={3} sx={{ width: { xs: '100%', md: '300px' }, borderRadius: 2, margin: { xs: '0 0 20px 0', md: '0 20px 0 0' } }}>
          <TabList
            onChange={handleChange}
            aria-label="Tabs de parámetros documentos"
            orientation="vertical"
            variant="scrollable"
            sx={{
              '& .MuiTab-root': {
                justifyContent: 'flex-start',
                alignItems: 'center',
                minHeight: '36px',
              },
            }}
          >
            <Tab icon={<FaFileAlt />} iconPosition="start" label="Clientes" value="clientes" sx={{ borderRadius: '8px', margin: '4px' }} />
            <Tab icon={<FaTags />} iconPosition="start" label="Facturas Ventas" value="facturasVentas" sx={{ borderRadius: '8px', margin: '4px' }} />
            <Tab icon={<FaList />} iconPosition="start" label="Punto de Venta" value="puntoVenta" sx={{ borderRadius: '8px', margin: '4px' }} />
            <Tab icon={<FaExchangeAlt />} iconPosition="start" label="Pedidos" value="pedidos" sx={{ borderRadius: '8px', margin: '4px' }} />
            <Tab icon={<FaCashRegister />} iconPosition="start" label="Cotizaciones" value="cotizaciones" sx={{ borderRadius: '8px', margin: '4px' }} />
            <Tab icon={<FaUserShield />} iconPosition="start" label="Notas de Entrega" value="notasEntrega" sx={{ borderRadius: '8px', margin: '4px' }} />
            <Tab icon={<FaChartLine />} iconPosition="start" label="Facturas Compras" value="facturasCompras" sx={{ borderRadius: '8px', margin: '4px' }} />
            <Tab icon={<FaTools />} iconPosition="start" label="Orden de Compra" value="ordenCompra" sx={{ borderRadius: '8px', margin: '4px' }} />
            <Tab icon={<FaExclamationTriangle />} iconPosition="start" label="Recepciones" value="recepciones" sx={{ borderRadius: '8px', margin: '4px' }} />
            <Tab icon={<FaExchangeAlt />} iconPosition="start" label="Transferencia de Bodega" value="transferenciaBodega" sx={{ borderRadius: '8px', margin: '4px' }} />
            <Tab icon={<FaList />} iconPosition="start" label="Tesoreria" value="tesoreria" sx={{ borderRadius: '8px', margin: '4px' }} />
            <Tab icon={<FaFileAlt />} iconPosition="start" label="Contadores Documentos" value="contadoresDocumentos" sx={{ borderRadius: '8px', margin: '4px' }} />
            <Tab icon={<FaTags />} iconPosition="start" label="Tipo Contabilidad" value="tipoContabilidad" sx={{ borderRadius: '8px', margin: '4px' }} />
            <Tab icon={<FaList />} iconPosition="start" label="Sistema" value="sistema" sx={{ borderRadius: '8px', margin: '4px' }} />
          </TabList>
        </Paper>
        <Box sx={{ flex: 1, padding: 2 }}>
          <Paper elevation={3} sx={{ padding: 2, borderRadius: 2 }}>
            <TabPanel value="clientes"><ClientesForm /></TabPanel>
            <TabPanel value="facturasVentas"><FacturasVentasForm /></TabPanel>
            <TabPanel value="puntoVenta"><PuntoVentaForm /></TabPanel>
            <TabPanel value="pedidos"><PedidosForm /></TabPanel>
            <TabPanel value="cotizaciones"><CotizacionesForm /></TabPanel>
            <TabPanel value="notasEntrega"><NotasEntregaForm /></TabPanel>
            <TabPanel value="facturasCompras"><FacturasComprasForm /></TabPanel>
            <TabPanel value="ordenCompra"><OrdenCompraForm /></TabPanel>
            <TabPanel value="recepciones"><RecepcionesForm /></TabPanel>
            <TabPanel value="transferenciaBodega"><TransferenciaBodegaForm /></TabPanel>
            <TabPanel value="tesoreria"><TesoreriaForm /></TabPanel>
            <TabPanel value="contadoresDocumentos"><ContadoresDocumentosForm /></TabPanel>
            <TabPanel value="tipoContabilidad"><TipoContabilidadForm /></TabPanel>
            <TabPanel value="sistema"><SistemaForm /></TabPanel>

          </Paper>
        </Box>
      </TabContext>
    </Box>
  );
};
