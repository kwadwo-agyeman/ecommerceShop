import React, { useEffect } from "react";
import Card from "../components/CardComponent";
import Footer from "../components/Footer";
import { Box, Typography } from "@mui/material";
import LeftGrid from "../components/LeftGrid";
import "./menstore.css";
import { useCart } from "../context/ShopContext";
function MenStoreCT(props) {
  // Destructuring cartItems and addToCart from the useCart hook
  const { cartItems, addToCart } = useCart();

  // useEffect to mount items and add/remove event listener on DOMContentLoaded
  useEffect(() => {
    // Function to mount items
    function mountItems() {
      props.inspectCategory(cardContent);
    }

    // Initial mount and event listener for DOMContentLoaded
    mountItems();
    window.addEventListener("DOMContentLoaded", mountItems);

    // Cleanup: remove event listener on component unmount
    return () => {
      window.removeEventListener("DOMContentLoaded", mountItems);
    };
  }, []);

  return (
    <div>
      {/* Header Section */}
      <Box sx={{ padding: 2 }}>
        <Typography
          sx={{ mt: 7, fontSize: { xs: "30px", sm: "30px" }, fontWeight: 500 }}
          variant="h3"
        >
          POLO T-SHIRTS
        </Typography>
      </Box>

      {/* Main Content Section */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", sm: "1fr", md: "21% 78%" },
          gap: 2,
          p: 2,
        }}
      >
        {/* Filter Section */}
        <Box sx={{ bgcolor: "#FFF8F0", p: 2, height: "fit-content" }}>
          <Typography>Filter Results</Typography>
          <Typography>(select a filter at a time)</Typography>
          {/* LeftGrid Component */}
          <LeftGrid
            leftGrid={leftGrid}
            cardContent={cardContent}
            filterCardContent={props.filterCardContent}
            toggleMenuHeight={props.toggleMenuHeight}
          />
        </Box>

        {/* Cards Section */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "repeat(3,1fr)" },
            gap: 2,
            padding: 2,
            mt: -1.5,
          }}
        >
          {/* Mapping through cardArr and rendering Card component */}
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

      {/* Footer Section */}
      <Footer />
    </div>
  );
}

export default MenStoreCT;
const leftGrid = [
  { header: "Brand", body: { title1: "Polo", title2: "Gucci" } },
  { header: "Color", body: { title1: "white", title2: "grey" } },
  { header: "Price", body: { title1: "$0-$120", title2: "$120-$500" } },
];
const cardContent = [
  {
    id: 25,
    img: "https://33000ft.com/cdn/shop/products/1_30845dc1-a210-4978-92d7-807c64824ecc.jpg?v=1673001510",
    productName: "Men's UPF50+ Golf Polo Short Sleeve Collared",
    gender: "men",
    price: 145.0,
    priceCategory: "$120-$500",
    brand: "Polo",
    size: 6.5,
    color: "grey",
  },
  {
    id: 26,
    img: "https://media.endclothing.com/media/catalog/product/_/4/_408321-X7331-9060_m1_1.jpg",
    productName: "Gucci GRG Collar Polo",
    gender: "men",
    price: 155.23,
    priceCategory: "$120-$500",
    brand: "Gucci",
    size: 7.0,
    color: "white",
  },
  {
    id: 27,
    img: "https://www.code-zero.com/uploads/media/68/59/6f/1634566427/polo-shirt-men-performance-front-washed-grey.jpg",
    productName: "Polo Shirt Men Performance",
    gender: "men",
    price: 145.0,
    priceCategory: "$120-$500",
    brand: "Polo",
    size: 6.5,
    color: "grey",
  },
  {
    id: 28,
    img: "https://bta.scene7.com/is/image/brownthomas/2000548003_01?$pdp_zoom$&$jpg$",
    productName: "GUCCI Contrast Piquet Cotton Polo",
    gender: "men",
    price: 100,
    priceCategory: "$0-$120",
    brand: "Gucci",
    size: 7.0,
    color: "black",
  },
  {
    id: 29,
    img: "https://i5.walmartimages.com/asr/feb5f348-ecba-447e-812a-7a4f6e01effc_1.469881b7ddd8ef62580c058aa72bbd24.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF",
    productName: "Polo Authority Men's Tall Tech Pique",
    gender: "men",
    price: 345.5,
    priceCategory: "$120-$500",
    brand: "Polo",
    size: 6.5,
    color: "grey",
  },
  {
    id: 30,
    img: "https://media.gucci.com/style/DarkGray_Center_0_0_490x490/1671476411/713997_XJETR_9088_001_100_0000_Light.jpg",
    productName: "Gucci Cotton Jersey Polo",
    gender: "men",
    price: 375,
    priceCategory: "$120-$500",
    brand: "Gucci",
    size: 6.5,
    color: "white",
  },
];
