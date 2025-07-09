import React, { useState } from 'react';
import { Box, Tab } from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { FaArchive, FaEdit, FaCity, FaCalendar, FaDatabase, FaFileInvoice, FaPrint, FaChartLine, FaTools, FaBuilding, FaRuler, FaTags, FaCashRegister, FaExclamationTriangle, FaExchangeAlt, FaList, FaUserShield } from 'react-icons/fa';
import { ProvinciasForm } from './archivo/provincias/provincias';
import { CantonesForm } from './archivo/cantones/cantones';
import { CiudadesForm } from './archivo/ciudades/ciudades';
import { AuditoriaForm } from './archivo/auditoria-control/auditoria-control';
import { ComprobantesFiscalesForm } from './archivo/comprobantes-fiscales/comprobantesFiscales';
import Calendario from './archivo/calendario/calendario';
import { OperacionesBaseDatos } from './archivo/operaciones-bbdd/operacionesBaseDatos';
import  EstacionesForm  from './archivo/estaciones-pos-pv/estacionesPosPv';
import  MantenimientoForm  from './archivo/mantenimiento-bbdd/mantenimientoBaseDatos';


export const ConfiguracionSubHeader = () => {
  const [activeTab, setActiveTab] = useState('1');
  const [activeSubTab, setActiveSubTab] = useState('1-1');

  const handleTabChange = (event: React.SyntheticEvent, newValue: string) => {
    setActiveTab(newValue);
    setActiveSubTab(`${newValue}-1`);
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
            {/*En esta seccion redireccionamos las  */}
            <TabPanel value="provincias"><ProvinciasForm /></TabPanel>
            <TabPanel value="cantones"><CantonesForm /></TabPanel>
            <TabPanel value="ciudades"><CiudadesForm /></TabPanel>
            <TabPanel value="calendario"><Calendario/></TabPanel>
            <TabPanel value="operacionesbbdd"><OperacionesBaseDatos/>  </TabPanel>
            <TabPanel value="comprobantes"><ComprobantesFiscalesForm /></TabPanel>
            <TabPanel value="estaciones"><EstacionesForm/></TabPanel>
            <TabPanel value="auditoria"><AuditoriaForm /></TabPanel>
            <TabPanel value="mantenimiento"><MantenimientoForm /></TabPanel>
          </TabContext>
        </TabPanel>
        <TabPanel value="2">
          <Box sx={{ borderBottom: 1, borderColor: 'divider', overflowX: 'auto' }}>
            <TabList onChange={handleSubTabChange} aria-label="Tabs de editar" variant="scrollable" scrollButtons="auto">
              <Tab icon={<FaBuilding />} iconPosition="top" label="Empresas | Inicio" value="2-1" />
              <Tab icon={<FaList />} iconPosition="top" label="Parámetros | Documentos" value="2-2" />
              <Tab icon={<FaRuler />} iconPosition="top" label="Unidades | Medida" value="2-3" />
              <Tab icon={<FaTags />} iconPosition="top" label="Comisiones | Productos" value="2-4" />
              <Tab icon={<FaCashRegister />} iconPosition="top" label="Tipos de Crédito" value="2-5" />
              <Tab icon={<FaExclamationTriangle />} iconPosition="top" label="Operaciones | Caja Principal" value="2-6" />
              <Tab icon={<FaExchangeAlt />} iconPosition="top" label="Causas | No Venta" value="2-7" />
              <Tab icon={<FaExchangeAlt />} iconPosition="top" label="Tasa de Cambio" value="2-8" />
              <Tab icon={<FaList />} iconPosition="top" label="Conceptos Generales" value="2-9" />
              <Tab icon={<FaUserShield />} iconPosition="top" label="Seguridad | Perfiles Usuario" value="2-10" />
            </TabList>
          </Box>
          <TabPanel value="2-1"><p>Contenido de Empresas | Inicio</p></TabPanel>
          <TabPanel value="2-2"><p>Contenido de Parámetros | Documentos</p></TabPanel>
          <TabPanel value="2-3"><p>Contenido de Unidades | Medida</p></TabPanel>
          <TabPanel value="2-4"><p>Contenido de Comisiones | Productos</p></TabPanel>
          <TabPanel value="2-5"><p>Contenido de Tipos de Crédito</p></TabPanel>
          <TabPanel value="2-6"><p>Contenido de Operaciones | Caja Principal</p></TabPanel>
          <TabPanel value="2-7"><p>Contenido de Causas | No Venta</p></TabPanel>
          <TabPanel value="2-8"><p>Contenido de Tasa de Cambio</p></TabPanel>
          <TabPanel value="2-9"><p>Contenido de Conceptos Generales</p></TabPanel>
          <TabPanel value="2-10"><p>Contenido de Seguridad | Perfiles Usuario</p></TabPanel>
        </TabPanel>
      </TabContext>
    </Box>
  );
};