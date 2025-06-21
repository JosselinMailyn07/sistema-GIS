import React, { useState, useRef, useEffect } from 'react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCompany, setSelectedCompany] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const companies = [
    "GAETANA",
    "COMERCIAL BRITO #2",
    "CHONE",
    "BECKER",
    "GIS SERVINFOFIA.LTDA",
    "ENRIQUE JAVIER MACIAS ARIAS",
    "BAR 1",
    "BAR 2",
    "VELEZ PARRALES LUIS FRANCISCO (CDME)",
    "COMEL",
    "MAURO"
  ];

  const filteredCompanies = companies.filter(company =>
    company.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCompanySelect = (company) => {
    setSelectedCompany(company);
    setSearchTerm(company);
    setIsOpen(false);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Username:', username);
    console.log('Password:', password);
    console.log('Selected Company:', selectedCompany);
  };

  return (
    <div className="max-w-md mx-auto p-5 m-10 border border-gray-300 rounded-lg shadow-lg bg-card">
      <div className="text-center mb-5">
        <h1 className="text-foreground">Sistema de Gestión Empresarial</h1>
        <h2 className="text-muted-foreground">ERP para PyMES</h2>
      </div>
      <div className="text-center mb-5">
        <h1 className="text-4xl text-primary">Gis</h1>
        <p className="text-primary">Advanced Business</p>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col">
        <div className="mb-4 relative" ref={dropdownRef}>
          <label htmlFor="company" className="block text-sm font-bold mb-2 text-foreground">Empresa:</label>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setIsOpen(true);
            }}
            onFocus={() => setIsOpen(true)}
            placeholder="Buscar empresa..."
            className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground"
          />
          {isOpen && (
            <ul className="absolute z-10 w-full mt-1 bg-background border border-input rounded-md shadow-lg max-h-60 overflow-auto">
              {filteredCompanies.map((company, index) => (
                <li
                  key={index}
                  onClick={() => handleCompanySelect(company)}
                  className="px-3 py-2 cursor-pointer hover:bg-gray-200"
                >
                  {company}
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="username" className="block text-sm font-bold mb-2 text-foreground">Usuario:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-bold mb-2 text-foreground">Contraseña:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground"
          />
        </div>
        <div className="flex justify-between">
          <button type="submit" className="px-4 py-2 bg-success text-success-foreground rounded-md">Aceptar</button>
          <button type="button" className="px-4 py-2 bg-destructive text-destructive-foreground rounded-md">Cancelar</button>
        </div>
      </form>
      <div className="mt-5 text-center text-muted-foreground text-xs">
        <p>GRUPO INFORMATICO</p>
        <p>Derechos Reservados 2007 - 2013</p>
        <p>V. 2.0</p>
      </div>
    </div>
  );
};

export default Login;
