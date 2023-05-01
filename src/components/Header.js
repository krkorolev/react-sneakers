import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Header = (props) => {
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
            <span>1205 руб.</span>
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
            <img width={20} height={20} alt="профиль" src="/img/union.svg" />
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
