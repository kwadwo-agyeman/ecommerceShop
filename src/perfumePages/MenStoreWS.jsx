import React, { useEffect } from "react";
import Card from "../components/CardComponent";
import Footer from "../components/Footer";
import { Box, Typography } from "@mui/material";
import LeftGrid from "../components/LeftGrid";
import "../clothingPages/menstore.css";
import { useCart } from "../context/ShopContext";

function MenStoreWS(props) {
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
          WOOD SCENTS
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
export default MenStoreWS;

const leftGrid = [
  { header: "Brand", body: { title1: "Jimmy Choo", title2: "Versace" } },
  { header: "Price", body: { title1: "$0-$120", title2: "$120-$500" } },
];
const cardContent = [
    {
      id: 135,
      img: "https://imageengine.victorinox.com/mediahub/178737/640Wx560H/FRA_V0001229_S1.jpg",
      productName: "Jimmy Choo Men Perfume",
      gender: "men",
      price: 145.0,
      priceCategory: "$120-$500",
      brand: "Jimmy Choo",
      size: 6.5,
      color: "none",
    },
    {
      id: 136,
      img: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1693230179-0400017494170_NOCOLOR.jpg?crop=1xw:1xh;center,top&resize=980:*",
      productName: "Versace Oros EDT",
      gender: "men",
      price: 155.23,
      priceCategory: "$120-$500",
      brand: "Versace",
      size: 7.0,
      color: "none",
    },
    {
      id: 137,
      img: "https://vader-prod.s3.amazonaws.com/1680705223-1-642d86c34fd81.png",
      productName: "Mon Paris Eau De Perfume",
      gender: "men",
      price: 145.0,
      priceCategory: "$120-$500",
      brand: "other",
      size: 6.5,
      color: "none",
    },
    {
      id: 138,
      img: "https://www.zuofun.com/wp-content/uploads/2022/05/wood88666-2.jpg",
      productName: "Gold Men Slender Black",
      gender: "men",
      price: 100,
      priceCategory: "$0-$120",
      brand: "other",
      size: 7.0,
      color: "none",
    },
    {
      id: 139,
      img: "https://cdn.dooca.store/3359/products/n7uaw22civ4bap09h6hmobcigtx5zqlrlldk.png?v=1660678426",
      productName: "Chanel Coco EDP",
      gender: "men",
      price: 345.5,
      priceCategory: "$120-$500",
      brand: "other",
      size: 6.5,
      color: "none",
    },
    {
      id: 140,
      img: "https://marabika.lt/8827-large_default/hardcore-wood-fragrance-world-100ml.jpg",
      productName: "Boss Chance Blackline",
      gender: "men",
      price: 375,
      priceCategory: "$120-$500",
      brand: "other",
      size: 6.5,
      color: "none",
    },
  ];
  