import React, { useEffect, useState } from "react";
import Card from "../components/CardComponent";
import Footer from "../components/Footer";
import { Box, Typography } from "@mui/material";
import LeftGrid from "../components/LeftGrid";
import "./menstore.css";
import { useCart } from "../context/ShopContext";

function ChildrenStoreD(props) {
  // Destructuring values from the useCart hook
  const { cartItems, addToCart } = useCart();
  const [storeItems,setStoreItems] = useState("")


  // useEffect(()=>{
  //   const fetchStoreItems = async()=>{
  //     try{
  //       const res = await fetch('http://localhost:5000/api/products');
  //       const data = await res.json();
  //       const dressData = data.clothes.children.dress;
  //       props.inspectCategory(dressData)
  //       setStoreItems(dressData)
  //     }
  //     catch(error){
  //       console.error('Error Fetch Data',error)
  //     }

  //   }
  //   fetchStoreItems()
  // },[])

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
          DRESSES
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
export default ChildrenStoreD;

const leftGrid = [
  { header: "Brand", body: { title1: "Zara", title2: "Forever21" } },
  { header: "Color", body: { title1: "pink", title2: "white" } },
  { header: "Price", body: { title1: "$0-$120", title2: "$120-$500" } },
];
const cardContent = [
  {
    id: 61,
    img: "https://www.thehanfus.com/cdn/shop/products/WeddingDressBirthdayDressPageantDressesLaceEmbroideryDressPrincessChineseStyleDressTrystHanfus_2.png?v=1619574395",
    productName: "Flower Girl Wedding Dress ",
    gender: "children",
    price: 145.0,
    priceCategory: "$120-$500",
    brand: "Forever21",
    size: 6.5,
    color: "white",
  },
  {
    id: 62,
    img: "https://ae01.alicdn.com/kf/Sb898c366c9654aa78c0602ee610fa197T/Girls-Wedding-Dress-For-Flower-Children-s-Summer-Design-Birthday-Party-Dresses-For-Girls-4-to.jpg",
    productName: "Butterfly Chrome Style Dress",
    gender: "children",
    price: 155.23,
    priceCategory: "$120-$500",
    brand: "Forever21",
    size: 7.0,
    color: "white",
  },
  {
    id: 63,
    img: "https://ae01.alicdn.com/kf/HTB1i0tKXMDD8KJjy0Fdq6AjvXXa1.jpg_640x640Q90.jpg_.webp",
    productName: "Butterfly Chrome Style Dress",
    gender: "children",
    price: 145.0,
    priceCategory: "$120-$500",
    brand: "Zara",
    size: 6.5,
    color: "white",
  },
  {
    id: 64,
    img: "https://ae01.alicdn.com/kf/S20d423875ba740a3ab26d2007c776c9bn.jpg_640x640Q90.jpg_.webp",
    productName: "Elegance in Bloom Dress",
    gender: "children",
    price: 100,
    priceCategory: "$0-$120",
    brand: "H&M",
    size: 7.0,
    color: "pink",
  },
  {
    id: 65,
    img: "https://estylecdn.com/manufcols/ashleylauren/current/zoomalt/8120_bi_front.jpg",
    productName: "Children's Bloom Gown",
    gender: "children",
    price: 345.5,
    priceCategory: "$120-$500",
    brand: "Zara",
    size: 6.5,
    color: "white",
  },
  {
    id: 66,
    img: "https://www.loveshackfancy.com/cdn/shop/files/MAZINADRESS-BERRYMOMENT-GD097-1744_003.jpg?v=1698942792&width=757",
    productName: "Boxy Vicose Tunic Forever 21",
    gender: "children",
    price: 375,
    priceCategory: "$120-$500",
    brand: "Forever21",
    size: 6.5,
    color: "pink",
  },
];
