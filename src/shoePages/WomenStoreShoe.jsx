import React, { useEffect } from "react";
import Card from "../components/CardComponent";
import Footer from "../components/Footer";
import { Box, Typography } from "@mui/material";
import LeftGrid from "../components/LeftGrid";
import "../clothingPages/menstore.css";
import { useCart } from "../context/ShopContext";

function WomenStoreShoe(props) {
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
          WOMEN'S SHOES
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
export default WomenStoreShoe;

const leftGrid = [
  { header: "Brand", body: { title1: "Jimmy Choo", title2: "Christian Louboutin" } },
  { header: "Color", body: { title1: "white", title2: "black" } },
  { header: "Price", body: { title1: "$0-$120", title2: "$120-$500" } },
];
const cardContent = [
    {
      id: 97,
      img: "https://i5.walmartimages.com/seo/CAICJ98-Womens-Shoes-Women-s-Canvas-White-Shoes-Classic-Fashion-Low-Cut-Loafer-Sneakers-Hot-Pink_9e11f070-6dc2-4ef3-9001-945e31bfc1b9.5592975b9caf7a54cc95691ac3177da5.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF",
      productName: "Jimmy Choo Stylish Women's Shoe",
      gender: "women",
      price: 145.0,
      priceCategory: "$120-$500",
      brand: "Jimmy Choo",
      size: 6.5,
      color: "black",
    },
    {
      id: 98,
      img: "https://ae01.alicdn.com/kf/Sea2d7c413735423cbb2c22bc8de86f28U/Woman-s-Shoes-Pointed-Toe-Boat-Shoes-Metal-Chain-Stilettos-Designer-Shoes-Hig-Heels-Pumps-Female.jpg",
      productName: "Christian Louboutin Elegant Black Shiny Pumps",
      gender: "women",
      price: 155.23,
      priceCategory: "$120-$500",
      brand: "Christian Louboutin",
      size: 7.0,
      color: "black",
    },
    {
      id: 99,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbl9bnU1SaoaJolJ2tSwGWACGsu-E0D5yMTSUgDGCS0sZdrvo-cx4TWl_jXSOpSyNEPi8&usqp=CAU",
      productName: "Jimmy Choo Chic Women's Casual Boots",
      gender: "women",
      price: 145.0,
      priceCategory: "$120-$500",
      brand: "Jimmy Choo",
      size: 6.5,
      color: "pink",
    },
    {
      id: 100,
      img: "https://m.media-amazon.com/images/I/61CSW46aLpL._AC_UF350,350_QL80_.jpg",
      productName: "Jimmy Choo Classic Women's Casual Heels",
      gender: "women",
      price: 100,
      priceCategory: "$0-$120",
      brand: "Jimmy Choo",
      size: 7.0,
      color: "white",
    },
    {
      id: 101,
      img: "https://i5.walmartimages.com/seo/Aayomet-Woven-Shoes-Women-Ladies-Fashion-Solid-Color-Breathable-Leather-Bow-Decorated-Flat-Casual-Single-Shoes-Black-8-5_b12d4fa6-7f50-4b1b-90b4-48110ab4aa57.08a6cc248db0fd9e1f01aa43669e08c0.jpeg",
      productName: "Christian Louboutin Fashionable Black Loafrs",
      gender: "women",
      price: 345.5,
      priceCategory: "$120-$500",
      brand: "Christian Louboutin",
      size: 6.5,
      color: "black",
    },
    {
      id: 102,
      img: "https://ae01.alicdn.com/kf/S1e46e13b58be4e34934f753cf5898ddfK.jpg_640x640Q90.jpg_.webp",
      productName: "Jimmy Choo Avalanche Women's Black Heels",
      gender: "women",
      price: 375,
      priceCategory: "$120-$500",
      brand: "Jimmy Choo",
      size: 6.5,
      color: "white",
    },
  ];
  