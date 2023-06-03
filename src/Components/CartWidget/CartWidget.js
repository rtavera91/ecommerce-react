import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const CartWidget = () => {
  return (
    <div className="m-2">
      <button src="#">
        <ShoppingCartIcon />
      </button>
      <p>5 artículos en el carrito</p>
    </div>
  );
};

export default CartWidget;
