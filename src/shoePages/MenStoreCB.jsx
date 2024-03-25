import React, { useEffect } from "react";
import Card from "../components/CardComponent";
import Footer from "../components/Footer";
import { Box, Typography } from "@mui/material";
import LeftGrid from "../components/LeftGrid";
import "../clothingPages/menstore.css";
import { useCart } from "../context/ShopContext";

function MenStoreCB(props) {
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
          CASUAL BOOTS
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
export default MenStoreCB;

const leftGrid = [
  { header: "Brand", body: { title1: "Avalanche", title2: "Ferragamo" } },
  { header: "Color", body: { title1: "brown", title2: "white" } },
  { header: "Price", body: { title1: "$0-$120", title2: "$120-$500" } },
];
const cardContent = [
  {
    id: 85,
    img: "https://target.scene7.com/is/image/Target/GUEST_c323096f-07c1-409f-a928-ce38d22389e0?wid=488&hei=488&fmt=pjpeg",
    productName: "Avalanche Men's Casual Boots ",
    gender: "men",
    price: 145.0,
    priceCategory: "$120-$500",
    brand: "Avanlanche",
    size: 6.5,
    color: "brown",
  },
  {
    id: 86,
    img: "https://target.scene7.com/is/image/Target/GUEST_4cbd3501-ec54-47aa-9933-057efd91896b?wid=488&hei=488&fmt=pjpeg",
    productName: "Avalanche Men's Casual Boots",
    gender: "men",
    price: 155.23,
    priceCategory: "$120-$500",
    brand: "Avalanche",
    size: 7.0,
    color: "brown",
  },
  {
    id: 87,
    img: "https://cdna.lystit.com/400/500/tr/photos/arenamenswear/487a0af2/timberland--Newmarket-2-Rugged-Boot.jpeg",
    productName: "Timberland Black Casual Boots",
    gender: "men",
    price: 145.0,
    priceCategory: "$120-$500",
    brand: "Timberland",
    size: 6.5,
    color: "black",
  },
  {
    id: 88,
    img: "https://n.nordstrommedia.com/id/sr3/af5b3656-2110-4c8d-9bfd-04a059b9ca65.jpeg?h=365&w=240&dpr=2",
    productName: "Timberland Highway Casual Boots",
    gender: "men",
    price: 100,
    priceCategory: "$0-$120",
    brand: "Timberland",
    size: 7.0,
    color: "black",
  },
  {
    id: 89,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmIdeRd3fJWF2H2oOd_IQOrecXAZVdj3vMRAVLJ_IELb5EAQl5kH6s5H8TdROyhHXaP8o&usqp=CAU",
    productName: "Timberland Ferragamo Casual Boots",
    gender: "men",
    price: 345.5,
    priceCategory: "$120-$500",
    brand: "Timberland",
    size: 6.5,
    color: "black",
  },
  {
    id: 90,
    img: "https://www.jiomart.com/images/product/original/rvh3y1fvhg/red-chief-men-s-rust-leather-boots-product-images-rvh3y1fvhg-2-202210062011.jpg?im=Resize=(1000,1000)",
    productName: "Viz Runner Repeat",
    gender: "men",
    price: 375,
    priceCategory: "$120-$500",
    brand: "Avalanche",
    size: 6.5,
    color: "brown",
  },
];
