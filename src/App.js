import { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import Cart from "./components/Cart";
import Header from "./components/Header";
import axios from "axios";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";

function App() {
  const [items, setItems] = useState([]);
  const [itemsCart, setItemsCart] = useState([]);
  const [cartOpenend, setCartOpenend] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [favorite, setFavorite] = useState([]);

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
    axios.delete(`https://644ce540cfdddac970985ccc.mockapi.io/cart/${id}`);

    setItemsCart((prev) => prev.filter((el) => el.id !== id));
  };

  const onSearch = (event) => {
    setSearchValue(event.target.value);
  };

  const onAddedToFavorite = (obj) => {
    setFavorite((prev) => [...prev, obj]);
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
      <Route path="/" exact>
        <Home
          onSearch={onSearch}
          onAddedToFavorite={onAddedToFavorite}
          onAddedToCart={onAddedToCart}
          setSearchValue={setSearchValue}
          items={items}
          searchValue={searchValue}
        />
      </Route>
      <Route path="/favorites" exact>
        <Favorites items={favorite} searchValue={searchValue}/>
      </Route>
    </div>
  );
}

export default App;
