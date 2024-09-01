import { v4 } from "uuid";
import api from "../../utils/api.js";
import ActionsType from "../actionsType.js";

export const getCart = () => (dispatch) => {
  dispatch({
    type: ActionsType.CART_LOADING,
  });

  api
    .get("/cart")
    .then((res) =>
      dispatch({
        type: ActionsType.CART_SUCCESS,
        payload: res.data,
      }),
    )
    .catch((error) =>
      dispatch({
        type: ActionsType.CART_ERROR,
        payload: error.message,
      }),
    );
};

export const addToBasket = (product, rest) => (dispatch) => {
  const newItem = {
    id: v4(),
    productId: product.id,
    title: product.title,
    price: product.price,
    photo: product.photo,
    restaurantName: rest.name,
    amount: 1,
  };

  api
    .post(`/cart`, newItem)
    .then(() =>
      dispatch({
        type: ActionsType.ADD_TO_CART,
        payload: newItem,
      }),
    )
    .catch((error) =>
      dispatch({
        type: ActionsType.CART_ERROR,
        payload: error.message,
      }),
    );
};

//* Sepetteki Elemanı Güncelle(Miktar Arttırma/Azaltma)
export const updateItem = (id, newAmount) => (dispatch) => {
  api.patch(`/cart/${id}`, { amount: newAmount }).then((res) => {
    dispatch({
      type: ActionsType.UPDATE_CART,
      payload: res.data,
    });
  });
};

export const deleteItem = (id) => (dispatch) => {
  api
    .delete(`/cart/${id}`)
    .then(() =>
      dispatch({
        type: ActionsType.DELETE_FROM_CART,
        payload: id,
      }),
    )
    .catch((error) =>
      dispatch({
        type: ActionsType.CART_ERROR,
        payload: id,
      }),
    );
};
