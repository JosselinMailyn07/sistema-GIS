import { Box, Modal, MenuItem, TextField } from '@mui/material';
import { FechaSelect } from '../compos/fecha';
import { useState } from 'react';
import type { ComponentType } from 'react';

interface ModalProps {
    abrir: boolean;
    onClose: () => void;
    inputProps?: any; // Propiedades adicionales para Inputs
}

// Cast para que TS acepte las props value/onChange sin modificar el componente origen
const Fecha = FechaSelect as unknown as ComponentType<{ value: string; onChange: (v: any) => void }>;

export default function ModalNuevo({ abrir, onClose, inputProps }: ModalProps) {
    type FormState = {
        banco: string;
        fecha: string; // o Date | null según tu FechaSelect
        tipo: string;
        numero: string;
        concepto: string;
        valor: string;
        numero2: string;
    };

    const initialForm: FormState = {
        banco: '',
        fecha: '',
        tipo: '',
        numero: '',
        concepto: '',
        valor: '',
        numero2: ''
    };

    const [form, setForm] = useState<FormState>(initialForm);

    // Ejemplo: manejar checkbox y inputs/selección HTML
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const target = e.target as HTMLInputElement;
        const { name, type, value, checked } = target;
        const val = type === 'checkbox' ? checked : value;
        if (name) setForm(prev => ({ ...prev, [name]: val }));
    };

    const handleFechaChange = (value: any) => {
        // Ajusta según el tipo que FechaSelect entregue
        setForm(prev => ({ ...prev, fecha: value ?? '' }));
    };

    const vaciar = () => {
        setForm(initialForm);
    };

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
                                name="banco"
                                select
                                label="Banco"
                                defaultValue=""
                                value={form.banco}
                                onChange={handleChange}
                                helperText="Selecciona el banco"
                            >
                                {bancos.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                            <div className='w-full'>
                                <Fecha value={form.fecha} onChange={handleFechaChange} />
                            </div>
                            <TextField
                                id="select-tipo"
                                name="tipo"
                                select
                                label="Tipo"
                                defaultValue=""
                                value={form.tipo}
                                onChange={handleChange}
                                helperText="Selecciona el tipo de movimiento"
                            >
                                {tipoMovimiento.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                            <div>
                                <TextField id="input-numero" name="numero" label="Numero" variant="outlined" sx={{ width: "100%" }} value={form.numero} onChange={handleChange} />
                            </div>
                            <div>
                                <TextField
                                    id="select-concepto"
                                    name="concepto"
                                    select
                                    label="Concepto"
                                    defaultValue=""
                                    value={form.concepto}
                                    onChange={handleChange}
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
                                <TextField id="input-valor" name="valor" label="Valor" variant="outlined" sx={{ width: "100%" }} value={form.valor} onChange={handleChange} />
                            </div>
                            <div>
                                <TextField id="input-numero2" name="numero2" label="Numero" variant="outlined" sx={{ width: "100%" }} value={form.numero2} onChange={handleChange} />
                            </div>

                        </form>
                        <div className="flex justify-evenly  mx-10">
                            <button type="button" className="px-4 py-2 bg-primary text-white rounded" onClick={vaciar}> Vaciar </button>
                            <button className="px-4 py-2 bg-primary text-white rounded" onClick={onClose}> Cerrar </button>
                        </div>
                    </div>
                </div>
            </Box>
        </Modal>

    );
}