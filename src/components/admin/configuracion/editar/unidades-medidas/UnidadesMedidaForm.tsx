import React, { useState } from 'react';
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
  TextField,
  Typography,
  IconButton
} from '@mui/material';
import { Add, Edit, Delete, Restore } from '@mui/icons-material';

const UnidadesMedidaForm = () => {
  const [unidades, setUnidades] = useState([
    { nombre: 'g/l', simbolo: 'g/l' },
    { nombre: 'k', simbolo: 'k' },
    { nombre: 'l', simbolo: 'l' },
    { nombre: 'm', simbolo: 'm' },
    { nombre: 'paq', simbolo: 'paq' },
    { nombre: 'u', simbolo: 'u' },
  ]);

  const [nuevaUnidad, setNuevaUnidad] = useState({ nombre: '', simbolo: '' });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNuevaUnidad(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleAddUnidad = () => {
    if (nuevaUnidad.nombre && nuevaUnidad.simbolo) {
      setUnidades(prevUnidades => [...prevUnidades, nuevaUnidad]);
      setNuevaUnidad({ nombre: '', simbolo: '' });
    }
  };

  const handleDeleteUnidad = (index) => {
    setUnidades(prevUnidades => prevUnidades.filter((_, i) => i !== index));
  };

  const handleRestoreUnidad = (index) => {
    // Aquí puedes agregar la lógica para restaurar una unidad eliminada
    console.log(`Restaurar unidad en el índice: ${index}`);
  };

  return (
    <Box sx={{ p: 3 }}>
      <Paper elevation={3} sx={{ p: 3 }}>
        <Typography variant="h4" gutterBottom>
          Unidades de Medida
        </Typography>

        <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
          <Button variant="contained" startIcon={<Add />} sx={{ '&:hover': { backgroundColor: 'grey.500' } }}>
            Nuevo
          </Button>
          <Button variant="contained" startIcon={<Edit />} sx={{ '&:hover': { backgroundColor: 'grey.500' } }}>
            Actualizar
          </Button>
          <Button variant="contained" startIcon={<Delete />} sx={{ '&:hover': { backgroundColor: 'grey.500' } }}>
            Eliminar
          </Button>
          <Button variant="contained" startIcon={<Restore />} sx={{ '&:hover': { backgroundColor: 'grey.500' } }}>
            Restaurar
          </Button>
          
        </Box>

        <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
          <TextField
            label="Nombre"
            variant="outlined"
            name="nombre"
            value={nuevaUnidad.nombre}
            onChange={handleInputChange}
          />
          <TextField
            label="Símbolo"
            variant="outlined"
            name="simbolo"
            value={nuevaUnidad.simbolo}
            onChange={handleInputChange}
          />
          <Button variant="contained" color="primary" onClick={handleAddUnidad}>
            Añadir
          </Button>
        </Box>

        <Typography variant="subtitle1" gutterBottom>
          Registro: 1/6
        </Typography>

        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="tabla de unidades de medida">
            <TableHead>
              <TableRow sx={{ backgroundColor: '#f5f5f5' }}>
                <TableCell>Nombre</TableCell>
                <TableCell>Símbolo</TableCell>
                <TableCell>Acciones</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {unidades.map((unidad, index) => (
                <TableRow key={index} sx={{ '&:nth-of-type(odd)': { backgroundColor: '#fafafa' } }}>
                  <TableCell>{unidad.nombre}</TableCell>
                  <TableCell>{unidad.simbolo}</TableCell>
                  <TableCell>
                    <IconButton onClick={() => handleDeleteUnidad(index)} aria-label="delete">
                      <Delete />
                    </IconButton>
                    <IconButton onClick={() => handleRestoreUnidad(index)} aria-label="restore">
                      <Restore />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
};

export default UnidadesMedidaForm;
