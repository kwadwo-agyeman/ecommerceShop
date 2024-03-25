import React, { useEffect } from "react";
import Card from "../components/CardComponent";
import Footer from "../components/Footer";
import { Box, Typography } from "@mui/material";
import LeftGrid from "../components/LeftGrid";
import "../clothingPages/menstore.css";
import { useCart } from "../context/ShopContext";

function ChildrenStoreShoe(props) {
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
          CHILDREN'S SHOES
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
export default ChildrenStoreShoe;

const leftGrid = [
  { header: "Brand", body: { title1: "Puma", title2: "Adidas" } },
  { header: "Color", body: { title1: "white", title2: "black" } },
  { header: "Price", body: { title1: "$0-$120", title2: "$120-$500" } },
];
const cardContent = [
    {
      id: 109,
      img: "https://www.mrporter.com/variants/images/42247633208420946/in/w2000_q60.jpg",
      productName: "Puma Stylish Childern's Shoe",
      gender: "childern",
      price: 145.0,
      priceCategory: "$120-$500",
      brand: "Puma",
      size: 6.5,
      color: "white",
    },
    {
      id: 110,
      img: "https://ae01.alicdn.com/kf/S786b26b6c2b44a9db0495c796d8d98c94/Classic-white-shoes-unlimited-season-children-s-white-sports-shoes-ultralight-children-s-shoes-shoes-for.jpg",
      productName: "Adidas Elegant Black Shiny Pumps",
      gender: "women",
      price: 155.23,
      priceCategory: "$120-$500",
      brand: "Adidas",
      size: 7.0,
      color: "white",
    },
    {
      id: 111,
      img: "https://www.jiomart.com/images/product/original/rv6toxnydv/campus-cs-64vs-white-men-s-school-shoes-product-images-rv6toxnydv-1-202209062227.jpg?im=Resize=(500,630)",
      productName: "Puma Chic Women's Casual Boots",
      gender: "women",
      price: 145.0,
      priceCategory: "$120-$500",
      brand: "Puma",
      size: 6.5,
      color: "black",
    },
    {
      id: 112,
      img: "https://i5.walmartimages.com/seo/Final-Clear-Out-Girls-Low-Heeled-Princess-Leather-Shoes-For-Wedding-Party-Dance-Children-Glitter-Butterfly-Shoes-Kids-Flower-Mary-Jane-2-13Y_00110a9a-dd34-4f5f-878e-73cb058ec322.45e7238c99d2ee6a8d183d0dcc031402.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF",
      productName: "Puma Classic Women's Casual Sneakers",
      gender: "children",
      price: 100,
      priceCategory: "$0-$120",
      brand: "Puma",
      size: 7.0,
      color: "white",
    },
    {
      id: 115,
      img: "https://www.kaileep.com/cdn/shop/files/92B78CBC-551C-44D3-BCA4-5FA9AE8E8F25_1024x1024.jpg?v=1683903798",
      productName: "Adidas Fashionable Loafers",
      gender: "children",
      price: 345.5,
      priceCategory: "$120-$500",
      brand: "Adidas",
      size: 6.5,
      color: "black",
    },
    {
      id: 116,
      img: "https://target.scene7.com/is/image/Target/GUEST_a9333731-8360-4516-b78f-fba87b37eb21",
      productName: "Puma Avalanche Children's Shoe",
      gender: "children",
      price: 375,
      priceCategory: "$120-$500",
      brand: "Puma",
      size: 6.5,
      color: "white",
    },
  ];
  