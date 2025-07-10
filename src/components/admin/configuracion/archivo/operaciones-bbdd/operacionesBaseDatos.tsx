import React, { useState } from 'react';
import { TextField, Button, Box, FormControl, InputLabel, Select, MenuItem, Checkbox, FormControlLabel, Paper } from '@mui/material';

export const OperacionesBaseDatos = () => {
  const [formData, setFormData] = useState({
    servidor: '',
    autenticacion: 'windows',
    login: '',
    password: '',
    baseDatos: '',
    archivoRespaldo: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Aquí puedes manejar la lógica para conectar o restaurar la base de datos
    console.log('Formulario enviado:', formData);
  };

  return (
    <>
     <div className="grid p-2 mb-4 text-left"> 
            <h1 className="text-2xl font-bold">Gis Backup - Restore</h1>
            <p className="text-sm text-gray-600">Realiza respaldos y restauraciones de bases de datos.</p>
          </div>
    <Box display="flex" justifyContent="center">
      <Paper elevation={3} sx={{ padding: 2, margin: 2, maxWidth: 500 }}>
        <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <TextField
            label="Servidor"
            variant="outlined"
            fullWidth
            name="servidor"
            value={formData.servidor}
            onChange={handleChange}
          />

          <FormControl component="fieldset">
            <FormControlLabel
              control={
                <Checkbox
                  checked={formData.autenticacion === 'windows'}
                  onChange={() => setFormData(prev => ({ ...prev, autenticacion: 'windows' }))}
                  name="autenticacion"
                />
              }
              label="Usar Autenticación Windows NT"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={formData.autenticacion === 'sql'}
                  onChange={() => setFormData(prev => ({ ...prev, autenticacion: 'sql' }))}
                  name="autenticacion"
                />
              }
              label="Usar Autenticación SQL Server"
            />
          </FormControl>

          <TextField
            label="Login"
            variant="outlined"
            fullWidth
            name="login"
            value={formData.login}
            onChange={handleChange}
          />
          <TextField
            label="Password"
            variant="outlined"
            type="password"
            fullWidth
            name="password"
            value={formData.password}
            onChange={handleChange}
          />

          <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: 2 }}>
            <Button variant="contained" color="primary" type="button">
              Conectar
            </Button>
            <Button variant="contained" color="secondary" type="button">
              Desconectar
            </Button>
          </Box>

          <FormControl fullWidth>
            <InputLabel>Base de Datos a Respaldo/Restaurar</InputLabel>
            <Select
              name="baseDatos"
              value={formData.baseDatos}
              onChange={handleChange}
            >
              <MenuItem value="">
                <em>Seleccionar</em>
              </MenuItem>
              {/* Aquí puedes agregar opciones dinámicamente desde la base de datos */}
            </Select>
          </FormControl>

          <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: 2 , marginBottom: 2 }}>
            <Button variant="contained" color="primary" type="button">
              Examinar
            </Button>
            <Button variant="contained" color="primary" type="button">
              Respaldo
            </Button>
            <Button variant="contained" color="primary" type="button">
              Restaurar
            </Button>
          </Box>
        </Box>
      </Paper>
    </Box>
    </>
  );
};
