import React, { useState } from "react";

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

}

export const Tablas = ({ campos, datos}: TableTemplateTestProps) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);


  return (
    <table className="min-w-full table-auto border border-gray-300">
      <thead className="bg-gray-100">
        <tr>
          {campos.map((columna) => (
            <th key={columna.key} className="px-4 py-2 border">
              {columna.label}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {datos.map((fila, index) => (
          <tr key={index} className="">
            {campos.map((columna) => (
              <td key={columna.key} className="px-4 py-2 border">
                {columna.key === "radio" ? (
                  <input type="radio" name="selectfila" value={fila[columna.key]} />
                ) : (
                  fila[columna.key]
                )}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
