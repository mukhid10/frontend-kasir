import axios from "axios";

export const getProductReques = () => {
  return {
    type: "GET_REQ_PRODUCT",
  };
};

export const getProductSucces = (data) => {
  return {
    type: "GET_PRODUCT_SUCCES",
    payload: data,
  };
};

export const getProductAction = () => {
  return async (dispatch) => {
    dispatch(getProductReques());
    const result = await axios.get("http://localhost:5000/products/");
    dispatch(getProductSucces(result.data.product));
    // console.log("action", result.data.product);
  };
};
