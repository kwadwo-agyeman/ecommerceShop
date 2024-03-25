import React, { useEffect } from "react";
import Card from "../components/CardComponent";
import Footer from "../components/Footer";
import { Box, Typography } from "@mui/material";
import LeftGrid from "../components/LeftGrid";
import "../clothingPages/menstore.css";
import { useCart } from "../context/ShopContext";

function WomenFloral(props) {
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
          WOMEN'S PERFUMES
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
export default WomenFloral;

const leftGrid = [
  { header: "Brand", body: { title1: "Jimmy Choo", title2: "Christian Louboutin" } },
  { header: "Price", body: { title1: "$0-$120", title2: "$120-$500" } },
];
const cardContent = [
    {
      id: 123,
      img: "https://www.sephora.com/productimages/sku/s1377159-main-zoom.jpg?imwidth=315",
      productName: "Women's Rose Seduction Perfumes EDP",
      gender: "women",
      price: 145.0,
      priceCategory: "$120-$500",
      brand: "Jimmy Choo",
      size: 6.5,
      color: "none",
    },
    {
      id: 124,
      img: "https://www.armani.com/variants/images/1647597310871222/F/w350.jpg",
      productName: "YSL Black Opium Eau De Perfume",
      gender: "women",
      price: 155.23,
      priceCategory: "$120-$500",
      brand: "Christian Louboutin",
      size: 7.0,
      color: "none",
    },
    {
      id: 125,
      img: "https://ballantynes-prod.freetls.fastly.net/data/media/images/catalogue/4119359_NA_85bc.jpg?maxheight=630&maxwidth=630&mode=pad&quality=100&404=default.jpg",
      productName: "Mon Paris Eau De Perfume",
      gender: "women",
      price: 145.0,
      priceCategory: "$120-$500",
      brand: "Jimmy Choo",
      size: 6.5,
      color: "none",
    },
    {
      id: 126,
      img: "https://n.nordstrommedia.com/id/sr3/6e302145-f984-489c-af91-aab0440ee49f.jpeg?h=365&w=240&dpr=2",
      productName: "Gold Women Slender Sexy",
      gender: "women",
      price: 100,
      priceCategory: "$0-$120",
      brand: "Jimmy Choo",
      size: 7.0,
      color: "none",
    },
    {
      id: 127,
      img: "https://moniquelhuillier.com/cdn/shop/products/sized-for-product100ml.jpg?v=1592929836&width=533",
      productName: "Chanel Coco EDP",
      gender: "women",
      price: 345.5,
      priceCategory: "$120-$500",
      brand: "Christian Louboutin",
      size: 6.5,
      color: "none",
    },
    {
      id: 128,
      img: "https://www.armani.com/variants/images/1647597284439902/F/w400.jpg",
      productName: "Chanel Chance Pinkline",
      gender: "women",
      price: 375,
      priceCategory: "$120-$500",
      brand: "Jimmy Choo",
      size: 6.5,
      color: "none",
    },
  ];
  