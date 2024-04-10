import { createSlice } from '@reduxjs/toolkit'
export const mauSlice = createSlice({
    name: 'mau',
    initialState: {
        value: {
            do: 0,
            xanhla: 128,
            xanhduong: 255
        }
    },
    reducers: {
        tangDo: state => {
            state.value.do += 15
        },
        giamDo: state => {
            state.value.do -= 15
        },
        tangXanhla: state => {
            state.value.xanhla += 15
        },
        giamXanhla: state => {
            state.value.xanhla -= 15
        },
        tangXanhduong: state => {
            state.value.xanhduong += 15
        },
        giamXanhduong: state => {
            state.value.xanhduong -= 15
        }
    },
})

export const { tangDo, giamDo, tangXanhduong, giamXanhduong, tangXanhla, giamXanhla } = mauSlice.actions
export default mauSlice.reducer;