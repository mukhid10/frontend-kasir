const initialState = {
  isLoading: false,
  data: {},
};

export const cartReducers = (state = initialState, action) => {
  switch (action.type) {
    case "GET_CART_REQ":
      return {
        ...state,
        isLoading: true,
      };

    case "GET_CART_SUCCESS":
      console.log("reducers", action.payload);
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };

    default:
      return state;
  }
};
