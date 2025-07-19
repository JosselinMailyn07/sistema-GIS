import { Box, Tab } from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import React, { useState } from 'react';
import { Tablas } from '@/components/layout/Tabla';
import { botones } from '../ventas/botonesVentas';
import { Landmark } from 'lucide-react';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import { Button } from '@/components/ui/button';
import { FaSave } from "react-icons/fa";

export const Compras = () => {

    // Estado para el formulario de nueva compra
const [nuevaCompra, setNuevaCompra] = useState({
    id: "",
    bodega: "",
    descripcion: "",
    unidad: "",
    iva: "",
    bulto: "",
    cantidad: "",
    precio: "",
    descuento: "",
    total: ""
});

const handleChangeCompra = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNuevaCompra({ ...nuevaCompra, [e.target.name]: e.target.value });
};

const formularioNuevaCompra = (
    <form className="grid grid-cols-2 gap-4 p-4">
        <div>
            <label>ID</label>
            <input name="id" value={nuevaCompra.id} onChange={handleChangeCompra} className="border rounded px-2 py-1 w-full" />
        </div>
        <div>
            <label>Bodega</label>
            <input name="bodega" value={nuevaCompra.bodega} onChange={handleChangeCompra} className="border rounded px-2 py-1 w-full" />
        </div>
        <div>
            <label>Descripción</label>
            <input name="descripcion" value={nuevaCompra.descripcion} onChange={handleChangeCompra} className="border rounded px-2 py-1 w-full" />
        </div>
        <div>
            <label>Unidad</label>
            <input name="unidad" value={nuevaCompra.unidad} onChange={handleChangeCompra} className="border rounded px-2 py-1 w-full" />
        </div>
        <div>
            <label>IVA</label>
            <input name="iva" value={nuevaCompra.iva} onChange={handleChangeCompra} className="border rounded px-2 py-1 w-full" />
        </div>
        <div>
            <label>Bulto</label>
            <input name="bulto" value={nuevaCompra.bulto} onChange={handleChangeCompra} className="border rounded px-2 py-1 w-full" />
        </div>
        <div>
            <label>Cantidad</label>
            <input name="cantidad" value={nuevaCompra.cantidad} onChange={handleChangeCompra} className="border rounded px-2 py-1 w-full" />
        </div>
        <div>
            <label>Precio</label>
            <input name="precio" value={nuevaCompra.precio} onChange={handleChangeCompra} className="border rounded px-2 py-1 w-full" />
        </div>
        <div>
            <label>Descuento</label>
            <input name="descuento" value={nuevaCompra.descuento} onChange={handleChangeCompra} className="border rounded px-2 py-1 w-full" />
        </div>
        <div>
            <label>Total</label>
            <input name="total" value={nuevaCompra.total} onChange={handleChangeCompra} className="border rounded px-2 py-1 w-full" />
        </div>
        <div className="col-span-2 flex justify-end gap-2 mt-4">
            <Button
                type="button"
                className="px-4 py-2 bg-success text-white rounded flex items-center"
            >
                <FaSave className="mr-2" /> Guardar
            </Button>
        </div>
    </form>
);

// Estado para el formulario de nueva recepción
const [nuevaRecepcion, setNuevaRecepcion] = useState({
    id: "",
    bodega: "",
    descripcion: "",
    unidad: "",
    iva: "",
    bulto: "",
    cantidad: "",
    precio: "",
    descuento: "",
    total: ""
});

const handleChangeRecepcion = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNuevaRecepcion({ ...nuevaRecepcion, [e.target.name]: e.target.value });
};

