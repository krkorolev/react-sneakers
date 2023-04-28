import { useState } from "react";
import Card from "./components/Card/Card";
import Cart from "./components/Cart";
import Header from "./components/Header";

const array = [
  {
    title: "Мужские Кроссовки Nike Blazer Mid Suede",
    price: "12999",
    img: "/img/products/sneakers-1.jpg",
  },
  {
    title: "Мужские Кроссовки Nike Air Max 270",
    price: "12999",
    img: "/img/products/sneakers-2.jpg",
  },
  {
    title: "Мужские Кроссовки Nike Blazer Mid Suede",
    price: "8499",
    img: "/img/products/sneakers-3.jpg",
  },
  {
    title: "Кроссовки Puma X Aka Boku Future Rider",
    price: "8999",
    img: "/img/products/sneakers-4.jpg",
  },
];

function App() {
  const [cartOpenend, setCartOpenend] = useState(false);
  return (
    <div className="wrapper">
      {cartOpenend && <Cart onClose={()=> setCartOpenend(false)} />}
      <Header onOpenendCart={()=> setCartOpenend(true)} />
      <section className="products">
        <div className="productsTitle">
          <h1>Все кросовки</h1>
          <div className="search">
            <img src="/img/products/search.png" alt="search" />
            <input placeholder="Поиск..." />
          </div>
        </div>
        <div className="productItems">
          {array.map((obj) => (
            <Card title={obj.title} price={obj.price} img={obj.img} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;
