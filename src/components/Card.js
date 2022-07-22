import React from "react";
import { CardMedia } from "@mui/material";

export default function Card({ imageLink, width }) {
  return (
    <CardMedia
      component="img"
      image={imageLink}
      sx={{ maxWidth: `${width}px` }}
    />
  );
}