const formularioNuevaRecepcion = (
    <form className="grid grid-cols-2 gap-4 p-4">
        <div>
            <label>ID</label>
            <input name="id" value={nuevaRecepcion.id} onChange={handleChangeRecepcion} className="border rounded px-2 py-1 w-full" />
        </div>
        <div>
            <label>Bodega</label>
            <input name="bodega" value={nuevaRecepcion.bodega} onChange={handleChangeRecepcion} className="border rounded px-2 py-1 w-full" />
        </div>
        <div>
            <label>Descripción</label>
            <input name="descripcion" value={nuevaRecepcion.descripcion} onChange={handleChangeRecepcion} className="border rounded px-2 py-1 w-full" />
        </div>
        <div>
            <label>Unidad</label>
            <input name="unidad" value={nuevaRecepcion.unidad} onChange={handleChangeRecepcion} className="border rounded px-2 py-1 w-full" />
        </div>
        <div>
            <label>IVA</label>
            <input name="iva" value={nuevaRecepcion.iva} onChange={handleChangeRecepcion} className="border rounded px-2 py-1 w-full" />
        </div>
        <div>
            <label>Bulto</label>
            <input name="bulto" value={nuevaRecepcion.bulto} onChange={handleChangeRecepcion} className="border rounded px-2 py-1 w-full" />
        </div>
        <div>
            <label>Cantidad</label>
            <input name="cantidad" value={nuevaRecepcion.cantidad} onChange={handleChangeRecepcion} className="border rounded px-2 py-1 w-full" />
        </div>
        <div>
            <label>Precio</label>
            <input name="precio" value={nuevaRecepcion.precio} onChange={handleChangeRecepcion} className="border rounded px-2 py-1 w-full" />
        </div>
        <div>
            <label>Descuento</label>
            <input name="descuento" value={nuevaRecepcion.descuento} onChange={handleChangeRecepcion} className="border rounded px-2 py-1 w-full" />
        </div>
        <div>
            <label>Total</label>
            <input name="total" value={nuevaRecepcion.total} onChange={handleChangeRecepcion} className="border rounded px-2 py-1 w-full" />
        </div>
        <div className="col-span-2 flex justify-end gap-2 mt-4">
            <Button
                type="button"
                className="px-4 py-2 bg-success text-white rounded flex items-center"
            >
                <FaSave className="mr-2" /> Guardar
            </Button>
        </div>
    </form>
);

// Estado para el formulario de nueva orden de compra
const [nuevaOrdenCompra, setNuevaOrdenCompra] = useState({
    id: "",
    bodega: "",
    descripcion: "",
    unidad: "",
    iva: "",
    bulto: "",
    cantidad: "",
    precio: "",
    descuento: "",
    total: ""
});

const handleChangeOrdenCompra = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNuevaOrdenCompra({ ...nuevaOrdenCompra, [e.target.name]: e.target.value });
};

const formularioNuevaOrdenCompra = (
    <form className="grid grid-cols-2 gap-4 p-4">
        <div>
            <label>ID</label>
            <input name="id" value={nuevaOrdenCompra.id} onChange={handleChangeOrdenCompra} className="border rounded px-2 py-1 w-full" />
        </div>
        <div>
            <label>Bodega</label>
            <input name="bodega" value={nuevaOrdenCompra.bodega} onChange={handleChangeOrdenCompra} className="border rounded px-2 py-1 w-full" />
        </div>
        <div>
            <label>Descripción</label>
            <input name="descripcion" value={nuevaOrdenCompra.descripcion} onChange={handleChangeOrdenCompra} className="border rounded px-2 py-1 w-full" />
        </div>
        <div>
            <label>Unidad</label>
            <input name="unidad" value={nuevaOrdenCompra.unidad} onChange={handleChangeOrdenCompra} className="border rounded px-2 py-1 w-full" />
        </div>
        <div>
            <label>IVA</label>
            <input name="iva" value={nuevaOrdenCompra.iva} onChange={handleChangeOrdenCompra} className="border rounded px-2 py-1 w-full" />
        </div>
        <div>
            <label>Bulto</label>
            <input name="bulto" value={nuevaOrdenCompra.bulto} onChange={handleChangeOrdenCompra} className="border rounded px-2 py-1 w-full" />
        </div>
        <div>
            <label>Cantidad</label>
            <input name="cantidad" value={nuevaOrdenCompra.cantidad} onChange={handleChangeOrdenCompra} className="border rounded px-2 py-1 w-full" />
        </div>
        <div>
            <label>Precio</label>
            <input name="precio" value={nuevaOrdenCompra.precio} onChange={handleChangeOrdenCompra} className="border rounded px-2 py-1 w-full" />
        </div>
        <div>
            <label>Descuento</label>
            <input name="descuento" value={nuevaOrdenCompra.descuento} onChange={handleChangeOrdenCompra} className="border rounded px-2 py-1 w-full" />
        </div>
        <div>
            <label>Total</label>
            <input name="total" value={nuevaOrdenCompra.total} onChange={handleChangeOrdenCompra} className="border rounded px-2 py-1 w-full" />
        </div>
        <div className="col-span-2 flex justify-end gap-2 mt-4">
            <Button
                type="button"
                className="px-4 py-2 bg-success text-white rounded flex items-center"
            >
                <FaSave className="mr-2" /> Guardar
            </Button>
        </div>
    </form>
);

