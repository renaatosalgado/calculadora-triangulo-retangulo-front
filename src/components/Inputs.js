import React, { useState } from "react";
import { Button, Grid, TextField, Typography } from "@mui/material";

export default function Inputs({ title }) {
  const initialData = {
    a: "",
    b: "",
    c: "",
    p: "",
    area: "",
  };
  const [data, setData] = useState(initialData);

  function handleInputChange(e) {
    setData({ ...data, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (data.a && data.b && data.c) {
      alert("Insira apenas 2 valores!");
      setData(initialData);
    } else {
      calculateSides();
    }

    calculatePerimeter();
    calculareArea();
    console.log({ data });
  }

  function calculateSides() {
    if (data.a && data.c) {
      data.b = Math.sqrt(Number(data.c) ** 2 - Number(data.a) ** 2);
    } else if (data.b && data.c) {
      data.a = Math.sqrt(Number(data.c) ** 2 - Number(data.b) ** 2);
    } else {
      data.c = Math.sqrt(Number(data.a) ** 2 + Number(data.b) ** 2);
    }
  }

  function calculatePerimeter() {
    data.p = Number(data.a) + Number(data.b) + Number(data.c);
  }

  function calculareArea() {
    data.area = (data.a * data.b) / 2;
  }

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      component="form"
      onSubmit={handleSubmit}
      direction="column"
    >
      <Typography sx={{ m: 1, fontSize: 24, color: "secondary.main" }}>
        {title}
      </Typography>
      <Grid item>
        <TextField
          margin="normal"
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
          label="Lado 'c'"
          name="c"
          type="number"
          onChange={handleInputChange}
          value={data.c}
        />
      </Grid>

      <Grid>
        <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2 }}>
          Calcular
        </Button>
      </Grid>
    </Grid>
  );
}
