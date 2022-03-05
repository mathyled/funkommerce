import axios from "axios";

const GET_FUNKOS = "GET_FUNKOS"

const HANDLE_CATEGORIES = "HANDLE_CATEGORIES"
const HANDLE_BRANDS = "HANDLE_BRANDS"
const HANDLE_LICENSE = "HANDLE_LICENSE"

export function getFunkos() {
    return async (dispatch) => {
        var json = await axios.get("https://the-funko-api.herokuapp.com//api/v1/items/?page=7")
        return dispatch({
            type: GET_FUNKOS,
            payload: json.data,
        })
    };
};

export function handleCategories(payload){
    return {
        type: HANDLE_CATEGORIES,
        payload
    }
}

export function handleBrands(payload){
    return {
        type: HANDLE_BRANDS,
        payload
    }
}

export function handleLicense(payload){
    return {
        type: HANDLE_LICENSE,
        payload
    }
}

