import { Box, Button, Typography } from "@mui/material";
import React from "react";
import CopyrightFooter from "./CopyrightFooter";
import { Link } from "react-router-dom";
import EmailIcon from "@mui/icons-material/Email";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import HelpIcon from "@mui/icons-material/Help";
import StoreIcon from "@mui/icons-material/Store";
import OrderIcon from "@mui/icons-material/Inventory";
function Footer() {
  return (
    <div style={{ backgroundColor: "black" }}>
      <Box
        sx={{
          display: { xs: "block", sm: "grid" },
          gridTemplateColumns: "repeat(5,1fr)",
          gap: 2,
          p: { xs: "1px", sm: "15px" },
          ml: { xs: 0, sm: 2 },
          bgcolor: "black",
        }}
      >
        {/******** FOOTER 1 *********/}
        {footerArr1.map((item, index) => (
          <div key={index}>
            <Link
              style={{
                textDecoration: "none",
              }}
            >
              <Box
                sx={{
                  padding: "15px",
                  border: "2px solid white ",
                  transition: "all 300ms ease",
                  height:"9vh",
                  "&:hover": {
                    transform: "translateY(-6px)",
                  },
                }}
              >
                <div style={{ display: "flex", justifyContent: "center" }}>
                  {item.img}
                </div>
                <Typography
                  sx={{
                    textAlign: "center",
                    fontWeight: 600,
                    fontSize: "20px",
                    color: "white",
                  }}
                >
                  {item.header}
                </Typography>
              </Box>
            </Link>
          </div>
        ))}
      </Box>
      <Box
        sx={{
          display: { xs: "block", sm: "grid" },
          gridTemplateColumns: "repeat(3,1fr)",
          gap: 2,
          p: { xs: "1px", sm: "15px" },
          ml: { xs: 0, sm: 2 },
          bgcolor: "black",
        }}
      >
        {/******** FOOTER 2 *********/}
        {footerArr2.map((item, index) => (
          <Box
            sx={{
              padding: "10px",
              border: "2px solid white ",
              transition: "all 300ms ease",
              height: "32vh",
            }}
            key={index}
          >
            <Typography
              variant="h5"
              sx={{
                display: "flex",
                justifyContent: "center",
                color: "white",
                fontWeight: 700,
                height: "20%",
              }}
            >
              {item.header}
            </Typography>
            <Typography
              sx={{
                textAlign: "center",
                fontWeight: 400,
                fontSize: "20px",
                color: "white",
                mt: 1,
                height: "30%",
              }}
            >
              {item.main}
            </Typography>
            <Link
              style={{
                display: "flex",
                justifyContent: "center",
                textDecoration: "none",
                height: "30%",
              }}
            >
              <Button
                sx={{
                  marginTop: "20px",
                  width: "50%",
                  padding: "5px",
                  cursor: "pointer",
                  bgcolor: "white",
                  color: "black",
                  "&:hover": {
                    bgcolor: "transparent",
                    border: "2px solid white",
                    color: "white",
                  },
                }}
              >
                <Typography sx={{ fontWeight: 500 }}>{item.bottom}</Typography>
              </Button>
            </Link>
          </Box>
        ))}
      </Box>
      <CopyrightFooter/>
    </div>
  );
}

export default Footer;

const footerArr1 = [
  {
    img: <EmailIcon sx={{ color: "white", fontSize: "2rem" }} />,
    header: "Contact Us",
  },
  {
    img: <LocalShippingIcon sx={{ color: "white", fontSize: "2rem" }} />,
    header: "Shipping Info",
  },
  {
    img: <StoreIcon sx={{ color: "white", fontSize: "2rem" }} />,
    header: "Store Pickup",
  },
  {
    img: <OrderIcon sx={{ color: "white", fontSize: "2rem" }} />,
    header: "Order Status",
  },
  {
    img: <HelpIcon sx={{ color: "white", fontSize: "2rem" }} />,
    header: "Help",
  },
];
const footerArr2 = [
  {
    header: "Email Gift Cards",
    main: "Accepted on the internet and at any UrbanCart store",
    bottom: "BUY EMAIL GIFT CARD",
  },
  {
    header: " Loyalty Program",
    main: "Enjoy complimentary shipping, rewards, and additional benefits with UBX.",
    bottom: "UBX DETAILS",
  },
  {
    header: "Sign Up For Emails",
    main: "Stay inspired on the go, everywhere.",
    bottom: "SIGN UP FOR EMAILS",
  },
];
