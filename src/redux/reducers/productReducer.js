const initialState = {
  data: [],
  isLoading: false,
};

export const getProductReducers = (state = initialState, action) => {
  switch (action.type) {
    case "GET_REQ_PRODUCT":
      return {
        ...state,
        isLoading: true,
      };
    case "GET_PRODUCT_SUCCES":
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };

    default:
      return state;
  }
};
