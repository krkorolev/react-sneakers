import { useEffect, useState } from "react";
import React from "react";
import { Route } from "react-router-dom";
import Cart from "./components/Cart";
import Header from "./components/Header";
import axios from "axios";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import Order from "./pages/Order";

export const AppContext = React.createContext({});

function App() {
  const [items, setItems] = useState([]);
  const [itemsCart, setItemsCart] = useState([]);
  const [cartOpenend, setCartOpenend] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [favorite, setFavorite] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [itemsOrder, setItemsOrder] = useState([])


  useEffect(() => {
    async function fetchData() {
      const itemsResponse = await axios.get(
        "https://644ce540cfdddac970985ccc.mockapi.io/items"
      );

      const cartResponse = await axios.get(
        "https://644ce540cfdddac970985ccc.mockapi.io/cart"
      );
      setIsLoading(false);
      setItems(itemsResponse.data);
      setItemsCart(cartResponse.data);
    }
    fetchData();
  }, []);

  const onAddedToCart = (obj) => {
    try {
      const findItem = itemsCart.find((el) => Number(el.parentId) === Number(obj.parentId))
      if (findItem) {
        axios.delete(
          `https://644ce540cfdddac970985ccc.mockapi.io/cart/${findItem.id}`
        );
        setItemsCart((prev) => prev.filter((el) => el.parentId !== obj.parentId));
      } else {
        axios.post(`https://644ce540cfdddac970985ccc.mockapi.io/cart/`, obj);
        setItemsCart((prev) => [...prev, obj]);
      }
    } catch {
      alert("Ошибка в получении данных");
    }
  };

  const deletedCard = (id) => {
    try {
      axios.delete(`https://644ce540cfdddac970985ccc.mockapi.io/cart/${id}`);
      setItemsCart((prev) => prev.filter((el) => el.id !== id));
    } catch {
      alert("Ошибка при удаление из корзины");
    }
  };

  const onSearch = (event) => {
    setSearchValue(event.target.value);
  };

  const onAddedToFavorite = (obj) => {
    if (favorite.find((el) => Number(el.parentId) === Number(obj.parentId))) {
      setFavorite((prev) =>
        prev.filter((el) => Number(el.parentId) !== Number(obj.parentId))
      );
    } else {
      setFavorite((prev) => [...prev, obj]);
    }
  };
  const isItemAdded = (id) => {
    return itemsCart.some((el) => Number(el.parentId) === Number(id));
  };
  const isAddedFavorites = (id) => {
    return favorite.some((el) => Number(el.parentId) === Number(id));
  }
  return (
    <AppContext.Provider
      value={{ favorite, isItemAdded, setItemsCart, itemsCart, isAddedFavorites }}
    >
      <div className="wrapper">
        {cartOpenend && (
          <Cart
            items={itemsCart}
            onClose={() => setCartOpenend(false)}
            deletedCard={deletedCard}
            setItemsOrder={setItemsOrder}
          />
        )}

        <Header onOpenendCart={() => setCartOpenend(true)} />
        <Route path=" " exact>
          <Home
            onSearch={onSearch}
            onAddedToFavorite={onAddedToFavorite}
            onAddedToCart={onAddedToCart}
            setSearchValue={setSearchValue}
            items={items}
            searchValue={searchValue}
            itemsCart={itemsCart}
            isLoading={isLoading}
          />
        </Route>
        <Route path="favorites" exact>
          <Favorites
            items={favorite}
            searchValue={searchValue}
            onFavorite={onAddedToFavorite}
            onAddedToCart={onAddedToCart}
          />
        </Route>
        <Route path="order" exact>
          <Order items={itemsOrder} />
        </Route>
      </div>
    </AppContext.Provider>
  );
}

export default App;
