import React from 'react';
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box
} from '@mui/material';

const ContadoresDocumentosForm = () => {
  const documentos = [
    { documento: 'ABONO', numero: 'AB000001' },
    { documento: 'ASIENTO', numero: 'AS000001' },
    { documento: 'CAJA', numero: 'CJ000001' },
    { documento: 'CHEQUERA', numero: 'CH000001' },
    { documento: 'COMPRA', numero: 'CP000216' },
    { documento: 'COTIZACIÓN', numero: 'CT000001' },
    { documento: 'CPBCXC', numero: 'CCXC0001' },
    { documento: 'CPBCXP', numero: 'CCXP0001' },
    { documento: 'DEVCOMPRA', numero: 'AD000002' },
    { documento: 'DEVNOTVEN', numero: 'DNV00007' },
    { documento: 'DEVOLUCIÓN', numero: 'DV000003' },
    { documento: 'ESTACIÓN', numero: '00000174' },
    { documento: 'FACTURA', numero: 'FC000012' },
    { documento: 'F-ESTA', numero: '0001' },
    { documento: 'FÍSICO', numero: 'IF000003' },
    { documento: 'F-PEMI', numero: '0001' },
    { documento: 'F-SECU', numero: '00000011' },
    { documento: 'GIROSCXC', numero: 'GCXC0001' },
    { documento: 'GIROSCXP', numero: 'GCXP0001' },
    { documento: 'N/CREDITO', numero: 'NC000001' },
    { documento: 'N/DEBITO', numero: 'ND000001' },
    { documento: 'N/ENTREGA', numero: 'NE000001' },
    { documento: 'NOTVEN', numero: 'NV000603' },
    { documento: 'NVENTA', numero: 'NV000001' },
    { documento: 'ORDENCPA', numero: 'OR000001' },
    { documento: 'PEDIDO', numero: 'PD000001' },
    { documento: 'PV-EST', numero: '0001' },
    { documento: 'PV-PEM', numero: '0001' },
    { documento: 'PV-SEC', numero: '00000001' },
    { documento: 'RECEPCIÓN', numero: 'RE000024' },
    { documento: 'REQUISICIO', numero: 'RQ000001' },
    { documento: 'SECUENCTPV', numero: '00000884' },
    { documento: 'TRANSFER', numero: 'TR000001' },

  ];

  return (
    <Box sx={{ p: 3 }}>
      <Paper elevation={3} sx={{ p: 3 }}>
        <h2>Contadores Documentos</h2>
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

        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Documento</TableCell>
                <TableCell>Número</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {documentos.map((doc, index) => (
                <TableRow key={index}>
                  <TableCell>{doc.documento}</TableCell>
                  <TableCell>{doc.numero}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
};

export default ContadoresDocumentosForm;
