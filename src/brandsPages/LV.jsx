import React, { useEffect } from "react";
import Card from "../components/CardComponent";
import Footer from "../components/Footer";
import { Box, Typography } from "@mui/material";
import LeftGrid from "../components/LeftGrid";
import "../clothingPages/menstore.css";
import { useCart } from "../context/ShopContext";

function LV(props) {
  // Destructuring values from the useCart hook
  const { cartItems, addToCart } = useCart();

  // useEffect to mount items and add/remove event listener
  useEffect(() => {
    // Function to mount items
    function mountItems() {
      // Call the inspectCategory function with cardContent
      props.inspectCategory(cardContent);
    }

    // Call mountItems on component mount
    mountItems();

    // Add event listener for DOMContentLoaded
    window.addEventListener("DOMContentLoaded", mountItems);

    // Cleanup: Remove event listener on component unmount
    return () => {
      window.removeEventListener("DOMContentLoaded", mountItems);
    };
  }, []); // Empty dependency array ensures this effect runs only once on mount

  return (
    <div>
      <Box sx={{ padding: 2 }}>
        <Typography
          sx={{
            mt: 7,
            fontSize: { xs: "30px", sm: "30px" },
            fontWeight: 500,
          }}
          variant="h3"
        >
          LOUIS VOUITTON
        </Typography>
      </Box>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", sm: "1fr", md: "21% 78%" },
          gap: 2,
          p: 2,
        }}
      >
        <Box sx={{ bgcolor: "#FFF8F0", p: 2, height: "fit-content" }}>
          <Typography>Filter Results</Typography>
          <Typography>(select a filter at a time)</Typography>
          {/* LeftGrid component with relevant props */}
          <LeftGrid
            leftGrid={leftGrid}
            cardContent={cardContent}
            filterCardContent={props.filterCardContent}
            toggleMenuHeight={props.toggleMenuHeight}
          />
        </Box>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "repeat(3,1fr)" },
            gap: 2,
            padding: 2,
            mt: -1.5,
          }}
        >
          {/* Mapping through cardArr to render Card components */}
          {props.cardArr.map((cardItem, index) => (
            <Card
              key={index}
              id={cardItem.id}
              img={cardItem.img}
              productName={cardItem.productName}
              gender={cardItem.gender}
              price={cardItem.price}
              color={cardItem.color}
              brand={cardItem.brand}
              addToCart={addToCart}
              cardItem={cardItem}
              cartItems={cartItems}
            />
          ))}
        </Box>
      </Box>
      {/* Footer component */}
      <Footer />
    </div>
  );
}
export default LV;

const leftGrid = [
  { header: "Gender", body: { title1: "Men", title2: "Women" } },
  { header: "Price", body: { title1: "$0-$120", title2: "$120-$500" } },
];
const cardContent = [
  {
    id: 159,
    img: "https://i.ebayimg.com/images/g/KAkAAOSwfs1j00Cq/s-l1200.webp",
    productName: "Louis Vouitton Darmier Graphite",
    gender: "Men",
    price: 145.0,
    priceCategory: "$120-$500",
    brand: "Louis Vouitton",
    size: 6.5,
    color: "none",
  },
  {
    id: 160,
    img: "https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-graceful-mm-monogram-handbags--M43704_PM2_Front%20view.jpg",
    productName: "Louis Vouitton Graceful MM Women Hobo",
    gender: "Women",
    price: 155.23,
    priceCategory: "$120-$500",
    brand: "Louis Vouitton",
    size: 7.0,
    color: "none",
  },
  {
    id: 161,
    img: "https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-call-back-pump--APCE1JPC02_PM2_Front%20view.jpg",
    productName: "Louis Vouitton Women Shoes",
    gender: "Women",
    price: 145.0,
    priceCategory: "$120-$500",
    brand: "Louis Vouitton",
    size: 6.5,
    color: "none",
  },
  {
    id: 162,
    img: "https://me.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-major-loafer--BOEL1XGC02_PM2_Front%20view.jpg",
    productName: "Louis Vouitton Major Loafer ",
    gender: "Men",
    price: 100,
    priceCategory: "$0-$120",
    brand: "Louis Vouitton",
    size: 7.0,
    color: "none",
  },
  {
    id: 163,
    img: "https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-lv-charm-cat-eye-sunglasses-s00-highlights-and-gifts--Z1720U_PM2_Front%20view.jpg",
    productName: "Louis Vouitton Charm Cat Eye Glasses",
    gender: "Women",
    price: 345.5,
    priceCategory: "$120-$500",
    brand: "Louis Vouitton",
    size: 6.5,
    color: "none",
  },
  {
    id: 164,
    img: "https://images.stockx.com/images/Louis-Vuitton-Sunglasses-Cyclone-Black-Black.jpg?fit=fill&bg=FFFFFF&w=480&h=320&fm=jpg&auto=compress&dpr=2&trim=color&updated_at=1626100569&q=60",
    productName: "Louis Vouitton Sunglasses Cyclone Black",
    gender: "Men",
    price: 375,
    priceCategory: "$120-$500",
    brand: "Louis Vouitton",
    size: 6.5,
    color: "none",
  },
];
