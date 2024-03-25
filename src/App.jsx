import React, { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Home from "./Home";
import Navbar from "./components/Navbar/Navbar";
import Preloader from "./components/preloader";
import { CartProvider } from "./context/ShopContext";
///Clothing Pages
import MenStore from "./clothingPages/MenStore";
import MenStoreTS from "./clothingPages/MenStoreTS";
import MenStoreCT from "./clothingPages/MenstoreCT";
import WomenStore from "./clothingPages/WomenStore";
import WomenB from "./clothingPages/WomenB";
import WomenT from "./clothingPages/WomenT";
import ChildrenStore from "./clothingPages/ChildrenStore";
import ChildrenStoreD from "./clothingPages/ChildrenStoreD";
import ChildrenStoreS from "./clothingPages/ChildrenStoreS";
//Shoe Pages
import MenStoreShoe from "./shoePages/MenStoreShoe";
import MenStoreAS from "./shoePages/MenStoreAS";
import MenStoreCB from "./shoePages/MenStoreCB";
import WomenStoreH from "./shoePages/WomenStoreH";
import WomenStoreShoe from "./shoePages/WomenStoreShoe";
import WomenStoreSn from "./shoePages/WomenStoreSn";
import ChildrenStoreShoe from "./shoePages/ChildrenStoreShoe";
// Perfume Pages
import WomenStorePerfume from "./perfumePages/WomenStorePerfume";
import WomenFloral from "./perfumePages/WomenFloral";
import MenStorePerfume from "./perfumePages/MenStorePerfume";
import MenStoreWS from "./perfumePages/MenStoreWS";
//Brand
import Dior from "./brandsPages/Dior";
import Hermes from "./brandsPages/Hermes";
import Nike from "./brandsPages/Nike";
import LV from "./brandsPages/LV";
function App() {
  // State to manage the array of cards
  const [cardArr, setCardArr] = useState([]);
  console.log(cardArr);

  // State to toggle menu height
  const [filter, setFilter] = useState(true);

  // Function to toggle menu height based on index
  const toggleMenuHeight = (index, setAddMinus) => {
    setAddMinus((prev) => {
      const updatedArr = prev.map((state, i) => (index === i ? !state : state));
      return updatedArr;
    });
  };

  // Function to inspect and set the card category
  function inspectCategory(categorizedArr) {
    setCardArr(categorizedArr);
  }

  // Function to filter card content based on title
  const filterCardContent = (title, cardContent) => {
    console.log("Filtering with title:", title);
    setFilter(!filter);
    if (filter === false) {
      inspectCategory(cardContent);
    } else {
      const categoryArr = cardContent.filter((item) => {
        if (
          item.color === title ||
          item.brand === title ||
          item.priceCategory === title ||
          item.gender === title
        ) {
          return true;
        }
        return false;
      });
      inspectCategory(categoryArr);
    }
  };

  return (
    <div>
      {/* CartProvider to manage cart state */}
      <CartProvider>
        {/* Navbar component for navigation */}
        <Navbar />
        {/*** Preloader */}
        <Preloader />
        {/* Routing for different pages */}
        <Routes>
          <Route path="/ecommerceShop" element={<Home />} />
          <Route
            path="/womenStore"
            element={
              <WomenStore
                inspectCategory={inspectCategory}
                toggleMenuHeight={toggleMenuHeight}
                cardArr={cardArr}
                filterCardContent={filterCardContent}
              />
            }
          />
          <Route
            path="/womenB"
            element={
              <WomenB
                inspectCategory={inspectCategory}
                toggleMenuHeight={toggleMenuHeight}
                cardArr={cardArr}
                filterCardContent={filterCardContent}
              />
            }
          />
          <Route
            path="/womenT"
            element={
              <WomenT
                inspectCategory={inspectCategory}
                toggleMenuHeight={toggleMenuHeight}
                cardArr={cardArr}
                filterCardContent={filterCardContent}
              />
            }
          />

          <Route
            path="/menStore"
            element={
              <MenStore
                inspectCategory={inspectCategory}
                toggleMenuHeight={toggleMenuHeight}
                cardArr={cardArr}
                filterCardContent={filterCardContent}
              />
            }
          />
          <Route
            path="/menStoreTS"
            element={
              <MenStoreTS
                inspectCategory={inspectCategory}
                toggleMenuHeight={toggleMenuHeight}
                cardArr={cardArr}
                filterCardContent={filterCardContent}
              />
            }
          />
          <Route
            path="/menStoreCT"
            element={
              <MenStoreCT
                inspectCategory={inspectCategory}
                toggleMenuHeight={toggleMenuHeight}
                cardArr={cardArr}
                filterCardContent={filterCardContent}
              />
            }
          />

          <Route
            path="/childrenStore"
            element={
              <ChildrenStore
                inspectCategory={inspectCategory}
                toggleMenuHeight={toggleMenuHeight}
                cardArr={cardArr}
                filterCardContent={filterCardContent}
              />
            }
          />

          <Route
            path="/childrenStoreD"
            element={
              <ChildrenStoreD
                inspectCategory={inspectCategory}
                toggleMenuHeight={toggleMenuHeight}
                cardArr={cardArr}
                filterCardContent={filterCardContent}
              />
            }
          />

          <Route
            path="/childrenStoreS"
            element={
              <ChildrenStoreS
                inspectCategory={inspectCategory}
                toggleMenuHeight={toggleMenuHeight}
                cardArr={cardArr}
                filterCardContent={filterCardContent}
              />
            }
          />

          <Route
            path="/menStoreShoe"
            element={
              <MenStoreShoe
                inspectCategory={inspectCategory}
                toggleMenuHeight={toggleMenuHeight}
                cardArr={cardArr}
                filterCardContent={filterCardContent}
              />
            }
          />

          <Route
            path="/menStoreAS"
            element={
              <MenStoreAS
                inspectCategory={inspectCategory}
                toggleMenuHeight={toggleMenuHeight}
                cardArr={cardArr}
                filterCardContent={filterCardContent}
              />
            }
          />

          <Route
            path="/menStoreCB"
            element={
              <MenStoreCB
                inspectCategory={inspectCategory}
                toggleMenuHeight={toggleMenuHeight}
                cardArr={cardArr}
                filterCardContent={filterCardContent}
              />
            }
          />

          <Route
            path="/womenStoreH"
            element={
              <WomenStoreH
                inspectCategory={inspectCategory}
                toggleMenuHeight={toggleMenuHeight}
                cardArr={cardArr}
                filterCardContent={filterCardContent}
              />
            }
          />

          <Route
            path="/womenStoreShoe"
            element={
              <WomenStoreShoe
                inspectCategory={inspectCategory}
                toggleMenuHeight={toggleMenuHeight}
                cardArr={cardArr}
                filterCardContent={filterCardContent}
              />
            }
          />

          <Route
            path="/womenStoreSn"
            element={
              <WomenStoreSn
                inspectCategory={inspectCategory}
                toggleMenuHeight={toggleMenuHeight}
                cardArr={cardArr}
                filterCardContent={filterCardContent}
              />
            }
          />

          <Route
            path="/childrenStoreShoe"
            element={
              <ChildrenStoreShoe
                inspectCategory={inspectCategory}
                toggleMenuHeight={toggleMenuHeight}
                cardArr={cardArr}
                filterCardContent={filterCardContent}
              />
            }
          />

          <Route
            path="/womenStorePerfume"
            element={
              <WomenStorePerfume
                inspectCategory={inspectCategory}
                toggleMenuHeight={toggleMenuHeight}
                cardArr={cardArr}
                filterCardContent={filterCardContent}
              />
            }
          />

          <Route
            path="/womenFloral"
            element={
              <WomenFloral
                inspectCategory={inspectCategory}
                toggleMenuHeight={toggleMenuHeight}
                cardArr={cardArr}
                filterCardContent={filterCardContent}
              />
            }
          />

          <Route
            path="/menStorePerfume"
            element={
              <MenStorePerfume
                inspectCategory={inspectCategory}
                toggleMenuHeight={toggleMenuHeight}
                cardArr={cardArr}
                filterCardContent={filterCardContent}
              />
            }
          />

          <Route
            path="/menStoreWS"
            element={
              <MenStoreWS
                inspectCategory={inspectCategory}
                toggleMenuHeight={toggleMenuHeight}
                cardArr={cardArr}
                filterCardContent={filterCardContent}
              />
            }
          />

          <Route
            path="/dior"
            element={
              <Dior
                inspectCategory={inspectCategory}
                toggleMenuHeight={toggleMenuHeight}
                cardArr={cardArr}
                filterCardContent={filterCardContent}
              />
            }
          />

          <Route
            path="/hermes"
            element={
              <Hermes
                inspectCategory={inspectCategory}
                toggleMenuHeight={toggleMenuHeight}
                cardArr={cardArr}
                filterCardContent={filterCardContent}
              />
            }
          />

          <Route
            path="/nike"
            element={
              <Nike
                inspectCategory={inspectCategory}
                toggleMenuHeight={toggleMenuHeight}
                cardArr={cardArr}
                filterCardContent={filterCardContent}
              />
            }
          />

          <Route
            path="/lv"
            element={
              <LV
                inspectCategory={inspectCategory}
                toggleMenuHeight={toggleMenuHeight}
                cardArr={cardArr}
                filterCardContent={filterCardContent}
              />
            }
          />
        </Routes>
      </CartProvider>
    </div>
  );
}

export default App;
