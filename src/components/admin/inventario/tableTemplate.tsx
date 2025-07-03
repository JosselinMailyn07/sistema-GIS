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

export const TableTemplateTest = ({ campos, datos }: TableTemplateTestProps) => {
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
          <tr key={index} className="hover:bg-gray-50">
            {campos.map((columna) => (
              <td key={columna.key} className="px-4 py-2 border">
                {fila[columna.key]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
