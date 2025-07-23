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
  Typography,
} from '@mui/material';
import { Add, Edit, Delete, Restore } from '@mui/icons-material';

const TasaCambioForm = () => {
  const [tasasCambio, setTasasCambio] = useState([
    { fecha: '01/01/2009', cambio: '25.00' },
    // Puedes añadir más tasas de cambio aquí
  ]);

  return (
    <Box sx={{ p: 3 }}>
      <Paper elevation={3} sx={{ p: 3 }}>
        <Typography variant="h4" gutterBottom>
          Tasa de Cambio
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

        <Typography variant="subtitle1" gutterBottom>
          Registro: 1/1
        </Typography>

        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 400 }} aria-label="tabla de tasas de cambio">
            <TableHead>
              <TableRow sx={{ backgroundColor: '#f5f5f5' }}>
                <TableCell>Fecha</TableCell>
                <TableCell>Cambio</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tasasCambio.map((tasa, index) => (
                <TableRow key={index} sx={{ '&:nth-of-type(odd)': { backgroundColor: '#fafafa' } }}>
                  <TableCell>{tasa.fecha}</TableCell>
                  <TableCell>{tasa.cambio}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
};

export default TasaCambioForm;
