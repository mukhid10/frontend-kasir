import axios from "axios";

const getCartReq = () => {
  return { type: "GET_CART_REQ" };
};

const getCartSuccess = (data) => {
  return {
    type: "GET_CART_SUCCESS",
    payload: data,
  };
};

export const getCartAction = (data) => {
  return async (dispatch) => {
    dispatch(getCartReq());
    const result = await axios.get(`http://localhost:5000/products/${data}`);
    dispatch(getCartSuccess(result.data.products));
  };
};
