import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { getCartAction } from "../redux/actions/cartAction";

function Cart() {
  const data = useSelector((state) => state);
  console.log(data);
  useEffect(() => {
    getCartAction();
  });
  return <div>cart</div>;
}

export default Cart;
