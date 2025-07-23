import React, { useState } from 'react';
import {
  Button,
  Checkbox,
  FormControlLabel,
  TextField,
  Box,
  Paper,
  Divider
} from '@mui/material';

const FacturasVentasForm = () => {
  const [formData, setFormData] = useState({
    numeroFactura: false,
    fechaEmision: false,
    vendedor: false,
    transportista: false,
    tarifa: false,
    unidad: false,
    iva: false,
    brutos: false,
    precio: false,
    descuento: false,
    ivaExcluidoPrecio: false,
    ivaExcluidoTotal: false,
    controlFallaExistencias: false,
    descuentoGlobal: false,
    detenerseCampoCantidad: false,
    renglonesRepetidos: false,
    ventaCalculoVolumen: false,
    buscarServiciosDetalle: false,
    calcularCantidadBasePrecioTotal: false,
    interesGiros: '20',
    impresion: 'Preguntar',
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
    { label: 'Número de factura', name: 'numeroFactura' },
    { label: 'Fecha de emisión', name: 'fechaEmision' },
    { label: 'Vendedor', name: 'vendedor' },
    { label: 'Transportista', name: 'transportista' },
    { label: 'Tarifa', name: 'tarifa' },
    { label: 'Unidad', name: 'unidad' },
    { label: 'IVA', name: 'iva' },
    { label: 'Brutos', name: 'brutos' },
    { label: 'Precio', name: 'precio' },
    { label: 'Descuento', name: 'descuento' },
  ];

  const fieldsOutsideBox = [
    { label: 'IVA excluido del precio', name: 'ivaExcluidoPrecio' },
    { label: 'IVA excluido del total', name: 'ivaExcluidoTotal' },
    { label: 'Control falla existencias', name: 'controlFallaExistencias' },
    { label: 'Activar descuento global', name: 'descuentoGlobal' },
    { label: 'Detenerse en el campo cantidad', name: 'detenerseCampoCantidad' },
    { label: 'Permite renglones repetidos', name: 'renglonesRepetidos' },
    { label: 'Venta de cálculo de volumen en la cantidad', name: 'ventaCalculoVolumen' },
    { label: 'Buscar por servicios en el detalle', name: 'buscarServiciosDetalle' },
    { label: 'Calcular cantidad en base al precio Total', name: 'calcularCantidadBasePrecioTotal' },
  ];

  return (
    <Box sx={{ p: 3 }}>
      <Paper elevation={3} sx={{ p: 3 }}>
        <h2>Parámetros Facturas Ventas</h2>
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

        <Divider sx={{ my: 2 }} />

        <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
          <TextField
            label="Interés Giros"
            variant="outlined"
            type="number"
            name="interesGiros"
            value={formData.interesGiros}
            onChange={handleInputChange}
          />
          <TextField
            label="Impresión"
            variant="outlined"
            name="impresion"
            value={formData.impresion}
            onChange={handleInputChange}
          />
        </Box>

        <Button type="submit" variant="contained" color="primary" sx={{ mt: 3 }}>
          Guardar
        </Button>
      </Paper>
    </Box>
  );
};

export default FacturasVentasForm;
