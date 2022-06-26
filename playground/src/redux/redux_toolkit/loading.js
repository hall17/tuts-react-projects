const { createSlice } = require("@reduxjs/toolkit");

export const loadingSlice = createSlice({
    name: 'loading',
    initialState: false,
    reducers: {
        setLoading: (state, action) => {
            state = action.payload
        },
    }
})

export const { setLoading } = loadingSlice.actions

export default loadingSlice.reducer