// Estado para el formulario de nueva requisición
const [nuevaRequisicion, setNuevaRequisicion] = useState({
    id: "",
    bodega: "",
    descripcion: "",
    unidad: "",
    iva: "",
    bulto: "",
    cantidad: "",
    precio: "",
    descuento: "",
    total: ""
});

const handleChangeRequisicion = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNuevaRequisicion({ ...nuevaRequisicion, [e.target.name]: e.target.value });
};

const formularioNuevaRequisicion = (
    <form className="grid grid-cols-2 gap-4 p-4">
        <div>
            <label>ID</label>
            <input name="id" value={nuevaRequisicion.id} onChange={handleChangeRequisicion} className="border rounded px-2 py-1 w-full" />
        </div>
        <div>
            <label>Bodega</label>
            <input name="bodega" value={nuevaRequisicion.bodega} onChange={handleChangeRequisicion} className="border rounded px-2 py-1 w-full" />
        </div>
        <div>
            <label>Descripción</label>
            <input name="descripcion" value={nuevaRequisicion.descripcion} onChange={handleChangeRequisicion} className="border rounded px-2 py-1 w-full" />
        </div>
        <div>
            <label>Unidad</label>
            <input name="unidad" value={nuevaRequisicion.unidad} onChange={handleChangeRequisicion} className="border rounded px-2 py-1 w-full" />
        </div>
        <div>
            <label>IVA</label>
            <input name="iva" value={nuevaRequisicion.iva} onChange={handleChangeRequisicion} className="border rounded px-2 py-1 w-full" />
        </div>
        <div>
            <label>Bulto</label>
            <input name="bulto" value={nuevaRequisicion.bulto} onChange={handleChangeRequisicion} className="border rounded px-2 py-1 w-full" />
        </div>
        <div>
            <label>Cantidad</label>
            <input name="cantidad" value={nuevaRequisicion.cantidad} onChange={handleChangeRequisicion} className="border rounded px-2 py-1 w-full" />
        </div>
        <div>
            <label>Precio</label>
            <input name="precio" value={nuevaRequisicion.precio} onChange={handleChangeRequisicion} className="border rounded px-2 py-1 w-full" />
        </div>
        <div>
            <label>Descuento</label>
            <input name="descuento" value={nuevaRequisicion.descuento} onChange={handleChangeRequisicion} className="border rounded px-2 py-1 w-full" />
        </div>
        <div>
            <label>Total</label>
            <input name="total" value={nuevaRequisicion.total} onChange={handleChangeRequisicion} className="border rounded px-2 py-1 w-full" />
        </div>
        <div className="col-span-2 flex justify-end gap-2 mt-4">
            <Button
                type="button"
                className="px-4 py-2 bg-success text-white rounded flex items-center"
            >
                <FaSave className="mr-2" /> Guardar
            </Button>
        </div>
    </form>
);

