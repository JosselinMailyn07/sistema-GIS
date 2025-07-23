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

const CausaNoVentaForm = () => {
  const [causas, setCausas] = useState([
    { codigo: '01', nombre: 'MAL ESTADO' },
    { codigo: '02', nombre: 'MAL DESPACHO' },
    { codigo: '03', nombre: 'LLEGA TARDE PEDIDO' },
    { codigo: '04', nombre: 'DIFERENCIA DE MERCADERÍA' },
    { codigo: '05', nombre: 'DIFERENCIA DE PRECIOS' },
    { codigo: '06', nombre: 'MERCADERÍA INCOMPLETA' },
    { codigo: '07', nombre: 'CLIENTE NO ACEPTÓ' },
    { codigo: '08', nombre: 'LOCAL CERRADO' },
  ]);

  return (
    <Box sx={{ p: 3 }}>
      <Paper elevation={3} sx={{ p: 3 }}>
        <Typography variant="h4" gutterBottom>
          Causa No Venta
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
          Registro: 1/8
        </Typography>

        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 400 }} aria-label="tabla de causas no venta">
            <TableHead>
              <TableRow sx={{ backgroundColor: '#f5f5f5' }}>
                <TableCell>Código</TableCell>
                <TableCell>Nombre</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {causas.map((causa, index) => (
                <TableRow key={index} sx={{ '&:nth-of-type(odd)': { backgroundColor: '#fafafa' } }}>
                  <TableCell>{causa.codigo}</TableCell>
                  <TableCell>{causa.nombre}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
};

export default CausaNoVentaForm;
