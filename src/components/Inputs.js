import React, { useState } from "react";
import { Button, Grid, TextField, Typography } from "@mui/material";

export default function Inputs({ title }) {
  const [data, setData] = useState({
    a: "",
    b: "",
    c: "",
    p: "",
    area: "",
  });

  function handleInputChange(e) {
    setData({ ...data, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(data);
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
