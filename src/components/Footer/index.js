import React from "react";
import { Box, Typography } from "@mui/material";
import Copyright from "../Copyright";

export default function Footer() {
  return (
      <Box sx={{ p: 6, mt: 10 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Calculadora de Triângulo Retângulo
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Aqui a matemática vira nossa amiga!
        </Typography>
        <Copyright />
      </Box>
  );
}
