
import ActionType from "../actionsType.js";

const initialState = {
    isLoading: false,
    error: false,
    data:[]
}


const basketReducer = (state = initialState, action) => {

    switch (action.type) {
        case ActionType.CART_LOADING:
            return {...state, isLoading: true}
        case ActionType.CART_SUCCESS:
            return {...state, data: state.data.concat(action.payload), isLoading: false, error: false}
        case ActionType.CART_ERROR:
            return {...state, isLoading: false, error: action.payload}
        case ActionType.UPDATE_CART:
            const updateArr = state.data.map((i) =>
                i.id === action.payload.id ? action.payload : i
            );
            return { ...state, data: updateArr };
        case ActionType.ADD_TO_CART:
            return {
                ...state,
                error: false,
                isLoading: false,
                data: state.data.concat(action.payload),
            };

        case ActionType.DELETE_FROM_CART:
            // idsini bildiğimiz elemanı diziden kaldır
            const filtred = state.data.filter((i) => i.id !== action.payload);
            return { ...state, data: filtred };
        default:
            return state;
    }

}

export default basketReducer