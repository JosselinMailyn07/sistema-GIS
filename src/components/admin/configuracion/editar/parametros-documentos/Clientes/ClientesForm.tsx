// src/components/admin/configuracion/clientes/ClientesForm.tsx
import React, { useState } from 'react';
import { Button, TextField, Box, Paper } from '@mui/material';

const ClientesForm = () => {
  const [cliente, setCliente] = useState({
    identificador: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCliente(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes manejar la lógica para enviar los datos del formulario
    console.log('Identificador del cliente:', cliente.identificador);
  };

  return (
    <Box sx={{ p: 3 }}>
      <Paper elevation={3} sx={{ p: 3 }}>
        <h2>Parámetros Cliente</h2>
        <form onSubmit={handleSubmit}>
          <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: 'primary.main',
                '&:hover': {
                  backgroundColor: 'grey.500', // Cambia a gris al pasar el mouse
                },
              }}
              type="button"
            >
              Actualizar
            </Button>
            <Button
              variant="contained"
              sx={{
                backgroundColor: 'primary.main',
                '&:hover': {
                  backgroundColor: 'grey.500', // Cambia a gris al pasar el mouse
                },
              }}
              type="button"
            >
              Renovar
            </Button>
            <Button
              variant="contained"
              sx={{
                backgroundColor: 'primary.main',
                '&:hover': {
                  backgroundColor: 'grey.500', // Cambia a gris al pasar el mouse
                },
              }}
              type="button"
            >
              Cerrar
            </Button>
          </Box>
          <TextField
            label="Identificador (CI/RUC/Pasaporte)"
            variant="outlined"
            fullWidth
            margin="normal"
            name="identificador"
            value={cliente.identificador}
            onChange={handleChange}
          />
          <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
            Guardar
          </Button>
        </form>
      </Paper>
    </Box>
  );
};

export default ClientesForm;
