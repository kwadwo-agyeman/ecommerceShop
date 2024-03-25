import React, { useEffect } from "react";
import Card from "../components/CardComponent";
import Footer from "../components/Footer";
import { Box, Typography } from "@mui/material";
import LeftGrid from "../components/LeftGrid";
import "../clothingPages/menstore.css";
import { useCart } from "../context/ShopContext";

function WomenStorePerfume(props) {
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
export default WomenStorePerfume;

const leftGrid = [
  { header: "Brand", body: { title1: "Jimmy Choo", title2: "Christian Louboutin" } },
  { header: "Price", body: { title1: "$0-$120", title2: "$120-$500" } },
];
const cardContent = [
    {
      id: 117,
      img: "https://www.worldofwatches.com/media/catalog/product/cache/6275b0637049ab4262e9abf2e63a6f54/w/o/women-secret-ladies-rose-seduction-edp-spray-3-4-oz-tester-fragrances-8436581-z-naf2n_1.jpg",
      productName: "Women's Rose Seduction Perfumes EDP",
      gender: "women",
      price: 145.0,
      priceCategory: "$120-$500",
      brand: "Jimmy Choo",
      size: 6.5,
      color: "none",
    },
    {
      id: 118,
      img: "https://www.yslbeautyus.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-ysl-master-catalog/default/dwf7216072/Black%20Opium%20Packshots/BO%20EDP/3365440787971.jpg?sw=465&sh=465&sm=cut&sfrm=jpg&q=85",
      productName: "YSL Black Opium Eau De Perfume",
      gender: "women",
      price: 155.23,
      priceCategory: "$120-$500",
      brand: "Christian Louboutin",
      size: 7.0,
      color: "none",
    },
    {
      id: 119,
      img: "https://www.yslbeauty.com.my/on/demandware.static/-/Sites-ysl-master-catalog/default/dwa8813247/images/Fragrance/WW-51041YSL/WW-51041YSL-3614273898546-30ml-IMAGE1.jpg",
      productName: "Mon Paris Eau De Perfume",
      gender: "women",
      price: 145.0,
      priceCategory: "$120-$500",
      brand: "Jimmy Choo",
      size: 6.5,
      color: "none",
    },
    {
      id: 120,
      img: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1664385732-jadore-perfume-1664385713.png?crop=1xw:1xh;center,top&resize=980:*",
      productName: "Gold Women Slender Sexy",
      gender: "women",
      price: 100,
      priceCategory: "$0-$120",
      brand: "Jimmy Choo",
      size: 7.0,
      color: "none",
    },
    {
      id: 121,
      img: "https://fragrancecart.com/wp-content/uploads/2018/06/CHANEL-COCO-EDP-FOR-WOMEN-1.jpg",
      productName: "Chanel Coco EDP",
      gender: "women",
      price: 345.5,
      priceCategory: "$120-$500",
      brand: "Christian Louboutin",
      size: 6.5,
      color: "none",
    },
    {
      id: 122,
      img: "https://hips.hearstapps.com/hmg-prod/images/2022-perfumes-index-1657224599.jpg?crop=0.401xw:0.801xh;0.0337xw,0.103xh&resize=640:*",
      productName: "Chanel Chance Pinkline",
      gender: "women",
      price: 375,
      priceCategory: "$120-$500",
      brand: "Jimmy Choo",
      size: 6.5,
      color: "none",
    },
  ];
  