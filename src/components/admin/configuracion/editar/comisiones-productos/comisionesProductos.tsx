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
} from '@mui/material';
import { Add, Edit, Delete } from '@mui/icons-material';

const ComisionesProductos = () => {
  const [comisiones, setComisiones] = useState([
    { codigo: '001', porcentaje: '1%' },
  ]);

  const [nuevaComision, setNuevaComision] = useState({ codigo: '', porcentaje: '' });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNuevaComision(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleAddComision = () => {
    if (nuevaComision.codigo && nuevaComision.porcentaje) {
      setComisiones(prevComisiones => [...prevComisiones, nuevaComision]);
      setNuevaComision({ codigo: '', porcentaje: '' });
    }
  };

  const handleDeleteComision = (index) => {
    setComisiones(prevComisiones => prevComisiones.filter((_, i) => i !== index));
  };

  return (
    <Box sx={{ p: 3 }}>
      <Paper elevation={3} sx={{ p: 3 }}>
        <Typography variant="h4" gutterBottom>
          Tabla de Comisiones
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
        </Box>
        <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
          <TextField
            label="Código"
            variant="outlined"
            name="codigo"
            value={nuevaComision.codigo}
            onChange={handleInputChange}
          />
          <TextField
            label="Porcentaje"
            variant="outlined"
            name="porcentaje"
            value={nuevaComision.porcentaje}
            onChange={handleInputChange}
          />
          <Button variant="contained" color="primary" onClick={handleAddComision}>
            Añadir
          </Button>
        </Box>
        <TableContainer component={Paper} sx={{ maxWidth: 400 }}>
          <Table sx={{ minWidth: 300 }} aria-label="tabla de comisiones">
            <TableHead>
              <TableRow sx={{ backgroundColor: '#f5f5f5' }}>
                <TableCell sx={{ width: '50%' }}>Código</TableCell>
                <TableCell sx={{ width: '50%' }}>Porcentaje</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {comisiones.map((comision, index) => (
                <TableRow key={index} sx={{ '&:nth-of-type(odd)': { backgroundColor: '#fafafa' } }}>
                  <TableCell>{comision.codigo}</TableCell>
                  <TableCell>{comision.porcentaje}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
};

export default ComisionesProductos;
