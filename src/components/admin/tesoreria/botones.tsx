
interface Titulo {
    titulo: string;
    }

export const botones = ({titulo=""}:Titulo) => {
  return (
    <div className="grid p-2">
      <h1 className="text-2xl font-bold text-center mb-4"> {titulo} </h1>
      <div className="grid grid-rows-4  gap-10  mx-10 ">
        <button className="px-4 py-2 bg-primary text-white rounded ">Nuevo</button>
        <button className="px-4 py-2 bg-primary text-white rounded">Editar</button>
        <button className="px-4 py-2 bg-primary text-white rounded ">Eliminar</button>
      </div>
    </div>
  );
}