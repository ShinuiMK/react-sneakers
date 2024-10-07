import React from "react";
import Card from "../components/Card";

function Home({
  items,
  searchValue,
  onChangeSearchInput,
  onAddToCart,
  onAddToFavorite,
  cartItems,
  isLoading,
}) {
  const renderItems = () => {
    const filteredItems = items.filter((item) =>
      item.title.toLowerCase().includes(searchValue.toLowerCase())
    );
    return (isLoading ? [...Array(12)] : filteredItems).map((item, index) => (
      <Card
        key={index}
        onFavorite={(obj) => onAddToFavorite(obj)}
        onPlus={(obj) => onAddToCart(obj)}
        loading={isLoading}
        {...item}
      />
    ));
  };
  return (
    <div className="content p-40">
      <div className="d-flex  align-center mb-40 justify-between">
        <h1>
          {searchValue ? `Поиск по запросу: "${searchValue}"` : `Все кроссовки`}
        </h1>
        <div className="search-block d-flex">
          <img src="/image/search.svg" alt="Search"></img>
          <input
            onChange={onChangeSearchInput}
            value={searchValue}
            placeholder="Поиск...."></input>
        </div>
      </div>
      <div className=" d-flex  flex-wrap">{renderItems()}</div>
    </div>
  );
}

export default Home;
