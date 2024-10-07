import React from "react";

import Card from "../components/Card";
import axios from "axios";
import AppContext from "../context";
function Orders() {
  const [orders, setOrders] = React.useState([]);
  const { onAddToCart } = React.useContext(AppContext);
  const [isLoading, setIsLoading] = React.useState(true);
  React.useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
          "https://66fb016f8583ac93b40a9ecf.mockapi.io/orders"
        );
        setOrders(data.reduce((prev, obj) => [...prev, ...obj.items], []));
        setIsLoading(false);
      } catch (error) {
        alert("Ошибка при загрузки заказов");
      }
    })();
  }, []);
  return (
    <div className="content p-40">
      <div className="d-flex  align-center mb-40 justify-between">
        <h1>Мои заказы</h1>
      </div>
      <div className=" d-flex  flex-wrap">
        {(isLoading ? [...Array(12)] : orders).map((item, index) => (
          <Card
            key={index}
            onPlus={(obj) => onAddToCart(obj)}
            loading={isLoading}
            {...item}
          />
        ))}
      </div>
    </div>
  );
}

export default Orders;
