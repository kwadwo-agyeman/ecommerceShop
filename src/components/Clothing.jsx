import React from "react";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

function Clothing(props) {
  return (
    <div>
      <div
        id="clothes"
        className="nav--menu--alt"
        onMouseLeave={props.handleMouseLeave}
        style={{
          position: "absolute",
          top: "2rem",
          left: 0,
          paddingTop: "15px",
          backgroundColor: "rgb(240, 255, 255,0.9)",
          zIndex: 222,
          width: "100%",
        }}
      >
        <Box
          sx={{
            p: 2,
            display: "grid",
            gridTemplateColumns: "repeat(3,1fr)",
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
                    to="/womenStore"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    All Category
                  </Link>
                </li>
                <li>
                  <Link
                    to="/womenB"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Blouses
                  </Link>
                </li>
                <li>
                  <Link
                    to="/womenT"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    {" "}
                    Tunics
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
                    to="/menStore"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    All Category
                  </Link>
                </li>
                <li>
                  <Link
                    to="/menStoreTS"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    T-Shirts
                  </Link>
                </li>
                <li>
                  <Link
                    to="/menStoreCT"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Polo T-Shirts
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
              Children
            </Typography>
            <section>
              <ul>
                <li>
                  <Link
                    to="/childrenStore"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Children's Clothing
                  </Link>
                </li>
                <li>
                  <Link
                    to="/childrenStoreD"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Dress
                  </Link>
                </li>
                <li>
                  <Link
                    to="/childrenStoreS"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Shirts
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

export default Clothing;
