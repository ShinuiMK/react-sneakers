import React from "react";
import AppContext from "../context";

const Infoc = ({ title, desciption, image }) => {
  const { setCartOpened } = React.useContext(AppContext);
  return (
    <div className="cartEmpty d-flex align-center justify-center flex-column flex">
      <img className="mb-20" width={120} src={image} alt="empty" />
      <h2>{title}</h2>
      <p className="opacity-6">{desciption}</p>
      <button onClick={() => setCartOpened(false)} className="greenButton">
        <img src="/image/Strelka.svg" alt="arrow" />
        Вернуться назад
      </button>
    </div>
  );
};
export default Infoc;
