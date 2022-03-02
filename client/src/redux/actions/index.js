import axios from "axios";

const GET_FUNKOS = "GET_FUNKOS"

export function getFunkos() {
    return async (dispatch) => {
        var json = await axios.get("https://the-funko-api.herokuapp.com//api/v1/items/?page=7")
        return dispatch({
            type: GET_FUNKOS,
            payload: json.data,
        })
    };
};