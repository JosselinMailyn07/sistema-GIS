import { Box, Tab } from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import React, { useState } from 'react';
import { Landmark } from 'lucide-react';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';

/* Paginas */
import { RecepcionesBodegas } from './recepcionesBodegas/recepcionesBodegas' ;
import { MovimientosProductos } from './movimientosProductos/movimientosProductos';
import { TransferenciasBodegas } from './transferenciasBodegas/transferenciasBodegas';
import { GuiasRemision } from './guiasRemision/guiasRemision';
import { DevolucionesLote } from './devolucionesLote/devolucionesLote';
import { InventarioInicialFinal } from './inventarioInicialFinal/inventarioInicialFinal';
import { GruposProductos } from './gruposProductos/gruposProductos';
import { Bodega } from './bodega/bodega';

/* Iconos */
import InventoryIcon from '@mui/icons-material/Inventory';
import MoveUpIcon from '@mui/icons-material/MoveUp';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import UndoIcon from '@mui/icons-material/Undo';
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';
import CategoryIcon from '@mui/icons-material/Category';
import StoreIcon from '@mui/icons-material/Store';



export const InventarioMain = () => {

  const [value, setValue] = useState('1');
      const handleTabChange = (event: React.SyntheticEvent, newValue: string) => {
          setValue(newValue)
      };

  return (
    <Box>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider', overflowX: 'auto' }}>
            <TabList aria-label='' variant="scrollable" scrollButtons="auto" onChange={handleTabChange}>
                <Tab icon={<InventoryIcon />} label="Recepciones de Bodegas" value="1" />
                <Tab icon={<MoveUpIcon />} label="Movimientos Productos" value="2" />
                <Tab icon={<SwapHorizIcon />} label="Transferencias de Bodegas" value="3" />
                <Tab icon={<LocalShippingIcon />} label="Guias de Remision" value="4" />
                <Tab icon={<UndoIcon />} label="Devoluciones por Lotes" value="5" />
                <Tab icon={<PlaylistAddCheckIcon />} label="Inventario Inicial/Final" value="6" />
                <Tab icon={<CategoryIcon />} label="Grupos de Productos" value="7" />
                <Tab icon={<StoreIcon />} label="Bodega" value="8" />
            </TabList>  
          </Box>
          <TabPanel value='1'>
              <RecepcionesBodegas />
          </TabPanel>
          <TabPanel value='2'>
              <MovimientosProductos />  
          </TabPanel>
          <TabPanel value='3'>
              <TransferenciasBodegas /> 
          </TabPanel>
          <TabPanel value='4'>
              <GuiasRemision/> 
          </TabPanel>
          <TabPanel value='5'>
              <DevolucionesLote />   
          </TabPanel>
          <TabPanel value='6'>
              <InventarioInicialFinal />
          </TabPanel>
          <TabPanel value='7'>
              <GruposProductos />    
          </TabPanel>
          <TabPanel value='8'>
              <Bodega />     
          </TabPanel>
        </TabContext>
    </Box>
  );
};