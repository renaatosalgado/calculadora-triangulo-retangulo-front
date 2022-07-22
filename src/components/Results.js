import {
  Button,
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import React, { useContext } from "react";
import DataContext from "../contexts/dataContext";

export default function Results({ data, title }) {
  const [hasResults, setHasResults] = useContext(DataContext);

  const dataValues = Object.entries(data);

  function newCalc() {
    setHasResults(false);
  }

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      direction="column"
    >
      <Typography sx={{ m: 1, fontSize: 24, color: "secondary.main" }}>
        {title}
      </Typography>
      <Grid item>
        <List>
          {dataValues.map((value, index) => (
            <ListItem key={index}>
              <ListItemText primary={`${value[0]} = ${value[1]}`} />
            </ListItem>
          ))}
        </List>
      </Grid>

      <Grid item>
        <Button variant="contained" sx={{ mt: 3, mb: 2 }} onClick={newCalc}>
          Novo cálculo
        </Button>
      </Grid>
    </Grid>
  );
}
