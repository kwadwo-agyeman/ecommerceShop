import { Box, Button, Typography } from "@mui/material";
import React from "react";
import headerImg from '../assets/headerImg.jpg'
function Header() {
  return (
    <Box
      sx={{
        background:
          `linear-gradient(345deg,rgb(0,0,0,0.3),rgb(0,0,225,0.2)), url(${headerImg}) center/cover no-repeat`,
        width: "100%",
        height:{xs:"60vh",sm:"90vh"},
        marginTop: "-1rem",
        position: "relative",
        zIndex: 111,
        padding: "2rem 0",
      }}
    >
      <Typography
        variant="h2"
        sx={{
          color: "white",
          marginTop: { xs: "8rem", sm: "4rem" },
          marginLeft: { xs: "1rem", sm: "2rem" },
          fontWeight: 600,
          fontSize: { xs: "50px", sm: "60px" },
        }}
      >
        <span
          style={{
            color: "#FF0000",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
          }}
        >
          UP TO
        </span>{" "}
        30%
        <span
          style={{
            display: "block",
            color: "#FF0000",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
          }}
        >
          DISCOUNT
        </span>
        <span
          style={{
            display: "block",
            color: "white",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
          }}
        >
          ON ALL{" "}
          <span
            style={{
              color: "red",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
            }}
          >
            FTY TOPS
          </span>
        </span>
      </Typography>
      <Box>
        <Button
          variant="contained"
          sx={{
            ml: { xs: "1rem", sm: "2rem" },
            mt: 2,
            transition: "all 200ms ease",
            borderRadius: "none",
            fontWeight:600,
            "&:hover": {
              bgcolor: "transparent",
              border: "solid 3px white",
            },
          }}
        >
          <Typography variant="h6" component="p"> SHOP SALE</Typography>
        </Button>
      </Box>
    </Box>
  );
}

export default Header;