// Estado para el formulario de registro de productos
const [nuevoProducto, setNuevoProducto] = useState({
    id: "",
    nombre: "",
    unidad: "",
    grupo: "",
    existencias: ""
});

const handleChangeProducto = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNuevoProducto({ ...nuevoProducto, [e.target.name]: e.target.value });
};

const formularioNuevoProducto = (
    <form className="grid grid-cols-2 gap-4 p-4">
        <div>
            <label>ID</label>
            <input name="id" value={nuevoProducto.id} onChange={handleChangeProducto} className="border rounded px-2 py-1 w-full" />
        </div>
        <div>
            <label>Nombre</label>
            <input name="nombre" value={nuevoProducto.nombre} onChange={handleChangeProducto} className="border rounded px-2 py-1 w-full" />
        </div>
        <div>
            <label>Unidad</label>
            <input name="unidad" value={nuevoProducto.unidad} onChange={handleChangeProducto} className="border rounded px-2 py-1 w-full" />
        </div>
        <div>
            <label>Grupo</label>
            <input name="grupo" value={nuevoProducto.grupo} onChange={handleChangeProducto} className="border rounded px-2 py-1 w-full" />
        </div>
        <div className="col-span-2">
            <label>Existencias</label>
            <input name="existencias" value={nuevoProducto.existencias} onChange={handleChangeProducto} className="border rounded px-2 py-1 w-full" />
        </div>
        <div className="col-span-2 flex justify-end gap-2 mt-4">
            <Button
                type="button"
                className="px-4 py-2 bg-success text-white rounded flex items-center"
            >
                <FaSave className="mr-2" /> Guardar
            </Button>
        </div>
    </form>
);

// Estado para el formulario de ajustes de precios
const [nuevoAjustePrecio, setNuevoAjustePrecio] = useState({
    id: "",
    nombre: "",
    edad: "",
    correo: ""
});

const handleChangeAjustePrecio = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNuevoAjustePrecio({ ...nuevoAjustePrecio, [e.target.name]: e.target.value });
};

const formularioNuevoAjustePrecio = (
    <form className="grid grid-cols-2 gap-4 p-4">
           <div>
               <label>ID</label>
               <input name="id" value={nuevoAjustePrecio.id} onChange={handleChangeAjustePrecio} className="border rounded px-2 py-1 w-full" />
           </div>
           <div>
               <label>Nombre</label>
               <input name="nombre" value={nuevoAjustePrecio.nombre} onChange={handleChangeAjustePrecio} className="border rounded px-2 py-1 w-full" />
           </div>
           <div>
               <label>Edad</label>
               <input name="edad" value={nuevoAjustePrecio.edad} onChange={handleChangeAjustePrecio} className="border rounded px-2 py-1 w-full" />
           </div>
           <div>
               <label>Correo</label>
               <input name="correo" value={nuevoAjustePrecio.correo} onChange={handleChangeAjustePrecio} className="border rounded px-2 py-1 w-full" />
           </div>
           <div className="col-span-2 flex justify-end gap-2 mt-4">
               <Button
                   type="button"
                   className="px-4 py-2 bg-success text-white rounded flex items-center"
               >
                   <FaSave className="mr-2" /> Guardar
               </Button>
           </div>
       </form>
);

// Estado para el formulario de nuevo proveedor
const [nuevoProveedor, setNuevoProveedor] = useState({
    id: "",
    nombre: "",
    telefonos: "",
    correo: "",
    ruc: ""
});

const handleChangeProveedor = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNuevoProveedor({ ...nuevoProveedor, [e.target.name]: e.target.value });
};

