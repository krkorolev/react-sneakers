const Cart = () => {
  return (
    <div className="overlay" style={{ display: "none" }}>
      <div className="drawer">
        <div>
          <h2>
            Корзина
            {
              <img
                className="cartItemButton"
                width={32}
                height={32}
                src="/img/products/btn-close.svg"
                alt="закрыть"
              />
            }
          </h2>
        </div>
        <div className="cartItems">
          <div className="cartItem">
            <div
              className="cartItemImg"
              style={{
                backgroundImage: "url(/img/products/sneakers-1.jpg)",
              }}
            ></div>
            <div className="cartItemInfo">
              <p>Мужские Кроссовки Nike Air Max 270</p>
              <b>12 999 руб.</b>
            </div>
            <img
              className="cartItemButton"
              width={32}
              height={32}
              src="/img/products/btn-close.svg"
              alt="закрыть"
            />
          </div>
        </div>
        <div className="cartTotal">
          <ul>
            <li>
              <span>Итого</span>
              <div className="border"></div>
              <b>21 498 руб.</b>
            </li>
            <li>
              <span>Налог 5%:</span>
              <div></div>
              <b>1074 руб.</b>
            </li>
          </ul>
          <button className="btn-green">Оформить заказ</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
