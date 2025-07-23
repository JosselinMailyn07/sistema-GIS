import React, { useState } from 'react';
import {
  Button,
  Checkbox,
  FormControlLabel,
  TextField,
  Box,
  Paper,
  Typography,
} from '@mui/material';

const SistemaForm = () => {
  const [formData, setFormData] = useState({
    pais: 'Ecuador',
    activarGisReporteRM: false,
    activarOperaciones: false,
    activarProduccion: false,
    numRegistrosPorPagina: '',
    siglasMoneda: '', // Campo para las siglas de la moneda
  });

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: checked,
    }));
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Datos del formulario:', formData);
  };

  return (
    <Box sx={{ p: 3 }}>
      <Paper elevation={3} sx={{ p: 3 }}>
        <Typography variant="h4" gutterBottom>
          Parámetros Sistema
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
          <Box sx={{ mb: 2 }}>
            <TextField
              label="País"
              variant="outlined"
              fullWidth
              name="pais"
              value={formData.pais}
              onChange={handleInputChange}
              disabled
            />
          </Box>

          <FormControlLabel
            control={
              <Checkbox
                checked={formData.activarGisReporteRM}
                onChange={handleCheckboxChange}
                name="activarGisReporteRM"
              />
            }
            label="Activar Gis Reporte RM"
          />

          <FormControlLabel
            control={
              <Checkbox
                checked={formData.activarOperaciones}
                onChange={handleCheckboxChange}
                name="activarOperaciones"
              />
            }
            label="Activar Operaciones"
          />

          <FormControlLabel
            control={
              <Checkbox
                checked={formData.activarProduccion}
                onChange={handleCheckboxChange}
                name="activarProduccion"
              />
            }
            label="Activar Producción"
          />

          <Box sx={{ mt: 2 }}>
            <TextField
              label="Núm. de Registros x Página"
              variant="outlined"
              type="number"
              name="numRegistrosPorPagina"
              value={formData.numRegistrosPorPagina}
              onChange={handleInputChange}
              sx={{ mb: 2 }}
            />
          </Box>

          <Box sx={{ mt: 2 }}>
            <TextField
              label="Siglas Moneda"
              variant="outlined"
              name="siglasMoneda"
              value={formData.siglasMoneda}
              onChange={handleInputChange}
            />
          </Box>

          <Button type="submit" variant="contained" color="primary" sx={{ mt: 3 }}>
            Guardar
          </Button>
        </form>
      </Paper>
    </Box>
  );
};

export default SistemaForm;
