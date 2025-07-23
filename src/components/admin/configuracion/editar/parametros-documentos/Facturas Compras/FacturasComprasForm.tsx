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

const FacturasComprasForm = () => {
  const [formData, setFormData] = useState({
    numeroCompra: false,
    fechaEmision: true,
    transportista: true,
    unidad: true,
    iva: true,
    brutos: true,
    precio: true,
    descuento: true,
    totalRenglon: true,
    activarDescuentoGlobal: true,
    detenerseCampoCantidad: true,
    renglonesRepetidos: true,
    ventaCalculoVolumen: true,
    noRetenerImpuesto: true,
    unidadesTributarias: '10', // Valor por defecto para el campo editable
    interesGiros: '20',
    incrementoSubTotal: '',
    impresion: 'Preguntar/imprimir',
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
    { label: 'Número de compra', name: 'numeroCompra' },
    { label: 'Fecha de emisión', name: 'fechaEmision' },
    { label: 'Transportista', name: 'transportista' },
    { label: 'Unidad', name: 'unidad' },
    { label: 'IVA', name: 'iva' },
    { label: 'Brutos', name: 'brutos' },
    { label: 'Precio', name: 'precio' },
    { label: 'Descuento', name: 'descuento' },
    { label: 'Total renglón', name: 'totalRenglon' },
  ];

  const fieldsOutsideBox = [
    { label: 'Activar descuento global', name: 'activarDescuentoGlobal' },
    { label: 'Detenerse en el campo cantidad', name: 'detenerseCampoCantidad' },
    { label: 'Permite renglones repetidos', name: 'renglonesRepetidos' },
    { label: 'Venta de cálculo de volumen en la cantidad', name: 'ventaCalculoVolumen' },
  ];

  return (
    <Box sx={{ p: 3 }}>
      <Paper elevation={3} sx={{ p: 3 }}>
        <h2>Parámetros Facturas Compras</h2>
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
            <FormControlLabel
              control={
                <Checkbox
                  checked={formData.noRetenerImpuesto}
                  onChange={handleCheckboxChange}
                  name="noRetenerImpuesto"
                />
              }
              label={
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <span>No retiene impuesto cuando cancela en efectivo montos menores a</span>
                  <TextField
                    variant="standard"
                    type="number"
                    name="unidadesTributarias"
                    value={formData.unidadesTributarias}
                    onChange={handleInputChange}
                    sx={{ width: '50px', mx: 1 }}
                  />
                  <span>unidades tributarias</span>
                </Box>
              }
              sx={{ display: 'block', mt: 1 }}
            />
          </Box>
        </Box>

        <Box sx={{ display: 'flex', gap: 2, mt: 2, alignItems: 'center' }}>
          <TextField
            label="Interés Giros"
            variant="outlined"
            type="number"
            name="interesGiros"
            value={formData.interesGiros}
            onChange={handleInputChange}
          />
          <TextField
            label="Incremento en SubTotal"
            variant="outlined"
            type="number"
            name="incrementoSubTotal"
            value={formData.incrementoSubTotal}
            onChange={handleInputChange}
          />
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

export default FacturasComprasForm;
