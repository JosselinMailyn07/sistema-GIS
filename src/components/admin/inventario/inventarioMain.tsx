import { Box, Tab } from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import React, { useState } from 'react';
import { Landmark } from 'lucide-react';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';

import { botones } from '../../layout/botones';
import { Tablas } from '@/components/layout/Tabla';



export const InventarioMain = () => {

  const [value, setValue] = useState('1');
      const handleChange = (event: React.SyntheticEvent, newValue: string) => {
          setValue(newValue)
      };

  const campos = [
        { key: "radio", label: "" },
        { key: "id", label: "ID" },
        { key: "nombre", label: "Nombre" },
        { key: "edad", label: "Edad" },
        { key: "correo", label: "Correo" }
    ];

  const datos = [
        { id: 1, nombre: "Juan", edad: 28, correo: "hola@example.com" },
        { id: 2, nombre: "byran", edad: 28, correo: "hola@example.com" },
        { id: 3, nombre: "Jusdadan", edad: 28, correo: "hola@ejemplo.com" },
        { id: 4, nombre: "britani", edad: 28, correo: "hola@example.com" },
        { id: 5, nombre: "jose", edad: 28, correo: "hola@example.com" },
        { id: 6, nombre: "carlos", edad: 28, correo: "hola@ejemplo.com" }
    ];

  const [searchTerm, setSearchTerm] = useState('');
      const filteredBancos = datos.filter(datos =>
          datos.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
          datos.id.toString().includes(searchTerm)
      );

  return (
    <Box>
        <TabContext value={value}>
          <Box>
            <TabList aria-label='example' onChange={handleChange}>
                <Tab icon={<Landmark />} label="Recepciones de Bodegas" value='1' />
                <Tab icon={<LibraryBooksIcon />} label="Movimientos Productos" value='2' />
                <Tab icon={<LibraryBooksIcon />} label="Transferencias de Bodegas" value='3' />
                <Tab icon={<LibraryBooksIcon />} label="Guias de Remision" value='4' />
                <Tab icon={<LibraryBooksIcon />} label="Devoluciones por Lotes" value='5' />
                <Tab icon={<LibraryBooksIcon />} label="Inventario Inicial/Final" value='6' />
                <Tab icon={<LibraryBooksIcon />} label="Grupos de Productos" value='7' />
                <Tab icon={<LibraryBooksIcon />} label="Bodega" value='8' />
            </TabList>  
          </Box>
          <TabPanel value='1'>
              <div>
                {botones({ titulo: "Recepciones de Bodegas", onSearch: setSearchTerm })}
              </div>        
              <div className='col-span-2 p-5 border rounded shadow-xl'>
                  <Tablas campos={campos} datos={filteredBancos} />
              </div>
          </TabPanel>
          <TabPanel value='2'>
              <div>
                {botones({ titulo: "Movimientos Productos", onSearch: setSearchTerm })}
              </div>   
              <div className='col-span-2 p-5 border rounded shadow-xl'>
                  <Tablas campos={campos} datos={filteredBancos} />
              </div>     
          </TabPanel>
          <TabPanel value='3'>
              <div>
                {botones({ titulo: "Transferencias de Bodegas", onSearch: setSearchTerm })}
              </div>  
              <div className='col-span-2 p-5 border rounded shadow-xl'>
                  <Tablas campos={campos} datos={filteredBancos} />
              </div>      
          </TabPanel>
          <TabPanel value='4'>
              <div>
                {botones({ titulo: "Guias de Remision", onSearch: setSearchTerm })}
              </div>  
              <div className='col-span-2 p-5 border rounded shadow-xl'>
                  <Tablas campos={campos} datos={filteredBancos} />
              </div>      
          </TabPanel>
          <TabPanel value='5'>
              <div>
                {botones({ titulo: "Devoluciones por Lotes", onSearch: setSearchTerm })}
              </div>  
              <div className='col-span-2 p-5 border rounded shadow-xl'>
                  <Tablas campos={campos} datos={filteredBancos} />
              </div>      
          </TabPanel>
          <TabPanel value='6'>
              <div>
                {botones({ titulo: "Inventario Inicial/Final", onSearch: setSearchTerm })}
              </div>  
              <div className='col-span-2 p-5 border rounded shadow-xl'>
                  <Tablas campos={campos} datos={filteredBancos} />
              </div>      
          </TabPanel>
          <TabPanel value='7'>
              <div>
                {botones({ titulo: "Grupos de Productos", onSearch: setSearchTerm })}
              </div>  
              <div className='col-span-2 p-5 border rounded shadow-xl'>
                  <Tablas campos={campos} datos={filteredBancos} />
              </div>      
          </TabPanel>
          <TabPanel value='8'>
              <div>
                {botones({ titulo: "Bodega", onSearch: setSearchTerm })}
              </div>  
              <div className='col-span-2 p-5 border rounded shadow-xl'>
                  <Tablas campos={campos} datos={filteredBancos} />
              </div>      
          </TabPanel>
        </TabContext>
    </Box>
  );
};