import Card from "../components/Card/Card";
const Favorites = ({items}) => {
  return (
    <section className="products">
      <div className="productsTitle">
        <h1>Мои закладки</h1>
      </div>
      <div className="productItems">
        {items
          .map((obj, index) => (
            <Card
              key={index}
              title={obj.title}
              price={obj.price}
              img={obj.img}
              id={obj.id}
              favorite={true}
            //   onPlus={onAddedToCart}
            //   onFavorite={onAddedToFavorite}
            />
          ))}
      </div>
    </section>
  );
};

export default Favorites;
