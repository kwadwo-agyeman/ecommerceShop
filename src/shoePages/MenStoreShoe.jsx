import React, { useEffect } from "react";
import Card from "../components/CardComponent";
import Footer from "../components/Footer";
import { Box, Typography } from "@mui/material";
import LeftGrid from "../components/LeftGrid";
import "../clothingPages/menstore.css";
import { useCart } from "../context/ShopContext";

function MenStoreShoe(props) {
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
          MEN'S SHOES
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
export default MenStoreShoe;

const leftGrid = [
  { header: "Brand", body: { title1: "Puma", title2: "Ferragamo" } },
  { header: "Color", body: { title1: "black", title2: "white" } },
  { header: "Price", body: { title1: "$0-$120", title2: "$120-$500" } },
];
const cardContent = [
  {
    id: 73,
    img:"https://i5.walmartimages.com/asr/10aa1e9f-1123-4261-b64d-f700ab5d7e6f.f2bad978e804a267df1abda2d226cdc3.jpeg",
    productName: "Men's Brown Shoe ",
    gender: "men",
    price: 145.0,
    priceCategory: "$120-$500",
    brand: "Prada",
    size: 6.5,
    color: "brown",
  },
  {
    id: 74,
    img: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/3b4a9386-7dc8-463b-a83f-48d0c3c7cc7d/air-max-pre-day-mens-shoes-JBXGg7.png",
    productName: "Nike Air Max Pre-Day",
    gender: "men",
    price: 155.23,
    priceCategory: "$120-$500",
    brand: "Nike",
    size: 7.0,
    color: "other",
  },
  {
    id: 75,
    img: "https://image-raw.reversible.com/raw_images/b06a0c0512f6b127899244e4de2bb454e78354387a5dccfaf0e1ea0a38be70e1",
    productName: "Men's Ferragamo Shoe",
    gender: "men",
    price: 145.0,
    priceCategory: "$120-$500",
    brand: "Ferragamo",
    size: 6.5,
    color: "black",
  },
  {
    id: 76,
    img: "https://static.qns.digital/img/p/1/6/1/3/8/2/7/1613827.jpg",
    productName: "Nike Air Max Phantom",
    gender: "men",
    price: 100,
    priceCategory: "$0-$120",
    brand: "Nike",
    size: 7.0,
    color: "other",
  },
  {
    id: 77,
    img: "https://www.luxinabox.com/wp-content/uploads/2021/05/735190_00_r20-scaled.jpg",
    productName: "Salvatore Ferragamo Loafers",
    gender: "men",
    price: 345.5,
    priceCategory: "$120-$500",
    brand: "Ferragamo",
    size: 6.5,
    color: "black",
  },
  {
    id: 78,
    img: "https://yesoriginal.com.ua/image/cache/catalog/other_images/377333-11-2-472x497.webp",
    productName: "Viz Runner Repeat",
    gender: "men",
    price: 375,
    priceCategory: "$120-$500",
    brand: "Puma",
    size: 6.5,
    color: "white",
  },
];
