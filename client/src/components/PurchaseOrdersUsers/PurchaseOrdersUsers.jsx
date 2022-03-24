import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrders, getFunkos } from "../../redux/actions/actions";
import EachOrderUsers from "./EachOrderUsers";
import styles from "./PurchaseOrdersUsers.module.css"

const PurchaseOrdersUsers = () => {
  const purchaseOrders = useSelector((state) => state.orders);
  const actualUser = useSelector(state => state.user)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFunkos()).then(dispatch(getOrders()))
  }, []);

  let userOrders = purchaseOrders?.filter(f => f.UserId === actualUser.user.id)

  return (
      <div className={styles.all}>
        {userOrders?.map((o) => {
          return (
            <EachOrderUsers
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
  );
};

export default PurchaseOrdersUsers;
