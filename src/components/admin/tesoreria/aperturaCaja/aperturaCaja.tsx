import { Box, Button, Paper, TextField, MenuItem } from '@mui/material';

export const AbreCaja = () => {
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
        <Box display="flex" justifyContent="center">
            <Paper elevation={3} sx={{ padding: 2, margin: 2, maxWidth: 500 }}>
                <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <TextField
                        id="outlined-select-currency"
                        select
                        label="Caja"
                        defaultValue=""
                        helperText="Selecciona la caja a abrir"
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
                        helperText="Selecciona el turno deseado"
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
                        label="Saldo Inicial"
                        variant="outlined"
                        type="number"
                        inputMode='numeric'
                        inputProps={{ step: 0.01 }}
                        placeholder="0.00"
                        fullWidth
                    />


                        <div className='px-4 py-2 flex justify-center rounded text-white bg-primary' >
                            <button type='submit'>Abrir Caja</button>
                        </div>
                </Box>
            </Paper>
        </Box>
    );
}