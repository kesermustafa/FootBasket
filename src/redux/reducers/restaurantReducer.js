import ActionsType from "../actionsType.js";

const initialState = {
  isLoading: false,
  error: false,
  restaurants: [],
};

const restaurantReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionsType.RESTAURANT_LOADING:
      return { ...state, isLoading: true };
    case ActionsType.RESTAURANT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: false,
        restaurants: action.payload,
      };
    case ActionsType.RESTAURANT_ERROR:
      return { ...state, isLoading: false, error: action.payload };
    default:
      return state;
  }
};

export default restaurantReducer;
