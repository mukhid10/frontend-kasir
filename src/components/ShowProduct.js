import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductAction } from "../redux/actions/productAction";
import { getCartAction } from "../redux/actions/cartAction";
import "./showproduct.css";

function ShowProduct() {
  const dispatch = useDispatch();

  const dataProduct = useSelector((state) => state.getProductReducers);
  const { isLoading, data } = dataProduct;
  // console.log());

  useEffect(() => {
    dispatch(getProductAction());
  }, [dispatch]);

  const handleAddTocart = (data) => {
    dispatch(getCartAction(data));
    console.log("action click");
  };

  return (
    <div className="show-product">
      <div className="container">
        <div className="row mt-5">
          {data.map((item, index) => (
            <div className="col-md-2 m-2 p-0" key={index}>
              <div className="card-product">
                <img
                  src="https://media.istockphoto.com/photos/portrait-of-an-11-month-old-baby-looking-at-the-camera-while-holding-picture-id1327265527?b=1&k=20&m=1327265527&s=170667a&w=0&h=YhS4EHegY-U2CQx9d4YB-si6TQSLT7SUnqOGzKaqCx0="
                  alt=""
                />
                <div className="fw-bold">
                  <h6>{item.name}</h6>
                  <h6>{item.price}</h6>
                </div>
              </div>
              <button onClick={() => handleAddTocart(item._id)}>
                Add to cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ShowProduct;
