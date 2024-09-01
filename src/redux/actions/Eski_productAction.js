import api from "../../utils/api.js";

export const setLoading = () => ({
  type: "SET_LOADING",
});

export const setError = (payload) => ({
  type: "SET_ERROR",
  payload,
});

export const setProduct = (product) => ({
  type: "SET_PRODUCT",
  payload,
});

export const getProduct = () => {
  return (dispatch) => {
    dispatch(setLoading());
    api
      .get("products")
      .then((response) => dispatch(setProduct(response.data)))
      .catch((error) => dispatch(setError(error)));
  };
};
