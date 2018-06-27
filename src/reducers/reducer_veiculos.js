import { FETCH_VEICULOS } from "../actions/index";

export default function(state = {}, action) {
    switch (action.type) {
        case FETCH_VEICULOS:
            console.log(action.payload.data);
            return [action.payload.data, ...state];
    }
    return state;
}
