import { FETCH_VEICULOS } from "../actions/index";

export default function(state = {}, action) {
    switch (action.type) {
        case FETCH_VEICULOS:
            return state;
        //return [action.payload.data, ...state];
        default:
            console.log(action.payload.data);
    }
}
