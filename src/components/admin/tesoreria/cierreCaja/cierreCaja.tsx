import { Box, Card, CardContent, InputLabel, Typography, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { Link } from "react-router-dom";
import { useState } from 'react';



export const CierreCaja = () => {
    const [username, setUsername] = useState("Javi");
    const [password, setPassword] = useState("");

    // Lógica de inicio de sesión (petición a la API)
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        console.log("Username:", username);
        console.log("Password:", password);


    };
    const [age, setAge] = useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

    return (
        <>
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
                            <Box className="flex flex-col gap-4 text-muted-foreground" >
                                <InputLabel id="demo-simple-select-label">Age</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={age}
                                    label="Age"
                                    onChange={handleChange}
                                    sx={{color: "rgba(0,0,0,0)"}}>
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
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
        </>
    );
}