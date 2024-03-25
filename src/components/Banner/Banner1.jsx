import React from "react";
import { Link } from "react-router-dom";
import BannerImg from "../../assets/banner1.jpg";
import { Box, Button, Typography } from "@mui/material";
function Banner1() {
  return (
    <div>
      <Link style={{ textDecoration: "none" }}>
        <div
          style={{ position: "relative", width: "95%", margin: "2rem auto" }}
        >
          <img
            src={BannerImg}
            alt="kids"
            style={{
              display: "inline-block",
              objectFit: "cover",
              width: "100%",
              margin: "0 auto",
              height: "50vh",
            }}
          />
          <Typography
            variant="h2"
            sx={{
              color: "white",
              marginTop: { xs: "4rem", sm: "3rem" },
              marginLeft: { xs: "1rem", sm: "2rem" },
              fontWeight: 600,
              fontSize: { xs: "35px", sm: "60px" },
              textShadow: "2px 2px 2px rgb(225,225,225,0.8)",
              position: "absolute",
              top: 0,
              left: {xs:"-2%",sm:"15%"},
              padding:2,
              textAlign:{xs:"center", sm:"start"}
            }}
          >
            GIFTS YOUR KIDS WILL LIKE
          </Typography>
          <Box
            sx={{
              backgroundColor: "black",
              padding: "2rem",
              display: "grid",
              placeItems: "center",
              height: "3rem",
            }}
          >
            <Button
              sx={{
                width: { xs: "50%", sm: "20%" },
                padding: "10px",
                backgroundColor: "white",
                color: "black",
                transition: "all 200ms ease",
                "&:hover": {
                  backgroundColor: "transparent",
                  color: "white",
                  border: "solid 2px white",
                },
              }}
            >
              <Typography sx={{ fontWeight: 600 }}>SHOP KIDS</Typography>
            </Button>
          </Box>
        </div>
      </Link>
    </div>
  );
}

export default Banner1;
