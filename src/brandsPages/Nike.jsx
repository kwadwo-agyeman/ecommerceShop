import React, { useEffect } from "react";
import Card from "../components/CardComponent";
import Footer from "../components/Footer";
import { Box, Typography } from "@mui/material";
import LeftGrid from "../components/LeftGrid";
import "../clothingPages/menstore.css";
import { useCart } from "../context/ShopContext";

function Nike(props) {
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
          NIKE
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
export default Nike;

const leftGrid = [
  { header: "Gender", body: { title1: "Men", title2: "Women" } },
  { header: "Price", body: { title1: "$0-$120", title2: "$120-$500" } },
];
const cardContent = [
    {
      id: 153,
      img: "https://static.nike.com/a/images/t_default/53b6c38e-42ce-4eef-911e-eebf403d3eb2/heritage-crossbody-bag-4l-5NLbPq.png",
      productName: "Nike Heritage Crossbody Bag",
      gender: "Men",
      price: 145.0,
      priceCategory: "$120-$500",
      brand: "Nike",
      size: 6.5,
      color: "none",
    },
    {
      id: 154,
      img: "https://a.1stdibscdn.com/hermes-hac-50-travel-bag-black-matte-porosus-crocodile-palladium-new-w-box-for-sale/1121189/v_84570421577953547884/8457042_master.jpg?width=768",
      productName: "Nike Brasilia Women Bag",
      gender: "Women",
      price: 155.23,
      priceCategory: "$120-$500",
      brand: "Nike",
      size: 7.0,
      color: "none",
    },
    {
      id: 155,
      img: "https://cdn-images.farfetch-contents.com/18/39/65/08/18396508_40259513_300.jpg",
      productName: "Nike Air Force 1",
      gender: "Women",
      price: 145.0,
      priceCategory: "$120-$500",
      brand: "Nike",
      size: 6.5,
      color: "none",
    },
    {
      id: 156,
      img: "https://cdn-images.farfetch-contents.com/18/39/65/08/18396508_40259513_300.jpg",
      productName: "Nike Air Force 1'07 ",
      gender: "Men",
      price: 100,
      priceCategory: "$0-$120",
      brand: "Nike",
      size: 7.0,
      color: "none",
    },
    {
      id: 157,
      img: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/c7e7c4a0-8aa5-4c36-be4a-48000268c41d/burrow-slippers-KQ7cbV.png",
      productName: "Nike Burrow Women Slippers",
      gender: "Women",
      price: 345.5,
      priceCategory: "$120-$500",
      brand: "Nike",
      size: 6.5,
      color: "none",
    },
    {
      id: 158,
      img: "https://i.ebayimg.com/images/g/iIsAAOSw4vphuF33/s-l1200.webp",
      productName: "Nike Slide Sandal",
      gender: "Men",
      price: 375,
      priceCategory: "$120-$500",
      brand: "Nike",
      size: 6.5,
      color: "none",
    },
  ];
  