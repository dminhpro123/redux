import { configureStore } from "@reduxjs/toolkit";
import tasksSlice from "./tasksSlice";

const reducer = {
    task: tasksSlice
};

const store = configureStore({
    reducer
});

export default store;