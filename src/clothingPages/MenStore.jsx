import React, { useEffect } from "react";
import Card from "../components/CardComponent";
import Footer from "../components/Footer";
import { Box, Typography } from "@mui/material";
import LeftGrid from "../components/LeftGrid";
import "./menstore.css";
import { useCart } from "../context/ShopContext";

function MenStore(props) {
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
          MENS' CLOTHING
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

export default MenStore;

const leftGrid = [
  { header: "Brand", body: { title1: "adidas", title2: "nike" } },
  { header: "Color", body: { title1: "black", title2: "grey" } },
  { header: "Price", body: { title1: "$0-$120", title2: "$120-$500" } },
];

const cardContent = [
  {
    id: 13,
    img: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/b580200f-385a-4c9d-a6dd-a9c9d7f9c875/sportswear-hooded-woven-tracksuit-S0C9Ph.png",
    productName: "Nike Sportswear Men's Hooded Woven",
    gender: "men",
    price: 145.0,
    priceCategory: "$120-$500",
    brand: "nike",
    size: 6.5,
    color: "black",
  },
  {
    id: 14,
    img: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/a0593cb4-60c9-4036-8122-bf3d5a0107d2/club-poly-knit-tracksuit-ktgXg7.png",
    productName: "Nike Club Men's Poly-Knit Tracksuit",
    gender: "men",
    price: 155.23,
    priceCategory: "$120-$500",
    brand: "nike",
    size: 7.0,
    color: "other",
  },
  {
    id: 15,
    img: "https://i.ebayimg.com/images/g/IlcAAOSwcGtgOiIb/s-l1200.webp",
    productName: "LG adidas OG Men's 50th Anniv",
    gender: "men",
    price: 89,
    priceCategory: "$0-$120",
    brand: "adidas",
    size: 6.5,
    color: "black",
  },
  {
    id: 16,
    img: "https://images.asos-media.com/groups/adidas-originals-adicolor-tracksuit-in-green/18393-group-1",
    productName: "adidas Originals adicolor Tracksuit",
    gender: "men",
    price: 100,
    priceCategory: "$0-$120",
    brand: "adidas",
    size: 7.0,
    color: "other",
  },
  {
    id: 17,
    img: "https://xsuit.com/cdn/shop/products/xsuit-4-0-dark-blue_1200x.jpg?v=1676295145",
    productName: "Louis Vouitton Single-Breasted Wool",
    gender: "men",
    price: 445.5,
    priceCategory: "$120-$500",
    brand: "LV",
    size: 6.5,
    color: "black",
  },
  {
    id: 18,
    img: "https://i.pinimg.com/564x/43/73/46/43734605eab3c8f82980b4941fa0ec32.jpg",
    productName: "Topman Suits Grey",
    gender: "men",
    price: 375,
    priceCategory: "$120-$500",
    brand: "topMan",
    size: 6.5,
    color: "grey",
  },
  {
    id: 19,
    img: "https://images.asos-media.com/products/topman-skinny-single-breasted-suit-jacket-in-grey/24114605-1-grey?$n_640w$&wid=513&fit=constrain",
    productName: "Topman Skinny Single breasted Suit ",
    gender: "men",
    price: 345.75,
    priceCategory: "$120-$500",
    brand: "topMan",
    size: 7.0,
    color: "grey",
  },
  {
    id: 20,
    img: "https://i.pinimg.com/736x/4f/a1/06/4fa106de04ad4738240e3323297a8136.jpg",
    productName: "Louis Vouitton Single-Breasted Midnight Green Suit",
    gender: "men",
    price: 305.5,
    priceCategory: "$120-$500",
    brand: "LV",
    size: 6.5,
    color: "green",
  },
  {
    id: 21,
    img: "https://media.boohooman.com/i/boohooman/bmm21671_black_xl?$product_image_category_page_very_small_mobile$",
    productName: "adidas Oversized Snake Graphic T-Shirt",
    gender: "men",
    price: 115.34,
    priceCategory: "$0-$120",
    brand: "adidas",
    size: 7.0,
    color: "black",
  },
  {
    id: 22,
    img: "https://cdna.lystit.com/520/650/n/photos/asos/32b36c50/pull-bear-Black-T-shirt-With-Death-Row-Records-Print.jpeg",
    productName: "Nike Pull&Bear T-Shirt with DeathRow Records Print",
    gender: "men",
    price: 105.05,
    priceCategory: "$0-$120",
    brand: "nike",
    size: 6.5,
    color: "black",
  },
  {
    id: 23,
    img: "https://media.boohoo.com/i/boohoo/bmm32702_charcoal_xl/male-charcoal-plus-overdye-dove-graphic-t-shirt/?w=900&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit",
    productName: "Plus Overdye Dove Graphic T-Shirt",
    gender: "men",
    price: 185,
    priceCategory: "$120-$500",
    brand: "LV",
    size: 6.5,
    color: "grey",
  },
  {
    id: 24,
    img: "https://media.boohoo.com/i/boohoo/bmm50409_navy_xl?w=900&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit",
    productName: "Aqua T Oxford Street Style",
    gender: "men",
    price: 95,
    priceCategory: "$0-$120",
    brand: "LV",
    size: 7,
    color: "other",
  },
];
