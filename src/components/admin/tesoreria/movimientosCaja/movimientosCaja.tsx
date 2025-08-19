import { useEffect, useState } from 'react';

export const Usuarios = () => {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/api/usuarios')
      .then(res => res.json())
      .then(data => setUsuarios(data));
  }, []);

  return (
    <ul>
      {usuarios.map(u => (
        <li key={u.id}>{u.nombre}</li>
      ))}
    </ul>
  );
};