import { Box, MenuItem, SelectChangeEvent, TextField, Paper, Button } from '@mui/material';


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
                <Paper sx={{ padding: 2, margin: 2 }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
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
                        />


                        <div className='px-4 py-2 flex justify-center rounded text-white bg-primary' >
                            <button type='submit'>Cerrar Caja</button>
                        </div>
                    </Box>
                </Paper>
            </Box>
        </>
    );
}