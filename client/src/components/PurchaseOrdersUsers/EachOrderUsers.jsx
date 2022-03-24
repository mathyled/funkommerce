import { useDispatch, useSelector } from "react-redux";
import styles from "./PurchaseOrdersUsers.module.css";

const EachOrderUsers = ({
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

  return (

    <div className={styles.eachOrder}>
      <div className={styles.orders}>
        <h4>Orden N° {orderId}</h4>
        <h4>Date: {date.replace("T", " ").split(".")[0]}</h4>
        <h4>Payment: {statusPay}</h4>
        <h4>Total: $ {amount}</h4>
        <h4>Status: {statusOrder}</h4>
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

export default EachOrderUsers;
