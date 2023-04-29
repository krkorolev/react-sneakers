import { useEffect, useState } from "react";
import Card from "./components/Card/Card";
import Cart from "./components/Cart";
import Header from "./components/Header";
import axios from "axios";

function App() {
  const [items, setItems] = useState([]);
  const [itemsCart, setItemsCart] = useState([]);
  const [cartOpenend, setCartOpenend] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    axios
      .get("https://644ce540cfdddac970985ccc.mockapi.io/items")
      .then((resp) => setItems(resp.data));

      axios
      .get("https://644ce540cfdddac970985ccc.mockapi.io/cart")
      .then((resp) => setItemsCart(resp.data));
  }, []);

  const onAddedToCart = (obj) => {
    axios.post(`https://644ce540cfdddac970985ccc.mockapi.io/cart/`, obj);
    setItemsCart((prev) => [...prev, obj]);
  };
  const deletedCard = (id) => {
    setItemsCart((prev) => prev.filter(el => el.id !== id));
    // console.log (id)
  };

  const onSearch = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="wrapper">
      {cartOpenend && (
        <Cart
          items={itemsCart}
          onClose={() => setCartOpenend(false)}
          deletedCard={deletedCard}
        />
      )}
      <Header onOpenendCart={() => setCartOpenend(true)} />
      <section className="products">
        <div className="productsTitle">
          <h1>
            {searchValue ? `Поиск по запросу: ${searchValue}` : "Все кросовки"}
          </h1>
          <div className="search">
            <img src="/img/products/search.png" alt="search" />
            <img
              onClick={() => setSearchValue("")}
              className="searchClear"
              width={20}
              height={20}
              src="/img/products/btn-close.svg"
              alt="закрыть"
            />
            <input
              onChange={onSearch}
              value={searchValue}
              placeholder="Поиск..."
            />
          </div>
        </div>
        <div className="productItems">
          {items
            .filter((el) => el.title.toLowerCase().includes(searchValue))
            .map((obj, index) => (
              <Card
                key={index}
                title={obj.title}
                price={obj.price}
                img={obj.img}
                onPlus={onAddedToCart}
              />
            ))}
        </div>
      </section>
    </div>
  );
}

export default App;
