import React, { useEffect } from "react";
import Card from "../components/CardComponent";
import Footer from "../components/Footer";
import { Box, Typography } from "@mui/material";
import LeftGrid from "../components/LeftGrid";
import "../clothingPages/menstore.css";
import { useCart } from "../context/ShopContext";

function WomenStoreSn(props) {
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
          SCHOOL SHOES
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
          {props.cardArr && props.cardArr.map((cardItem, index) => (
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
export default WomenStoreSn;

const leftGrid = [
  { header: "Brand", body: { title1: "Puma", title2: "Adidas" } },
  { header: "Color", body: { title1: "white", title2: "black" } },
  { header: "Price", body: { title1: "$0-$120", title2: "$120-$500" } },
];
const cardContent = [
    {
      id: 117,
      img: "https://media.deichmann.com/asset/deichmann/product-h6/p_mosaic_pd/--1839017_H6.jpg",
      productName: "Puma Stylish Women's Shoe",
      gender: "women",
      price: 145.0,
      priceCategory: "$120-$500",
      brand: "Puma",
      size: 6.5,
      color: "white",
    },
    {
      id: 118,
      img: "https://di2ponv0v5otw.cloudfront.net/posts/2023/02/21/63f52d5558083dce445a9f9b/m_63f52d7a52eee13f652ea745.jpg",
      productName: "Adidas Elegant Black Shiny Pumps",
      gender: "women",
      price: 155.23,
      priceCategory: "$120-$500",
      brand: "Adidas",
      size: 7.0,
      color: "white",
    },
    {
      id: 119,
      img: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/393813/01/sv01/fnd/EEA/fmt/png/Suede-Brand-Love-sneakers",
      productName: "Puma Chic Women's Casual Boots",
      gender: "women",
      price: 145.0,
      priceCategory: "$120-$500",
      brand: "Puma",
      size: 6.5,
      color: "black",
    },
    {
      id: 120,
      img: "https://img.tatacliq.com/images/i7/1348Wx2000H/MP000000009599076_1348Wx2000H_202105220008092.jpeg",
      productName: "Puma Classic Women's Casual Sneakers",
      gender: "women",
      price: 100,
      priceCategory: "$0-$120",
      brand: "Puma",
      size: 7.0,
      color: "white",
    },
    {
      id: 121,
      img: "https://media.centrepointstores.com/i/centrepoint/GW9262BLACK-GW9262-SMSM22070922_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-m-prt-pdp-2x$",
      productName: "Adidas Fashionable Black Loafers",
      gender: "women",
      price: 345.5,
      priceCategory: "$120-$500",
      brand: "Adidas",
      size: 6.5,
      color: "black",
    },
    {
      id: 122,
      img: "https://images.journeys.com/images/products/1_634698_ZM_ALT5.JPG",
      productName: "Puma Avalanche Women's Black Heels",
      gender: "women",
      price: 375,
      priceCategory: "$120-$500",
      brand: "Puma",
      size: 6.5,
      color: "white",
    },
  ];
  