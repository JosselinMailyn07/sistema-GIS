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

const ConceptosGeneralesForm = () => {
  const [conceptos, setConceptos] = useState([
    { codigo: '1001', nombre: 'Devolución Factura' },
    { codigo: '1002', nombre: 'PAGO VARIOS' },
    { codigo: '1003', nombre: 'MOVILIZACIÓN' },
    { codigo: '1004', nombre: 'ALIMENTACIÓN' },
    { codigo: '1008', nombre: 'CANCELACIÓN CLIENTE' },
    { codigo: '1012', nombre: 'Por Atendum' },
    { codigo: '1488', nombre: 'Gasto de Harriendo' },
    { codigo: '1489', nombre: 'Gastos Pago Luz' },
    { codigo: '1490', nombre: 'Gastos de Internet' },
    { codigo: 'BONO', nombre: 'BONO' },
  ]);

  return (
    <Box sx={{ p: 3 }}>
      <Paper elevation={3} sx={{ p: 3 }}>
        <Typography variant="h4" gutterBottom>
          Conceptos Generales
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
          Registro: 1/10
        </Typography>

        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 400 }} aria-label="tabla de conceptos generales">
            <TableHead>
              <TableRow sx={{ backgroundColor: '#f5f5f5' }}>
                <TableCell>Código</TableCell>
                <TableCell>Nombre</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {conceptos.map((concepto, index) => (
                <TableRow key={index} sx={{ '&:nth-of-type(odd)': { backgroundColor: '#fafafa' } }}>
                  <TableCell>{concepto.codigo}</TableCell>
                  <TableCell>{concepto.nombre}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
};

export default ConceptosGeneralesForm;
