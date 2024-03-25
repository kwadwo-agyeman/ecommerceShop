import { Box, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import Img1 from "../../assets/b3Img1.jpg"
import Img2 from "../../assets/b3Img2.jpg";
import Img3 from "../../assets/b3Img3.jpg";
import './banner.css'
function Banner3() {
  return (
    <Box
      sx={{
        display: { xs: "flex", sm: "grid" },
        flexDirection:"column",
        alignItems:"center",
        justifyContent:"center",
        gridTemplateColumns: "repeat(3,1fr)",
        gap: 2,
        p: { xs: "1px", sm: "15px" },
        ml: { xs: 0, sm: 2 },
        // mt:{xs:2,sm: 0}
      }}
    >
      {bannerArr.map((item, index) => (
        <article className="banner--container" style={{padding:"15px"}} key={index}>
          <Link>
            <img className="banner--img" style={{}} src={item.img} alt="" />
          </Link>
          <Typography
            variant="h4"
            sx={{
              textAlign: "center",
              fontWeight: 600,
              fontSize: "30px",
              color:"rgb(0,0,0,0.8)",
              mt:3
            }}
          >
            {item.header}
          </Typography>
          <Link style={{ textDecoration: "none" }}>
            <Typography
              sx={{
                textAlign: "center",
                color: "black",
                textDecoration: "underline",
                transition: "all 400ms ease",
                "&:hover": {
                  textDecorationThickness: "3px",
                },
              }}
            >
              {item.linkProduct}
            </Typography>
          </Link>
        </article>
      ))}
    </Box>
  );
}

export default Banner3;

const bannerArr = [
  { img: Img1, header: "Eternal Symbols", linkProduct: "SHOP CLASSICS" },
  { img: Img2, header: "Gent Heat", linkProduct: "SHOP MEN" },
  { img: Img3, header: "Fragrant Elixirs", linkProduct: "SHOP PERFUMES " },
];
