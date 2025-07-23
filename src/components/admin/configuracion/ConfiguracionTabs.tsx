import React, { useState } from 'react';
import { Box, Tab } from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import {
  FaArchive, FaEdit, FaCity, FaCalendar, FaDatabase,
  FaFileInvoice, FaPrint, FaChartLine, FaTools, FaBuilding,
  FaRuler, FaTags, FaCashRegister, FaExclamationTriangle,
  FaExchangeAlt, FaList, FaUserShield
} from 'react-icons/fa';
import { ProvinciasForm } from './archivo/provincias/provincias';
import { CantonesForm } from './archivo/cantones/cantones';
import { CiudadesForm } from './archivo/ciudades/ciudades';
import { AuditoriaForm } from './archivo/auditoria-control/auditoria-control';
import { ComprobantesFiscalesForm } from './archivo/comprobantes-fiscales/comprobantesFiscales';
import Calendario from './archivo/calendario/calendario';
import { OperacionesBaseDatos } from './archivo/operaciones-bbdd/operacionesBaseDatos';
import EstacionesForm from './archivo/estaciones-pos-pv/estacionesPosPv';
import MantenimientoForm from './archivo/mantenimiento-bbdd/mantenimientoBaseDatos';
import { EmpresasInicioForm } from './editar/empresas-inicio/empresas-inicio';
import { ParametrosDocumentosForm } from './parametros-documentos';
import UnidadesMedidaForm from './editar/unidades-medidas/UnidadesMedidaForm';
import ComisionesProductos from './editar/comisiones-productos/comisionesProductos';
import TiposCreditoForm from './editar/tipo-credito/TiposCreditoForm';
import OperacionesCajaPrincipalForm from './editar/operaciones-cajaprincipal/OperacionesCajaPrincipalForm';
import CausaNoVentaForm from './editar/causas-no-venta/CausaNoVentaForm';
import TasaCambioForm from './editar/tasa de cambio/TasaCambioForm';
import ConceptosGeneralesForm from './editar/Conceptos generales/ConceptosGeneralesForm';
import SeguridadPerfilesUsuariosForm from './editar/Seguridad-perfilesusuarios/SeguridadPerfilesUsuariosForm';

export const ConfiguracionSubHeader = () => {
  const [activeTab, setActiveTab] = useState('1');
  const [activeSubTab, setActiveSubTab] = useState('provincias');

  const handleTabChange = (event: React.SyntheticEvent, newValue: string) => {
    setActiveTab(newValue);
    if (newValue === '1') {
      setActiveSubTab('provincias');
    } else {
      setActiveSubTab('empresas-inicio');
    }
  };

  const handleSubTabChange = (event: React.SyntheticEvent, newValue: string) => {
    setActiveSubTab(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={activeTab}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleTabChange} aria-label="Tabs de configuración">
            <Tab icon={<FaArchive />} iconPosition="top" label="ARCHIVO" value="1" />
            <Tab icon={<FaEdit />} iconPosition="top" label="EDITAR" value="2" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <TabContext value={activeSubTab}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider', overflowX: 'auto' }}>
              <TabList onChange={handleSubTabChange} aria-label="Tabs de archivo" variant="scrollable" scrollButtons="auto">
                <Tab icon={<FaCity />} iconPosition="top" label="Provincias" value="provincias" />
                <Tab icon={<FaCity />} iconPosition="top" label="Cantones" value="cantones" />
                <Tab icon={<FaCity />} iconPosition="top" label="Ciudades" value="ciudades" />
                <Tab icon={<FaCalendar />} iconPosition="top" label="Calendario" value="calendario" />
                <Tab icon={<FaDatabase />} iconPosition="top" label="Operaciones BBDD" value="operacionesbbdd" />
                <Tab icon={<FaFileInvoice />} iconPosition="top" label="Comprobantes Fiscales" value="comprobantes" />
                <Tab icon={<FaPrint />} iconPosition="top" label="Estaciones Pos-PV" value="estaciones" />
                <Tab icon={<FaChartLine />} iconPosition="top" label="Auditoría | Control" value="auditoria" />
                <Tab icon={<FaTools />} iconPosition="top" label="Mantenimiento BBDD" value="mantenimiento" />
              </TabList>
            </Box>
            <TabPanel value="provincias"><ProvinciasForm /></TabPanel>
            <TabPanel value="cantones"><CantonesForm /></TabPanel>
            <TabPanel value="ciudades"><CiudadesForm /></TabPanel>
            <TabPanel value="calendario"><Calendario /></TabPanel>
            <TabPanel value="operacionesbbdd"><OperacionesBaseDatos /></TabPanel>
            <TabPanel value="comprobantes"><ComprobantesFiscalesForm /></TabPanel>
            <TabPanel value="estaciones"><EstacionesForm /></TabPanel>
            <TabPanel value="auditoria"><AuditoriaForm /></TabPanel>
            <TabPanel value="mantenimiento"><MantenimientoForm /></TabPanel>
          </TabContext>
        </TabPanel>
        <TabPanel value="2">
          <TabContext value={activeSubTab}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider', overflowX: 'auto' }}>
              <TabList onChange={handleSubTabChange} aria-label="Tabs de editar" variant="scrollable" scrollButtons="auto">
                <Tab icon={<FaBuilding />} iconPosition="top" label="Empresas | Inicio" value="empresas-inicio" />
                <Tab icon={<FaList />} iconPosition="top" label="Parámetros | Documentos" value="parametros-documentos" />
                <Tab icon={<FaRuler />} iconPosition="top" label="Unidades | Medida" value="unidades-medida" />
                <Tab icon={<FaTags />} iconPosition="top" label="Comisiones | Productos" value="comisiones-productos" />
                <Tab icon={<FaCashRegister />} iconPosition="top" label="Tipos de Crédito" value="tipos-credito" />
                <Tab icon={<FaExclamationTriangle />} iconPosition="top" label="Operaciones | Caja Principal" value="operaciones-caja" />
                <Tab icon={<FaExchangeAlt />} iconPosition="top" label="Causas | No Venta" value="causas-no-venta" />
                <Tab icon={<FaExchangeAlt />} iconPosition="top" label="Tasa de Cambio" value="tasa-cambio" />
                <Tab icon={<FaList />} iconPosition="top" label="Conceptos Generales" value="conceptos-generales" />
                <Tab icon={<FaUserShield />} iconPosition="top" label="Seguridad | Perfiles Usuario" value="seguridad-perfiles" />
              </TabList>
            </Box>
            <TabPanel value="empresas-inicio"><EmpresasInicioForm /></TabPanel>
            <TabPanel value="parametros-documentos"><ParametrosDocumentosForm /></TabPanel>
            <TabPanel value="unidades-medida"><UnidadesMedidaForm /></TabPanel>
            <TabPanel value="comisiones-productos"><ComisionesProductos /></TabPanel>
            <TabPanel value="tipos-credito"><TiposCreditoForm/></TabPanel>
            <TabPanel value="operaciones-caja"><OperacionesCajaPrincipalForm/></TabPanel>
            <TabPanel value="causas-no-venta"><CausaNoVentaForm/></TabPanel>
            <TabPanel value="tasa-cambio"><TasaCambioForm/></TabPanel>
            <TabPanel value="conceptos-generales"><ConceptosGeneralesForm /></TabPanel>
            <TabPanel value="seguridad-perfiles"><SeguridadPerfilesUsuariosForm /></TabPanel>
          </TabContext>
        </TabPanel>
      </TabContext>
    </Box>
  );
};
