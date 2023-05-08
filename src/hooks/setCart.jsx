import React, { useContext } from "react";
import { AppContext } from "../App";

export const useCart = () => {
  const { itemsCart, setCartItems } = useContext(AppContext);
  const totalPrice = itemsCart.reduce((sum, item) => sum + Number(item.price), 0);

  return { itemsCart, setCartItems, totalPrice };
};
