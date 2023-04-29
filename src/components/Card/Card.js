import React from "react";
import { useState } from "react";
import styles from "./Card.module.scss";


const Card = ({title, price, img, onPlus}) => {
  const [isAdded, setIsAdded] = useState(false)

  const onClickPlus = () => {
    onPlus({title, price, img})
    setIsAdded(!isAdded)
  }
  return (
    <div className={styles.card}>
      <img
        className={styles.btnUnlike}
        src="/img/products/unlike.svg"
        alt="unlike"
        // onClick={props.onClickFavorite}
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