const formularioNuevoProveedor = (
    <form className="grid grid-cols-2 gap-4 p-4">
        <div>
            <label>ID</label>
            <input name="id" value={nuevoProveedor.id} onChange={handleChangeProveedor} className="border rounded px-2 py-1 w-full" />
        </div>
        <div>
            <label>Nombre</label>
            <input name="nombre" value={nuevoProveedor.nombre} onChange={handleChangeProveedor} className="border rounded px-2 py-1 w-full" />
        </div>
        <div>
            <label>Teléfonos</label>
            <input name="telefonos" value={nuevoProveedor.telefonos} onChange={handleChangeProveedor} className="border rounded px-2 py-1 w-full" />
        </div>
        <div>
            <label>Correo</label>
            <input name="correo" value={nuevoProveedor.correo} onChange={handleChangeProveedor} className="border rounded px-2 py-1 w-full" />
        </div>
        <div>
            <label>RUC</label>
            <input name="ruc" value={nuevoProveedor.ruc} onChange={handleChangeProveedor} className="border rounded px-2 py-1 w-full" />
        </div>
        <div className="col-span-2 flex justify-end gap-2 mt-4">
            <Button
                type="button"
                className="px-4 py-2 bg-success text-white rounded flex items-center"
            >
                <FaSave className="mr-2" /> Guardar
            </Button>
        </div>
    </form>
);

// Estado para el formulario de nuevo pago
const [nuevoPago, setNuevoPago] = useState({
    numero: "",
    tipo: "",
    emision: "",
    vencimiento: "",
    referencia: "",
    valor: "",
    saldo: ""
});

const handleChangePago = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNuevoPago({ ...nuevoPago, [e.target.name]: e.target.value });
};

const formularioNuevoPago = (
    <form className="grid grid-cols-2 gap-4 p-4">
        <div>
            <label>Número</label>
            <input name="numero" value={nuevoPago.numero} onChange={handleChangePago} className="border rounded px-2 py-1 w-full" />
        </div>
        <div>
            <label>Tipo</label>
            <input name="tipo" value={nuevoPago.tipo} onChange={handleChangePago} className="border rounded px-2 py-1 w-full" />
        </div>
        <div>
            <label>Emisión</label>
            <input type="date" name="emision" value={nuevoPago.emision} onChange={handleChangePago} className="border rounded px-2 py-1 w-full" />
        </div>
        <div>
            <label>Vencimiento</label>
            <input type="date" name="vencimiento" value={nuevoPago.vencimiento} onChange={handleChangePago} className="border rounded px-2 py-1 w-full" />
        </div>
        <div>
            <label>Referencia</label>
            <input name="referencia" value={nuevoPago.referencia} onChange={handleChangePago} className="border rounded px-2 py-1 w-full" />
        </div>
        <div>
            <label>Valor</label>
            <input name="valor" value={nuevoPago.valor} onChange={handleChangePago} className="border rounded px-2 py-1 w-full" />
        </div>
        <div>
            <label>Saldo</label>
            <input name="saldo" value={nuevoPago.saldo} onChange={handleChangePago} className="border rounded px-2 py-1 w-full" />
        </div>
        <div className="col-span-2 flex justify-end gap-2 mt-4">
            <Button
                type="button"
                className="px-4 py-2 bg-success text-white rounded flex items-center"
            >
                <FaSave className="mr-2" /> Guardar
            </Button>
        </div>
    </form>
);

// Estado para el formulario de nuevo movimiento de proveedor
const [nuevoMovimientoProveedor, setNuevoMovimientoProveedor] = useState({
    id: "",
    tipo: "",
    numero: "",
    emision: "",
    vencimiento: "",
    comprobante: "",
    valor: "",
    origen: "",
    documento: "",
    concepto: ""
});

const handleChangeMovimientoProveedor = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNuevoMovimientoProveedor({ ...nuevoMovimientoProveedor, [e.target.name]: e.target.value });
};

