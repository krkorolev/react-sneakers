import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { useCart } from "../hooks/setCart";

const Header = (props) => {
  const { totalPrice } = useCart();
  return (
    <header className="header">
      <Link to="/">
        <div className="headerLogo">
          <img width={40} height={40} alt="логотип" src="/img/logo.png" />
          <div className="headerInfo">
            <h1>React sneakers</h1>
            <p>магазин лучших кросовок</p>
          </div>
        </div>
      </Link>
      <div className="headerMenu">
        <ul>
          <li className="cart" onClick={props.onOpenendCart}>
            <img width={20} height={20} alt="корзина" src="/img/cart.svg" />
            <span>{totalPrice} руб.</span>
          </li>
          <li>
            <Link to="/favorites">
              <img
                width={20}
                height={20}
                alt="понравившееся"
                src="/img/like.svg"
              />
            </Link>
          </li>
          <li>
            <Link to="/order">
              <img width={20} height={20} alt="профиль" src="/img/union.svg" />
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
