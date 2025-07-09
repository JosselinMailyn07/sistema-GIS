import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Autocomplete,
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  Typography,
} from "@mui/material";

const Registro = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [selectedCompany, setSelectedCompany] = useState<string | null>(null);

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
    "MAURO",
  ];

  const handleSubmit = (event: React.FormEvent) => {
    // Logina de registro (peticion a la API)
    event.preventDefault();
    console.log("Username:", username);
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Selected Company:", selectedCompany);
  };

  return (
    <Box className="max-w-md mx-auto p-5 m-10">
      <Card elevation={5} className="shadow-lg bg-card rounded-lg">
        <CardContent className="p-5">
          <Box className="text-center mb-5">
            <Typography variant="h5" component="h1" className="text-foreground">
              Sistema de Gestión Empresarial
            </Typography>
            <Typography variant="subtitle1" className="text-muted-foreground">
              ERP para PyMES
            </Typography>
          </Box>
          <Box className="text-center mb-5">
            <Typography variant="h3" className="text-primary">
              Gis
            </Typography>
            <Typography className="text-primary">Advanced Business</Typography>
          </Box>
          <form onSubmit={handleSubmit}>
            <Box className="flex flex-col gap-4">
              <Autocomplete
                options={companies}
                value={selectedCompany}
                onChange={(event, newValue) => {
                  setSelectedCompany(newValue);
                }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Empresa"
                    variant="outlined"
                    className="bg-background"
                    slotProps={{
                      inputLabel: {
                        className: "text-foreground",
                      },
                    }}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": { borderColor: "hsl(var(--border))" },
                        "&:hover fieldset": { borderColor: "hsl(var(--ring))" },
                      },
                      "& .MuiInputBase-input": {
                        color: "hsl(var(--foreground))",
                      },
                    }}
                  />
                )}
                className="bg-background rounded-md"
              />
              <TextField
                label="Usuario"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                variant="outlined"
                fullWidth
                slotProps={{
                  inputLabel: {
                    className: "text-foreground",
                  },
                }}
                className="bg-background rounded-md"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": { borderColor: "hsl(var(--border))" },
                    "&:hover fieldset": { borderColor: "hsl(var(--ring))" },
                  },
                  "& .MuiInputBase-input": { color: "hsl(var(--foreground))" },
                }}
              />
              <TextField
                label="Email"
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                variant="outlined"
                fullWidth
                slotProps={{
                  inputLabel: {
                    className: "text-foreground",
                  },
                }}
                className="bg-background rounded-md"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": { borderColor: "hsl(var(--border))" },
                    "&:hover fieldset": { borderColor: "hsl(var(--ring))" },
                  },
                  "& .MuiInputBase-input": { color: "hsl(var(--foreground))" },
                }}
              />
              <TextField
                label="Contraseña"
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                variant="outlined"
                fullWidth
                slotProps={{
                  inputLabel: {
                    className: "text-foreground",
                  },
                }}
                className="bg-background rounded-md"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": { borderColor: "hsl(var(--border))" },
                    "&:hover fieldset": { borderColor: "hsl(var(--ring))" },
                  },
                  "& .MuiInputBase-input": { color: "hsl(var(--foreground))" },
                }}
              />
              <TextField
                label="Confirmar Contraseña"
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                variant="outlined"
                fullWidth
                slotProps={{
                  inputLabel: {
                    className: "text-foreground",
                  },
                }}
                className="bg-background rounded-md"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": { borderColor: "hsl(var(--border))" },
                    "&:hover fieldset": { borderColor: "hsl(var(--ring))" },
                  },
                  "& .MuiInputBase-input": { color: "hsl(var(--foreground))" },
                }}
              />
              <Box className="flex flex-col items-center mt-2">
                <Button
                  type="submit"
                  variant="contained"
                  fullWidth
                  sx={{
                    Classname: "bg-primary",
                    color: "hsl(0, 0.00%, 100%)",
                    "&:hover": {
                      color: "hsl(0, 0.00%, 100.00%)",
                      backgroundColor: "hsl(204, 100.00%, 50.00%)",
                    },
                  }}
                >
                  Registrarse
                </Button>
                <Typography
                  variant="body2"
                  marginTop={3}
                  className="text-muted-foreground"
                >
                  ¿Ya tienes una cuenta?{" "}
                  <Link
                    to="/login"
                    className="text-primary hover:underline font-semibold"
                  >
                    Inicia Sesión
                  </Link>
                </Typography>
              </Box>
            </Box>
          </form>
          <Box className="mt-5 text-center text-muted-foreground text-xs">
            <Typography variant="caption" component="p">
              GRUPO INFORMATICO
            </Typography>
            <Typography variant="caption" component="p">
              Derechos Reservados 2007 - 2013
            </Typography>
            <Typography variant="caption" component="p">
              V. 2.0
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Registro;
