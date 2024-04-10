import { createSlice } from '@reduxjs/toolkit'

const nhietdoSlice = createSlice({
    name: 'nhietdo',
    initialState: {
        value: 25
    },
    reducers: {
        tang: state => {
            state.value += 1
        },
        giam: state => {
            state.value -= 1
        }
    }
})

export const { tang, giam } = nhietdoSlice.actions
export default nhietdoSlice.reducer;