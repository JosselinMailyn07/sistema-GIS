import { Box, Tab } from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import React, { useState } from 'react';
import { Tablas } from '@/components/layout/Tabla';
import { botones } from '../../layout/botones';
import { Landmark } from 'lucide-react';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import { Bancos } from './bancos/bancos';
import { Chequeras } from './chequeras/chequeras';
import { MovimientosBanco } from './movimientosBanco/movimientosBanco';
import { CierreCaja } from './cierreCaja/cierreCaja';


export const Tesoreria = () => {
    const campos = [
        { key: "radio", label: "" },
        { key: "id", label: "ID" },
        { key: "nombre", label: "Nombre" },
        { key: "edad", label: "Edad" },
        { key: "correo", label: "Correo" }
    ];
    const datos = [
        { id: 1, nombre: "Juan", edad: 28, correo: "hola@example.com" },
        { id: 2, nombre: "Byron", edad: 28, correo: "hola@example.com" },
        { id: 3, nombre: "Ana", edad: 28, correo: "hola@ejemplo.com" }
    ];


    // Estado para las pestañas
    const [value, setActiveTab] = useState('1');
    const [activeSubTab, setActiveSubTab] = useState('1-1');
    const handleTabChange = (event: React.SyntheticEvent, newValue: string) => {
        setActiveTab(newValue);
        setActiveSubTab(`${newValue}-1`);
    };
    const handleSubTabChange = (event: React.SyntheticEvent, newValue: string) => {
        setActiveSubTab(newValue);
    };



    // Implementación de búsqueda
    const [searchTerm, setSearchTerm] = useState('');
    const filteredBancos = datos.filter(datos =>
        datos.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
        datos.id.toString().includes(searchTerm)
    );


    return (
        <Box >
            <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider', overflowX: 'auto' }}>
                    <TabList aria-label='' variant="scrollable" scrollButtons="auto" onChange={handleTabChange} >
                        <Tab icon={<Landmark />} label="Bancos" value='1' />
                        <Tab icon={<LibraryBooksIcon />} label="Chequeras" value='2' />
                        <Tab icon={<Landmark />} label="Movimientos Bancarios" value='3' />
                        <Tab icon={<LibraryBooksIcon />} label="Conciliaciones Bancarias" value='4' />
                        <Tab icon={<Landmark />} label="Movimientos de Caja Principal" value='5' />
                        <Tab icon={<LibraryBooksIcon />} label="Depositos" value='6' />
                        <Tab icon={<Landmark />} label="Ediciones de Caja" value='7' />
                        <Tab icon={<LibraryBooksIcon />} label="Apertura de Cajas" value='8' />
                        <Tab icon={<Landmark />} label="Cierre de Cajas" value='9' />
                    </TabList>
                </Box>
                <TabPanel value='1'>
                    <Bancos/>
                </TabPanel>
                <TabPanel value='2'>
                    <Chequeras />
                </TabPanel>
                <TabPanel value='3'>
                    <MovimientosBanco />
                </TabPanel>
                <TabPanel value='4'>
                    <div className="grid grid-cols-2 gap-4 p-4">
                        <div>
                            {botones({ titulo: "Conciliaciones Bancarias", onSearch: setSearchTerm })}
                        </div>
                        <div className='col-span-2 p-5 border rounded shadow-xl'>
                            <Tablas campos={campos} datos={datos} />
                        </div>
                    </div>
                </TabPanel>
                <TabPanel value='5'>
                    <div className="grid grid-cols-2 gap-4 p-4">
                        <div>
                            {botones({ titulo: "Movimientos de Caja Principal", onSearch: setSearchTerm })}
                        </div>
                        <div className='col-span-2 p-5 border rounded shadow-xl'>
                            <Tablas campos={campos} datos={datos} />
                        </div>
                    </div>
                </TabPanel>
                <TabPanel value='6'>
                    <div className="grid grid-cols-2 gap-4 p-4">
                        <div>
                            {botones({ titulo: "Depositos", onSearch: setSearchTerm })}
                        </div>
                        <div className='col-span-2 p-5 border rounded shadow-xl'>
                            <Tablas campos={campos} datos={datos} />
                        </div>
                    </div>
                </TabPanel>
                <TabPanel value='7'>
                    <TabContext value={activeSubTab}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider', overflowX: 'auto' }}>
                            <TabList onChange={handleSubTabChange} >
                                <Tab icon={<LibraryBooksIcon />} label="Cajas" value='7-1' />
                                <Tab icon={<Landmark />} label="Cajeros" value='7-2' />
                                <Tab icon={<Landmark />} label="Turnos" value='7-3' />
                            </TabList>
                        </Box>
                        <TabPanel value='7-1'>
                            <div className="grid grid-cols-2 gap-4 p-4">
                                <div>
                                    {botones({ titulo: "Cajas", onSearch: setSearchTerm })}
                                </div>
                                <div className='col-span-2 p-5 border rounded shadow-xl'>
                                    <Tablas campos={campos} datos={datos} />
                                </div>
                            </div>
                        </TabPanel>
                        <TabPanel value='7-2'>
                            <div className="grid grid-cols-2 gap-4 p-4">
                                <div>
                                    {botones({ titulo: "Cajeros", onSearch: setSearchTerm })}
                                </div>
                                <div className='col-span-2 p-5 border rounded shadow-xl'>
                                    <Tablas campos={campos} datos={datos} />
                                </div>
                            </div>
                        </TabPanel>
                        <TabPanel value='7-3'>
                            <div className="grid grid-cols-2 gap-4 p-4">
                                <div>
                                    {botones({ titulo: "Turnos", onSearch: setSearchTerm })}
                                </div>
                                <div className='col-span-2 p-5 border rounded shadow-xl'>
                                    <Tablas campos={campos} datos={datos} />
                                </div>
                            </div>
                        </TabPanel>
                    </TabContext>
                </TabPanel>
                <TabPanel value='8'>
                    <div className="grid grid-cols-2 gap-4 p-4">
                        <div>
                            {botones({ titulo: "Apertura de Cajas", onSearch: setSearchTerm })}
                        </div>
                        <div className='col-span-2 p-5 border rounded shadow-xl'>
                            <Tablas campos={campos} datos={datos} />
                        </div>
                    </div>
                </TabPanel>
                <TabPanel value='9'>
                    <div className="max-w-1/3">
                    <CierreCaja />
                    </div>
                </TabPanel>
            </TabContext>
        </Box>
    );
};