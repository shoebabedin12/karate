import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authSlice from "../users/userSlice";

const reducer = combineReducers({
  login: authSlice
});

const store = configureStore({
    reducer: reducer,
});


export default store;
