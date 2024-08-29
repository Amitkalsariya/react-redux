import { configureStore } from "@reduxjs/toolkit";
import countSlice from "./countSlice";
import FormikSlice from "./FormikSlice";

export default configureStore({
    reducer:{
        counter:countSlice,
        formikcalc:FormikSlice
    }
})