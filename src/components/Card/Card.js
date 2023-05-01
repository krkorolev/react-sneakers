import React from "react";
import { useState } from "react";
import styles from "./Card.module.scss";

const Card = ({ title, price, img, id, onPlus, onFavorite, favorite }) => {
  const [isAdded, setIsAdded] = useState(false);
  const [isFavorite, setIsFavorite] = useState(favorite);

  const onClickPlus = () => {
    onPlus({ id, title, img, price });
    setIsAdded(!isAdded);
  };

  const onClickFavorite = () => {
    onFavorite({ id, title, img, price });
    setIsFavorite(!isFavorite);
  };
  return (
    <div id={id} className={styles.card}>
      <img
        className={styles.btnUnlike}
        src={isFavorite ? "/img/products/like.svg" : "/img/products/unlike.svg"}
        alt="unlike"
        onClick={onClickFavorite}
      />
      <img width={133} height={112} alt="кросовок" src={img}></img>
      <h2>{title}</h2>
      <div className={styles.cardBottom}>
        <div>
          <p>Цена:</p>
          <b>{price} руб.</b>
        </div>
        <img
          className={styles.plus}
          onClick={onClickPlus}
          width={32}
          height={32}
          alt="добавить"
          src={isAdded ? "/img/products/done.svg" : "/img/products/plus.svg"}
        />
      </div>
    </div>
  );
};

export default Card;
