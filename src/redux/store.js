import { configureStore } from '@reduxjs/toolkit';
import {thunk} from 'redux-thunk';
import restaurantReducer from './reducers/restaurantReducer.js';
import productReducer from "./reducers/productReducer.js";
import basketReducer from "./reducers/basketReducer.js";

const store = configureStore({
    reducer: {
        restaurants: restaurantReducer,
        products: productReducer,
        card: basketReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export default store;
