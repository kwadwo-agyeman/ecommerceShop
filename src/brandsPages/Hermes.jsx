import React, { useEffect } from "react";
import Card from "../components/CardComponent";
import Footer from "../components/Footer";
import { Box, Typography } from "@mui/material";
import LeftGrid from "../components/LeftGrid";
import "../clothingPages/menstore.css";
import { useCart } from "../context/ShopContext";

function Hermes(props) {
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
          HERMES
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
export default Hermes;

const leftGrid = [
  { header: "Gender", body: { title1: "Men", title2: "Women" } },
  { header: "Price", body: { title1: "$0-$120", title2: "$120-$500" } },
];
const cardContent = [
    {
      id: 147,
      img: "https://sothebys-com.brightspotcdn.com/dims4/default/f654aca/2147483647/strip/true/crop/800x800+0+0/resize/684x684!/quality/90/?url=http%3A%2F%2Fsothebys-brightspot.s3.amazonaws.com%2Fdotcom%2F3a%2Ff9%2Fa95dbe434c1e9b699045426b0e78%2Fgold-birkin.jfif",
      productName: "Birkin Women Bag",
      gender: "Women",
      price: 145.0,
      priceCategory: "$120-$500",
      brand: "Hermes",
      size: 6.5,
      color: "none",
    },
    {
      id: 148,
      img: "https://a.1stdibscdn.com/hermes-hac-50-travel-bag-black-matte-porosus-crocodile-palladium-new-w-box-for-sale/1121189/v_84570421577953547884/8457042_master.jpg?width=768",
      productName: "Hermes Hac 50 Men's Birkin Travel Bag",
      gender: "Men",
      price: 155.23,
      priceCategory: "$120-$500",
      brand: "Hermes",
      size: 7.0,
      color: "none",
    },
    {
      id: 149,
      img: "https://i.pinimg.com/originals/aa/b5/7d/aab57d7c170b8bc39d037b94c08f759e.jpg",
      productName: "Hermes Men Shoes",
      gender: "Men",
      price: 145.0,
      priceCategory: "$120-$500",
      brand: "Hermes",
      size: 6.5,
      color: "none",
    },
    {
      id: 150,
      img: "https://assets.hermes.com/is/image/hermesproduct/232187Z%20VE_front_wm_1?size=3000%2C3000&extend=0%2C0%2C0%2C0&align=0%2C0&$product_item_grid_g$&wid=700&hei=700",
      productName: "Hermes Women Shoes",
      gender: "Women",
      price: 100,
      priceCategory: "$0-$120",
      brand: "Hermes",
      size: 7.0,
      color: "none",
    },
    {
      id: 151,
      img: "https://thegoldgods.com/cdn/shop/files/Studio_Session-2017-lowres_7833b997-cd41-4099-aa97-8b796887d6e2_1800x1800.jpg?v=1688050742",
      productName: "Women Hermos Sunglasses",
      gender: "Women",
      price: 345.5,
      priceCategory: "$120-$500",
      brand: "Hermes",
      size: 6.5,
      color: "none",
    },
    {
      id: 152,
      img: "https://int.lindafarrow.com/cdn/shop/products/LFL1114C3SUN_1_720x.jpg?v=1675271024",
      productName: "Carson D-Frame Sunglasses",
      gender: "Men",
      price: 375,
      priceCategory: "$120-$500",
      brand: "Hermes",
      size: 6.5,
      color: "none",
    },
  ];
  