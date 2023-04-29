const Cart = ({ items, onClose, deletedCard }) => {
  return (
    <div className="overlay">
      <div className="drawer">
        <div>
          <h2>
            Корзина
            {
              <img
                onClick={onClose}
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
          {items.map((item) => (
            <div className="cartItem">
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
                src="/img/products/btn-close.svg"
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
