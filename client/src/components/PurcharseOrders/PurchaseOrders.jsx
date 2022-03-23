import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrders } from "../../redux/actions/actions";
import EachOrder from "./EachOrder";
import FilterStatus from "./FilterStatus";

const PurchaseOrders = () => {
  const purchaseOrders = useSelector((state) => state.orders);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOrders());
  }, []);

  return (
    <div>
      <div>
        <FilterStatus />
      </div>
      <div>
        {purchaseOrders?.map((o) => {
          return (
            <EachOrder
              key={o.id}
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
