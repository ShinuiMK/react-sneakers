import styles from "./Card.module.scss";
import React from "react";
import ContentLoader from "react-content-loader";
import AppContext from "../../context";
function Card({
  id,
  parentId,
  title,
  imageUrl,
  price,
  onPlus,
  onFavorite,
  addedFavorite,
  favorited = false,
  loading = false,
}) {
  const { isItemAdded } = React.useContext(AppContext);

  const [isFavorite, setIsFavorite] = React.useState(favorited);
  const itemObj = { id, parentId: id, title, imageUrl, price };
  const onClickPlus = () => {
    onPlus(itemObj);
  };
  const onClickFavorite = () => {
    onFavorite({ id, title, imageUrl, price });
    setIsFavorite(!isFavorite);
  };
  return (
    <div className={styles.card}>
      {loading ? (
        <ContentLoader
          speed={2}
          width={150}
          height={200}
          viewBox="0 0 150 200"
          backgroundColor="#ebebeb"
          foregroundColor="#ecebeb">
          <rect x="0" y="0" rx="10" ry="10" width="150" height="90" />
          <rect x="-1" y="107" rx="10" ry="10" width="150" height="15" />
          <rect x="0" y="130" rx="10" ry="10" width="100" height="15" />
          <rect x="2" y="172" rx="10" ry="10" width="80" height="25" />
          <rect x="113" y="168" rx="10" ry="10" width="32" height="32" />
        </ContentLoader>
      ) : (
        <>
          {onFavorite && (
            <div className="favorite" onClick={onClickFavorite}>
              <img
                src={
                  isFavorite
                    ? "/image/heart-like.svg"
                    : "/image/heart-unlike.svg"
                }
                alt="Like"
              />
            </div>
          )}
          <img width={133} height={112} src={imageUrl} alt="card" />
          <h5>{title}</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Цена:</span>
              <b>{price} руб.</b>
            </div>
            {onPlus && (
              <img
                className={styles.plus}
                onClick={onClickPlus}
                src={
                  isItemAdded(id)
                    ? "/image/btn-checked.svg"
                    : "/image/btn-plus.svg"
                }
                alt="Add"
              />
            )}
          </div>
        </>
      )}
    </div>
  );
}
export default Card;
