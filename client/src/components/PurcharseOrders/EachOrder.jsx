import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  changeStatus,
  getFunkos,
} from "../../redux/actions/actions";
import styles from "./PurchaseOrders.module.css";
import Swal from "sweetalert2";

const EachOrder = ({
  orderId,
  date,
  userId,
  amount,
  statusPay,
  statusOrder,
  orderDetail,
}) => {
  const allFunkos = useSelector((state) => state.funkos);
  const dispatch = useDispatch();
  const [input, setInput] = useState({
    idOrder: orderId,
    status: "",
  });

  useEffect(() => {
    dispatch(getFunkos())
  },[])

  const handleChange = (event) => {
    event.preventDefault();
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    });
  };

  const handleStatus = (e) => {
    e.preventDefault();
    dispatch(changeStatus(input));
    Swal.fire({
      title: `Order N° ${input.idOrder} Status Updated`,
      icon: "success",
      position: "center",
      timer: 1500,
      showConfirmButton: false,
    });
  };

  return (
    <div className={styles.eachOrder}>
      <div className={styles.orders}>
        <h4>Orden N° {orderId}</h4>
        <h4>User N° {userId}</h4>
        <h4>Date: {date.replace("T", " ").split(".")[0]}</h4>
        <h4>Payment: {statusPay}</h4>
        <h4>Total: $ {amount}</h4>
        <h4>Status: </h4>
        <select
          name="status"
          defaultValue={statusOrder}
          onChange={handleChange}
        >
          <option value="PENDING">Pending</option>
          <option value="SHIPPED">Shipped</option>
          <option value="IN TRANSIT">In Transit</option>
          <option value="DELIVERED">Delivered</option>
        </select>
        <button className={styles.updateBtn} onClick={handleStatus}>Update</button>
      </div>
      <div className={styles.orderDetail}>
        <p>Product</p>
        <p>Quantity</p>
        <p>Unit Price</p>
        <p>Subtotal</p>
        </div>
        {orderDetail?.map((d) => {
          
          return (
            <div key={d.id} className={styles.orderInfo}>
              <p>{allFunkos?.find((f) => f.id === d.productId).title}</p>
              <p>{d.quantity}</p>
              <p>$ {d.price}</p>
              <p>$ {d.subtotal}</p>
            </div>
          );
        })}
    </div>
  );
};

export default EachOrder;
