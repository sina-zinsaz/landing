// src/components/PricingCard.tsx
import React from "react";
import { Box } from "@mui/material";
import PricingHeader from "./components/header";
import PricingAmount from "./components/amount";
import PricingButton from "./components/button";

const PricingCard: React.FC = () => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        backgroundColor: "#f4f6f8",
      }}
    >
      <Box
        sx={{
          padding: 4,
          textAlign: "center",
          maxWidth: 700,
          display: "flex",
          flexDirection: "column",
          gap: "3.5rem",
        }}
      >
        <PricingHeader />
        <PricingAmount />
        <PricingButton />
      </Box>
    </Box>
  );
};

export default PricingCard;
