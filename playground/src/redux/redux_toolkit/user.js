const { createSlice } = require("@reduxjs/toolkit");

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        email: '',
        password: '',
    },
    reducers: {
        setUser: (state, action) => {
            return { ...state, ...action.payload }
        }
    }
})

export const { setUser } = userSlice.actions

export default userSlice.reducer