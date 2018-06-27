import { combineReducers } from "redux";
import VeiculosReducer from "./reducer_veiculos";

const rootReducer = combineReducers({
    veiculos: VeiculosReducer,
});

export default rootReducer;
