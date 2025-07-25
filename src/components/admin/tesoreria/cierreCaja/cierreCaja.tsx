import { Box,  MenuItem,  SelectChangeEvent, TextField, Paper, Button } from '@mui/material';
import { Link } from "react-router-dom";
import { useState } from 'react';



export const CierreCaja = () => {
    const cajas = [
        { value: '1', label: 'Caja 1' },
        { value: '2', label: 'Caja 2' },
        { value: '3', label: 'Caja 3' },
    ];
    const turnos = [
        { value: '1', label: 'Turno 1' },
        { value: '2', label: 'Turno 2' },
        { value: '3', label: 'Turno 3' },
    ];
    const cajero = [
        { value: '1', label: 'cajero 1' },
        { value: '2', label: 'cajero 2' },
        { value: '3', label: 'cajero 3' },
    ];

    return (
        <>
            <Box display="flex" justifyContent="center">
                <Paper elevation={3} sx={{ padding: 2, margin: 2, maxWidth: 500 }}>
                    <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                        <TextField
                            id="outlined-select-currency"
                            select
                            label="Caja"
                            defaultValue=""
                            helperText="Selecciona la caja a cerrar"
                        >
                            {cajas.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                        <TextField
                            id="outlined-select-currency"
                            select
                            label="Turno"
                            defaultValue=""
                            helperText="Selecciona el turno cumplido"
                        >
                            {turnos.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                        <TextField
                            id="outlined-select-currency"
                            select
                            label="Cajero"
                            defaultValue=""
                            helperText="Selecciona el cajero"
                        >
                            {cajero.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                        <TextField
                            label="Saldo Final"
                            variant="outlined"
                            type="number"
                            inputMode='numeric'
                            inputProps={{ step: 0.01 }}
                            placeholder="0.00"
                            fullWidth
                        />


                        <Box sx={{ display: 'flex', justifyContent: 'space-evenly', marginTop: 2 }}>
                            <Button variant="contained" color="primary" type="submit" sx={{ marginRight: 2 }}>
                                Cerrar Caja
                            </Button>
                            <Button variant="contained" color="primary" type="button">
                                Cancelar
                            </Button>
                        </Box>
                    </Box>
                </Paper>
            </Box>
        </>
    );
}