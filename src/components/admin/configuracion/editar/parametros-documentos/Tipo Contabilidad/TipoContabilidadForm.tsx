import React, { useState } from 'react';
import {
  Button,
  Box,
  Paper,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Typography
} from '@mui/material';

const TipoContabilidadForm = () => {
  const [contabilidad, setContabilidad] = useState('');

  const handleChange = (event) => {
    setContabilidad(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Tipo de contabilidad seleccionado:', contabilidad);
  };

  return (
    <Box sx={{ p: 3 }}>
      <Paper elevation={3} sx={{ p: 3 }}>
        <Typography variant="h4" gutterBottom>
          Parámetros Contabilidad
        </Typography>
        <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
          <Button variant="contained" sx={{ '&:hover': { backgroundColor: 'grey.500' } }}>
            Actualizar
          </Button>
          <Button variant="contained" sx={{ '&:hover': { backgroundColor: 'grey.500' } }}>
            Renovar
          </Button>
          <Button variant="contained" sx={{ '&:hover': { backgroundColor: 'grey.500' } }}>
            Cerrar
          </Button>
        </Box>

        <form onSubmit={handleSubmit}>
          <FormControl fullWidth sx={{ mt: 2 }}>
            <InputLabel id="contabilidad-label">Contabilidad</InputLabel>
            <Select
              labelId="contabilidad-label"
              id="contabilidad"
              value={contabilidad}
              label="Contabilidad"
              onChange={handleChange}
            >
              <MenuItem value="Manual">Manual</MenuItem>
              <MenuItem value="Automática">Automática</MenuItem>
            </Select>
          </FormControl>

          <Button type="submit" variant="contained" color="primary" sx={{ mt: 3 }}>
            Guardar
          </Button>
        </form>
      </Paper>
    </Box>
  );
};

export default TipoContabilidadForm;
