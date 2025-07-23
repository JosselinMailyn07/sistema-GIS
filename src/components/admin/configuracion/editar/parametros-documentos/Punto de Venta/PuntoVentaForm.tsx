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

const PuntoVentaForm = () => {
  const [formData, setFormData] = useState({
    fechaEmision: false,
    tarifa: false,
    bodega: false,
    iva: false,
    cantidad: false,
    precio: false,
    descuento: false,
    totalrenglon: false,
    ivaExcluidoPrecio: false,
    ivaExcluidoTotal: false,
    controlFallaExistencias: false,
    permiterenglonesRepetidos: false,
    ventaCalculoVolumen: false,
    cantidadbasePrecioTotal: false,
    imprimircopia: false,
    mostrarVentaPaginaEfectivo: false,
    deshabilitarVentaFormaPago: false,
    controlarEliminacionRenglones: false,
    imprimirCopia: 'No Imprimir',
    secuenciaFacturaPV: '0001-0001-00001077',
    impresion: 'No imprimir',
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
    { label: 'Tarifa', name: 'tarifa' },
    { label: 'Bodega', name: 'bodega' },
    { label: 'IVA', name: 'iva' },
    { label: 'Cantidad', name: 'cantidad' },
    { label: 'Precio', name: 'precio' },
    { label: 'Descuento', name: 'descuento' },
    { label: 'Total renglón', name: 'totalrenglon' },
  ];

  const fieldsOutsideBox = [
    { label: 'IVA excluido del precio', name: 'ivaExcluidoPrecio' },
    { label: 'IVA excluido del total', name: 'ivaExcluidoTotal' },
    { label: 'Control falla existencias', name: 'controlFallaExistencias' },
    { label: 'Permite renglones repetidos', name: 'renglonesRepetidos' },
    { label: 'Venta de cálculo de volumen en la cantidad', name: 'ventaCalculoVolumen' },
    { label: 'Calcular cantidad base al precio total', name: 'cantidadbasePrecioTotal' },
    { label: 'Imprimir copia', name: 'imprimircopia' },
    { label: 'Mostrar venta de página en efectivo', name: 'mostrarVentaPaginaEfectivo' },
    { label: 'Deshabilitar venta forma de pago', name: 'deshabilitarVentaFormaPago' },
    { label: 'Controlar eliminación de renglones', name: 'controlarEliminacionRenglones' },
  ];

  return (
    <Box sx={{ p: 3 }}>
      <Paper elevation={3} sx={{ p: 3 }}>
        <h2>Parámetros Punto de Venta</h2>
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
          <TextField
            label="Secuencia Factura PV"
            variant="outlined"
            name="secuenciaFacturaPV"
            value={formData.secuenciaFacturaPV}
            onChange={handleInputChange}
            sx={{ flex: 1 }}
          />
          <Button variant="contained" color="primary">
            Editar
          </Button>
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

export default PuntoVentaForm;
