const SET_CUSTOMER = 'SET_CUSTOMER'


const initalState = {
    name: '',
    surname: '',
    age: 0
}

const customerReducer = (state = initalState, action) => {
    switch (action.type) {
        case SET_CUSTOMER:
            return { ...state, ...action.customer }
        default:
            return state
    }
}

const setCustomer = (customer) => ({
    type: SET_CUSTOMER,
    customer
})