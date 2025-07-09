import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  Typography,
} from "@mui/material";

const EstacionesForm = () => {
  const [username, setUsername] = useState("Javi");
  const [password, setPassword] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    // Lógica de inicio de sesión (petición a la API)
    event.preventDefault();
    console.log("Username:", username);
    console.log("Password:", password);
  };

  return (
    <Box className="max-w-md mx-auto p-5 m-10">
      <Card elevation={5} className="shadow-lg bg-card rounded-lg">
        <CardContent className="p-5">
          <Box className="text-center mb-5">
            <Typography variant="h5" component="h1" className="text-foreground">
              Sistema de Estaciones
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
              <TextField
                label="Usuario"
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                variant="outlined"
                fullWidth
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
                    backgroundColor: "hsl(var(--primary))",
                    color: "hsl(0, 0%, 100%)",
                    "&:hover": {
                      backgroundColor: "hsl(204, 100%, 50%)",
                    },
                  }}
                >
                  Iniciar Sesión
                </Button>
                <Typography
                  variant="body2"
                  marginTop={3}
                  className="text-muted-foreground"
                >
                  ¿No tienes cuenta?{" "}
                  <Link
                    to="/registro"
                    className="text-primary hover:underline font-semibold"
                  >
                    Regístrate
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

export default EstacionesForm;
