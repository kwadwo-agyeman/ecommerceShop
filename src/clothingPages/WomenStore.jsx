import React, { useEffect} from "react";
import Card from "../components/CardComponent";
import Footer from "../components/Footer";
import { Box,Typography } from "@mui/material";
import LeftGrid from "../components/LeftGrid";
import "./menstore.css";
import { useCart } from "../context/ShopContext";
function WomenStore(props) {
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
          WOMENS' CLOTHING
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

export default WomenStore;

const leftGrid = [
  { header: "Brand", body: { title1: "adidas", title2: "nike" } },
  { header: "Color", body: { title1: "black", title2: "grey" } },
  { header: "Price", body: { title1: "$0-$120", title2: "$120-$500" } },
];

const cardContent = [
  {
    id: 43,
    img: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/c72539aa-6a0f-4b2c-a1ef-9ea300066637/sportswear-nike-united-oversized-woven-tracksuit-jacket-Jdgq8K.png",
    productName: "Nike United Woven's Oversized Women",
    gender: "women",
    price: 145.0,
    priceCategory: "$120-$500",
    brand: "nike",
    size: 6.5,
    color: "green",
  },
  {
    id: 44,
    img: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/93b961d8-0f46-4ddc-836c-dbeab3bbda27/dri-fit-academy-tracksuit-QjPCzf.png",
    productName: "Nike Dri-FIT Academy Women's Tracksuit",
    gender: "women",
    price: 155.23,
    priceCategory: "$120-$500",
    brand: "nike",
    size: 7.0,
    color: "navyblue",
  },
  {
    id: 45,
    img: "https://cdna.lystit.com/400/500/tr/photos/zappos/5a34a791/adidas-originals-Black-Reflective-Tracksuit-Set.jpeg",
    productName: "Adidas Originals Tracksuit",
    gender: "women",
    price: 109,
    priceCategory: "$0-$120",
    brand: "adidas",
    size: 6.5,
    color: "grey",
  },
  {
    id: 46,
    img: "https://i.pinimg.com/564x/14/af/bc/14afbcab52d50e2bc1e8108294a609e3.jpg",
    productName: "adidas Originals adicolor Tracksuit",
    gender: "women",
    price: 100,
    priceCategory: "$0-$120",
    brand: "adidas",
    size: 7.0,
    color: "black",
  },
  {
    id: 47,
    img: "https://i.etsystatic.com/36958048/r/il/d30290/4775444731/il_fullxfull.4775444731_2r98.jpg",
    productName: "Louis Vouitton Single-Breasted Wool",
    gender: "women",
    price: 445.5,
    priceCategory: "$120-$500",
    brand: "LV",
    size: 6.5,
    color: "black",
  },
  {
    id: 48,
    img: "https://cdn.shopify.com/s/files/1/1025/3059/products/WOMENS_TEAL_EDITED_830x1230_crop_center.jpg?v=1658280930",
    productName: "Topwoman Suits Navy-blue",
    gender: "women",
    price: 375,
    priceCategory: "$120-$500",
    brand: "topMan",
    size: 6.5,
    color: "navyblue",
  },
  {
    id: 49,
    img: "https://www.bogliolimilano.com/dw/image/v2/AAGA_PRD/on/demandware.static/-/Sites-45/default/dw70e0f8f9/images/zoom/ZC0B95BGU07900276_0865_1.jpg?sw=1320&sh=1980&sm=fit",
    productName: "Topman Skinny Single breasted Suit ",
    gender: "women",
    price: 345.75,
    priceCategory: "$120-$500",
    brand: "topMan",
    size: 7.0,
    color: "grey",
  },
  {
    id: 50,
    img: "https://italydirectclothing.com/cdn/shop/products/Bel-Lite-Grey_pic1-745x1113_1200x1200.jpg?v=1594395751",
    productName: "Louis Vouitton Single-Breasted Midnight Grey Suit",
    gender: "women",
    price: 305.5,
    priceCategory: "$120-$500",
    brand: "LV",
    size: 6.5,
    color: "grey",
  },
  {
    id: 51,
    img: "https://media.boohoo.com/i/boohoo/azz37087_black_xl?w=537&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit",
    productName: "Black Suit Spaghetti Strap Bodysuit",
    gender: "women",
    price: 115.34,
    priceCategory: "$0-$120",
    brand: "adidas",
    size: 7.0,
    color: "black",
  },
  {
    id: 52,
    img: "https://n.nordstrommedia.com/id/sr3/7cf24fa7-b8b0-4488-9994-df4a97464e6a.jpeg?h=365&w=240&dpr=2",
    productName: "Nike Pull&Bear Black Bodysuit",
    gender: "men",
    price: 105.05,
    priceCategory: "$0-$120",
    brand: "nike",
    size: 6.5,
    color: "black",
  },
  {
    id: 53,
    img: "https://media.boohoo.com/i/boohoo/dzz21574_black_xl/female-black-short-sleeve-bodysuit/?w=900&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit",
    productName: "Adidas Black Overdye Bodysuit",
    gender: "men",
    price: 185,
    priceCategory: "$120-$500",
    brand: "adidas",
    size: 6.5,
    color: "black",
  },
  {
    id: 54,
    img: "https://n.nordstrommedia.com/id/sr3/03384fd3-9ccd-4ad8-b70a-fee494f8941d.jpeg?h=365&w=240&dpr=2",
    productName: "Adidas Grey Bodysuits Oxford Street Style",
    gender: "men",
    price: 95,
    priceCategory: "$0-$120",
    brand: "adidas",
    size: 7,
    color: "grey",
  },
];
