import { combineReducers } from "redux";
import VeiculosReducer from "./reducer_veiculos";

const rootReducer = combineReducers({
    veiculo: VeiculosReducer,
});

export default rootReducer;
