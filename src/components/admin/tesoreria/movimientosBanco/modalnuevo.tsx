import { useState } from 'react';
import { Box, Modal, MenuItem, TextField } from '@mui/material';
import { FechaSelect } from '../compos/fecha';

interface ModalProps {
    abrir: boolean;
    onClose: () => void;
    inputProps?: any; // Propiedades adicionales para Inputs
}

export default function ModalNuevo({ abrir, onClose, inputProps }: ModalProps) {

    const bancos = [
        { value: 'banco1', label: 'Banco 1' },
        { value: 'banco2', label: 'Banco 2' },
        { value: 'banco3', label: 'Banco 3' }
    ];
    const tipoMovimiento = [
        { value: 'ingreso', label: 'Ingreso' },
        { value: 'egreso', label: 'Egreso' },
        { value: 'transferencia', label: 'Transferencia' }
    ];
    const concepto = [
        { value: 'pagoagua', label: 'Pago Agua' },
        { value: 'pagoluz', label: 'Pago Luz' },
        { value: 'deudas', label: 'Deudas' }
    ];
    return (

        <Modal
            open={abrir}
            onClose={onClose}
        >
            <Box >
                <div className="fixed inset-0  flex items-center justify-center z-50">
                    <div className="  max-w-2/3  max-h-[100vh] rounded shadow bg-white p-8 overflow-y-auto" >
                        <div className="grid grid-rows-2 p-2">
                            <h1 className="text-2xl font-bold text-center mb-2">Nuevo Movimiento Bancario</h1>
                        </div>
                        <form action='POST' className='grid grid-cols-2 gap-4 p-4'>
                            <TextField
                                id="select-banco"
                                select
                                label="Banco"
                                defaultValue=""
                                helperText="Selecciona el banco"
                            >
                                {bancos.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                            <div className='w-full'>
                                <FechaSelect />
                            </div>
                            <TextField
                                id="select-tipo"
                                select
                                label="Tipo"
                                defaultValue=""
                                helperText="Selecciona el tipo de movimiento"
                            >
                                {tipoMovimiento.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                            <div>
                                <TextField id="input-numero" label="Numero" variant="outlined" sx={{ width: "100%" }} />
                            </div>
                            <div>
                                <TextField
                                    id="select-concepto"
                                    select
                                    label="Concepto"
                                    defaultValue=""
                                    helperText="Selecciona el concepto del movimiento"
                                    sx={{ width: "100%" }}
                                >
                                    {concepto.map((option) => (
                                        <MenuItem key={option.value} value={option.value}>
                                            {option.label}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            </div>
                            <div>
                                <TextField id="input-valor" label="Valor" variant="outlined" sx={{ width: "100%" }} />
                            </div>
                            <div>
                                <TextField id="input-numero" label="Numero" variant="outlined" sx={{ width: "100%" }} />
                            </div>

                        </form>
                        <div className="flex justify-evenly  mx-10">
                            <button className="px-4 py-2 bg-primary text-white rounded" > Vaciar </button>
                            <button className="px-4 py-2 bg-primary text-white rounded" onClick={onClose}> Cerrar </button>
                        </div>
                    </div>
                </div>
            </Box>
        </Modal>

    );
}