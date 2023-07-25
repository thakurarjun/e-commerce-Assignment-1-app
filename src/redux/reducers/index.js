
import { combineReducers} from "@reduxjs/toolkit";
import authSlicer from "./authSlicer";

const rootReducer = combineReducers({
    authSlicer
});

export default rootReducer;