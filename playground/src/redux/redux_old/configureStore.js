import { createStore, combineReducers } from "redux";
import customerReducer from './customer'

const configureStore = () => {

    // Reducers
    const reducers = combineReducers({
        customer: customerReducer,
    })

    const rootReducer = (state, action) => {

        // If logout, reset state 
        if (action.type === 'LOGOUT') {
            state = undefined
        }

        return reducers(state, action)
    }


    let store;

    // Initialize reducers
    if (process.env.NODE_ENV !== 'production') {
        store = createStore(
            rootReducer,
            window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        )
    }
    else {
        store = createStore(rootReducer)
    }

    // Return store
    return store

}

export default configureStore