const formularioNuevoMovimientoProveedor = (
    <form className="grid grid-cols-2 gap-4 p-4">
        <div>
            <label>Código Proveedor</label>
            <input name="id" value={nuevoMovimientoProveedor.id} onChange={handleChangeMovimientoProveedor} className="border rounded px-2 py-1 w-full" />
        </div>
        <div>
            <label>Tipo</label>
            <input name="tipo" value={nuevoMovimientoProveedor.tipo} onChange={handleChangeMovimientoProveedor} className="border rounded px-2 py-1 w-full" />
        </div>
        <div>
            <label>Número</label>
            <input name="numero" value={nuevoMovimientoProveedor.numero} onChange={handleChangeMovimientoProveedor} className="border rounded px-2 py-1 w-full" />
        </div>
        <div>
            <label>Emisión</label>
            <input type="date" name="emision" value={nuevoMovimientoProveedor.emision} onChange={handleChangeMovimientoProveedor} className="border rounded px-2 py-1 w-full" />
        </div>
        <div>
            <label>Vencimiento</label>
            <input type="date" name="vencimiento" value={nuevoMovimientoProveedor.vencimiento} onChange={handleChangeMovimientoProveedor} className="border rounded px-2 py-1 w-full" />
        </div>
        <div>
            <label>Comprobante</label>
            <input name="comprobante" value={nuevoMovimientoProveedor.comprobante} onChange={handleChangeMovimientoProveedor} className="border rounded px-2 py-1 w-full" />
        </div>
        <div>
            <label>Valor</label>
            <input name="valor" value={nuevoMovimientoProveedor.valor} onChange={handleChangeMovimientoProveedor} className="border rounded px-2 py-1 w-full" />
        </div>
        <div>
            <label>Origen</label>
            <input name="origen" value={nuevoMovimientoProveedor.origen} onChange={handleChangeMovimientoProveedor} className="border rounded px-2 py-1 w-full" />
        </div>
        <div>
            <label>Ref. Documento</label>
            <input name="documento" value={nuevoMovimientoProveedor.documento} onChange={handleChangeMovimientoProveedor} className="border rounded px-2 py-1 w-full" />
        </div>
        <div className="col-span-2">
            <label>Concepto</label>
            <input name="concepto" value={nuevoMovimientoProveedor.concepto} onChange={handleChangeMovimientoProveedor} className="border rounded px-2 py-1 w-full" />
        </div>
        <div className="col-span-2 flex justify-end gap-2 mt-4">
            <Button
                type="button"
                className="px-4 py-2 bg-success text-white rounded flex items-center"
            >
                <FaSave className="mr-2" /> Guardar
            </Button>
        </div>
    </form>
);
// Estado para el formulario de grupo de proveedores
const [nuevoGrupoProveedor, setNuevoGrupoProveedor] = useState({
    id: "",
    nombre: ""
});

const handleChangeGrupoProveedor = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNuevoGrupoProveedor({ ...nuevoGrupoProveedor, [e.target.name]: e.target.value });
};

