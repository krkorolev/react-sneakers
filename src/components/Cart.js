import React, { useState, useContext } from "react";
import Info from "./Info";
import { AppContext } from "../App";
import axios from "axios";
import { useCart } from "../hooks/setCart";

const Cart = ({ items, onClose, deletedCard, setItemsOrder }) => {
  const { setItemsCart, itemsCart } = useContext(AppContext);
  const [order, setOrder] = useState(false);

  const { totalPrice } = useCart();

  const isOrderPlace = async () => {
    setItemsCart([]);
    setOrder(true);
    itemsCart.forEach((item) => {
      setItemsOrder((prev) => [...prev, item]);
      axios.delete(
        `https://644ce540cfdddac970985ccc.mockapi.io/cart/${item.id}`
      );
    });
  };

  return (
    <div className="overlay">
      <div className="drawer">
        <h2>
          Корзина
          {
            <img
              onClick={onClose}
              className="cartItemButton"
              width={32}
              height={32}
              src="img/products/btn-close.svg"
              alt="закрыть"
            />
          }
        </h2>
        {items.length > 0 ? (
          <>
            <div className="cartItems">
              {items.map((item) => (
                <div className="cartItem" key={item.parentId}>
                  <div
                    className="cartItemImg"
                    style={{
                      backgroundImage: `url(${item.img})`,
                    }}
                  ></div>
                  <div className="cartItemInfo">
                    <p>{item.title}</p>
                    <b>{item.price}руб.</b>
                  </div>
                  <img
                    onClick={() => deletedCard(item.id)}
                    className="cartItemButton"
                    width={32}
                    height={32}
                    src="img/products/btn-close.svg"
                    alt="закрыть"
                  />
                </div>
              ))}
            </div>
            <div className="cartTotal">
              <ul>
                <li>
                  <span>Итого</span>
                  <div className="border"></div>
                  <b>{totalPrice}руб.</b>
                </li>
                <li>
                  <span>Налог 5%:</span>
                  <div></div>
                  <b>{ Math.floor(totalPrice * 0.05)} руб.</b>
                </li>
              </ul>
              <button className="btn-green" onClick={() => isOrderPlace()}>
                Оформить заказ
              </button>
            </div>
          </>
        ) : (
          <Info
            onClose={onClose}
            title={order ? "Заказ оформлен!" : "Корзина пустая"}
            text={
              order
                ? "Ваш заказ #18 скоро будет передан курьерской доставке"
                : "Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ."
            }
            img={
              order
                ? "././img/products/cart/cart-order.png"
                : "././img/products/cart/cart-empty.jpg"
            }
          />
        )}
      </div>
    </div>
  );
};

export default Cart;
