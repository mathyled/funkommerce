import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {getFunkos, orderFunkos} from "../../redux/actions/actions"
import styles from "./Order.module.css"

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
        <div className={styles.order}>
            {/* <p className={styles.orderText}>Sort by</p> */}
            <select defaultValue="" onChange={handleOrder}>
            <option value="" hidden>Sort by</option>
                <option value="">Default</option>
                <option value="AtoZ">Name (A - Z)</option>
                <option value="ZtoA">Name (Z - A)</option>
                <option value="HighPrice">Price (High to Low)</option>
                <option value="LowPrice">Price (Low to High)</option>
            </select>
            <span className={styles.customArrow}></span>
        </div>
    )
}

export default Order;

