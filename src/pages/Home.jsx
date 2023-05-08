import React, { useContext } from "react";
import Card from "../components/Card/Card";
import { AppContext } from "../App";


const Home = ({
  onSearch,
  onAddedToFavorite,
  onAddedToCart,
  setSearchValue,
  items,
  searchValue,
  // itemsCart,
  isLoading,
}) => {
  const {favorite} = useContext(AppContext)
  const someFavorites = (obj) => {
    // console.log(obj.parentId)
    favorite.some ((el)=> Number(el.parentId) === Number(obj.parentId))
  }
  
  const renderItems = () => {
    const filtredItems = items.filter((el) =>
      el.title.toLowerCase().includes(searchValue)
    );
    return (isLoading ? [...Array(10)] : filtredItems).map((obj, index) => (
      <Card
        key={index}
        {...obj}
        // title={obj.title}
        // price={obj.price}
        // img={obj.img}
        // id={obj.id}
        // parentId={obj.parentId}
        onPlus={onAddedToCart}
        favorites={()=>someFavorites(obj)}
        onFavorite={onAddedToFavorite}
        isLoading={isLoading}
      />
    ));
  };

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
      <div className="productItems">{renderItems()}</div>
    </section>
  );
};

export default Home;
