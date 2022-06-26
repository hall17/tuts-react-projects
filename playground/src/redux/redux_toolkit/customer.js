const { createSlice } = require("@reduxjs/toolkit");

export const customerSlice = createSlice({
    name: 'customer',
    initialState: {
        name: '',
        surname: '',
        age: 0,
    },
    reducers: {
        setName: (state, action) => {
            state.name = action.payload
        },
        setSurname: (state, action) => {
            state.surname = action.payload
        },
        setAge: (state, action) => {
            return { ...state, age: action.payload }
        },
        setCustomer: (state, action) => {
            return { ...state, ...action.payload }
        }
    }
})

export const {setName,setSurname,setAge,setCustomer} = customerSlice.actions

export default customerSlice.reducer