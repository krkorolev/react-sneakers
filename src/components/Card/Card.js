import React from "react";
import ContentLoader from "react-content-loader";
import { AppContext } from "../../App";
import { useContext, useState } from "react";

import styles from "./Card.module.scss";

const Card = ({
  parentId,
  title,
  price,
  img,
  id,
  onPlus,
  onFavorite,
  favorites = false,
  isLoading = false,
}) => {
  const { isItemAdded, isAddedFavorites } = useContext(AppContext);
  // const [isFavorite, setIsFavorite] = useState(favorites);

  const onClickPlus = () => {
    onPlus({ id, title, img, price, parentId });
  };

  const onClickFavorite = (id) => {
    if (isAddedFavorites){}
    onFavorite({ id, title, img, price, parentId });
    // setIsFavorite(!isFavorite);
  };
  return isLoading ? (
    <ContentLoader
      speed={2}
      width={210}
      height={260}
      viewBox="0 0 210 260"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="0" y="0" rx="10" ry="10" width="150" height="91" />
      <rect x="103" y="61" rx="10" ry="10" width="39" height="14" />
      <rect x="0" y="104" rx="8" ry="8" width="150" height="15" />
      <rect x="2" y="129" rx="8" ry="8" width="93" height="15" />
      <rect x="5" y="160" rx="8" ry="8" width="80" height="24" />
      <rect x="112" y="154" rx="8" ry="8" width="32" height="32" />
    </ContentLoader>
  ) : (
    <div id={parentId} className={styles.card}>
      {favorites && (
        <img
          className={styles.btnUnlike}
          src={
            isAddedFavorites(parentId) 
              ? "/img/products/like.svg"
              : "/img/products/unlike.svg"
          }
          alt="unlike"
          onClick={onClickFavorite}
        />
      )}
      <img width={133} height={112} alt="кросовок" src={img}></img>
      <h2>{title}</h2>
      <div className={styles.cardBottom}>
        <div>
          <p>Цена:</p>
          <b>{price} руб.</b>
        </div>
        {onPlus && (
          <img
            className={styles.plus}
            onClick={() => onClickPlus()}
            width={32}
            height={32}
            alt="добавить"
            src={
              isItemAdded(parentId)
                ? "/img/products/done.svg"
                : "/img/products/plus.svg"
            }
          />
        )}
      </div>
    </div>
  );
};

export default Card;
