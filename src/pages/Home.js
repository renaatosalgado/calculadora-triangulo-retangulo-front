import {
  Container,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import React from "react";
import triangle from "../assets/images/right-tri.png";
import formulas from "../assets/images/formulas.png";
import subtitles from "../assets/images/subtitle.png";
import Card from "../components/Card";
import Inputs from "../components/Inputs";
import Footer from "../components/Footer";

export default function Home() {
  const bullets = [
    "O triângulo retângulo forma os catetos que são mutuamente perpendiculares e a hipotenusa – o lado mais longo.",
    "A soma dos ângulos do triângulo é 180°, e vale o seguinte: α + β = 90°.",
    "Os comprimentos dos lados podem ser determinados usando o Teorema de Pitágoras, os tamanhos dos ângulos usando as funções trigonométricas.",
  ];

  return (
    <>
      <Container maxWidth="md">
        <Typography
          component="h1"
          variant="h3"
          align="center"
          color="primary"
          fontFamily="Permanent marker"
          sx={{ m: 3 }}
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

        <Divider sx={{ m: 2 }} />

        <Inputs title="Insira 2 valores, na mesma unidade" />
      </Container>
      <Footer />
    </>
  );
}
