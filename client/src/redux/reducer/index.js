import {GET_FUNKOS} from "../actions/index";

const initialState = {
    funkos:[]
}

export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        case GET_FUNKOS :
            return{
                ...state,
                funkos:action.payload
            }

            default:
                return{...state}

        }

    }