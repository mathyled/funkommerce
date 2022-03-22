import { useDispatch } from "react-redux";
import { filterStatus } from "../../redux/actions/actions"

const FilterStatus = () => {

    const dispatch = useDispatch();

    const handleFilter = (e) => {
        e.preventDefault();
        dispatch(filterStatus(e.target.value))
    }

    return (
        <div>
            <select defaultValue="ALL" onChange={handleFilter}>
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