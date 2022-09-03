import { configureStore } from "@reduxjs/toolkit";
import weatherSlice from "./weatherApp/weatherSlice";

export const store = configureStore({
    reducer:{
        weather: weatherSlice
    },
})