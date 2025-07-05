import { Box, Tab, Table } from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import React, { useState } from 'react'; 
import { Tablas } from '@/components/admin/tesoreria/Tabla';
import  { botones } from './botones';



export const Chequeras = () => {
    const [value, setValue] = useState('1');
    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue)};


    const campos = [
        { key: "radio", label: "" },
        { key: "id", label: "ID" },
        { key: "nombre", label: "Nombre" },
        { key: "edad", label: "Edad" },
        { key: "correo", label: "Correo" }
    ];
    const datos = [
        { id: 1, nombre: "Juan", edad: 28, correo:"hola@example.com" }
        ];
    

    return (

        <Box >
            <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList aria-label='example' onChange={handleChange}>
                        <Tab label="Tab One" value='1' />
                        <Tab label="Tab Two" value='2' />
                    </TabList>
                </Box>
                <TabPanel value='1'>
                    <div className="grid grid-cols-3 gap-4 p-4">
                        <div>
                            {botones({titulo: "Joso"})}
                        </div>
                        <div className='col-span-2'>
                            <Tablas campos={campos} datos={datos} />
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