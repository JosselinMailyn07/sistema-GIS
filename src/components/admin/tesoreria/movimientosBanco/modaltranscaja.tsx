import { useState } from 'react';
import { Box, Modal, MenuItem, TextField } from '@mui/material';
import { FechaSelect } from '../compos/fecha';

const cuentaOrigen = [
    { value: 'cuenta1', label: 'Cuenta 1' },
    { value: 'cuenta2', label: 'Cuenta 2' }
];
const cajaDestino = [
    { value: 'cuenta1', label: 'Cuenta 1' },
    { value: 'cuenta2', label: 'Cuenta 2' }
];

const concepto = [
    { value: 'pagoagua', label: 'Pago Agua' },
    { value: 'pagoluz', label: 'Pago Luz' },
    { value: 'deudas', label: 'Deudas' }
];
interface ModalProps {
    abrir: boolean;
    onClose: () => void;
}

export default function ModalCaja({ abrir, onClose }: ModalProps) {


    return (
        <Modal
            open={abrir}
            onClose={onClose}
        >
            <Box >
                <div className="fixed inset-0  flex items-center justify-center z-50">
                    <div className="  max-w-2/3  max-h-[100vh] rounded shadow bg-white p-8 overflow-y-auto" >
                        <div className="grid grid-rows-2 p-2">
                            <h1 className="text-2xl font-bold text-center mb-2">Nuevo Transferencia entre Cajas</h1>
                        </div>
                        <form action='POST' className='grid grid-cols-2 gap-4 p-4'>
                            <TextField
                                id="select-cuenta-origen"
                                select
                                label="Origen"
                                defaultValue=""
                                helperText="Selecciona la cuenta de origen"
                            >
                                {cuentaOrigen.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                            <TextField
                                id="select-caja-destino"
                                select
                                label="Destino"
                                defaultValue=""
                                helperText="Selecciona la caja de destino"
                            >
                                {cajaDestino.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                            <div className='w-full'>
                                <FechaSelect />
                            </div>
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