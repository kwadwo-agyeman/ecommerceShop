import { Box, Typography } from "@mui/material";
import React from "react";

function Banner2() {
  return (
    <div>
      <Typography
        variant="h2"
        sx={{
          color: "black",
          fontWeight: 700,
          fontSize: { xs: "30px", sm: "40px" },
          textAlign: "center",
        }}
      >
        NEW SHOE ARRIVALS
      </Typography>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", sm: "repeat(5,1fr)" },
          gap: 2,
          padding: 3,
        }}
      >
        <article>
          <img
            style={{ marginTop: "40px" }}
            src="https://www.ebony.com/wp-content/uploads/2023/02/23/Unknown-1-2-1000x552.jpg?t=1677201222"
            alt="picture"
          />
          <Typography sx={{ mt: 3, textAlign: "center", fontWeight: 600,fontSize:{xs:"25px",sm:"15px"} }}>
            Timberland Hip Hop 50th
          </Typography>
        </article>
        <article>
          <img
            style={{ marginTop: "50px" }}
            src="https://izicop.com/cdn/shop/products/snakerstoreNew_Balance_9060_Blue_Haze-U9060FNB-0.png?v=1676362384"
            alt="picture"
          />

          <Typography sx={{ textAlign: "center", fontWeight: 600,fontSize:{xs:"25px",sm:"15px"}, mt: 1 }}>
            Nike Air Force 1
          </Typography>
        </article>
        <article>
          <img
            src="https://static.nike.com/a/images/t_default/e3689ad1-9b7e-4518-81a8-6e0beb714491/air-force-1-07-lv8-shoes-ggb31G.png"
            alt="picure"
          />

          <Typography sx={{ textAlign: "center", fontWeight: 600,fontSize:{xs:"25px",sm:"15px"}, mt: -4 }}>
            New Balance 9060
          </Typography>
        </article>
        <article>
          <img
            style={{ marginTop: "-12px" }}
            src="https://cdn2.basket4ballers.com/210972-thickbox_default/jordan-zion-3-mud-sweat-and-tears-dr0675-300.jpg"
            alt="picture"
          />

          <Typography sx={{ mt: -3, textAlign: "center", fontWeight: 600,fontSize:{xs:"25px",sm:"15px"} }}>
            Jordan Zion 3
          </Typography>
        </article>
        <article>
          <img
            src="https://static.nike.com/a/images/t_default/3fb98eb1-5762-4906-8f46-75c6fffbb449/giannis-immortality-3-basketball-shoes-fPJbRd.png"
            alt="picture"
          />

          <Typography sx={{ mt: -4, textAlign: "center", fontWeight: 600,fontSize:{xs:"25px",sm:"15px"} }}>
            Giannis Immortality 3
          </Typography>
        </article>
      </Box>
    </div>
  );
}

export default Banner2;
