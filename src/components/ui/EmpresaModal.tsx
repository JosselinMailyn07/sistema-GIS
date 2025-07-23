import React, { useEffect, useState } from 'react';

interface Empresa {
  codigoEmpresa: string;
  ruc: string;
  nombre: string;
  direccion: string;
  telefonos: string[];
  fechaInicio: string;
  fechaCierre: string;
  mascaraContable: string;
  baseDatos: string;
  comercializadora: string;
  centro: string;
  segmento: string;
  activa: boolean;
}

interface EmpresaModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (empresa: Empresa) => void;
  empresa?: Empresa | null;
}

export const EmpresaModal: React.FC<EmpresaModalProps> = ({ isOpen, onClose, onSave, empresa }) => {
  const [formData, setFormData] = useState<Empresa>({
    codigoEmpresa: '',
    ruc: '',
    nombre: '',
    direccion: '',
    telefonos: [''],
    fechaInicio: '',
    fechaCierre: '',
    mascaraContable: '',
    baseDatos: '',
    comercializadora: '',
    centro: '',
    segmento: '',
    activa: false,
  });

  useEffect(() => {
    if (empresa) {
      setFormData(empresa);
    } else {
      setFormData({
        codigoEmpresa: '',
        ruc: '',
        nombre: '',
        direccion: '',
        telefonos: [''],
        fechaInicio: '',
        fechaCierre: '',
        mascaraContable: '',
        baseDatos: '',
        comercializadora: '',
        centro: '',
        segmento: '',
        activa: false,
      });
    }
  }, [empresa]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4 overflow-auto">
      <div className="bg-white rounded-md shadow-lg w-full max-w-4xl p-6">
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { name: 'codigoEmpresa', label: 'Código Empresa' },
            { name: 'ruc', label: 'RUC/CI' },
            { name: 'nombre', label: 'Nombre' },
            { name: 'direccion', label: 'Dirección' },
            { name: 'fechaInicio', label: 'Fecha de Inicio' },
            { name: 'fechaCierre', label: 'Fecha de Cierre' },
            { name: 'mascaraContable', label: 'Máscara Contable' },
            { name: 'baseDatos', label: 'Base de Datos' },
            { name: 'comercializadora', label: 'Comercializadora' },
            { name: 'centro', label: 'Centro' },
            { name: 'segmento', label: 'Segmento' }
          ].map(({ name, label }) => (
            <div key={name}>
              <label className="block text-gray-700 text-sm font-bold mb-1">{label}</label>
              <input
                type="text"
                name={name}
                value={(formData as any)[name]}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-3 py-2 shadow-sm text-sm"
              />
            </div>
          ))}

          {/* Teléfonos */}
          <div className="md:col-span-2">
            <label className="block text-gray-700 text-sm font-bold mb-1">Teléfonos</label>
            <input
              type="text"
              name="telefonos"
              value={formData.telefonos.join(', ')}
              onChange={(e) =>
                setFormData(prev => ({
                  ...prev,
                  telefonos: e.target.value.split(',').map(t => t.trim())
                }))
              }
              className="w-full border border-gray-300 rounded px-3 py-2 shadow-sm text-sm"
            />
          </div>

          {/* Activa */}
          <div className="md:col-span-2 flex items-center space-x-2">
            <input
              type="checkbox"
              name="activa"
              checked={formData.activa}
              onChange={(e) => setFormData(prev => ({ ...prev, activa: e.target.checked }))}
              className="form-checkbox h-5 w-5 text-blue-600"
            />
            <label className="text-sm text-gray-700 font-bold">Activa</label>
          </div>

          {/* Botones */}
          <div className="md:col-span-2 flex justify-end gap-3 mt-4">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-500 hover:bg-gray-700 text-white font-semibold px-4 py-2 rounded"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-800 text-white font-semibold px-4 py-2 rounded"
            >
              Guardar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
