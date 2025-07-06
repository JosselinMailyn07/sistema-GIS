import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { FaPlus, FaEdit, FaTrash, FaSearch } from 'react-icons/fa';
import { Modal } from '../layout/modal'; // Asegúrate de que la ruta sea correcta

interface BotonesProps {
  titulo: string;
  onSearch: (searchTerm: string) => void; // Función para manejar la búsqueda
}

export const botones = ({ titulo = "", onSearch }: BotonesProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [mostrarModal, setMostrarModal] = useState(false);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value;
    setSearchTerm(term);
    onSearch(term); // Llama a la función onSearch con el término de búsqueda
  };

  return (
    <div className="p-2">
      <h1 className="text-2xl font-bold text-left mb-4">{titulo}</h1>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Buscar por Código o Nombre</label>
        <div className="relative">
          <input
            type="text"
            placeholder="Buscar..."
            className="mt-1 block w-full p-2 pl-10 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            value={searchTerm}
            onChange={handleSearch}
          />
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <FaSearch className="text-gray-400" />
          </div>
        </div>
      </div>
      <div className="flex space-x-2">
        <Button className="px-4 py-2 bg-success text-white rounded flex items-center" onClick={() => setMostrarModal(true)}>
          <FaPlus className="mr-2" /> Nuevo
        </Button>
        <Button className="px-4 py-2 bg-destructive text-white rounded flex items-center">
          <FaTrash className="mr-2" /> Eliminar
        </Button>
        <Button className="px-4 py-2 bg-primary text-white rounded flex items-center" onClick={() => setMostrarModal(true)}>
          <FaEdit className="mr-2" /> Editar
        </Button>
        {mostrarModal && (
          <Modal onClose={() => setMostrarModal(false)}

          />
        )}
      </div>
    </div>
  );
};

