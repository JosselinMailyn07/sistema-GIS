import { Box, Tab } from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import React, { useState } from 'react';
import { Tablas } from '@/components/layout/Tabla';
import { botones } from '../../layout/botones';
import { Landmark } from 'lucide-react';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';


export const Compras = () => {
    const campos = [
        { key: "radio", label: "" },
        { key: "id", label: "ID" },
        { key: "nombre", label: "Nombre" },
        { key: "edad", label: "Edad" },
        { key: "correo", label: "Correo" }
    ];
    const datos = [
        { id: 1, nombre: "Juan", edad: 28, correo: "hola@example.com" },
        { id: 2, nombre: "Juan", edad: 28, correo: "hola@example.com" },
        { id: 3, nombre: "Juan", edad: 28, correo: "hola@ejemplo.com" },
        { id: 4, nombre: "david", edad: 28, correo: "hola@example.com" },
    ];

    const camposCompras = [
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

    const datosCompras = [
        { radio: false, id: "CMP001", bodega: "Almacén Central", descripcion: "Clavos galvanizados", unidad: "Caja", iva: 19, bulto: 3, cantidad: 50, precio: 1200, descuento: 5, total: 57000 },
        { radio: false, id: "CMP002", bodega: "Almacén Norte", descripcion: "Madera pino", unidad: "Metro", iva: 19, bulto: 1, cantidad: 100, precio: 3500, descuento: 10, total: 315000 },
        { radio: false, id: "CMP003", bodega: "Almacén Sur", descripcion: "Pintura esmalte", unidad: "Litro", iva: 19, bulto: 5, cantidad: 20, precio: 8000, descuento: 0, total: 160000 }
    ];

    const camposRecepciones = [
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

    const datosRecepciones = [
        { radio: false, id: "REC001", bodega: "Almacén Principal", descripcion: "Tubería PVC", unidad: "Metro", iva: 19, bulto: 4, cantidad: 60, precio: 2500, descuento: 5, total: 142500 },
        { radio: false, id: "REC002", bodega: "Almacén Secundario", descripcion: "Cemento Portland", unidad: "Saco", iva: 19, bulto: 10, cantidad: 100, precio: 20000, descuento: 8, total: 1840000 },
        { radio: false, id: "REC003", bodega: "Almacén Central", descripcion: "Pintura látex", unidad: "Galón", iva: 19, bulto: 3, cantidad: 30, precio: 12000, descuento: 0, total: 360000 }
    ];
    
    const camposOrdenesCompra = [
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

    const datosOrdenesCompra = [
        { radio: false, id: "OC001", bodega: "Almacén A", descripcion: "Láminas de acero", unidad: "Placa", iva: 19, bulto: 2, cantidad: 25, precio: 45000, descuento: 7, total: 1046250 },
        { radio: false, id: "OC002", bodega: "Almacén B", descripcion: "Tornillos hexagonales", unidad: "Caja", iva: 19, bulto: 5, cantidad: 100, precio: 3000, descuento: 5, total: 285000 },
        { radio: false, id: "OC003", bodega: "Almacén C", descripcion: "Cables eléctricos", unidad: "Metro", iva: 19, bulto: 3, cantidad: 200, precio: 1500, descuento: 0, total: 357000 }
    ];

    const camposRequisiciones = [
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

    const datosRequisiciones = [
        { radio: false, id: "REQ001", bodega: "Bodega Central", descripcion: "Martillos industriales", unidad: "Unidad", iva: 19, bulto: 1, cantidad: 15, precio: 12000, descuento: 5, total: 171000 },
        { radio: false, id: "REQ002", bodega: "Bodega Norte", descripcion: "Taladros eléctricos", unidad: "Unidad", iva: 19, bulto: 2, cantidad: 8, precio: 45000, descuento: 10, total: 307200 },
        { radio: false, id: "REQ003", bodega: "Bodega Sur", descripcion: "Lijas para madera", unidad: "Paquete", iva: 19, bulto: 5, cantidad: 50, precio: 2000, descuento: 0, total: 119000 }
    ];

    const camposProductos = [
        { key: "radio", label: "" },
        { key: "id", label: "ID" },
        { key: "nombre", label: "Nombre" },
        { key: "unidad", label: "Unidad" },
        { key: "grupo", label: "Grupo" },
        { key: "existencias", label: "Existencias" }
    ];

    const datosProductos = [
        { radio: false, id: "PRD001", nombre: "Cemento Portland", unidad: "Saco", grupo: "Materiales", existencias: 120 },
        { radio: false, id: "PRD002", nombre: "Martillo", unidad: "Unidad", grupo: "Herramientas", existencias: 45 },
        { radio: false, id: "PRD003", nombre: "Pintura Látex", unidad: "Galón", grupo: "Pinturas", existencias: 30 }
    ];

    const camposProveedores = [
        { key: "radio", label: "" },
        { key: "id", label: "ID" },
        { key: "nombre", label: "Nombre" },
        { key: "telefonos", label: "Teléfonos" },
        { key: "correo", label: "Correo" },
        { key: "ruc", label: "RUC" }
    ];

    const datosProveedores = [
        { radio: false, id: "PRV001", nombre: "Suministros Industriales S.A.", telefonos: "0223456789, 0998765432", correo: "contacto@suministros.com", ruc: "1790012345001" },
        { radio: false, id: "PRV002", nombre: "Ferretería Central", telefonos: "0234567890", correo: "ventas@ferreteriacentral.com", ruc: "1790098765001" },
        { radio: false, id: "PRV003", nombre: "Distribuidora El Martillo", telefonos: "0245678901, 0987654321", correo: "info@elmartillo.com", ruc: "1790054321001" }
    ];

    const camposPagos = [
        { key: "radio", label: "" },
        { key: "numero", label: "Número" },
        { key: "tipo", label: "Tipo" },
        { key: "emision", label: "Emisión" },
        { key: "vencimiento", label: "Vencimiento" },
        { key: "referencia", label: "Referencia" },
        { key: "valor", label: "Valor" },
        { key: "saldo", label: "Saldo" }
    ];

    const datosPagos = [
        { radio: false, numero: "PAG001", tipo: "Transferencia", emision: "2025-06-15", vencimiento: "2025-06-20", referencia: "TRX12345", valor: 500000, saldo: 150000 },
        { radio: false, numero: "PAG002", tipo: "Cheque", emision: "2025-06-18", vencimiento: "2025-07-01", referencia: "CHK54321", valor: 300000, saldo: 0 },
        { radio: false, numero: "PAG003", tipo: "Efectivo", emision: "2025-06-20", vencimiento: "2025-06-20", referencia: "EFV67890", valor: 200000, saldo: 200000 }
    ];

    const camposMovimientosProveedores = [
        { key: "radio", label: "" },
        { key: "ID", label: "Código Proveedor" },
        { key: "tipo", label: "Tipo" },
        { key: "numero", label: "Número" },
        { key: "emision", label: "Emisión" },
        { key: "vencimiento", label: "Vencimiento" },
        { key: "comprobante", label: "Comprobante" },
        { key: "valor", label: "Valor" },
        { key: "origen", label: "Origen" },
        { key: "documento", label: "Ref. Documento" },
        { key: "concepto", label: "Concepto" },
    ];
    
    const datosMovimientosProveedores = [
        { radio: false, ID: "PRV001", tipo: "Factura", numero: "F001-12345", emision: "2025-05-10", vencimiento: "2025-06-10", comprobante: "CMP67890", valor: 750000, origen: "Compras", documento: "ORD123", concepto: "Compra de materiales de construcción" },
        { radio: false, ID: "PRV002", tipo: "Nota de Crédito", numero: "NC001-67890", emision: "2025-05-15", vencimiento: "2025-06-15", comprobante: "CMP67891", valor: -150000, origen: "Devoluciones", documento: "DEV456", concepto: "Devolución parcial de mercadería" },
        { radio: false, ID: "PRV003", tipo: "Recibo", numero: "RC001-11223", emision: "2025-06-01", vencimiento: "2025-06-01", comprobante: "CMP67892", valor: 500000, origen: "Pagos", documento: "PAY789", concepto: "Pago parcial factura" }
    ];

    const camposGruposProveedores= [
        { key: "radio", label: "" },
        { key: "id", label: "ID" },
        { key: "nombre", label: "Nombre" },
    ];

    const datosGruposProveedores = [
        { radio: false, id: "GP001", nombre: "Proveedores Locales" },
        { radio: false, id: "GP002", nombre: "Proveedores Internacionales" },
        { radio: false, id: "GP003", nombre: "Proveedores Especializados" }
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
                        <Tab icon={<Landmark />} label="Compras" value='1' />
                        <Tab icon={<LibraryBooksIcon />} label="Recepciones" value='2' />
                        <Tab icon={<Landmark />} label="Ordenes de Compra" value='3' />
                        <Tab icon={<LibraryBooksIcon />} label="Requisiciones" value='4' />
                        <Tab icon={<Landmark />} label="Registro de Productos" value='5' />
                        <Tab icon={<LibraryBooksIcon />} label="Ajustes de Precios" value='6' />
                        <Tab icon={<Landmark />} label="Proveedores" value='7' />
                        <Tab icon={<LibraryBooksIcon />} label="Pagos" value='8' />
                        <Tab icon={<LibraryBooksIcon />} label="Movimientos Proveedores" value='9' />
                        <Tab icon={<Landmark />} label="Grupos Proveedores" value='10' />
                    </TabList>
                </Box>
                <TabPanel value='1'>
                    <div className="grid grid-cols-2 gap-4 p-4">
                        <div>
                            {botones({ titulo: "Compras", onSearch: setSearchTerm })}

                        </div>
                        <div className='col-span-2 p-5 border rounded shadow-xl'>
                            <Tablas campos={camposCompras} datos={datosCompras} />
                        </div>
                    </div>
                </TabPanel>
                <TabPanel value='2'>
                    <div className="grid grid-cols-2 gap-4 p-4">
                        <div>
                            {botones({ titulo: "Recepciones", onSearch: setSearchTerm })}
                        </div>
                        <div className='col-span-2 p-5 border rounded shadow-xl'>
                            <Tablas campos={camposRecepciones} datos={datosRecepciones} />
                        </div>
                    </div>
                </TabPanel>
                <TabPanel value='3'>
                    <div className="grid grid-cols-2 gap-4 p-4">
                        <div>
                            {botones({ titulo: "Ordenes de Compra", onSearch: setSearchTerm })}
                        </div>
                        <div className='col-span-2 p-5 border rounded shadow-xl'>
                            <Tablas campos={camposOrdenesCompra} datos={datosOrdenesCompra} />
                        </div>
                    </div>
                </TabPanel>
                <TabPanel value='4'>
                    <div className="grid grid-cols-2 gap-4 p-4">
                        <div>
                            {botones({ titulo: "Requisiciones", onSearch: setSearchTerm })}
                        </div>
                        <div className='col-span-2 p-5 border rounded shadow-xl'>
                            <Tablas campos={camposRequisiciones} datos={datosRequisiciones} />
                        </div>
                    </div>
                </TabPanel>
                <TabPanel value='5'>
                    <div className="grid grid-cols-2 gap-4 p-4">
                        <div>
                            {botones({ titulo: "Registro de Productos", onSearch: setSearchTerm })}
                        </div>
                        <div className='col-span-2 p-5 border rounded shadow-xl'>
                            <Tablas campos={camposProductos} datos={datosProductos} />
                        </div>
                    </div>
                </TabPanel>
                <TabPanel value='6'>
                    <div className="grid grid-cols-2 gap-4 p-4">
                        <div>
                            {botones({ titulo: "Ajustes de Precios", onSearch: setSearchTerm })}
                        </div>
                        <div className='col-span-2 p-5 border rounded shadow-xl'>
                            <Tablas campos={campos} datos={datos} />
                        </div>
                    </div>
                </TabPanel>
                <TabPanel value='7'>
                    <div className="grid grid-cols-2 gap-4 p-4">
                        <div>
                            {botones({ titulo: "Proveedores", onSearch: setSearchTerm })}
                        </div>
                        <div className='col-span-2 p-5 border rounded shadow-xl'>
                            <Tablas campos={camposProveedores} datos={datosProveedores} />
                        </div>
                    </div>
                </TabPanel>
                <TabPanel value='8'>
                    <div className="grid grid-cols-2 gap-4 p-4">
                        <div>
                            {botones({ titulo: "Pagos", onSearch: setSearchTerm })}
                        </div>
                        <div className='col-span-2 p-5 border rounded shadow-xl'>
                            <Tablas campos={camposPagos} datos={datosPagos} />
                        </div>
                    </div>
                </TabPanel>
                <TabPanel value='9'>
                    <div className="grid grid-cols-2 gap-4 p-4">
                        <div>
                            {botones({ titulo: "Movimientos Proveedores", onSearch: setSearchTerm })}
                        </div>
                        <div className='col-span-2 p-5 border rounded shadow-xl'>
                            <Tablas campos={camposMovimientosProveedores} datos={datosMovimientosProveedores} />
                        </div>
                    </div>
                </TabPanel>
                <TabPanel value='10'>
                    <div className="grid grid-cols-2 gap-4 p-4">
                        <div>
                            {botones({ titulo: "Grupos Proveedores", onSearch: setSearchTerm })}
                        </div>
                        <div className='col-span-2 p-5 border rounded shadow-xl'>
                            <Tablas campos={camposGruposProveedores} datos={datosGruposProveedores} />
                        </div>
                    </div>
                </TabPanel>

            </TabContext>
        </Box>
    );
};