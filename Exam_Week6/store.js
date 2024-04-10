import { configureStore } from '@reduxjs/toolkit';
import nhietdoSlide from './nhietDoSlide';

const store = configureStore({
    reducer: {
        nhietdo: nhietdoSlide
    }
})

export default store;