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
import { Add, Edit, Delete, ContentCopy } from '@mui/icons-material';

const SeguridadPerfilesUsuariosForm = () => {
  const [perfiles, setPerfiles] = useState([
    { nombre: 'BUILTIN\\Administradores' },
    { nombre: 'sa' },
    { nombre: 'user' },
  ]);

  return (
    <Box sx={{ p: 3 }}>
      <Paper elevation={3} sx={{ p: 3 }}>
        <Typography variant="h4" gutterBottom>
          Seguridad | Perfiles de Usuarios
        </Typography>

        <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
          <Button variant="contained" startIcon={<Add />} sx={{ '&:hover': { backgroundColor: 'grey.500' } }}>
            Mapa
          </Button>
          <Button variant="contained" startIcon={<Edit />} sx={{ '&:hover': { backgroundColor: 'grey.500' } }}>
            Acceso Bodegas
          </Button>
          <Button variant="contained" startIcon={<Edit />} sx={{ '&:hover': { backgroundColor: 'grey.500' } }}>
            Acceso Reportes
          </Button>
          <Button variant="contained" startIcon={<ContentCopy />} sx={{ '&:hover': { backgroundColor: 'grey.500' } }}>
            Duplicar Mapa
          </Button>
          <Button variant="contained" sx={{ '&:hover': { backgroundColor: 'grey.500' } }}>
            Cerrar
          </Button>
        </Box>

        <Typography variant="subtitle1" gutterBottom>
          Registro: 1/3
        </Typography>

        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 400 }} aria-label="tabla de perfiles de usuarios">
            <TableHead>
              <TableRow sx={{ backgroundColor: '#f5f5f5' }}>
                <TableCell>Nombre</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {perfiles.map((perfil, index) => (
                <TableRow key={index} sx={{ '&:nth-of-type(odd)': { backgroundColor: '#fafafa' } }}>
                  <TableCell>{perfil.nombre}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
};

export default SeguridadPerfilesUsuariosForm;
