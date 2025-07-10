import React, { useState } from 'react';
import { Box, Button, Checkbox, FormControlLabel, TextField, Typography, Paper } from '@mui/material';
// npm install @mui/x-date-pickers
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
// npm install @mui/x-date-pickers/AdapterDateFns
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// npm install date-fns
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

const mantenimientoForm = () => {
    const [fecha, setFecha] = useState<Date | null>(new Date());
    const [estructuraBD, setEstructuraBD] = useState('GAETANA');
    const [generarApertura, setGenerarApertura] = useState(false);

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        console.log('Formulario de mantenimiento enviado:', { fecha, estructuraBD, generarApertura });
    };

    return (
        <>
            <div className="grid p-2 mb-4 text-left">
                <h1 className="text-2xl font-bold">Auditoría </h1>
                <Typography variant="body1" gutterBottom>
                    Aquí puedes realizar el mantenimiento de la base de datos.
                </Typography>
            </div>
            <Box display="flex" justifyContent="center">
                <Paper elevation={3} sx={{ padding: 2, margin: 2, maxWidth: 500 }}>
                    <Typography variant="h6" gutterBottom>
                        Mantenimiento Base de Datos
                    </Typography>
                    <form onSubmit={handleSubmit}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: 2 }}>
                            <Button variant="contained" color="primary" type="button">
                                Iniciar
                            </Button>
                            <Button variant="contained" color="secondary" type="button">
                                Cerrar
                            </Button>
                        </Box>

                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={generarApertura}
                                    onChange={(e) => setGenerarApertura(e.target.checked)}
                                />
                            }
                            label="Cambiar estructura BD"
                        />

                        <TextField
                            label="Estructura BD"
                            variant="outlined"
                            fullWidth
                            value={estructuraBD}
                            onChange={(e) => setEstructuraBD(e.target.value)}
                            sx={{ marginBottom: 2 }}
                        />

                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={generarApertura}
                                    onChange={(e) => setGenerarApertura(e.target.checked)}
                                />
                            }
                            label="Generar apertura con fecha"
                        />

                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <DatePicker
                                label="Fecha"
                                value={fecha}
                                onChange={(newValue) => setFecha(newValue)}
                                slotProps={{
                                    textField: { fullWidth: true, sx: { marginBottom: 2 } }
                                }}
                            />
                        </LocalizationProvider>

                        <Typography variant="body1" gutterBottom>
                            Resultados:
                        </Typography>
                        <Box sx={{ border: '1px solid #ccc', minHeight: 100, padding: 1 }}>
                            {/* Aquí puedes mostrar los resultados del mantenimiento */}
                        </Box>
                    </form>
                </Paper>
            </Box>
        </>
    );
};

export default mantenimientoForm;
