import React, { useEffect } from "react";
import Card from "../components/CardComponent";
import Footer from "../components/Footer";
import { Box, Typography } from "@mui/material";
import LeftGrid from "../components/LeftGrid";
import "../clothingPages/menstore.css";
import { useCart } from "../context/ShopContext";

function Dior(props) {
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
          DIOR
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
export default Dior;

const leftGrid = [
  { header: "Gender", body: { title1: "Men", title2: "Women" } },
  { header: "Price", body: { title1: "$0-$120", title2: "$120-$500" } },
];
const cardContent = [
    {
      id: 141,
      img: "https://i5.walmartimages.com/seo/Dior-Sauvage-Eau-De-Toilette-Spray-Cologne-for-Men-3-4-Oz_b3b83b85-1871-4ac6-962a-b52a2e5ac4fe.0a9631f2bccd9ac1383366d60f6ba9c8.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF",
      productName: "Dior Sauvage Eau De Toilette",
      gender: "Men",
      price: 145.0,
      priceCategory: "$120-$500",
      brand: "Dior",
      size: 6.5,
      color: "none",
    },
    {
      id: 142,
      img: "https://www.dior.com/dw/image/v2/BGXS_PRD/on/demandware.static/-/Sites-master_dior/default/dwef616bf1/Y0996027/Y0996027_C099600151_E01_GHC.jpg?sw=800",
      productName: "JOY Dior Women Perfume",
      gender: "Women",
      price: 155.23,
      priceCategory: "$120-$500",
      brand: "Dior",
      size: 7.0,
      color: "none",
    },
    {
      id: 143,
      img: "https://www.dior.com/couture/var/dior/storage/images/pushs-editos/folder-women-summer-22/224s09am308x5800/30785589-1-eng-GB/224s09am308x5800_1440_1200.jpg?imwidth=3840",
      productName: "Women Ready-To-Wear Christmas",
      gender: "Women",
      price: 145.0,
      priceCategory: "$120-$500",
      brand: "Dior",
      size: 6.5,
      color: "none",
    },
    {
      id: 144,
      img: "https://www.dior.com/couture/ecommerce/media/catalog/product/X/2/1612446375_121V46A6608_X5803_E01_ZHC.jpg",
      productName: "Dior Chez Moi Short-Sleeved Shirt",
      gender: "Men",
      price: 100,
      priceCategory: "$0-$120",
      brand: "Dior",
      size: 7.0,
      color: "none",
    },
    {
      id: 145,
      img: "https://www.dior.com/couture/ecommerce/media/catalog/product/0/s/1678963532_1ADDU115YKY_H27E_E08_GH.jpg",
      productName: "Dior Lingot 50 Bag",
      gender: "Men",
      price: 345.5,
      priceCategory: "$120-$500",
      brand: "Dior",
      size: 6.5,
      color: "none",
    },
    {
      id: 146,
      img: "https://www.dior.com/couture/ecommerce/media/catalog/product/X/c/1685612741_M0455CBAA_M030_E01_GH.jpg",
      productName: "Saddle Bag With Strap Latte Grained Calfskin ",
      gender: "Women",
      price: 375,
      priceCategory: "$120-$500",
      brand: "Dior",
      size: 6.5,
      color: "none",
    },
  ];
  