function App() {
  return (
    <div className="wrapper">
      <div className="overlay">
        <div className="drawer">
          <div>
            <h2>
              Корзина{ <img
                className="cartItemButton"
                width={32}
                height={32}
                src="/img/products/btn-close.svg"
                alt="закрыть"
              />}
             
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
      <header className="header">
        <div className="headerLogo">
          <img width={40} height={40} alt="логотип" src="/img/logo.png" />
          <div className="headerInfo">
            <h1>React sneakers</h1>
            <p>магазин лучших кросовок</p>
          </div>
        </div>
        <div className="headerMenu">
          <ul>
            <li>
              <img width={20} height={20} alt="корзина" src="/img/cart.svg" />
              <span>1205 руб.</span>
            </li>
            <li>
              <img
                width={20}
                height={20}
                alt="понравившееся"
                src="/img/like.svg"
              />
            </li>
            <li>
              <img width={20} height={20} alt="профиль" src="/img/union.svg" />
            </li>
          </ul>
        </div>
      </header>
      <section className="products">
        <div className="productsTitle">
          <h1>Все кросовки</h1>
          <div className="search">
            <img src="/img/products/search.png" alt="search" />
            <input placeholder="Поиск..." />
          </div>
        </div>
        <div className="productItems">
          <div className="card">
            <img
              className="btn-unlike"
              src="/img/products/unlike.svg"
              alt="unlike"
            />
            <img
              width={133}
              height={112}
              alt="кросовок"
              src="/img/products/sneakers-1.jpg"
            ></img>
            <h2>Мужские Кроссовки Nike Blazer Mid Suede</h2>
            <div className="cardBottom">
              <div>
                <p>Цена:</p>
                <b>12 999 руб.</b>
              </div>
              <button className="button">
                <img
                  width={32}
                  height={32}
                  alt="добавить"
                  src="/img/products/plus.svg"
                />
              </button>
            </div>
          </div>
          <div className="card">
            <img
              width={133}
              height={112}
              alt="кросовок"
              src="/img/products/sneakers-2.jpg"
            ></img>
            <h2>Мужские Кроссовки Nike Blazer Mid Suede</h2>
            <div className="cardBottom">
              <div>
                <p>Цена:</p>
                <b>12 999 руб.</b>
              </div>
              <button className="button">
                <img
                  width={32}
                  height={32}
                  alt="кросовок"
                  src="/img/products/plus.svg"
                />
              </button>
            </div>
          </div>
          <div className="card">
            <img
              width={133}
              height={112}
              alt="кросовок"
              src="/img/products/sneakers-3.jpg"
            />
            <h2>Мужские Кроссовки Nike Blazer Mid Suede</h2>
            <div className="cardBottom">
              <div>
                <p>Цена:</p>
                <b>12 999 руб.</b>
              </div>
              <button className="button">
                <img
                  width={32}
                  height={32}
                  alt="добавить"
                  src="/img/products/plus.svg"
                />
              </button>
            </div>
          </div>
          <div className="card">
            <img
              width={133}
              height={112}
              alt="кросовок"
              src="/img/products/sneakers-4.jpg"
            />
            <h2>Мужские Кроссовки Nike Blazer Mid Suede</h2>
            <div className="cardBottom">
              <div>
                <p>Цена:</p>
                <b>12 999 руб.</b>
              </div>
              <button className="button">
                <img
                  width={32}
                  height={32}
                  alt="добавить"
                  src="/img/products/plus.svg"
                />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
