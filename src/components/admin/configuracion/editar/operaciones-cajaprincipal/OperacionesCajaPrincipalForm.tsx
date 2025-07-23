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

const OperacionesCajaPrincipalForm = () => {
  const [operaciones, setOperaciones] = useState([
    { tipo: 'EN', descripcion: 'Entrada', valor: '0.00', signo: '+', editable: true },
    { tipo: 'NC', descripcion: 'Nota de Crédito', valor: '0.00', signo: '+', editable: true },
    { tipo: 'ND', descripcion: 'Nota de Débito', valor: '0.00', signo: '-', editable: true },
    { tipo: 'SA', descripcion: 'Salida', valor: '0.00', signo: '-', editable: true },
  ]);

  return (
    <Box sx={{ p: 3 }}>
      <Paper elevation={3} sx={{ p: 3 }}>
        <Typography variant="h4" gutterBottom>
          Operaciones de Caja General
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
          Registro: 1/4
        </Typography>

        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="tabla de operaciones de caja">
            <TableHead>
              <TableRow sx={{ backgroundColor: '#f5f5f5' }}>
                <TableCell>Tipo</TableCell>
                <TableCell>Descripción</TableCell>
                <TableCell>Valor</TableCell>
                <TableCell>Signo</TableCell>
                <TableCell>Editable</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {operaciones.map((operacion, index) => (
                <TableRow key={index} sx={{ '&:nth-of-type(odd)': { backgroundColor: '#fafafa' } }}>
                  <TableCell>{operacion.tipo}</TableCell>
                  <TableCell>{operacion.descripcion}</TableCell>
                  <TableCell>{operacion.valor}</TableCell>
                  <TableCell>{operacion.signo}</TableCell>
                  <TableCell>{operacion.editable ? 'Sí' : 'No'}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
};

export default OperacionesCajaPrincipalForm;
