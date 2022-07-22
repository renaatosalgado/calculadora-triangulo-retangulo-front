import React, { useState } from "react";
import { ThemeProvider } from "@emotion/react";
import { createTheme, CssBaseline } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import DataContext from "./contexts/dataContext";

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#388e3c",
      },
      secondary: {
        main: "#1976d2",
      },
    },
  });

  const [hasResults, setHasResults] = useState(null);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <DataContext.Provider value={[hasResults, setHasResults]}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </DataContext.Provider>
    </ThemeProvider>
  );
}

export default App;
