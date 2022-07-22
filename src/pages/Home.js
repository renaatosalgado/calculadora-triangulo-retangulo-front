import {
  Button,
  Container,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  TextField,
  Typography,
} from "@mui/material";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import React, { useState } from "react";
import triangle from "../assets/images/right-tri.png";
import formulas from "../assets/images/formulas.png";
import subtitles from "../assets/images/subtitle.png";
import Card from "../components/Card";

export default function Home() {
  const bullets = [
    "O triângulo retângulo forma os catetos que são mutuamente perpendiculares e a hipotenusa – o lado mais longo.",
    "A soma dos ângulos do triângulo é 180°, e vale o seguinte: α + β = 90°.",
    "Os comprimentos dos lados podem ser determinados usando o Teorema de Pitágoras, os tamanhos dos ângulos usando as funções trigonométricas.",
  ];

  const [data, setData] = useState({
    a: "",
    b: "",
    c: "",
    p: "",
    area: "",
  });

  function handleInputChange(e) {
    setData({ ...data, [e.target.name]: e.target.value });
    console.log(data);
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(data);
  }

  return (
    <>
      <Container maxWidth="md">
        <Typography
          component="h1"
          variant="h3"
          align="center"
          color="primary"
          fontFamily="Permanent marker"
        >
          Calculadora de Triângulo Retângulo
        </Typography>
        <List>
          {bullets.map((bullet, index) => (
            <ListItem key={index}>
              <ListItemIcon>
                <FiberManualRecordIcon fontSize="small" color="primary" />
              </ListItemIcon>
              <ListItemText primary={bullet} />
            </ListItem>
          ))}
        </List>
        <Grid container direction="row" justifyContent="center" sx={{ mt: 2 }}>
          <Grid item>
            <Card imageLink={triangle} width={300} />
          </Grid>

          <Grid item>
            <Card imageLink={formulas} width={300} />
          </Grid>
        </Grid>

        <Grid container justifyContent="center" sx={{ mt: 2 }}>
          <Card imageLink={subtitles} width={400} />
        </Grid>

        <Grid
          container
          justifyContent="center"
          alignItems="center"
          component="form"
          onSubmit={handleSubmit}
          direction="column"
        >
          <Grid item>
            <TextField
              margin="normal"
              sx={{ maxWidth: "300px" }}
              label="Lado 'a'"
              name="a"
              type="number"
              onChange={handleInputChange}
              value={data.a}
            />
          </Grid>

          <Grid>
            <TextField
              margin="normal"
              sx={{ maxWidth: "300px" }}
              label="Lado 'b'"
              name="b"
              type="number"
              onChange={handleInputChange}
              value={data.b}
            />
          </Grid>

          <Grid>
            <TextField
              margin="normal"
              sx={{ maxWidth: "300px" }}
              label="Lado 'c'"
              name="c"
              type="number"
              onChange={handleInputChange}
              value={data.c}
            />
          </Grid>

          <Grid>
            <Button
              type="submit"
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Calcular
            </Button>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
