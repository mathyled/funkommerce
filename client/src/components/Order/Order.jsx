import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {getFunkos, orderFunkos} from "../../redux/actions/actions"
// import style from "./Order.module.css"

const Order = () => {
    const dispatch = useDispatch();
    let [, setOrder] = useState("")

    const handleOrder = o => {
        o.preventDefault();
        if (o.target.value !== "") {
            dispatch(orderFunkos(o.target.value))
            setOrder(o.target.value)
        }
        else {
            dispatch(getFunkos());
        }
    }

    return (
        <div>
            <select defaultValue=""
            onChange={handleOrder}
            >
                <option value="">
                    Order By...
                </option>
                <optgroup label="Alphabetical">
                <option value="AtoZ">A to Z</option>
                <option value="ZtoA">Z to A</option>
                </optgroup>
                <optgroup label="Price">
                <option value="HighPrice">High To Low</option>
                <option value="LowPrice">Low To High</option>
                </optgroup>
            </select>
        </div>
    )
}

export default Order;

