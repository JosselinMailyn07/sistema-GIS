import React, { useState } from 'react';

interface Campo {
  key: string;
  label: string;
}

interface Fila {
  [key: string]: any;
}

interface TableTemplateTestProps {
  campos: Campo[];
  datos: Fila[];
  onRowSelect: (fila: Fila) => void;
}

export const Tablas = ({ campos, datos, onRowSelect }: TableTemplateTestProps) => {
  const [selectedRow, setSelectedRow] = useState<number | null>(null);

  const handleRowClick = (index: number, fila: Fila) => {
    setSelectedRow(index);
    onRowSelect(fila);
  };

  return (
    <div className="overflow-x-auto rounded-md">
      <table className="min-w-full table-auto border border-gray-300">
        <thead className="bg-gray-100">
          <tr>
            {campos.map((columna) => (
              <th key={columna.key} className="px-4 py-2 border text-sm text-left whitespace-nowrap">
                {columna.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {datos.map((fila, index) => (
            <tr
              key={index}
              className={`cursor-pointer hover:bg-blue-100 ${selectedRow === index ? 'bg-blue-200' : ''}`}
              onDoubleClick={() => handleRowClick(index, fila)}
            >
              {campos.map((columna) => (
                <td key={columna.key} className="px-4 py-2 border text-sm whitespace-nowrap">
                  {fila[columna.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
