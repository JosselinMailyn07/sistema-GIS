import React, { useState } from 'react';
import {
  Button,
  Checkbox,
  FormControlLabel,
  TextField,
  Box,
  Paper,
  MenuItem,
  Select,
  InputLabel,
  FormControl
} from '@mui/material';

const RecepcionesForm = () => {
  const [formData, setFormData] = useState({
    fechaEmision: true,
    transportista: true,
    unidad: true,
    iva: true,
    bultos: true,
    precio: true,
    descuento: true,
    totalRenglon: true,
    activarDescuentoGlobal: true,
    detenerseCampoCantidad: true,
    renglonesRepetidos: true,
    permitirItemsNoRegistrados: true,
    activarAprobacion: true,
    impresion: 'Imprimir',
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

  const fieldsInsideBox = [
    { label: 'Fecha de emisión', name: 'fechaEmision' },
    { label: 'Transportista', name: 'transportista' },
    { label: 'Unidad', name: 'unidad' },
    { label: 'IVA', name: 'iva' },
    { label: 'Bultos', name: 'bultos' },
    { label: 'Precio', name: 'precio' },
    { label: 'Descuento', name: 'descuento' },
    { label: 'Total renglón', name: 'totalRenglon' },
  ];

  const fieldsOutsideBox = [
    { label: 'Activar descuento global', name: 'activarDescuentoGlobal' },
    { label: 'Detenerse en el campo cantidad', name: 'detenerseCampoCantidad' },
    { label: 'Permite renglones repetidos', name: 'renglonesRepetidos' },
    { label: 'Permitir items no registrados en inventario', name: 'permitirItemsNoRegistrados' },
    { label: 'Activar aprobación', name: 'activarAprobacion' },
  ];

  return (
    <Box sx={{ p: 3 }}>
      <Paper elevation={3} sx={{ p: 3 }}>
        <h2>Parámetros Orden de Compra</h2>
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

        <Box sx={{ display: 'flex', gap: 2, mt: 2, alignItems: 'center' }}>
          <FormControl sx={{ minWidth: 120 }}>
            <InputLabel>Impresión</InputLabel>
            <Select
              value={formData.impresion}
              label="Impresión"
              onChange={handleInputChange}
              name="impresion"
            >
              <MenuItem value="Imprimir">Imprimir</MenuItem>
              <MenuItem value="Preguntar/imprimir">Preguntar/imprimir</MenuItem>
              <MenuItem value="No imprimir">No imprimir</MenuItem>
              <MenuItem value="Pantalla">Pantalla</MenuItem>
              <MenuItem value="Libreña">Libreña</MenuItem>
            </Select>
          </FormControl>
        </Box>

        <Button type="submit" variant="contained" color="primary" sx={{ mt: 3 }}>
          Guardar
        </Button>
      </Paper>
    </Box>
  );
};

export default RecepcionesForm;
