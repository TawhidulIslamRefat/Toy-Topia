import React, { createContext, useState } from "react";

export const OrderContext = createContext();

const OrderProvider = ({ children }) => {
  const [order, setOrders] = useState([]);

  const addOrder = (product) => {
    setOrders((order) => [...order, product]);
  };
  return (
    <OrderContext.Provider value={{ order, addOrder }}>
      {children}
    </OrderContext.Provider>
  );
};

export default OrderProvider;
