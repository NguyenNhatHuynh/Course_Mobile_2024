import { configureStore } from '@reduxjs/toolkit'
import mauSlice from './mauSlide';

const store = configureStore({
    reducer: {
        mau: mauSlice
    }
})

export default store;