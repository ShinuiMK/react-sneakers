import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../hooks/useCart";

function Head(props) {
  const { totalPrice } = useCart();
  return (
    <header className="d-flex justify-between align-center p-40">
      <Link to="/">
        <div className="d-flex align-center">
          <img width={40} height={40} src="/image/logo.png" alt="hui" />
          <div>
            <h3 className="text-uppercase">React Sneakers</h3>
            <p>Магазин лучших кроссовок</p>
          </div>
        </div>
      </Link>

      <ul className="d-flex">
        <li className="mr-30 cu-p" onClick={() => props.onClickCart()}>
          <img width={18} height={18} src="/image/card.svg" alt="cart" />
          <span>{totalPrice} руб.</span>
        </li>
        <Link to="/favorites">
          <li className="mr-30">
            <img width={18} height={18} src="/image/love.svg" alt="fav" />
            Закладки
          </li>
        </Link>
        <Link to="/orders">
          <li className="mr-30">
            <img width={18} height={18} src="/image/account.svg" alt="acc" />
            Профиль
          </li>
        </Link>
      </ul>
    </header>
  );
}

export default Head;
