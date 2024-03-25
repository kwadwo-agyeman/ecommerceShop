import React, { useEffect } from "react";
import Card from "../components/CardComponent";
import Footer from "../components/Footer";
import { Box, Typography } from "@mui/material";
import LeftGrid from "../components/LeftGrid";
import "../clothingPages/menstore.css";
import { useCart } from "../context/ShopContext";

function MenStoreAS(props) {
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
          ATHLETIC SHOES
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
export default MenStoreAS;

const leftGrid = [
  { header: "Brand", body: { title1: "Puma", title2: "Ferragamo" } },
  { header: "Color", body: { title1: "black", title2: "white" } },
  { header: "Price", body: { title1: "$0-$120", title2: "$120-$500" } },
];
const cardContent = [
  {
    id: 79,
    img: "https://ae01.alicdn.com/kf/S98ee92ffef5449a9a8c672eefcf23555y/Men-s-Sneakers-Li-ning-VIP-joint-sports-shoes-the-new-2022-warm-wet-shoes-winter.jpg",
    productName: "Men's Brown Shoe ",
    gender: "men",
    price: 145.0,
    priceCategory: "$120-$500",
    brand: "Prada",
    size: 6.5,
    color: "brown",
  },
  {
    id: 80,
    img: "https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/66c8a63097b5aeabc6003cb0d3958996.jpg?imageMogr2/auto-orient%7CimageView2/2/w/800/q/70/format/webp",
    productName: "Nike Air Max Pre-Day",
    gender: "men",
    price: 155.23,
    priceCategory: "$120-$500",
    brand: "Nike",
    size: 7.0,
    color: "other",
  },
  {
    id: 81,
    img: "https://img.kwcdn.com/product/1e19d463b64/bd6101c4-4da0-42a6-bc9e-66697f1cabe1_800x800.png",
    productName: "Men's Ferragamo Shoe",
    gender: "men",
    price: 145.0,
    priceCategory: "$120-$500",
    brand: "Ferragamo",
    size: 6.5,
    color: "black",
  },
  {
    id: 82,
    img: "https://i5.walmartimages.com/asr/5c4f9140-876d-40db-9cd7-95aa15578e23.79e2e623bc73f292c27c0f6c1bcb696f.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF",
    productName: "Nike Air Max Phantom",
    gender: "men",
    price: 100,
    priceCategory: "$0-$120",
    brand: "Nike",
    size: 7.0,
    color: "other",
  },
  {
    id: 83,
    img: "https://i5.walmartimages.com/asr/88a9543e-a4f8-4691-b001-b2025106f0d9.4749316e2d3ac06249e1622dd7db2252.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF",
    productName: "Salvatore Ferragamo Loafers",
    gender: "men",
    price: 345.5,
    priceCategory: "$120-$500",
    brand: "Ferragamo",
    size: 6.5,
    color: "black",
  },
  {
    id: 84,
    img: "https://i5.walmartimages.com/asr/5cf9b02e-1e88-497e-87c4-9e112f2349b3.2e898b6e2295da09c871fc2df7c35762.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF",
    productName: "Viz Runner Repeat",
    gender: "men",
    price: 375,
    priceCategory: "$120-$500",
    brand: "Puma",
    size: 6.5,
    color: "white",
  },
];
