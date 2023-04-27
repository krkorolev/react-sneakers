import Card from "./components/Card";
import Cart from "./components/Cart";
import Header from "./components/Header";

function App() {
  return (
    <div className="wrapper">
      <Cart />
      <Header />
      <section className="products">
        <div className="productsTitle">
          <h1>Все кросовки</h1>
          <div className="search">
            <img src="/img/products/search.png" alt="search" />
            <input placeholder="Поиск..." />
          </div>
        </div>
        <div className="productItems">
          <Card />
        </div>
      </section>
    </div>
  );
}

export default App;
