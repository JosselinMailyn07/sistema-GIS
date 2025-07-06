import { Box, Tab } from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import React, { useState } from 'react';
import { Tablas } from '@/components/layout/Tabla';
import { botones } from '../../layout/botones';
import { Landmark } from 'lucide-react';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';


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
        { id: 2, nombre: "Juan", edad: 28, correo: "hola@example.com" },
        { id: 3, nombre: "Juan", edad: 28, correo: "hola@ejemplo.com" }
    ];

    const [value, setValue] = useState('1');
    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue)
    };
    const [searchTerm, setSearchTerm] = useState('');
    const filteredBancos = datos.filter(datos =>
        datos.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
        datos.id.toString().includes(searchTerm)
    );


    return (
        <Box >
            <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList aria-label='example' onChange={handleChange}>
                        <Tab icon={<Landmark />} label="Bancos" value='1' />
                        <Tab icon={<LibraryBooksIcon />} label="Chequeras" value='2' />
                    </TabList>
                </Box>
                <TabPanel value='1'>
                    <div className="grid grid-cols-2 gap-4 p-4">
                        <div>
                            {botones({ titulo: "Bancos", onSearch: setSearchTerm })}

                        </div>
                        <div className='col-span-2 p-5 border rounded shadow-xl'>
                            <Tablas campos={campos} datos={datos} />
                        </div>
                    </div>
                </TabPanel>
                <TabPanel value='2'>
                    <div className="grid grid-cols-2 gap-4 p-4">
                        <div>
                            {botones({ titulo: "Chequeras", onSearch: setSearchTerm })}
                        </div>
                        <div className='col-span-2 p-5 border rounded shadow-xl'>
                            <Tablas campos={campos} datos={datos} />
                        </div>
                    </div>
                </TabPanel>
            </TabContext>
        </Box>
    );
};