const formularioNuevoGrupoProveedor = (
    <form className="grid grid-cols-2 gap-4 p-4">
        <div>
            <label>ID</label>
            <input name="id" value={nuevoGrupoProveedor.id} onChange={handleChangeGrupoProveedor} className="border rounded px-2 py-1 w-full" />
        </div>
        <div>
            <label>Nombre</label>
            <input name="nombre" value={nuevoGrupoProveedor.nombre} onChange={handleChangeGrupoProveedor} className="border rounded px-2 py-1 w-full" />
        </div>
        <div className="col-span-2 flex justify-end gap-2 mt-4">
            <Button
                type="button"
                className="px-4 py-2 bg-success text-white rounded flex items-center"
            >
                <FaSave className="mr-2" /> Guardar
            </Button>
        </div>
    </form>
);

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
                    <TabList aria-label='example' onChange={handleChange} variant="scrollable" scrollButtons="auto">
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
                            {botones({ titulo: "Compras", onSearch: setSearchTerm, formularioNuevo: formularioNuevaCompra})}

                        </div>
                        <div className='col-span-2 p-5 border rounded shadow-xl'>
                            <Tablas campos={camposCompras} datos={datosCompras} />
                        </div>
                    </div>
                </TabPanel>
                <TabPanel value='2'>
                    <div className="grid grid-cols-2 gap-4 p-4">
                        <div>
                            {botones({ titulo: "Recepciones", onSearch: setSearchTerm, formularioNuevo: formularioNuevaRecepcion})}
                        </div>
                        <div className='col-span-2 p-5 border rounded shadow-xl'>
                            <Tablas campos={camposRecepciones} datos={datosRecepciones} />
                        </div>
                    </div>
                </TabPanel>
                <TabPanel value='3'>
                    <div className="grid grid-cols-2 gap-4 p-4">
                        <div>
                            {botones({ titulo: "Ordenes de Compra", onSearch: setSearchTerm, formularioNuevo: formularioNuevaOrdenCompra })}
                        </div>
                        <div className='col-span-2 p-5 border rounded shadow-xl'>
                            <Tablas campos={camposOrdenesCompra} datos={datosOrdenesCompra} />
                        </div>
                    </div>
                </TabPanel>
                <TabPanel value='4'>
                    <div className="grid grid-cols-2 gap-4 p-4">
                        <div>
                            {botones({ titulo: "Requisiciones", onSearch: setSearchTerm, formularioNuevo: formularioNuevaRequisicion })}
                        </div>
                        <div className='col-span-2 p-5 border rounded shadow-xl'>
                            <Tablas campos={camposRequisiciones} datos={datosRequisiciones} />
                        </div>
                    </div>
                </TabPanel>
                <TabPanel value='5'>
                    <div className="grid grid-cols-2 gap-4 p-4">
                        <div>
                            {botones({ titulo: "Registro de Productos", onSearch: setSearchTerm, formularioNuevo: formularioNuevoProducto })}
                        </div>
                        <div className='col-span-2 p-5 border rounded shadow-xl'>
                            <Tablas campos={camposProductos} datos={datosProductos} />
                        </div>
                    </div>
                </TabPanel>
                <TabPanel value='6'>
                    <div className="grid grid-cols-2 gap-4 p-4">
                        <div>
                            {botones({ titulo: "Ajustes de Precios", onSearch: setSearchTerm, formularioNuevo: formularioNuevoAjustePrecio })}
                        </div>
                        <div className='col-span-2 p-5 border rounded shadow-xl'>
                            <Tablas campos={campos} datos={datos} />
                        </div>
                    </div>
                </TabPanel>
                <TabPanel value='7'>
                    <div className="grid grid-cols-2 gap-4 p-4">
                        <div>
                            {botones({ titulo: "Proveedores", onSearch: setSearchTerm, formularioNuevo: formularioNuevoProveedor })}
                        </div>
                        <div className='col-span-2 p-5 border rounded shadow-xl'>
                            <Tablas campos={camposProveedores} datos={datosProveedores} />
                        </div>
                    </div>
                </TabPanel>
                <TabPanel value='8'>
                    <div className="grid grid-cols-2 gap-4 p-4">
                        <div>
                            {botones({ titulo: "Pagos", onSearch: setSearchTerm, formularioNuevo: formularioNuevoPago })}
                        </div>
                        <div className='col-span-2 p-5 border rounded shadow-xl'>
                            <Tablas campos={camposPagos} datos={datosPagos} />
                        </div>
                    </div>
                </TabPanel>
                <TabPanel value='9'>
                    <div className="grid grid-cols-2 gap-4 p-4">
                        <div>
                            {botones({ titulo: "Movimientos Proveedores", onSearch: setSearchTerm, formularioNuevo: formularioNuevoMovimientoProveedor })}
                        </div>
                        <div className='col-span-2 p-5 border rounded shadow-xl'>
                            <Tablas campos={camposMovimientosProveedores} datos={datosMovimientosProveedores} />
                        </div>
                    </div>
                </TabPanel>
                <TabPanel value='10'>
                    <div className="grid grid-cols-2 gap-4 p-4">
                        <div>
                            {botones({ titulo: "Grupos Proveedores", onSearch: setSearchTerm,formularioNuevo: formularioNuevoGrupoProveedor })}
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