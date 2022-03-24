import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrders, getFunkos } from "../../redux/actions/actions";
import EachOrder from "./EachOrder";
import FilterStatus from "./FilterStatus";
import styles from "./PurchaseOrders.module.css"

const PurchaseOrders = () => {
  const purchaseOrders = useSelector((state) => state.orders);
  const dispatch = useDispatch();

  useEffect(() => {
    
    dispatch(getFunkos()).then(() => dispatch(getOrders()))
  }, []);

  return (
    <div>
      <div>
        <FilterStatus />
      </div>
      <div className={styles.all}>
        {purchaseOrders?.map((o) => {
          return (
            <EachOrder
              key={o.id}
              orderId={o.id}
              date={o.DateTime}
              userId={o.UserId}
              amount={o.amount}
              statusPay={o.status_pay}
              statusOrder={o.status_order}
              orderDetail={o.Order_detail}
            />
          );
        })}
      </div>
    </div>
  );
};

export default PurchaseOrders;
