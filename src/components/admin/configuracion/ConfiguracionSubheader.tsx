// components/admin/configuracion/ConfiguracionSubHeader.tsx
import React, { useState } from 'react';
import * as Tabs from '@radix-ui/react-tabs';
import { ProvinciasForm } from './archivo/provincias/provincias';
import { CantonesForm } from './archivo/cantones/cantones';
import { CiudadesForm } from './archivo/ciudades/ciudades';
import  Calendario  from './archivo/calendario/calendario';



// Define los contenidos de las pestañas
// Cada contenido es un componente diferente que contiene formularios o información específica
const ProvinciasContent = () => <div> <ProvinciasForm /></div>;
const CantonesContent = () => <div> <CantonesForm/> </div>;
const CiudadesContent = () => <div> <CiudadesForm/> </div>;
const CalendarioContent = () => <div><Calendario /></div>;
const OperacionesBBDDContent = () => <div></div>;
const ComprobantesFiscalesContent = () => <div></div>;
const EstacionesPosPVContent = () => <div></div>;
const AuditoriaControlContent = () => <div></div>;
const MantenimientoBBDDContent = () => <div></div>;

// Define el tipo de las pestañas
// Cada pestaña tiene una etiqueta y un contenido asociado
type TabItem = { label: string; content: React.ReactNode };

const RadixTabs: React.FC<{ tabs: TabItem[] }> = ({ tabs }) => {
  const [value, setValue] = useState(tabs[0]?.label || '');
  return (
    <Tabs.Root value={value} onValueChange={setValue}>
      <Tabs.List className="flex border-b mb-2">
        {tabs.map(tab => (
          <Tabs.Trigger
            key={tab.label}
            value={tab.label}
            className={`px-4 py-2 text-sm font-medium ${
              value === tab.label
                ? 'text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            {tab.label}
          </Tabs.Trigger>
        ))}
      </Tabs.List>
      {tabs.map(tab => (
        <Tabs.Content key={tab.label} value={tab.label} className="p-2">
          {tab.content}
        </Tabs.Content>
      ))}
    </Tabs.Root>
  );
};

// Componente principal que contiene los botones de navegación y las pestañas
// Permite alternar entre las pestañas de "Archivo" y "Editar"
export const ConfiguracionSubHeader = () => {

  // Define las pestañas para la sección de "Archivo"
  // Cada pestaña tiene una etiqueta y un contenido asociado
  // Cada contenido es un formulario específico. 
  // Este formulario está hecho en la carpeta correspondiente y aquí solo se importa.
  // Por ejemplo, ProvinciasForm es un formulario para gestionar provincias.
  const archivoTabs = [
    { label: 'Provincias', content: <ProvinciasContent /> },
    { label: 'Cantones', content: <CantonesContent /> },
    { label: 'Ciudades', content: <CiudadesContent /> },
    { label: 'Calendario', content: <CalendarioContent /> },
    { label: 'Operaciones BBDD', content: <OperacionesBBDDContent /> },
    { label: 'Comprobantes Fiscales', content: <ComprobantesFiscalesContent /> },
    { label: 'Estaciones Pos-PV', content: <EstacionesPosPVContent /> },
    { label: 'Auditoría | Control', content: <AuditoriaControlContent /> },
    { label: 'Mantenimiento BBDD', content: <MantenimientoBBDDContent /> },
  ];

  // Lo mismo para la sección de "Editar"
  const editarTabs = [
    { label: 'Empresas | Inicio', content: <div>Aqui debe aparecer el formulario de empresas</div> },
    { label: 'Parámetros | Documentos', content: <div>Aqui debe aparecer el formulario de Parámetros | Documentos</div> },
    { label: 'Unidades | Medida', content: <div>Aqui debe aparecer el formulario de Unidades | Medida</div> },
    { label: 'Comisiones | Productos', content: <div>Aqui debe aparecer el formulario de Comisiones | Productos</div> },
    { label: 'Tipos de Crédito', content: <div>Aqui debe aparecer el formulario deTipos de Crédito</div> },
    { label: 'Operaciones | Caja Principal', content: <div>aca Operaciones | Caja Principal</div> },
    { label: 'Causas | No Venta', content: <div>aca de Causas | No Venta</div> },
    { label: 'Tasa de Cambio', content: <div>aca de Tasa de Cambio</div> },
    { label: 'Conceptos Generales', content: <div>aca de Conceptos Generales</div> },
    { label: 'Seguridad | Perfiles Usuario', content: <div>y aca de Seguridad | Perfiles Usuario</div> },
  ];

  const [activeMenu, setActiveMenu] = useState<'archivo' | 'editar' | null>(null);

  return (
    <div className="bg-white border-b border-gray-200 p-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-gray-800">Configuración</h2>
      </div>
      <br /> 
      <div className="flex space-x-4 mb-4">
        <button
          className= {`px-4 py-2 text-sm font-medium  ${activeMenu === 'archivo' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
          onClick={() => setActiveMenu('archivo')} 
        >
          
          ARCHIVO
        </button>
        <button
          className={`px-4 py-2 text-sm font-medium ${activeMenu === 'editar' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
          onClick={() => setActiveMenu('editar')} 
        >
          EDITAR
        </button>
      </div>
      {activeMenu === 'archivo' && <RadixTabs tabs={archivoTabs} />}
      {activeMenu === 'editar' && <RadixTabs tabs={editarTabs} />}
    </div>
  );
};
