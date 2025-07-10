import { Box, Tab } from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import React, { useState } from 'react';
import { Tablas } from '@/components/layout/Tabla';
import { botones } from '../../layout/botones';
import { Landmark } from 'lucide-react';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';


export const Ventas = () => {
    const campos = [
        { key: "radio", label: "" },
        { key: "id", label: "ID" },
        { key: "nombre", label: "Bodega" },
        { key: "edad", label: "Edad" },
        { key: "correo", label: "Correo" }
    ];
    const datos = [
        { id: 1, nombre: "Juan", edad: 28, correo: "hola@example.com" },
        { id: 2, nombre: "Juan", edad: 28, correo: "hola@example.com" },
        { id: 3, nombre: "Juan", edad: 28, correo: "hola@ejemplo.com" },
        { id: 4, nombre: "david", edad: 28, correo: "hola@example.com" },
    ];

    const camposFactura = [
        { key: "radio", label: "" },
        { key: "id", label: "ID" },
        { key: "bodega", label: "Bodega" },
        { key: "descripcion", label: "Descripción" },
        { key: "unidad", label: "Unidad" },
        { key: "iva", label: "IVA" },
        { key: "bulto", label: "Bulto" },
        { key: "cantidad", label: "Cantidad" },
        { key: "precio", label: "Precio" },
        { key: "descuento", label: "Dcto." },
        { key: "total", label: "Total" }
    ];
    const datosFactura = [
        { radio: false, id: "001", bodega: "Central", descripcion: "Caja de tornillos", unidad: "Caja", iva: 19, bulto: 2, cantidad: 10, precio: 1500, descuento: 5, total: 14250 },
        { radio: false, id: "002", bodega: "Norte", descripcion: "Tubos de PVC", unidad: "Metro", iva: 19, bulto: 1, cantidad: 30, precio: 2000, descuento: 10, total: 54000 },
        { radio: false, id: "003", bodega: "Sur", descripcion: "Pintura acrílica", unidad: "Galón", iva: 19, bulto: 3, cantidad: 5, precio: 8000, descuento: 0, total: 40000 }
    ];

    const camposNotasEntrega = [
        { key: "radio", label: "" },
        { key: "id", label: "ID" },
        { key: "bodega", label: "Bodega" },
        { key: "descripcion", label: "Descripción" },
        { key: "unidad", label: "Unidad" },
        { key: "iva", label: "IVA" },
        { key: "bulto", label: "Bulto" },
        { key: "cantidad", label: "Cantidad" },
        { key: "entregado", label: "Entregado" },
        { key: "precio", label: "Precio" },
        { key: "descuento", label: "Dcto." },
        { key: "total", label: "Total" }
    ];

    const datosNotasEntrega = [
        { radio: false, id: "NE001", bodega: "Principal", descripcion: "Clavos 2 pulgadas", unidad: "Caja", iva: 19, bulto: 1, cantidad: 20, entregado: 20, precio: 1200, descuento: 0, total: 24000 },
        { radio: false, id: "NE002", bodega: "Secundaria", descripcion: "Cemento gris", unidad: "Saco", iva: 19, bulto: 5, cantidad: 15, entregado: 10, precio: 25000, descuento: 5, total: 356250 },
        { radio: false, id: "NE003", bodega: "Zona Sur", descripcion: "Arena fina", unidad: "m³", iva: 19, bulto: 2, cantidad: 8, entregado: 8, precio: 18000, descuento: 10, total: 129600 }
    ];

    const camposPedidos = [
        { key: "radio", label: "" },
        { key: "id", label: "ID" },
        { key: "bodega", label: "Bodega" },
        { key: "descripcion", label: "Descripción" },
        { key: "unidad", label: "Unidad" },
        { key: "iva", label: "IVA" },
        { key: "bulto", label: "Bulto" },
        { key: "cantidad", label: "Cantidad" },
        { key: "precio", label: "Precio" },
        { key: "descuento", label: "Dcto." },
        { key: "total", label: "Total" }
    ];

    const datosPedidos = [
        { radio: false, id: "P001", bodega: "Almacén A", descripcion: "Ladrillos huecos", unidad: "Unidad", iva: 19, bulto: 10, cantidad: 500, precio: 300, descuento: 5, total: 142500 },
        { radio: false, id: "P002", bodega: "Almacén B", descripcion: "Paneles de yeso", unidad: "Hoja", iva: 19, bulto: 2, cantidad: 40, precio: 15000, descuento: 10, total: 540000 },
        { radio: false, id: "P003", bodega: "Almacén C", descripcion: "Mallas electrosoldadas", unidad: "Rollo", iva: 19, bulto: 1, cantidad: 10, precio: 22000, descuento: 0, total: 220000 }
    ];


    const camposCotizaciones = [
        { key: "radio", label: "" },
        { key: "id", label: "ID" },
        { key: "bodega", label: "Bodega" },
        { key: "descripcion", label: "Descripción" },
        { key: "unidad", label: "Unidad" },
        { key: "iva", label: "IVA" },
        { key: "bulto", label: "Bulto" },
        { key: "cantidad", label: "Cantidad" },
        { key: "precio", label: "Precio" },
        { key: "descuento", label: "Dcto." },
        { key: "total", label: "Total" }
    ];

    const datosCotizaciones = [
        { radio: false, id: "COT001", bodega: "Depósito Norte", descripcion: "Varilla de acero 3/8", unidad: "Unidad", iva: 19, bulto: 4, cantidad: 100, precio: 1800, descuento: 5, total: 171000 },
        { radio: false, id: "COT002", bodega: "Depósito Sur", descripcion: "Teja plástica ondulada", unidad: "Unidad", iva: 19, bulto: 6, cantidad: 50, precio: 6000, descuento: 8, total: 276000 },
        { radio: false, id: "COT003", bodega: "Depósito Central", descripcion: "Silicona transparente", unidad: "Tubo", iva: 19, bulto: 1, cantidad: 25, precio: 2500, descuento: 0, total: 62500 }
    ];

    const camposMovimientosClientes = [
        { key: "radio", label: "" },
        { key: "id", label: "Código Cliente" },
        { key: "tipo", label: "Tipo" },
        { key: "numero", label: "Número" },
        { key: "emision", label: "Emisión" },
        { key: "vencimiento", label: "Vencimiento" },
        { key: "comprobante", label: "Comprobante" },
        { key: "valor", label: "Valor" },
        { key: "origen", label: "Origen" },
        { key: "documento", label: "Ref. Documento" },
        { key: "concepto", label: "Concepto" },
        { key: "norigen", label: "Número de Origen" }
    ];

    const datosMovimientosClientes = [
        { radio: false, id: "CL001", tipo: "Factura", numero: "F001-000123", emision: "2025-06-01", vencimiento: "2025-06-30", comprobante: "CMP12345", valor: 150000, origen: "Ventas", documento: "PED001", concepto: "Venta de materiales de construcción", norigen: "ORD001" },
        { radio: false, id: "CL002", tipo: "Nota de Crédito", numero: "NC001-000045", emision: "2025-06-10", vencimiento: "2025-07-10", comprobante: "CMP12346", valor: -25000, origen: "Devoluciones", documento: "DEV003", concepto: "Devolución parcial de mercadería", norigen: "ORD002" },
        { radio: false, id: "CL003", tipo: "Recibo", numero: "RC001-000078", emision: "2025-07-01", vencimiento: "2025-07-01", comprobante: "CMP12347", valor: 75000, origen: "Cobranzas", documento: "COB005", concepto: "Pago parcial de factura", norigen: "ORD003" }
    ];

    const camposEstimadoVentas = [
        { key: "radio", label: "" },
        { key: "vendedor", label: "Vendedor" },
        { key: "nombre", label: "Nombre" },
    ];

    const datosEstimadoVentas = [
        { radio: false, vendedor: "V001", nombre: "Luis Ramírez" },
        { radio: false, vendedor: "V002", nombre: "Andrea Gómez" },
        { radio: false, vendedor: "V003", nombre: "Pedro Morales" }
    ];

    const camposGruposClientes= [
        { key: "radio", label: "" },
        { key: "id", label: "ID" },
        { key: "nombre", label: "Nombre" },
    ];
    const datosGruposClientes = [
        { radio: false, id: "G001", nombre: "Clientes Premium" },
        { radio: false, id: "G002", nombre: "Clientes Minoristas" },
        { radio: false, id: "G003", nombre: "Clientes Corporativos" }
    ];


    const [value, setValue] = useState('1');
    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue)
    };
    const [searchTerm, setSearchTerm] = useState('');
    const filteredBancos = datos.filter(datos =>
        datos.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
        datos.id.toString().includes(searchTerm)
    );


    return (
        <Box >
            <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList aria-label='example' onChange={handleChange}>
                        <Tab icon={<Landmark />} label="Facturas" value='1' />
                        <Tab icon={<LibraryBooksIcon />} label="Notas de Entrega" value='2' />
                        <Tab icon={<Landmark />} label="Pedidos" value='3' />
                        <Tab icon={<LibraryBooksIcon />} label="Cotizaciones" value='4' />
                        <Tab icon={<Landmark />} label="Clientes" value='5' />
                        <Tab icon={<LibraryBooksIcon />} label="Cobranzas" value='6' />
                        <Tab icon={<Landmark />} label="Movimientos Clientes" value='7' />
                        <Tab icon={<LibraryBooksIcon />} label="Rutas Visitas" value='8' />
                        <Tab icon={<LibraryBooksIcon />} label="Mantenimiento Rutas" value='9' />
                        <Tab icon={<Landmark />} label="Estimado de Ventas" value='10' />
                        <Tab icon={<LibraryBooksIcon />} label="Causa No Ventas" value='11' />
                        <Tab icon={<Landmark />} label="Grupos de Clientes" value='12' />
                    </TabList>
                </Box>
                <TabPanel value='1'>
                    <div className="grid grid-cols-2 gap-4 p-4">
                        <div>
                            {botones({ titulo: "Facturas", onSearch: setSearchTerm })}

                        </div>
                        <div className='col-span-2 p-5 border rounded shadow-xl'>
                            <Tablas campos={camposFactura} datos={datosFactura} />
                        </div>
                    </div>
                </TabPanel>
                <TabPanel value='2'>
                    <div className="grid grid-cols-2 gap-4 p-4">
                        <div>
                            {botones({ titulo: "Notas de Entrega", onSearch: setSearchTerm })}
                        </div>
                        <div className='col-span-2 p-5 border rounded shadow-xl'>
                            <Tablas campos={camposNotasEntrega} datos={datosNotasEntrega} />
                        </div>
                    </div>
                </TabPanel>
                <TabPanel value='3'>
                    <div className="grid grid-cols-2 gap-4 p-4">
                        <div>
                            {botones({ titulo: "Pedidos", onSearch: setSearchTerm })}
                        </div>
                        <div className='col-span-2 p-5 border rounded shadow-xl'>
                            <Tablas campos={camposPedidos} datos={datosPedidos} />
                        </div>
                    </div>
                </TabPanel>
                <TabPanel value='4'>
                    <div className="grid grid-cols-2 gap-4 p-4">
                        <div>
                            {botones({ titulo: "Cotizaciones", onSearch: setSearchTerm })}
                        </div>
                        <div className='col-span-2 p-5 border rounded shadow-xl'>
                            <Tablas campos={camposCotizaciones} datos={datosCotizaciones} />
                        </div>
                    </div>
                </TabPanel>
                <TabPanel value='5'>
                    <div className="grid grid-cols-2 gap-4 p-4">
                        <div>
                            {botones({ titulo: "Clientes", onSearch: setSearchTerm })}
                        </div>
                        <div className='col-span-2 p-5 border rounded shadow-xl'>
                            <Tablas campos={campos} datos={datos} />
                        </div>
                    </div>
                </TabPanel>
                <TabPanel value='6'>
                    <div className="grid grid-cols-2 gap-4 p-4">
                        <div>
                            {botones({ titulo: "Cobranzas", onSearch: setSearchTerm })}
                        </div>
                        <div className='col-span-2 p-5 border rounded shadow-xl'>
                            <Tablas campos={campos} datos={datos} />
                        </div>
                    </div>
                </TabPanel>
                <TabPanel value='7'>
                    <div className="grid grid-cols-2 gap-4 p-4">
                        <div>
                            {botones({ titulo: "Movimientos Clientes", onSearch: setSearchTerm })}
                        </div>
                        <div className='col-span-2 p-5 border rounded shadow-xl'>
                            <Tablas campos={camposMovimientosClientes} datos={datosMovimientosClientes} />
                        </div>
                    </div>
                </TabPanel>
                <TabPanel value='8'>
                    <div className="grid grid-cols-2 gap-4 p-4">
                        <div>
                            {botones({ titulo: "Rutas Visitas", onSearch: setSearchTerm })}
                        </div>
                        <div className='col-span-2 p-5 border rounded shadow-xl'>
                            <Tablas campos={campos} datos={datos} />
                        </div>
                    </div>
                </TabPanel>
                <TabPanel value='9'>
                    <div className="grid grid-cols-2 gap-4 p-4">
                        <div>
                            {botones({ titulo: "Mantenimiento Rutas", onSearch: setSearchTerm })}
                        </div>
                        <div className='col-span-2 p-5 border rounded shadow-xl'>
                            <Tablas campos={campos} datos={datos} />
                        </div>
                    </div>
                </TabPanel>
                <TabPanel value='10'>
                    <div className="grid grid-cols-2 gap-4 p-4">
                        <div>
                            {botones({ titulo: "Estimado de Ventas", onSearch: setSearchTerm })}
                        </div>
                        <div className='col-span-2 p-5 border rounded shadow-xl'>
                            <Tablas campos={camposEstimadoVentas} datos={datosEstimadoVentas} />
                        </div>
                    </div>
                </TabPanel>
                <TabPanel value='11'>
                    <div className="grid grid-cols-2 gap-4 p-4">
                        <div>
                            {botones({ titulo: "Causa No Ventas", onSearch: setSearchTerm })}
                        </div>
                        <div className='col-span-2 p-5 border rounded shadow-xl'>
                            <Tablas campos={campos} datos={datos} />
                        </div>
                    </div>
                </TabPanel>
                <TabPanel value='12'>
                    <div className="grid grid-cols-2 gap-4 p-4">
                        <div>
                            {botones({ titulo: "Grupos de Clientes", onSearch: setSearchTerm })}
                        </div>
                        <div className='col-span-2 p-5 border rounded shadow-xl'>
                            <Tablas campos={camposGruposClientes} datos={datosGruposClientes} />
                        </div>
                    </div>
                </TabPanel>

            </TabContext>
        </Box>
    );
};