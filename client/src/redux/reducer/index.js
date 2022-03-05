import {GET_FUNKOS} from "../actions/index";
import { HANDLE_CATEGORIES, HANDLE_BRAND, HANDLE_LICENSE } from "../actions/index";

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
            
            case HANDLE_CATEGORIES:
                const allFunkos =state.funkos;

                let categorieFilter = action.payload === 'ALL' ? state.funkos : allFunkos.filter((i) => i.data.atributes.category.includes(action.payload));
                return {
                    ...state,
                    funko: categorieFilter
                }

                case HANDLE_BRAND:
                    const allFunkos = state.funkos;

                    let brandFilter = action.payload === 'ALL' ? state.funkos : allFunkos.filter((i) => i.data.atributes.brand.includes(action.payload));
                    return{
                        ...state,
                        funko: brandFilter
                    }
                               
                case HANDLE_LICENSE:
                    const allFunkos = state.funkos;

                    let licenseFilter = action.payload === 'ALL' ? state.funkos : allFunkos.filter((i) => i.data.atributes.license.includes(action.payload));
                    return {
                        ...state,
                        funko: licenseFilter
                    }

            default:
                return{...state}

        }

    }

