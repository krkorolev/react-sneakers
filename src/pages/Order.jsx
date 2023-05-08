import React from "react";
import Card from "../components/Card/Card";

const Order = ({items}) => {
  return (
    <section className="products">
      <div className="productsTitle">
        <h1>Мои покупки</h1>
      </div>
      <div className="productItems">
      {items.map((obj, index) => (
          <Card
            key={index}
            {...obj}
            // спред оператор
            // title={obj.title}
            // price={obj.price}
            // img={obj.img}
            // id={obj.id}
            isLoading={false}
            favorite={false}
          />
        ))}
      </div>
    </section>
  );
};

export default Order;
