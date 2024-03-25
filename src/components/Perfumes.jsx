import React from "react";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

function Perfumes(props) {
  return (
    <div>
      <div
        id="perfumes"
        className="nav--menu--alt"
        onMouseLeave={props.handleMouseLeave}
        style={{
          position: "absolute",
          top: "2rem",
          left: 0,
          zIndex: 222,
          paddingTop:"15px",
          backgroundColor: "rgb(240, 255, 255,0.9)",
          width: "100%",
        }}
      >
        <Box
          sx={{
            p: 2,
            display: "grid",
            gridTemplateColumns: "repeat(2,1fr)",
          }}
        >
          <article>
            <Typography
              variant="h7"
              sx={{ fontWeight: 600, marginLeft: "2.5rem" }}
            >
              Women
            </Typography>
            <section>
              <ul>
                <li>
                  <Link
                    to="/womenStorePerfume"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    All Category
                  </Link>
                </li>
                <li>
                  <Link
                    to="/womenFloral"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Floral Scents
                  </Link>
                </li>
              </ul>
            </section>
          </article>
          <article>
            <Typography
              variant="h7"
              sx={{ fontWeight: 600, marginLeft: "2.5rem" }}
            >
              Men
            </Typography>
            <section>
              <ul>
                <li>
                  <Link
                    to="/menStorePerfume"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    All Category
                  </Link>
                </li>
                <li>
                  <Link
                    to="/menStoreWS"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Woody Scents
                  </Link>
                </li>
              </ul>
            </section>
          </article>

        </Box>
      </div>
    </div>
  );
}

export default Perfumes;
