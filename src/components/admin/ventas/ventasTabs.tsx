import { Box, Tab } from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import React, { useState } from 'react';
import { Tablas } from '@/components/layout/Tabla';
import { botones } from '../ventas/botonesVentas';
import { Landmark } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { FaSave } from "react-icons/fa";
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';


export const Ventas = () => {

    // Estado para el formulario de nuevo registro
    const [nuevoFactura, setNuevoFactura] = useState({
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

    const handleChangeFactura = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNuevoFactura({ ...nuevoFactura, [e.target.name]: e.target.value });
    };

    const formularioNuevoFactura = (
        <form className="grid grid-cols-2 gap-4 p-4">
            <div>
                <label>ID</label>
                <input name="id" value={nuevoFactura.id} onChange={handleChangeFactura} className="border rounded px-2 py-1 w-full" />
            </div>
            <div>
                <label>Bodega</label>
                <input name="bodega" value={nuevoFactura.bodega} onChange={handleChangeFactura} className="border rounded px-2 py-1 w-full" />
            </div>
            <div>
                <label>Descripción</label>
                <input name="descripcion" value={nuevoFactura.descripcion} onChange={handleChangeFactura} className="border rounded px-2 py-1 w-full" />
            </div>
            <div>
                <label>Unidad</label>
                <input name="unidad" value={nuevoFactura.unidad} onChange={handleChangeFactura} className="border rounded px-2 py-1 w-full" />
            </div>
            <div>
                <label>IVA</label>
                <input name="iva" value={nuevoFactura.iva} onChange={handleChangeFactura} className="border rounded px-2 py-1 w-full" />
            </div>
            <div>
                <label>Bulto</label>
                <input name="bulto" value={nuevoFactura.bulto} onChange={handleChangeFactura} className="border rounded px-2 py-1 w-full" />
            </div>
            <div>
                <label>Cantidad</label>
                <input name="cantidad" value={nuevoFactura.cantidad} onChange={handleChangeFactura} className="border rounded px-2 py-1 w-full" />
            </div>
            <div>
                <label>Precio</label>
                <input name="precio" value={nuevoFactura.precio} onChange={handleChangeFactura} className="border rounded px-2 py-1 w-full" />
            </div>
            <div>
                <label>Descuento</label>
                <input name="descuento" value={nuevoFactura.descuento} onChange={handleChangeFactura} className="border rounded px-2 py-1 w-full" />
            </div>
            <div>
                <label>Total</label>
                <input name="total" value={nuevoFactura.total} onChange={handleChangeFactura} className="border rounded px-2 py-1 w-full" />
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
            

    // ...existing code...

// Estado para el formulario de nueva nota de entrega
const [nuevaNotaEntrega, setNuevaNotaEntrega] = useState({
    id: "",
    bodega: "",
    descripcion: "",
    unidad: "",
    iva: "",
    bulto: "",
    cantidad: "",
    entregado: "",
    precio: "",
    descuento: "",
    total: ""
});

const handleChangeNotaEntrega = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNuevaNotaEntrega({ ...nuevaNotaEntrega, [e.target.name]: e.target.value });
};

const formularioNuevaNotaEntrega = (
    <form className="grid grid-cols-2 gap-4 p-4">
        <div>
            <label>ID</label>
            <input name="id" value={nuevaNotaEntrega.id} onChange={handleChangeNotaEntrega} className="border rounded px-2 py-1 w-full" />
        </div>
        <div>
            <label>Bodega</label>
            <input name="bodega" value={nuevaNotaEntrega.bodega} onChange={handleChangeNotaEntrega} className="border rounded px-2 py-1 w-full" />
        </div>
        <div>
            <label>Descripción</label>
            <input name="descripcion" value={nuevaNotaEntrega.descripcion} onChange={handleChangeNotaEntrega} className="border rounded px-2 py-1 w-full" />
        </div>
        <div>
            <label>Unidad</label>
            <input name="unidad" value={nuevaNotaEntrega.unidad} onChange={handleChangeNotaEntrega} className="border rounded px-2 py-1 w-full" />
        </div>
        <div>
            <label>IVA</label>
            <input name="iva" value={nuevaNotaEntrega.iva} onChange={handleChangeNotaEntrega} className="border rounded px-2 py-1 w-full" />
        </div>
        <div>
            <label>Bulto</label>
            <input name="bulto" value={nuevaNotaEntrega.bulto} onChange={handleChangeNotaEntrega} className="border rounded px-2 py-1 w-full" />
        </div>
        <div>
            <label>Cantidad</label>
            <input name="cantidad" value={nuevaNotaEntrega.cantidad} onChange={handleChangeNotaEntrega} className="border rounded px-2 py-1 w-full" />
        </div>
        <div>
            <label>Entregado</label>
            <input name="entregado" value={nuevaNotaEntrega.entregado} onChange={handleChangeNotaEntrega} className="border rounded px-2 py-1 w-full" />
        </div>
        <div>
            <label>Precio</label>
            <input name="precio" value={nuevaNotaEntrega.precio} onChange={handleChangeNotaEntrega} className="border rounded px-2 py-1 w-full" />
        </div>
        <div>
            <label>Descuento</label>
            <input name="descuento" value={nuevaNotaEntrega.descuento} onChange={handleChangeNotaEntrega} className="border rounded px-2 py-1 w-full" />
        </div>
        <div>
            <label>Total</label>
            <input name="total" value={nuevaNotaEntrega.total} onChange={handleChangeNotaEntrega} className="border rounded px-2 py-1 w-full" />
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

// Estado para el formulario de nuevo pedido
const [nuevoPedido, setNuevoPedido] = useState({
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

const handleChangePedido = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNuevoPedido({ ...nuevoPedido, [e.target.name]: e.target.value });
};

const formularioNuevoPedido = (
    <form className="grid grid-cols-2 gap-4 p-4">
        <div>
            <label>ID</label>
            <input name="id" value={nuevoPedido.id} onChange={handleChangePedido} className="border rounded px-2 py-1 w-full" />
        </div>
        <div>
            <label>Bodega</label>
            <input name="bodega" value={nuevoPedido.bodega} onChange={handleChangePedido} className="border rounded px-2 py-1 w-full" />
        </div>
        <div>
            <label>Descripción</label>
            <input name="descripcion" value={nuevoPedido.descripcion} onChange={handleChangePedido} className="border rounded px-2 py-1 w-full" />
        </div>
        <div>
            <label>Unidad</label>
            <input name="unidad" value={nuevoPedido.unidad} onChange={handleChangePedido} className="border rounded px-2 py-1 w-full" />
        </div>
        <div>
            <label>IVA</label>
            <input name="iva" value={nuevoPedido.iva} onChange={handleChangePedido} className="border rounded px-2 py-1 w-full" />
        </div>
        <div>
            <label>Bulto</label>
            <input name="bulto" value={nuevoPedido.bulto} onChange={handleChangePedido} className="border rounded px-2 py-1 w-full" />
        </div>
        <div>
            <label>Cantidad</label>
            <input name="cantidad" value={nuevoPedido.cantidad} onChange={handleChangePedido} className="border rounded px-2 py-1 w-full" />
        </div>
        <div>
            <label>Precio</label>
            <input name="precio" value={nuevoPedido.precio} onChange={handleChangePedido} className="border rounded px-2 py-1 w-full" />
        </div>
        <div>
            <label>Descuento</label>
            <input name="descuento" value={nuevoPedido.descuento} onChange={handleChangePedido} className="border rounded px-2 py-1 w-full" />
        </div>
        <div>
            <label>Total</label>
            <input name="total" value={nuevoPedido.total} onChange={handleChangePedido} className="border rounded px-2 py-1 w-full" />
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


// Estado para el formulario de nueva cotización
const [nuevaCotizacion, setNuevaCotizacion] = useState({
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

const handleChangeCotizacion = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNuevaCotizacion({ ...nuevaCotizacion, [e.target.name]: e.target.value });
};

const formularioNuevaCotizacion = (
    <form className="grid grid-cols-2 gap-4 p-4">
        <div>
            <label>ID</label>
            <input name="id" value={nuevaCotizacion.id} onChange={handleChangeCotizacion} className="border rounded px-2 py-1 w-full" />
        </div>
        <div>
            <label>Bodega</label>
            <input name="bodega" value={nuevaCotizacion.bodega} onChange={handleChangeCotizacion} className="border rounded px-2 py-1 w-full" />
        </div>
        <div>
            <label>Descripción</label>
            <input name="descripcion" value={nuevaCotizacion.descripcion} onChange={handleChangeCotizacion} className="border rounded px-2 py-1 w-full" />
        </div>
        <div>
            <label>Unidad</label>
            <input name="unidad" value={nuevaCotizacion.unidad} onChange={handleChangeCotizacion} className="border rounded px-2 py-1 w-full" />
        </div>
        <div>
            <label>IVA</label>
            <input name="iva" value={nuevaCotizacion.iva} onChange={handleChangeCotizacion} className="border rounded px-2 py-1 w-full" />
        </div>
        <div>
            <label>Bulto</label>
            <input name="bulto" value={nuevaCotizacion.bulto} onChange={handleChangeCotizacion} className="border rounded px-2 py-1 w-full" />
        </div>
        <div>
            <label>Cantidad</label>
            <input name="cantidad" value={nuevaCotizacion.cantidad} onChange={handleChangeCotizacion} className="border rounded px-2 py-1 w-full" />
        </div>
        <div>
            <label>Precio</label>
            <input name="precio" value={nuevaCotizacion.precio} onChange={handleChangeCotizacion} className="border rounded px-2 py-1 w-full" />
        </div>
        <div>
            <label>Descuento</label>
            <input name="descuento" value={nuevaCotizacion.descuento} onChange={handleChangeCotizacion} className="border rounded px-2 py-1 w-full" />
        </div>
        <div>
            <label>Total</label>
            <input name="total" value={nuevaCotizacion.total} onChange={handleChangeCotizacion} className="border rounded px-2 py-1 w-full" />
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

// Estado para el formulario de nuevo cliente
const [nuevoCliente, setNuevoCliente] = useState({
    id: "",
    nombre: "",
    edad: "",
    correo: ""
});

const handleChangeCliente = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNuevoCliente({ ...nuevoCliente, [e.target.name]: e.target.value });
};

const formularioNuevoCliente = (
    <form className="grid grid-cols-2 gap-4 p-4">
        <div>
            <label>ID</label>
            <input name="id" value={nuevoCliente.id} onChange={handleChangeCliente} className="border rounded px-2 py-1 w-full" />
        </div>
        <div>
            <label>Nombre</label>
            <input name="nombre" value={nuevoCliente.nombre} onChange={handleChangeCliente} className="border rounded px-2 py-1 w-full" />
        </div>
        <div>
            <label>Edad</label>
            <input name="edad" value={nuevoCliente.edad} onChange={handleChangeCliente} className="border rounded px-2 py-1 w-full" />
        </div>
        <div>
            <label>Correo</label>
            <input name="correo" value={nuevoCliente.correo} onChange={handleChangeCliente} className="border rounded px-2 py-1 w-full" />
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

// Estado para el formulario de nueva cobranza
const [nuevaCobranza, setNuevaCobranza] = useState({
    id: "",
    nombre: "",
    edad: "",
    correo: ""
});

const handleChangeCobranza = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNuevaCobranza({ ...nuevaCobranza, [e.target.name]: e.target.value });
};

const formularioNuevaCobranza = (
    <form className="grid grid-cols-2 gap-4 p-4">
        <div>
            <label>ID</label>
            <input name="id" value={nuevaCobranza.id} onChange={handleChangeCobranza} className="border rounded px-2 py-1 w-full" />
        </div>
        <div>
            <label>Nombre</label>
            <input name="nombre" value={nuevaCobranza.nombre} onChange={handleChangeCobranza} className="border rounded px-2 py-1 w-full" />
        </div>
        <div>
            <label>Edad</label>
            <input name="edad" value={nuevaCobranza.edad} onChange={handleChangeCobranza} className="border rounded px-2 py-1 w-full" />
        </div>
        <div>
            <label>Correo</label>
            <input name="correo" value={nuevaCobranza.correo} onChange={handleChangeCobranza} className="border rounded px-2 py-1 w-full" />
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

// Estado para el formulario de nuevo movimiento de cliente
const [nuevoMovimientoCliente, setNuevoMovimientoCliente] = useState({
    id: "",
    tipo: "",
    numero: "",
    emision: "",
    vencimiento: "",
    comprobante: "",
    valor: "",
    origen: "",
    documento: "",
    concepto: "",
    norigen: ""
});

const handleChangeMovimientoCliente = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNuevoMovimientoCliente({ ...nuevoMovimientoCliente, [e.target.name]: e.target.value });
};

const formularioNuevoMovimientoCliente = (
    <form className="grid grid-cols-2 gap-4 p-4">
        <div>
            <label>Código Cliente</label>
            <input name="id" value={nuevoMovimientoCliente.id} onChange={handleChangeMovimientoCliente} className="border rounded px-2 py-1 w-full" />
        </div>
        <div>
            <label>Tipo</label>
            <input name="tipo" value={nuevoMovimientoCliente.tipo} onChange={handleChangeMovimientoCliente} className="border rounded px-2 py-1 w-full" />
        </div>
        <div>
            <label>Número</label>
            <input name="numero" value={nuevoMovimientoCliente.numero} onChange={handleChangeMovimientoCliente} className="border rounded px-2 py-1 w-full" />
        </div>
        <div>
            <label>Emisión</label>
            <input type="date" name="emision" value={nuevoMovimientoCliente.emision} onChange={handleChangeMovimientoCliente} className="border rounded px-2 py-1 w-full" />
        </div>
        <div>
            <label>Vencimiento</label>
            <input type="date" name="vencimiento" value={nuevoMovimientoCliente.vencimiento} onChange={handleChangeMovimientoCliente} className="border rounded px-2 py-1 w-full" />
        </div>
        <div>
            <label>Comprobante</label>
            <input name="comprobante" value={nuevoMovimientoCliente.comprobante} onChange={handleChangeMovimientoCliente} className="border rounded px-2 py-1 w-full" />
        </div>
        <div>
            <label>Valor</label>
            <input name="valor" value={nuevoMovimientoCliente.valor} onChange={handleChangeMovimientoCliente} className="border rounded px-2 py-1 w-full" />
        </div>
        <div>
            <label>Origen</label>
            <input name="origen" value={nuevoMovimientoCliente.origen} onChange={handleChangeMovimientoCliente} className="border rounded px-2 py-1 w-full" />
        </div>
        <div>
            <label>Ref. Documento</label>
            <input name="documento" value={nuevoMovimientoCliente.documento} onChange={handleChangeMovimientoCliente} className="border rounded px-2 py-1 w-full" />
        </div>
        <div>
            <label>Concepto</label>
            <input name="concepto" value={nuevoMovimientoCliente.concepto} onChange={handleChangeMovimientoCliente} className="border rounded px-2 py-1 w-full" />
        </div>
        <div>
            <label>Número de Origen</label>
            <input name="norigen" value={nuevoMovimientoCliente.norigen} onChange={handleChangeMovimientoCliente} className="border rounded px-2 py-1 w-full" />
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

const [nuevaRutaVisita, setNuevaRutaVisita] = useState({
    id: "",
    nombre: "",
    edad: "",
    correo: ""
});

const handleChangeRutaVisita = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNuevaRutaVisita({ ...nuevaRutaVisita, [e.target.name]: e.target.value });
};
const formularioNuevaRutaVisita = (
    <form className="grid grid-cols-2 gap-4 p-4">
        <div>
            <label>ID</label>
            <input name="id" value={nuevaRutaVisita.id} onChange={handleChangeRutaVisita} className="border rounded px-2 py-1 w-full" />
        </div>
        <div>
            <label>Nombre</label>
            <input name="nombre" value={nuevaRutaVisita.nombre} onChange={handleChangeRutaVisita} className="border rounded px-2 py-1 w-full" />
        </div>
        <div>
            <label>Edad</label>
            <input name="edad" value={nuevaRutaVisita.edad} onChange={handleChangeRutaVisita} className="border rounded px-2 py-1 w-full" />
        </div>
        <div>
            <label>Correo</label>
            <input name="correo" value={nuevaRutaVisita.correo} onChange={handleChangeRutaVisita} className="border rounded px-2 py-1 w-full" />
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

// Estado para el formulario de mantenimiento de rutas
const [nuevoMantenimientoRuta, setNuevoMantenimientoRuta] = useState({
    id: "",
    nombre: "",
    edad: "",
    correo: ""
});

const handleChangeMantenimientoRuta = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNuevoMantenimientoRuta({ ...nuevoMantenimientoRuta, [e.target.name]: e.target.value });
};

const formularioNuevoMantenimientoRuta = (
    <form className="grid grid-cols-2 gap-4 p-4">
        <div>
            <label>ID</label>
            <input name="id" value={nuevoMantenimientoRuta.id} onChange={handleChangeMantenimientoRuta} className="border rounded px-2 py-1 w-full" />
        </div>
        <div>
            <label>Nombre</label>
            <input name="nombre" value={nuevoMantenimientoRuta.nombre} onChange={handleChangeMantenimientoRuta} className="border rounded px-2 py-1 w-full" />
        </div>
        <div>
            <label>Edad</label>
            <input name="edad" value={nuevoMantenimientoRuta.edad} onChange={handleChangeMantenimientoRuta} className="border rounded px-2 py-1 w-full" />
        </div>
        <div>
            <label>Correo</label>
            <input name="correo" value={nuevoMantenimientoRuta.correo} onChange={handleChangeMantenimientoRuta} className="border rounded px-2 py-1 w-full" />
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

// Estado para el formulario de estimado de ventas
const [nuevoEstimadoVentas, setNuevoEstimadoVentas] = useState({
    vendedor: "",
    nombre: ""
});

const handleChangeEstimadoVentas = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNuevoEstimadoVentas({ ...nuevoEstimadoVentas, [e.target.name]: e.target.value });
};

const formularioNuevoEstimadoVentas = (
    <form className="grid grid-cols-2 gap-4 p-4">
        <div>
            <label>Vendedor</label>
            <input name="vendedor" value={nuevoEstimadoVentas.vendedor} onChange={handleChangeEstimadoVentas} className="border rounded px-2 py-1 w-full" />
        </div>
        <div>
            <label>Nombre</label>
            <input name="nombre" value={nuevoEstimadoVentas.nombre} onChange={handleChangeEstimadoVentas} className="border rounded px-2 py-1 w-full" />
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

// Estado para el formulario de causa no ventas
const [nuevaCausaNoVenta, setNuevaCausaNoVenta] = useState({
    id: "",
    nombre: "",
    edad: "",
    correo: ""
});

const handleChangeCausaNoVenta = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNuevaCausaNoVenta({ ...nuevaCausaNoVenta, [e.target.name]: e.target.value });
};

const formularioNuevaCausaNoVenta = (
    <form className="grid grid-cols-2 gap-4 p-4">
        <div>
            <label>ID</label>
            <input name="id" value={nuevaCausaNoVenta.id} onChange={handleChangeCausaNoVenta} className="border rounded px-2 py-1 w-full" />
        </div>
        <div>
            <label>Nombre</label>
            <input name="nombre" value={nuevaCausaNoVenta.nombre} onChange={handleChangeCausaNoVenta} className="border rounded px-2 py-1 w-full" />
        </div>
        <div>
            <label>Edad</label>
            <input name="edad" value={nuevaCausaNoVenta.edad} onChange={handleChangeCausaNoVenta} className="border rounded px-2 py-1 w-full" />
        </div>
        <div>
            <label>Correo</label>
            <input name="correo" value={nuevaCausaNoVenta.correo} onChange={handleChangeCausaNoVenta} className="border rounded px-2 py-1 w-full" />
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

// Estado para el formulario de grupo de clientes
const [nuevoGrupoCliente, setNuevoGrupoCliente] = useState({
    id: "",
    nombre: ""
});

const handleChangeGrupoCliente = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNuevoGrupoCliente({ ...nuevoGrupoCliente, [e.target.name]: e.target.value });
};

const formularioNuevoGrupoCliente = (
    <form className="grid grid-cols-2 gap-4 p-4">
        <div>
            <label>ID</label>
            <input name="id" value={nuevoGrupoCliente.id} onChange={handleChangeGrupoCliente} className="border rounded px-2 py-1 w-full" />
        </div>
        <div>
            <label>Nombre</label>
            <input name="nombre" value={nuevoGrupoCliente.nombre} onChange={handleChangeGrupoCliente} className="border rounded px-2 py-1 w-full" />
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
                    <TabList aria-label='example' onChange={handleChange} variant="scrollable" scrollButtons="auto" >
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
                        {botones({ titulo: "Facturas", onSearch: setSearchTerm, formularioNuevo: formularioNuevoFactura })}
                    </div>
                        <div className='col-span-2 p-5 border rounded shadow-xl'>
                            <Tablas campos={camposFactura} datos={datosFactura} />
                        </div>
                    </div>
                </TabPanel>
                <TabPanel value='2'>
                    <div className="grid grid-cols-2 gap-4 p-4">
                        <div>
                            {botones({ titulo: "Notas de Entrega", onSearch: setSearchTerm, formularioNuevo: formularioNuevaNotaEntrega })}
                        </div>
                        <div className='col-span-2 p-5 border rounded shadow-xl'>
                            <Tablas campos={camposNotasEntrega} datos={datosNotasEntrega} />
                        </div>
                    </div>
                </TabPanel>
                <TabPanel value='3'>
                    <div className="grid grid-cols-2 gap-4 p-4">
                        <div>
                            {botones({ titulo: "Pedidos", onSearch: setSearchTerm, formularioNuevo: formularioNuevoPedido })}
                        </div>
                        <div className='col-span-2 p-5 border rounded shadow-xl'>
                            <Tablas campos={camposPedidos} datos={datosPedidos} />
                        </div>
                    </div>
                </TabPanel>
                <TabPanel value='4'>
                    <div className="grid grid-cols-2 gap-4 p-4">
                        <div>
                            {botones({ titulo: "Cotizaciones", onSearch: setSearchTerm, formularioNuevo: formularioNuevaCotizacion  })}
                        </div>
                        <div className='col-span-2 p-5 border rounded shadow-xl'>
                            <Tablas campos={camposCotizaciones} datos={datosCotizaciones} />
                        </div>
                    </div>
                </TabPanel>
                <TabPanel value='5'>
                    <div className="grid grid-cols-2 gap-4 p-4">
                        <div>
                            {botones({ titulo: "Clientes", onSearch: setSearchTerm, formularioNuevo: formularioNuevoCliente  })}
                        </div>
                        <div className='col-span-2 p-5 border rounded shadow-xl'>
                            <Tablas campos={campos} datos={datos} />
                        </div>
                    </div>
                </TabPanel>
                <TabPanel value='6'>
                    <div className="grid grid-cols-2 gap-4 p-4">
                        <div>
                            {botones({ titulo: "Cobranzas", onSearch: setSearchTerm, formularioNuevo: formularioNuevaCobranza  })}
                        </div>
                        <div className='col-span-2 p-5 border rounded shadow-xl'>
                            <Tablas campos={campos} datos={datos} />
                        </div>
                    </div>
                </TabPanel>
                <TabPanel value='7'>
                    <div className="grid grid-cols-2 gap-4 p-4">
                        <div>
                            {botones({ titulo: "Movimientos Clientes", onSearch: setSearchTerm, formularioNuevo: formularioNuevoMovimientoCliente  })}
                        </div>
                        <div className='col-span-2 p-5 border rounded shadow-xl'>
                            <Tablas campos={camposMovimientosClientes} datos={datosMovimientosClientes} />
                        </div>
                    </div>
                </TabPanel>
                <TabPanel value='8'>
                    <div className="grid grid-cols-2 gap-4 p-4">
                        <div>
                            {botones({ titulo: "Rutas Visitas", onSearch: setSearchTerm, formularioNuevo: formularioNuevaRutaVisita  })}
                        </div>
                        <div className='col-span-2 p-5 border rounded shadow-xl'>
                            <Tablas campos={campos} datos={datos} />
                        </div>
                    </div>
                </TabPanel>
                <TabPanel value='9'>
                    <div className="grid grid-cols-2 gap-4 p-4">
                        <div>
                            {botones({ titulo: "Mantenimiento Rutas", onSearch: setSearchTerm, formularioNuevo: formularioNuevoMantenimientoRuta  })}
                        </div>
                        <div className='col-span-2 p-5 border rounded shadow-xl'>
                            <Tablas campos={campos} datos={datos} />
                        </div>
                    </div>
                </TabPanel>
                <TabPanel value='10'>
                    <div className="grid grid-cols-2 gap-4 p-4">
                        <div>
                            {botones({ titulo: "Estimado de Ventas", onSearch: setSearchTerm, formularioNuevo: formularioNuevoEstimadoVentas  })}
                        </div>
                        <div className='col-span-2 p-5 border rounded shadow-xl'>
                            <Tablas campos={camposEstimadoVentas} datos={datosEstimadoVentas} />
                        </div>
                    </div>
                </TabPanel>
                <TabPanel value='11'>
                    <div className="grid grid-cols-2 gap-4 p-4">
                        <div>
                            {botones({ titulo: "Causa No Ventas", onSearch: setSearchTerm, formularioNuevo: formularioNuevaCausaNoVenta  })}
                        </div>
                        <div className='col-span-2 p-5 border rounded shadow-xl'>
                            <Tablas campos={campos} datos={datos} />
                        </div>
                    </div>
                </TabPanel>
                <TabPanel value='12'>
                    <div className="grid grid-cols-2 gap-4 p-4">
                        <div>
                            {botones({ titulo: "Grupos de Clientes", onSearch: setSearchTerm, formularioNuevo: formularioNuevoGrupoCliente  })}
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