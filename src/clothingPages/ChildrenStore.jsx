import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import { Box, CardContent, Typography } from "@mui/material";
import Card from "../components/CardComponent";
import LeftGrid from "../components/LeftGrid";
import { useCart } from "../context/ShopContext";
import "./menstore.css";
function ChildrenStore(props) {
  // Destructuring cartItems and addToCart from the useCart hook
  const { cartItems, addToCart } = useCart();
  //fetch data
  const [storeItems,setStoreItems] = useState("")

  // // useEffect to fetch data when the component mounts
  // useEffect(() => {
  //   const fetchStoreItems = async () => {
  //     try {
  //       const res = await fetch("http://localhost:5000/api/products");
  //       const data = await res.json();
  //       const mainData = data.clothes.children.main;
  //       props.inspectCategory(mainData);
  //       setStoreItems(mainData)
  //     } catch (error) {
  //       console.error("Error fetching data", error);
  //     }
  //   };

  //   // Call the fetch function
  //   fetchStoreItems();
  // }, []); // Empty dependency array ensures it only runs once when the component mounts
  

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
      {/* Header Section */}
      <Box sx={{ padding: 2 }}>
        <Typography
          sx={{ mt: 7, fontSize: { xs: "30px", sm: "30px" }, fontWeight: 500 }}
          variant="h3"
        >
          CHILDREN'S CLOTHING
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

export default ChildrenStore;
const leftGrid = [
  { header: "Brand", body: { title1: "Champion", title2: "nike" } },
  { header: "Color", body: { title1: "black", title2: "grey" } },
  { header: "Price", body: { title1: "$0-$120", title2: "$120-$500" } },
];

const cardContent = [
  {
    id: 1,
    img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/d424dabd-ca03-4c22-8b8f-038627000ed6/sportswear-little-kids-tracksuit-rNpcd6.png",
    productName: "Nike Sportswear Kid's Woven",
    gender: "children",
    price: 145.0,
    priceCategory: "$120-$500",
    brand: "nike",
    size: 6.5,
    color: "red",
  },
  {
    id: 2,
    img: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/2df89846-5360-4b89-a061-4bce0618a785/sportswear-big-kids-tracksuit-extended-size-G9cqCl.png",
    productName: "Nike Sportswear Big Kid's Tracksuit",
    gender: "children",
    price: 155.23,
    priceCategory: "$120-$500",
    brand: "nike",
    size: 7.0,
    color: "black",
  },
  {
    id: 3,
    img: "https://jcpenney.scene7.com/is/image/JCPenney/DP0817202307192093M?hei=350&wid=350&op_usm=.4%2C.8%2C0%2C0&resmode=sharp2&op_sharpen=1",
    productName: "Adidas Little boys",
    gender: "children",
    price: 89,
    priceCategory: "$0-$120",
    brand: "adidas",
    size: 6.5,
    color: "black",
  },
  {
    id: 4,
    img: "https://i8.amplience.net/t/jpl/jd_product_list?plu=jd_593214_plc&qlt=85&exclusive=0&qlt=92&wid=320&hei=408&v=1&fmt=auto",
    productName: "adidas Originals adicolor Tracksuit",
    gender: "children",
    price: 100,
    priceCategory: "$0-$120",
    brand: "adidas",
    size: 7.0,
    color: "pink",
  },
  {
    id: 5,
    img: "https://cdn-e.webinterpret.com/wi-ebay-pictures/EBAY/34/03/83/383043616942_images.linnlive.com_b94fb775765eeb48af2dac8978535bda_6e290828-ffa1-407a-ad1f-2e48cc249ff5.jpeg",
    productName: "Kid's Boys T-Shirt Shorts 100% Cotton",
    gender: "children",
    price: 245.5,
    priceCategory: "$120-$500",
    brand: "Champion",
    size: 6.5,
    color: "grey",
  },
  {
    id: 6,
    img: "https://slimages.macysassets.com/is/image/MCY/products/4/optimized/24022504_fpx.tif?$filterlrg$&wid=327",
    productName: "Little Girl's Classic Tee and Practice Shorts",
    gender: "children",
    price: 375,
    priceCategory: "$120-$500",
    brand: "Champion",
    size: 6.5,
    color: "pink",
  },
  {
    id: 7,
    img: "https://slimages.macysassets.com/is/image/MCY/products/5/optimized/24020815_fpx.tif?$filterlrg$&wid=327",
    productName: "Champion Kids White Dandelion ",
    gender: "children",
    price: 245.75,
    priceCategory: "$120-$500",
    brand: "Champion",
    size: 7.0,
    color: "white",
  },
  {
    id: 8,
    img: "https://www.cosmossport.cy/2348344-product_medium/champion-crewneck-t-shirt.jpg",
    productName: "Champion Little Girl's Tee and Practice Shorts",
    gender: "children",
    price: 205.5,
    priceCategory: "$120-$500",
    brand: "champion",
    size: 6.5,
    color: "violet",
  },
  {
    id: 9,
    img: "https://popees.com/pub/media/catalog/product/cache/af5dcf3eb6b1e232451daa6282834a44/p/r/product-size_shirt.jpg",
    productName: "Printed Half Sleeve Shirt",
    gender: "children",
    price: 115.34,
    priceCategory: "$0-$120",
    brand: "adidas",
    size: 7.0,
    color: "white",
  },
  {
    id: 10,
    img: "https://target.scene7.com/is/image/Target/GUEST_ba79ffa2-6093-4215-b13b-86a7930507b8?wid=488&hei=488&fmt=pjpeg",
    productName: "Tolder Boy's Long Sleeve Shirt and Pants",
    gender: "children",
    price: 105.05,
    priceCategory: "$0-$120",
    brand: "fty",
    size: 6.5,
    color: "other",
  },
  {
    id: 11,
    img: "https://i.ebayimg.com/images/g/EKsAAOSw7-VjpJT4/s-l1200.webp",
    productName: "Boy's Button Down Red Long Sleeve",
    gender: "children",
    price: 185,
    priceCategory: "$120-$500",
    brand: "LV",
    size: 6.5,
    color: "red",
  },
  {
    id: 12,
    img: "https://rukminim2.flixcart.com/image/850/1000/kmxsakw0/shirt/p/p/h/2-3-years-fksh5464-fm-kids-original-imagfqbkdmpmqng4.jpeg?q=90",
    productName: "FM KIDS Boys Checkered Casual",
    gender: "children",
    price: 95,
    priceCategory: "$0-$120",
    brand: "LV",
    size: 7,
    color: "other",
  },
];
