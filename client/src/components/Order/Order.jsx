import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {getFunkos} from "../../redux/actions"

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
                <option value="AtoZ">A to Z</option>
                <option value="ZtoA">Z to A</option>
                <option value="HighPrice">Price: High To Low</option>
                <option value="LowPrice">Price: Low To High</option>
            </select>
        </div>
    )
}

export default Order;

