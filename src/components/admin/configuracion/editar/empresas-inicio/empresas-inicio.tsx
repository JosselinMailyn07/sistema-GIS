import React, { useState } from 'react';
import {
  Button,
  Box,
  Paper,
  Typography,
  TextField
} from '@mui/material';
import { EmpresaModal } from '@/components/ui/EmpresaModal';
import { Tablas } from '@/components/layout/Tabla';
import { FaPlus, FaEdit, FaTrash } from 'react-icons/fa';

interface Empresa {
  codigoEmpresa: string;
  ruc: string;
  nombre: string;
  direccion: string;
  telefonos: string[];
  fechaInicio: string;
  fechaCierre: string;
  mascaraContable: string;
  baseDatos: string;
  comercializadora: string;
  centro: string;
  segmento: string;
  activa: boolean;
}

export const EmpresasInicioForm = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentEmpresa, setCurrentEmpresa] = useState<Empresa | null>(null);
  const [selectedEmpresa, setSelectedEmpresa] = useState<Empresa | null>(null);
  const [empresas, setEmpresas] = useState<Empresa[]>([
    {
      codigoEmpresa: '002',
      ruc: '0801342312001',
      nombre: 'GAETANA',
      direccion: 'Olivo',
      telefonos: ['052-628750', '096206682', '086370647'],
      fechaInicio: '01/01/2012',
      fechaCierre: '31/01/2012',
      mascaraContable: 'Gaetana',
      baseDatos: 'Gaetana',
      comercializadora: '',
      centro: '',
      segmento: '',
      activa: true
    },
    // Agrega más empresas
  ]);

  const filteredEmpresas = empresas.filter(empresa =>
    empresa.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
    empresa.codigoEmpresa.toString().includes(searchTerm) ||
    empresa.ruc.includes(searchTerm)
  );

  const handleRowSelect = (fila: Empresa) => {
    setSelectedEmpresa(fila);
  };

  const handleEdit = () => {
    if (selectedEmpresa) {
      setCurrentEmpresa(selectedEmpresa);
      setIsModalOpen(true);
    } else {
      alert('Por favor, selecciona una empresa para editar.');
    }
  };

  const handleDelete = () => {
    if (selectedEmpresa) {
      setEmpresas(empresas.filter(empresa => empresa.ruc !== selectedEmpresa.ruc));
      alert(`Empresa con RUC ${selectedEmpresa.ruc} eliminada.`);
      setSelectedEmpresa(null);
    } else {
      alert('Por favor, selecciona una empresa para eliminar.');
    }
  };

  const handleSave = (empresa: Empresa) => {
    if (currentEmpresa) {
      // Actualizar empresa existente
      setEmpresas(empresas.map(emp => emp.ruc === empresa.ruc ? empresa : emp));
    } else {
      // Añadir nueva empresa
      setEmpresas([...empresas, empresa]);
    }
    setIsModalOpen(false);
  };

  const campos = [
    { key: 'codigoEmpresa', label: 'Código Empresa' },
    { key: 'ruc', label: 'RUC/CI' },
    { key: 'nombre', label: 'Nombre' },
    { key: 'direccion', label: 'Dirección' },
    { key: 'telefonos', label: 'Teléfonos' },
    { key: 'fechaInicio', label: 'Fecha de Inicio' },
    { key: 'fechaCierre', label: 'Fecha de Cierre' },
    { key: 'mascaraContable', label: 'Máscara Contable' },
    { key: 'baseDatos', label: 'Base de Datos' },
    { key: 'comercializadora', label: 'Comercializadora' },
    { key: 'centro', label: 'Centro' },
    { key: 'segmento', label: 'Segmento' },
    { key: 'activa', label: 'Activa' },
  ];

  return (
    <Box sx={{ p: 3 }}>
      <Paper elevation={3} sx={{ p: 3 }}>
        <Typography variant="h4" gutterBottom>
          Empresas | Inicio
        </Typography>

        <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
          <TextField
            label="Buscar"
            variant="outlined"
            fullWidth
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            sx={{ maxWidth: 300 }}
          />
          <Button
            variant="contained"
            startIcon={<FaPlus />}
            onClick={() => {
              setCurrentEmpresa(null);
              setIsModalOpen(true);
            }}
          >
            Nuevo
          </Button>
          <Button
            variant="contained"
            startIcon={<FaTrash />}
            onClick={handleDelete}
            color="error"
          >
            Eliminar
          </Button>
          <Button
            variant="contained"
            startIcon={<FaEdit />}
            onClick={handleEdit}
            color="primary"
          >
            Editar
          </Button>
        </Box>

        <Box sx={{ mt: 4 }}>
          <Tablas campos={campos} datos={filteredEmpresas} onRowSelect={handleRowSelect} />
        </Box>

        <EmpresaModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSave={handleSave}
          empresa={currentEmpresa}
        />
      </Paper>
    </Box>
  );
};
