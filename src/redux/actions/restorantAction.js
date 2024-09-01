import ActionsType from "../actionsType.js";
import api from "../../utils/api.js";

export const getRestaurants = (restId) => (dispatch) => {
  dispatch({
    type: ActionsType.RESTAURANT_LOADING,
  });

  const url = restId ? `/restaurants/${restId}` : "/restaurants";

  api
    .get(url)
    .then((res) =>
      dispatch({
        type: ActionsType.RESTAURANT_SUCCESS,
        payload: res.data,
      }),
    )
    .catch((error) =>
      dispatch({
        type: ActionsType.RESTAURANT_ERROR,
        payload: error.message,
      }),
    );
};
