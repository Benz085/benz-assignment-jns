import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CircularProgress from "@mui/material/CircularProgress";

const CardLoading = () => {
  return (
    <Card>
      <CircularProgress
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      />
    </Card>
  );
};

export default CardLoading;
