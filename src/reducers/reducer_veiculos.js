import _ from "lodash";
import {
    FETCH_VEICULOS,
    FETCH_VEICULO,
    CREATE_VEICULO,
    DELETE_VEICULO,
} from "../actions/index";

export default function(state = {}, action) {
    switch (action.type) {
        case FETCH_VEICULOS:
            return action.payload.data;
        case FETCH_VEICULO:
            return { ...state, [action.payload.data.id]: action.payload.data };
        case CREATE_VEICULO:
            return { ...state, [action.payload.data.id]: action.payload.data };
        case DELETE_VEICULO:
            return _.omit(state, action.payload.data.id);
        default:
            return state;
    }
}
