import React, { useContext } from "react";

import Card from "../components/Card/Card";
import { AppContext } from "../App";


const Favorites = ({ onFavorite, onAddedToCart }) => {
const {favorite} = useContext(AppContext)
  return (
    <section className="products">
      <div className="productsTitle">
        <h1>Мои закладки</h1>
      </div>
      <div className="productItems">
        {favorite.map((obj, index) => (
          <Card
            key={index}
            title={obj.title}
            price={obj.price}
            img={obj.img}
            id={obj.id}
            parentId={obj.parentId}
            isLoading={false}
            favorites={true}
            onPlus={onAddedToCart}
            // onClickPlus={onClickPlus}
            onFavorite={() => onFavorite(obj)}
          />
        ))}
      </div>
    </section>
  );
};

export default Favorites;
