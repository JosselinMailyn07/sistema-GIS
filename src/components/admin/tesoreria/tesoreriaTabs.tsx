import { Box, Tab, Table } from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import React, { useState } from 'react';
import { Tablas } from '@/components/admin/tesoreria/Tabla';
import { botones } from './botones';
import { Banknote, Landmark, PiggyBank } from 'lucide-react';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';



export const Tesoreria = () => {
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
        { id: 2, nombre: "Juan", edad: 28, correo: "hola@example.com" },
        { id: 3, nombre: "Juan", edad: 28, correo: "hola@ejemplo.com" },

    ];


    return (

        <Box >
            <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList aria-label='example' onChange={handleChange}>
                        <Tab icon={<Landmark />} label="Bancos" value='1' />
                        <Tab icon={<LibraryBooksIcon/>} label="Chequeras" value='2' />
                    </TabList>
                </Box>
                <TabPanel value='1'>
                    <div className="grid grid-cols-3 gap-4 p-4">
                        <div>
                            {botones({ titulo: "Joso" })}
                        </div>
                        <div className='col-span-2'>
                            <Tablas campos={campos} datos={datos}  />
                        </div>
                    </div>

                </TabPanel>
                <TabPanel value='2'>
                    hola 2
                </TabPanel>
            </TabContext>
        </Box>
    );
};