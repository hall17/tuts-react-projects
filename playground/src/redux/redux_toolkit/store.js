import { configureStore } from "@reduxjs/toolkit";
import customerReducer from './customer'
import loadingReducer from './loading'
import userReducer from './user'
import snackbarReducer from './snackbar'

export default configureStore({
    reducer: {
        customer: customerReducer,
        loading: loadingReducer,
        user: userReducer,
        snackbar: snackbarReducer,
    }
})