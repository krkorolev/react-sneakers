import Card from "../components/Card/Card";
const Home = ({
  onSearch,
  onAddedToFavorite,
  onAddedToCart,
  setSearchValue,
  items,
  searchValue,
}) => {
  return (
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
              id={obj.id}
              onPlus={onAddedToCart}
              onFavorite={onAddedToFavorite}
            />
          ))}
      </div>
    </section>
  );
};

export default Home;
