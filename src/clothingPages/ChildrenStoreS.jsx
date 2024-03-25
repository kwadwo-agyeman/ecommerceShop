import React, { useEffect } from "react";
import Card from "../components/CardComponent";
import Footer from "../components/Footer";
import { Box, Typography } from "@mui/material";
import LeftGrid from "../components/LeftGrid";
import "./menstore.css";
import { useCart } from "../context/ShopContext";

function ChildrenStoreS(props) {
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
          SHIRTS
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
export default ChildrenStoreS;

const leftGrid = [
  { header: "Brand", body: { title1: "Zara", title2: "FTY" } },
  { header: "Color", body: { title1: "blue", title2: "white" } },
  { header: "Price", body: { title1: "$0-$120", title2: "$120-$500" } },
];
const cardContent = [
  {
    id: 67,
    img: "https://i5.walmartimages.com/seo/Boys-Light-Blue-Short-Sleeve-Polo-Shirt-Size-4-Case-of-36_f7907ba0-2f58-430e-9a2e-95e2ec8a04a6.a7a7ad1902715f118827df5e7f8d9fb8.jpeg",
    productName: "Blue Duffy Boys Shirt",
    gender: "children",
    price: 145.0,
    priceCategory: "$120-$500",
    brand: "Zara",
    size: 6.5,
    color: "blue",
  },
  {
    id: 68,
    img: "https://ae01.alicdn.com/kf/H2fb9cedf70e3417fba4cebbd147cc6473.jpg_640x640Q90.jpg_.webp",
    productName: "Butterfly Chrome Style Shirt",
    gender: "children",
    price: 155.23,
    priceCategory: "$120-$500",
    brand: "FTY",
    size: 7.0,
    color: "white",
  },
  {
    id: 69,
    img: "https://asset1.cxnmarksandspencer.com/is/image/mands/SD_04_T87_2448I_E0_X_EC_0?wid=1024&qlt=80",
    productName: "Zara Polo Shirt Kids",
    gender: "children",
    price: 145.0,
    priceCategory: "$120-$500",
    brand: "Zara",
    size: 6.5,
    color: "blue",
  },
  {
    id: 70,
    img: "https://cdn.mall.adeptmind.ai/https%3A%2F%2Flp2.hm.com%2Fhmgoepprod%3Fset%3Dquality%255B79%255D%252Csource%255B%252F1a%252F92%252F1a92b4ecd845410d389715282ab9217dddc9c411.jpg%255D%252Corigin%255Bdam%255D%252Ccategory%255B%255D%252Ctype%255BLOOKBOOK%255D%252Cres%255Bm%255D%252Chmver%255B1%255D%26call%3Durl%255Bfile%3A%2Fproduct%2Fmain%255D_640x.webp",
    productName: "Elegance in Bloom Shirt",
    gender: "children",
    price: 100,
    priceCategory: "$0-$120",
    brand: "H&M",
    size: 7.0,
    color: "white",
  },
  {
    id: 71,
    img: "https://target.scene7.com/is/image/Target/GUEST_47e07e21-f3b4-46bf-a7dd-16d657e05663?wid=488&hei=488&fmt=pjpeg",
    productName: "Children's Bloom Shirt Boys",
    gender: "children",
    price: 345.5,
    priceCategory: "$120-$500",
    brand: "Zara",
    size: 6.5,
    color: "blue",
  },
  {
    id: 72,
    img: "https://target.scene7.com/is/image/Target/GUEST_1c591735-9c9a-4ab5-a1c3-4daaa9491ac9?wid=488&hei=488&fmt=pjpeg",
    productName: "Boxy Vicose Collared Shirt FTY 21",
    gender: "children",
    price: 375,
    priceCategory: "$120-$500",
    brand: "FTY",
    size: 6.5,
    color: "white",
  },
];
