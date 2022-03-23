import { useDispatch } from "react-redux";
import { useState } from "react";
import { filterStatus, getOrders } from "../../redux/actions/actions"
import styles from "./PurchaseOrders.module.css"

const FilterStatus = () => {

    const dispatch = useDispatch();
    const [input, setInput] = useState({
        status: ""
    })

    const handleFilter = (e) => {
        e.preventDefault();
        if(e.target.value === "ALL") {
            dispatch(getOrders())
        } else {
            setInput({
                ...input,
                [e.target.name]: e.target.value
            })
            console.log(input)
            dispatch(filterStatus(input));
        }
    }

    return (
        <div className={styles.filter}>
            <h4>Filter Status:</h4>
            <select defaultValue="ALL" name="status" onChange={handleFilter}>
                <option value="ALL">All Orders</option>
                <option value="PENDING">Pending</option>
                <option value="SHIPPED">Shipped</option>
                <option value="IN TRANSIT">In Transit</option>
                <option value="DELIVERED">Delivered</option>
            </select>
        </div>
    )
}

export default FilterStatus