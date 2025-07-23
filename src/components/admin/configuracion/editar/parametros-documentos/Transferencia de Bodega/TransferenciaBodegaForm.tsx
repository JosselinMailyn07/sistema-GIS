import React, { useState } from 'react';
import {
  Button,
  Checkbox,
  FormControlLabel,
  Box,
  Paper,
} from '@mui/material';

const TransferenciaBodegaForm = () => {
  const [formData, setFormData] = useState({
    imprimirTransferencias: false,
  });

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: checked,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Datos del formulario:', formData);
  };

  return (
    <Box sx={{ p: 3 }}>
      <Paper elevation={3} sx={{ p: 3 }}>
        <h2>Parámetros Transferencia de Bodega</h2>
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

        <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
          <FormControlLabel
            control={
              <Checkbox
                checked={formData.imprimirTransferencias}
                onChange={handleCheckboxChange}
                name="imprimirTransferencias"
              />
            }
            label="Imprimir Transferencias"
          />
        </Box>

        <Button type="submit" variant="contained" color="primary" sx={{ mt: 3 }}>
          Guardar
        </Button>
      </Paper>
    </Box>
  );
};

export default TransferenciaBodegaForm;
