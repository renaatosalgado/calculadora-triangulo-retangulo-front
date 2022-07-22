import {
  CardMedia,
  Container,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import React from "react";
import triangle from "../assets/images/right-tri.png";
import formulas from "../assets/images/formulas.png";
import subtitles from "../assets/images/subtitle.png";

export default function Home() {
  const bullets = [
    "O triângulo retângulo forma os catetos que são mutuamente perpendiculares e a hipotenusa – o lado mais longo.",
    "A soma dos ângulos do triângulo é 180°, e vale o seguinte: α + β = 90°.",
    "Os comprimentos dos lados podem ser determinados usando o Teorema de Pitágoras, os tamanhos dos ângulos usando as funções trigonométricas.",
  ];

  return (
    <>
      <Container maxWidth="md" sx={{ border: "1px solid #000" }}>
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
            <CardMedia
              component="img"
              image={triangle}
              sx={{ maxWidth: "300px" }}
            />
          </Grid>

          <Grid item>
            <CardMedia
              component="img"
              image={formulas}
              sx={{ maxWidth: "300px" }}
            />
          </Grid>
        </Grid>
        <Grid container justifyContent="center" sx={{ mt: 2 }}>
          <CardMedia
            component="img"
            image={subtitles}
            sx={{ maxWidth: "400px" }}
          />
        </Grid>
      </Container>
    </>
  );
}
