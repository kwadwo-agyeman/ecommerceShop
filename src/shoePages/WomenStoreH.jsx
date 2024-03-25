import React, { useEffect } from "react";
import Card from "../components/CardComponent";
import Footer from "../components/Footer";
import { Box, Typography } from "@mui/material";
import LeftGrid from "../components/LeftGrid";
import "../clothingPages/menstore.css";
import { useCart } from "../context/ShopContext";

function WomenStoreH(props) {
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
          HEELS
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
export default WomenStoreH;

const leftGrid = [
  { header: "Brand", body: { title1: "Jimmy Choo", title2: "Christian Louboutin" } },
  { header: "Color", body: { title1: "gold", title2: "black" } },
  { header: "Price", body: { title1: "$0-$120", title2: "$120-$500" } },
];
const cardContent = [
    {
      id: 91,
      img: "https://choiceshoes.pk/wp-content/uploads/2023/01/20230115_184620_0001.png",
      productName: "Jimmy Choo Stylish Women's Brown Heels",
      gender: "women",
      price: 145.0,
      priceCategory: "$120-$500",
      brand: "Jimmy Choo",
      size: 6.5,
      color: "gold",
    },
    {
      id: 92,
      img: "https://cdn.webshopapp.com/shops/277853/files/428730217/1000x1300x2/giaro-giaro-taya-black-shiny-pumps.jpg",
      productName: "Christian Louboutin Elegant Black Shiny Pumps",
      gender: "women",
      price: 155.23,
      priceCategory: "$120-$500",
      brand: "Christian Louboutin",
      size: 7.0,
      color: "black",
    },
    {
      id: 93,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaWPnVyl5Dgqb4zMqTePrKCkwQOxh9K6YHrOqevGouNX_p4gQpRy6YwSGslc5cEkplm0k&usqp=CAU",
      productName: "Jimmy Choo Chic Women's Casual Boots",
      gender: "women",
      price: 145.0,
      priceCategory: "$120-$500",
      brand: "Jimmy Choo",
      size: 6.5,
      color: "black",
    },
    {
      id: 94,
      img: "https://cdn.webshopapp.com/shops/277853/files/428724994/1000x1300x2/giaro-black-velour-giaro-destroyer-platform-pumps.jpg",
      productName: "Jimmy Choo Classic Women's Casual Heels",
      gender: "women",
      price: 100,
      priceCategory: "$0-$120",
      brand: "Jimmy Choo",
      size: 7.0,
      color: "black",
    },
    {
      id: 95,
      img: "https://cinderellaofboston.com/wp-content/uploads/2023/08/Jewel_Black.jpg",
      productName: "Christian Louboutin Fashionable Black Heels",
      gender: "women",
      price: 345.5,
      priceCategory: "$120-$500",
      brand: "Christian Louboutin",
      size: 6.5,
      color: "black",
    },
    {
      id: 96,
      img: "https://image.made-in-china.com/2f0j00UKpQqcIGuPfi/Hot-Sale-Black-High-Heels-Lady-Dress-Shoes-for-Formal-Occassion.webp",
      productName: "Jimmy Choo Avalanche Women's Black Heels",
      gender: "women",
      price: 375,
      priceCategory: "$120-$500",
      brand: "Jimmy Choo",
      size: 6.5,
      color: "black",
    },
  ];
  