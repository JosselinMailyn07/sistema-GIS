import React, { useState } from 'react';
import {
  FcAddDatabase, FcPackage, FcServices, FcEditImage,
  FcDocument, FcMoneyTransfer, FcBusinessman, FcSurvey,
  FcSalesPerformance, FcCalendar, FcSettings, FcInfo, FcDepartment, FcBusiness, FcGlobe, FcLike, FcSupport
} from 'react-icons/fc';
import { Button } from '@/components/ui/button';

const SubMenuButton = ({ icon: Icon, label, onClick }) => (
  <Button
    variant="ghost"
    className="flex-1 min-w-[120px] px-2 py-1 h-auto hover:bg-blue-50"
    onClick={onClick}
  >
    <div className="flex flex-col items-center justify-center gap-1">
      <Icon size={16} />
      <span className="text-xs whitespace-nowrap">{label}</span>
    </div>
  </Button>
);

export const ConfiguracionSubHeader = () => {
  const [showArchivoSubMenu, setShowArchivoSubMenu] = useState(false);
  const [showEditarSubMenu, setShowEditarSubMenu] = useState(false);

  const toggleArchivoSubMenu = () => {
    setShowArchivoSubMenu(!showArchivoSubMenu);
    setShowEditarSubMenu(false);
  };

  const toggleEditarSubMenu = () => {
    setShowEditarSubMenu(!showEditarSubMenu);
    setShowArchivoSubMenu(false);
  };

  return (
    <div className="bg-white border-b border-gray-200 p-4 mb-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-gray-800">Configuración</h2>
      </div>

      <div className="flex flex-wrap items-center gap-2">
        <SubMenuButton icon={FcSurvey} label="Archivo" onClick={toggleArchivoSubMenu} />
        <SubMenuButton icon={FcEditImage} label="Editar" onClick={toggleEditarSubMenu} />
      </div>
      <br />

      {showArchivoSubMenu && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
          <SubMenuButton icon={FcDepartment} label="Provincias" onClick={() => {}} />
          <SubMenuButton icon={FcDepartment} label="Cantones" onClick={() => {}} />
          <SubMenuButton icon={FcDepartment} label="Ciudades" onClick={() => {}} />
          <SubMenuButton icon={FcDocument} label="Factura" onClick={() => {}} />
          <SubMenuButton icon={FcCalendar} label="Calendario" onClick={() => {}} />
          <SubMenuButton icon={FcBusinessman} label="Operaciones Base de Datos" onClick={() => {}} />
          <SubMenuButton icon={FcSurvey} label="Comprobantes Fiscales" onClick={() => {}} />
          <SubMenuButton icon={FcPackage} label="Estaciones Pos-PV" onClick={() => {}} />
          <SubMenuButton icon={FcDocument} label="Auditoría | Control" onClick={() => {}} />
          <SubMenuButton icon={FcBusinessman} label="Mantenimiento BBDD" onClick={() => {}} />
        </div>
      )}

      {showEditarSubMenu && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
          <SubMenuButton icon={FcBusiness} label="Empresas | Inicio" onClick={() => {}} />
          <SubMenuButton icon={FcSupport} label="Parámetros | Documentos" onClick={() => {}} />
          <SubMenuButton icon={FcCalendar} label="Unidades | Medida" onClick={() => {}} />
          <SubMenuButton icon={FcBusinessman} label="Comisiones | Productos" onClick={() => {}} />
          <SubMenuButton icon={FcSurvey} label="Tipos de Crédito" onClick={() => {}} />
          <SubMenuButton icon={FcSalesPerformance} label="Operaciones | Caja Principal" onClick={() => {}} />
          <SubMenuButton icon={FcSalesPerformance} label="Causas | No Venta" onClick={() => {}} />
          <SubMenuButton icon={FcSalesPerformance} label="Tasa de Cambio" onClick={() => {}} />
          <SubMenuButton icon={FcSalesPerformance} label="Conceptos Generales" onClick={() => {}} />
          <SubMenuButton icon={FcSalesPerformance} label="Seguridad | Perfiles Usuario" onClick={() => {}} />
        </div>
      )}
    </div>
  );
};
