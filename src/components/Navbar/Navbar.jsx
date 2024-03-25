import React, { useEffect, useState } from "react";
import NavSmallMenu from "./NavSmallMenu";
import "./navbar.css";
import {
  AppBar,
  Badge,
  Box,
  Button,
  Fab,
  InputBase,
  Modal,
  Toolbar,
  Typography,
} from "@mui/material";
import ShoppingBag from "@mui/icons-material/ShoppingBagOutlined";
import Menu from "@mui/icons-material/DragHandleOutlined";
import { styled } from "@mui/material";
import Clothing from "../Clothing";
import Shoes from "../Shoes";
import Perfumes from "../Perfumes";
import Brands from "../Brands";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ArrowDown from "@mui/icons-material/KeyboardArrowDownOutlined";
import { Link } from "react-router-dom";
import { useCart } from "../../context/ShopContext";

// Styled components for different sections
const Navlinks = styled(Box)(({ theme }) => ({
  display: "none",
  justifyContent: "space-between",
  alignItems: "center",
  width: "80%",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const MenuCart = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "15%",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

const NavMenuSmall = styled(Box)(({ theme }) => ({
  display: "block",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

const NavMenuLarge = styled(Box)(({ theme }) => ({
  display: "none",
  [theme.breakpoints.up("sm")]: {
    display: "block",
  },
}));

const ModalBox = styled(Box)(({ theme }) => ({
  width: "80%",
  [theme.breakpoints.up("sm")]: {
    width: "40%",
  },
}));

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  height: "70vh",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "2px solid rgb(0,0,0,0.3)",
  boxShadow: 24,
  p: 4,
  overflow: "auto",
};

function Navbar() {
  const { cartItems, addToCart, removeFromCart, handleQuantityChange } =
    useCart();
  const [navSmallMenu, setNavSmallMenu] = useState(false);
  const [open, setOpen] = React.useState(false);
  //
  useEffect(()=>{
    if(navSmallMenu === true){
      setNavSmallMenu(false)
    }
  },[location.pathname])

  // Function to handle mouse enter on menu items
  const handleDisplay = (e) => {
    const btns = document.querySelectorAll(".btn");
    const navMenus = document.querySelectorAll(".nav--menu--alt");

    const id = e.currentTarget.dataset.id;

    // Remove 'active' class from all buttons
    btns.forEach((btn) => {
      btn.classList.remove("active");
    });

    // Add 'active' class to the current button
    e.currentTarget.classList.add("active");

    // Hide other menu sections and display the selected one
    navMenus.forEach((navMenu) => {
      navMenu.classList.remove("active");
      navMenu.style.transform = "translateY(0)";
      navMenu.style.transition = "400ms all ease";
    });

    const element = document.getElementById(id);

    // Display the selected menu section
    element.classList.add("active");
  };

  // Function to handle mouse leave on menu sections
  function handleMouseLeave(e) {
    e.currentTarget.style.transform = "translateY(-100%)";
    e.currentTarget.style.transition = "400ms all ease";
  }

  // Function to toggle small menu display
  const showNavMenuSmall = () => {
    setNavSmallMenu((prev) => !prev);
  };

  // Function to handle opening the cart modal
  const handleOpen = () => setOpen(true);

  // Function to handle closing the cart modal
  const handleClose = () => setOpen(false);

  // Function to add an item to the cart
  const handleAdd = (item) => {
    addToCart(item, 1);
  };

  // Function to remove an item from the cart
  const handleRemove = (item) => {
    addToCart(item, -1);
  };

  // Function to remove a specific item from the cart
  const handleRemoveItem = (itemId, quantityChange) => {
    removeFromCart(itemId, quantityChange);
  };

  // Function to handle quantity changes
  function handleQuantityChanges(itemId, newQuantity) {
    handleQuantityChange(itemId, newQuantity);
  }

  // Function to calculate the subtotal of items in the cart
  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => {
      if (!isNaN(item.quantity)) {
        return total + item.price * item.quantity;
      } else {
        return total;
      }
    }, 0);
  };

  // Function to calculate the total quantity of items in the cart
  const calculateTotalQuantity = () => {
    return cartItems.reduce((total, item) => {
      if (!isNaN(item.quantity)) {
        return total + item.quantity;
      } else {
        return total;
      }
    }, 0);
  };

  return (
    <div>
      <Box>
        {/* App Bar for the navigation */}
        <AppBar
          sx={{
            height: "3rem",
            backgroundColor: "#0E34A0",
            backdropFilter: "8px",
          }}
        >
          <Toolbar>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
              }}
            >
              {/* Brand name */}
              <Link to="/ecommerceShop" style={{textDecoration:"none",color:"white"}}>
                <Typography sx={{ fontSize: "20px", fontWeight: 650 }}>
                  UrbanCart
                </Typography>
              </Link>

              {/* Navigation links for larger screens */}
              <Navlinks>
                <p
                  data-id="clothes"
                  className="btn active"
                  onMouseEnter={handleDisplay}
                  onTouchStart={handleDisplay}  

                  style={{ cursor: "pointer",fontWeight: 600 }}
                >
                  Clothes
                </p>
                <p
                  data-id="shoes"
                  className="btn"
                  onMouseEnter={handleDisplay}
                  onTouchStart={handleDisplay}  

                  style={{ cursor: "pointer" ,fontWeight: 600}}
                >
                  Shoes
                </p>
                <p
                  data-id="perfumes"
                  className="btn "
                  onMouseEnter={handleDisplay}
                  onTouchStart={handleDisplay}  

                  style={{ cursor: "pointer" , fontWeight: 600}}
                >
                      Perfumes
                </p>
                <p
                  data-id="brands"
                  className="btn "
                  onMouseEnter={handleDisplay}
                  onTouchStart={handleDisplay}

                  style={{ cursor: "pointer",fontWeight: 600 }}
                >
                  Brands
                </p>
                {/* Cart icon with total quantity badge */}
                <Box onClick={handleOpen}>
                  <Badge badgeContent={calculateTotalQuantity()} color="error">
                    <ShoppingBag sx={{cursor:"pointer"}} />
                  </Badge>
                </Box>
              </Navlinks>

              {/* Cart icon and small menu for smaller screens */}
              <MenuCart>
                <Box onClick={handleOpen}>
                  <Badge badgeContent={calculateTotalQuantity()} color="error">
                    <ShoppingBag />
                  </Badge>
                </Box>
                <Box onClick={showNavMenuSmall}>
                  <Menu />
                </Box>
              </MenuCart>

              {/* Cart Modal */}
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="cart-items"
                aria-describedby="cart-Items"
              >
                <Box sx={{}}>
                  <ModalBox sx={style}>
                    <Typography variant="h6" sx={{fontWeight:500}}>CART ITEMS</Typography>
                    {/* Display each item in the cart */}
                    {cartItems &&
                      cartItems.map((item, itemIndex) => (
                        <Box
                          sx={{
                            display: "grid",
                            gridTemplateColumns: "1fr 2fr",
                            gap: 2,
                            border: "1px solid rgb(0,0,0,0.3)",
                            mb: 2,
                            p: 1,
                          }}
                          key={itemIndex}
                        >
                          {/* Cart item image */}
                          <article
                            id="cartImg"
                            style={{ display: "grid", placeItems: "center" }}
                          >
                            <img src={item.img} alt="" />
                          </article>

                          {/* Cart item information */}
                          <article
                            id="cartInfo"
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "space-between",
                            }}
                          >
                            <Typography sx={{ mt: 2 }}>
                              {item.productName}
                            </Typography>
                            <Typography><b>Price:</b> ${item.price}</Typography>
                            <article
                              style={{
                                marginTop: "5%",
                                display: "flex",
                                alignItems: "center",
                                gap: 3,
                              }}
                            >
                              {/* Button to add more of the same item */}
                              <Box
                                sx={{
                                  width: "30px",
                                  height: "30px",
                                  borderRadius: "50%",
                                  bgcolor: "skyblue",
                                  display: "grid",
                                  placeItems: "center",
                                  color: "white",
                                }}
                                onClick={() => handleAdd(item)}
                              >
                                <AddIcon />
                              </Box>

                              {/* Input for quantity */}
                              <InputBase
                                sx={{
                                  border: "1px solid rgb(0,0,0,0.3)",
                                  textAlign: "center",
                                  width: "4rem",
                                  padding: "5px",
                                }}
                                value={isNaN(item.quantity) ? 0 : item.quantity}
                                onChange={(e) =>
                                  handleQuantityChanges(
                                    item.id,
                                    parseInt(e.target.value, 10)
                                  )
                                }
                              />

                              {/* Button to remove items */}
                              <Box
                                sx={{
                                  width: "30px",
                                  height: "30px",
                                  borderRadius: "50%",
                                  bgcolor: "skyblue",
                                  display: "grid",
                                  placeItems: "center",
                                  color: "white",
                                }}
                                onClick={() =>
                                  item.quantity > 0
                                    ? handleRemove(item)
                                    : handleRemoveItem(item.id, 1)
                                }
                              >
                                <RemoveIcon />
                              </Box>
                            </article>
                            <Typography sx={{ mt: 2 }}>
                              <b>Total:</b> $
                              {item.quantity > 0
                                ? parseFloat(
                                    (item.price * item.quantity).toFixed(2)
                                  )
                                : 0}
                            </Typography>
                          </article>
                        </Box>
                      ))}
                  </ModalBox>

                  {/* Subtotal information */}
                  <Box
                    sx={{
                      width: "100%",
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      p: "5px 0",
                      color: "white",
                      bgcolor: "skyblue",
                    }}
                  >
                    <Typography variant="h6" sx={{ textAlign: "center" }}>
                      <b>Subtotal:</b>$ {calculateSubtotal().toFixed(2)}
                    </Typography>
                  </Box>
                </Box>
              </Modal>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>

      {/* Small Menu for Mobile */}
      <NavMenuSmall
        sx={{
          p: 2,
          bgcolor: "#f0ffff",
          transform: navSmallMenu ? "translateY(0)" : "translateY(-100%)",
          transition: "all 400ms ease",
          position: "fixed",
          height:"100vh",
          // overflow: "auto",
          width: "100%",
          top: "3rem",
          left: 0,
          zIndex: 333,
          padding:"10px 10px",
        }}
      >
        <NavSmallMenu />
      </NavMenuSmall>

      {/* Large Menu for Desktop */}
      <NavMenuLarge
        sx={{
          width: "95%",
          m: "1.0rem auto 0",
          p: 2,
          position: "fixed",
          width: "100%",
          left: 0,
          zIndex: 333,
        }}
      >
        <Clothing handleMouseLeave={handleMouseLeave} onTouchEnd ={handleMouseLeave} />
        <Shoes handleMouseLeave={handleMouseLeave} onTouchEnd ={handleMouseLeave}/>
        <Perfumes handleMouseLeave={handleMouseLeave} onTouchEnd ={handleMouseLeave} />
        <Brands handleMouseLeave={handleMouseLeave} onTouchEnd ={handleMouseLeave} />
      </NavMenuLarge>
    </div>
  );
}

export default Navbar;
