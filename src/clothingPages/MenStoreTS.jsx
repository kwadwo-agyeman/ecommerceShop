import React, { useEffect } from "react";
import Card from "../components/CardComponent";
import Footer from "../components/Footer";
import { Box, Typography } from "@mui/material";
import LeftGrid from "../components/LeftGrid";
import "./menstore.css";
import { useCart } from "../context/ShopContext";

function MenStoreTS(props) {
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
          T-SHIRTS
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
export default MenStoreTS;
const leftGrid = [
  { header: "Brand", body: { title1: "LV", title2: "Off White" } },
  { header: "Color", body: { title1: "black", title2: "red" } },
  { header: "Price", body: { title1: "$0-$120", title2: "$120-$500" } },
];
const cardContent = [
  {
    id: 31,
    img: "https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-stripe-accent-monogram-t-shirt-obsoletes-do-not-touch--FOTS37TR1613_PM2_Front%20view.jpg",
    productName: "Strip Accent Monogram T-Shirt",
    gender: "men",
    price: 145.0,
    priceCategory: "$120-$500",
    brand: "LV",
    size: 6.5,
    color: "black",
  },
  {
    id: 32,
    img: "https://dopestreet.co/wp-content/uploads/2021/04/Off-White-Airport-Tape-Baggage-Black-Tee-Back-600x600.jpg",
    productName: "Off-White Seeing Things",
    gender: "men",
    price: 155.23,
    priceCategory: "$120-$500",
    brand: "Off White",
    size: 7.0,
    color: "black",
  },
  {
    id: 33,
    img: "https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-stripe-accent-monogram-t-shirt-obsoletes-do-not-touch--FOTS37TR1522_PM2_Front%20view.jpg",
    productName: "Strip Accent Monogram T-Shirt",
    gender: "men",
    price: 145.0,
    priceCategory: "$120-$500",
    brand: "LV",
    size: 6.5,
    color: "red",
  },
  {
    id: 34,
    img: "https://www.mrporter.com/variants/images/1647597315003152/in/w2000_q60.jpg",
    productName: "Logo-Print Cotton-Jersey T-Shirt",
    gender: "men",
    price: 100,
    priceCategory: "$0-$120",
    brand: "Off White",
    size: 7.0,
    color: "black",
  },
  {
    id: 35,
    img: "https://www.kickscrew.com/cdn/shop/products/main-square_3f80b21b-e725-4003-ad54-ad944d629028_540x.jpg?v=1695378342",
    productName: "OFF-WHITEXChampion MENS",
    gender: "men",
    price: 345.5,
    priceCategory: "$120-$500",
    brand: "Off White",
    size: 6.5,
    color: "red",
  },
  {
    id: 36,
    img: "https://images.stockx.com/images/OFF-WHITE-Mona-Lisa-Longsleeve-T-Shirt-Red.png?fit=fill&bg=FFFFFF&w=480&h=320&fm=jpg&auto=compress&dpr=2&trim=color&updated_at=1615596479&q=60",
    productName: "OFF-WHITE MONA LISA Longsleeve  ",
    gender: "men",
    price: 375,
    priceCategory: "$120-$500",
    brand: "topMan",
    size: 6.5,
    color: "grey",
  },
];
