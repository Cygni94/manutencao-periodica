import { FETCH_VEICULOS } from "../actions/index";

export default function(state = {}, action) {
    switch (action.type) {
        case FETCH_VEICULOS:
            return action.payload.data;
        default:
            return state;
    }
}
