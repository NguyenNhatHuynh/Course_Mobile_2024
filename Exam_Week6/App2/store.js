import { configureStore } from '@reduxjs/toolkit'
import mauSlide from './mauSlide';

const store = configureStore({
    reducer: {
        mau: mauSlide
    }
});

export default store;
