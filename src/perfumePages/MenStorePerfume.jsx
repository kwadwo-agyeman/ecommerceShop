import React, { useEffect } from "react";
import Card from "../components/CardComponent";
import Footer from "../components/Footer";
import { Box, Typography } from "@mui/material";
import LeftGrid from "../components/LeftGrid";
import "../clothingPages/menstore.css";
import { useCart } from "../context/ShopContext";

function MenStorePerfume(props) {
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
          MEN'S PERFUMES
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
export default MenStorePerfume;

const leftGrid = [
  { header: "Brand", body: { title1: "Jimmy Choo", title2: "Versace" } },
  { header: "Price", body: { title1: "$0-$120", title2: "$120-$500" } },
];
const cardContent = [
    {
      id: 129,
      img: "https://target.scene7.com/is/image/Target/GUEST_34eb0f57-f14a-43a7-9c5e-1a815de8c992?wid=488&hei=488&fmt=pjpeg",
      productName: "Jimmy Choo Men Perfume",
      gender: "men",
      price: 145.0,
      priceCategory: "$120-$500",
      brand: "Jimmy Choo",
      size: 6.5,
      color: "none",
    },
    {
      id: 130,
      img: "https://www.versace.com/dw/image/v2/BGWN_PRD/on/demandware.static/-/Sites-ver-master-catalog/default/dw4e8473f8/original/90_R740010-R100MLS_RNUL_20_Eros~EDT~100~ml--Versace-online-store_0_0.jpg?sw=550&q=85&strip=true",
      productName: "Versace Oros EDT",
      gender: "men",
      price: 155.23,
      priceCategory: "$120-$500",
      brand: "Versace",
      size: 7.0,
      color: "none",
    },
    {
      id: 131,
      img: "https://assets.vogue.com/photos/6054ce48ba2b50871bd1d368/3:4/w_748%2Cc_limit/slide_8.jpg",
      productName: "Mon Paris Eau De Perfume",
      gender: "men",
      price: 145.0,
      priceCategory: "$120-$500",
      brand: "other",
      size: 6.5,
      color: "none",
    },
    {
      id: 132,
      img: "https://perfumania.com/cdn/shop/products/Calvin-Klein-Be-Mens-Eau-de-Toilette-Spray-6.7-Best-Price-Fragrance-Parfume-FragranceOutlet.com-Details.jpg?v=1579124084",
      productName: "Gold Men Slender Black",
      gender: "men",
      price: 100,
      priceCategory: "$0-$120",
      brand: "other",
      size: 7.0,
      color: "none",
    },
    {
      id: 133,
      img: "https://fimgs.net/mdimg/perfume/375x500.55166.jpg",
      productName: "Chanel Coco EDP",
      gender: "men",
      price: 345.5,
      priceCategory: "$120-$500",
      brand: "other",
      size: 6.5,
      color: "none",
    },
    {
      id: 134,
      img: "https://m.media-amazon.com/images/I/51Pbxv8286L._AC_UF350,350_QL50_.jpg",
      productName: "Boss Chance Blackline",
      gender: "men",
      price: 375,
      priceCategory: "$120-$500",
      brand: "other",
      size: 6.5,
      color: "none",
    },
  ];
  