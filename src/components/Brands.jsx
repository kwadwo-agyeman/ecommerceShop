import React from "react";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";

function Brands(props) {
  return (
    <div>
      <div
        id="brands"
        className="nav--menu--alt"
        onMouseLeave={props.handleMouseLeave}
        style={{
          position: "absolute",
          top: "2rem",
          left: "-2rem",
          paddingTop: "15px",
          backgroundColor: "rgb(240, 255, 255,0.9)",

          zIndex: 222,
          width: "100%",
        }}
      >
        <Box
          sx={{
            p: 2,
            bgcolor: "rgb(240, 255, 255,0.9)",
          }}
        >
          <ul
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <li>
              <Link to="/nike">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/9/94/Old_Nike_logo.jpg"
                  alt="nike"
                  style={{
                    display: "inline-block",
                    width: "70px",
                    objectFit: "cover",
                  }}
                />
              </Link>
            </li>
            <li>
              <Link to="/dior">
                <img
                  src="https://static.vecteezy.com/system/resources/previews/023/599/608/original/christian-dior-brand-logo-black-design-symbol-luxury-clothes-fashion-illustration-free-vector.jpg"
                  alt="dior"
                  style={{
                    display: "inline-block",
                    width: "70px",
                    objectFit: "cover",
                  }}
                />
              </Link>
            </li>
            <li>
              <Link to="/lv">
                <img
                  src="https://1000logos.net/wp-content/uploads/2021/04/Louis-Vuitton-logo.png"
                  alt="louis vouitton"
                  style={{
                    display: "inline-block",
                    width: "70px",
                    objectFit: "cover",
                  }}
                />
              </Link>
            </li>
            <li>
              <Link to="/hermes">
                <img
                  src="https://cdn.shopify.com/s/files/1/0558/6413/1764/files/Rewrite_Hermes_Logo_Design_History_Evolution_0_1024x1024.jpg?v=1694742016"
                  alt="hermes"
                  style={{
                    display: "inline-block",
                    width: "70px",
                    objectFit: "cover",
                  }}
                />
              </Link>
            </li>
          </ul>
        </Box>
      </div>
    </div>
  );
}

export default Brands;
