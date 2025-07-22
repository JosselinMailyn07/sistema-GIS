import React, { useState } from 'react';
import {
  Button,
  Checkbox,
  FormControlLabel,
  Box,
  Paper,
} from '@mui/material';

const TesoreriaForm = () => {
  const [formData, setFormData] = useState({
    fechaEmisionCobranzas: true,
    exigirAperturaCaja: false,
    aperturaCajaVariosCajeros: false,
    exigirClaveAperturaCaja: false,
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

  const fieldsInsideBox = [
    { label: 'Fecha de emisión Cobranzas', name: 'fechaEmisionCobranzas' },
  ];

  const fieldsOutsideBox = [
    { label: 'Exigir apertura de caja', name: 'exigirAperturaCaja' },
    { label: 'Apertura de caja con varios cajeros', name: 'aperturaCajaVariosCajeros' },
    { label: 'Exigir clave en apertura de caja', name: 'exigirClaveAperturaCaja' },
  ];

  return (
    <Box sx={{ p: 3 }}>
      <Paper elevation={3} sx={{ p: 3 }}>
        <h2>Parámetros Tesorería</h2>
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

        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 2 }}>
          <Box sx={{ flex: 1 }}>
            <Paper variant="outlined" sx={{ p: 2, mb: 2 }}>
              <h3>Permite editar los campos:</h3>
              {fieldsInsideBox.map((field) => (
                <FormControlLabel
                  key={field.name}
                  control={
                    <Checkbox
                      checked={formData[field.name]}
                      onChange={handleCheckboxChange}
                      name={field.name}
                    />
                  }
                  label={field.label}
                  sx={{ display: 'block' }}
                />
              ))}
            </Paper>
          </Box>

          <Box sx={{ flex: 1 }}>
            {fieldsOutsideBox.map((field) => (
              <FormControlLabel
                key={field.name}
                control={
                  <Checkbox
                    checked={formData[field.name]}
                    onChange={handleCheckboxChange}
                    name={field.name}
                  />
                }
                label={field.label}
                sx={{ display: 'block' }}
              />
            ))}
          </Box>
        </Box>

        <Button type="submit" variant="contained" color="primary" sx={{ mt: 3 }}>
          Guardar
        </Button>
      </Paper>
    </Box>
  );
};

export default TesoreriaForm;
