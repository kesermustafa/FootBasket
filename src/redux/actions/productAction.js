import ActionsType from "../actionsType.js";
import api from "../../utils/api.js";

export const getProducts = (restId) => (dispatch) => {
  dispatch({
    type: ActionsType.PRODUCT_LOADING,
  });

  api
    .get(`products?restaurantId=${restId}`)
    .then((res) =>
      dispatch({
        type: ActionsType.PRODUCT_SUCCESS,
        payload: res.data,
      }),
    )
    .catch((error) =>
      dispatch({
        type: ActionsType.PRODUCT_ERROR,
        payload: error.message,
      }),
    );
};
