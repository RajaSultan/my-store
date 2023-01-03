import React from "react";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";

const HomePage = () => {
  return (
    <>
      <Typography
        variant="h4"
        color="#144272"
        sx={{ textAlign: "center", mt: 10 }}
      >
        MY PRODUCTS
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "center", mt: 1.5 }}>
        <Divider
          sx={{
            minWidth: "9%",
            border: "2px solid #144272",
            borderRadius: "100px",
          }}
        />
      </Box>
    </>
  );
};

export default HomePage;
