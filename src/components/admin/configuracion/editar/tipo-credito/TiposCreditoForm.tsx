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

const TiposCreditoForm = () => {
  const [tiposCredito, setTiposCredito] = useState([
    { codigo: '30DIA', nombre: 'Factura 30 Días' },
    { codigo: '33444', nombre: 'Factura 360 Días' },
    { codigo: '360DI', nombre: 'Factura 360 Días' },
    { codigo: '60DIA', nombre: 'Factura 60 Días' },
    { codigo: '90DIA', nombre: 'Factura 90 Días' },
  ]);

  return (
    <Box sx={{ p: 3 }}>
      <Paper elevation={3} sx={{ p: 3 }}>
        <Typography variant="h4" gutterBottom>
          Tipos de Crédito
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
          Registro: 1/5
        </Typography>

        <TableContainer component={Paper} sx={{ maxWidth: 600 }}>
          <Table sx={{ minWidth: 400 }} aria-label="tabla de tipos de crédito">
            <TableHead>
              <TableRow sx={{ backgroundColor: '#f5f5f5' }}>
                <TableCell sx={{ width: '40%' }}>Código</TableCell>
                <TableCell sx={{ width: '60%' }}>Nombre</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tiposCredito.map((tipo, index) => (
                <TableRow key={index} sx={{ '&:nth-of-type(odd)': { backgroundColor: '#fafafa' } }}>
                  <TableCell>{tipo.codigo}</TableCell>
                  <TableCell>{tipo.nombre}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
};

export default TiposCreditoForm;
