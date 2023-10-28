import React, { useState } from "react";
import { Navbar, MobileNav, Typography, Button, IconButton, Card } from "@material-tailwind/react";
import CartComponent from "./cart.component";
import AddProductModals from "../modals/addProduct";

const NavbarComponent = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isProduct, setIsProduct] = useState(false);

  const openCart = () => {
    setIsCartOpen(true);
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };
  const openAdd = () => {
    setIsProduct(true);
  };

  const toggleAdd = () => {
    setIsProduct(!isProduct);
  };

  return (
    <div className="-m-6 max-h-[768px] w-[calc(100%+48px)] mt-20">
      <Button onClick={openCart} className="mr-3">
        Keranjang
      </Button>
      <Button onClick={openAdd}>Tambah product</Button>
      {isCartOpen && <CartComponent isOpen={isCartOpen} onCartClose={toggleCart} />}
      {isProduct && <AddProductModals isOpen={isProduct} onCloseAdd={toggleAdd} />}
    </div>
  );
};

export default NavbarComponent;
