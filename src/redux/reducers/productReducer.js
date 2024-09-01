import ActionsType from "../actionsType.js";

const initialState = {
    isLoading: false,
    error: false,
    products: [],
}

const productReducer = (state = initialState, action) => {

    switch (action.type) {
        case ActionsType.PRODUCT_LOADING:
            return {...state, isLoading: true}
        case ActionsType.PRODUCT_SUCCESS:
            return {...state, isLoading: false, products: action.payload, error: false}
        case ActionsType.PRODUCT_ERROR:
            return {...state, isLoading: false, error: action.payload}
        default:
            return state;
    }

}

export default productReducer;