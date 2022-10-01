import { useState } from "react";
import styles from "./Card.module.scss";

function Card({ onClickAdd, onFavorite, title, imageUrl, price, id }) {
  const [isAdded, setIsAdded] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  const handleClickPlus = () => {
    onClickAdd({ id, title, imageUrl, price });
    setIsAdded(!isAdded);
  };
  const handleClickHeart = () => {
    setIsLiked(!isLiked);
  };
  return (
    <div className={styles.card}>
      <div className={styles.favorite} onClick={onFavorite}>
        <img
          src={isLiked ? "./img/heart-liked.png" : "./img/heart-unliked.svg"}
          alt="heart"
          onClick={handleClickHeart}
        />
      </div>
      <div className="title-wrapper">
        <img width={133} height={123} src={imageUrl} alt="sneakers" />
        <p>{title}</p>
      </div>
      <div className={styles.price_wrapper}>
        <div className={price}>
          <span>Цена:</span>
          <b>{price}</b>
        </div>
        <div className={styles.btn_wrapper}>
          <img
            src={isAdded ? "./img/btn-checked.svg" : "./img/plus.svg"}
            alt="plus"
            onClick={handleClickPlus}
          />
        </div>
      </div>
    </div>
  );
}

export default Card;
