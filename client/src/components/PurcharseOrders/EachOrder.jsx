import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeStatus } from "../../redux/actions/actions"

const EachOrder = ({
  key,
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
      idOrder: "",
      status: ""
  })

  const handleStatus = (s) => {
    s.preventDefault();
    setInput({
        idOrder: key,
        status: s.target.value
    })
    dispatch(changeStatus(input))
  }

  return (
    <div key={key}>
      <h1>Orden N° {key}</h1>
      <h2>User N° {userId}</h2>
      <h4>Date: {date}</h4>
      <h4>Payment: {statusPay}</h4>
      <h3>Shipping: {statusOrder}</h3>
      {orderDetail?.map((d) => {
        let funkoName = allFunkos?.find((f) => {
         return f.id === d.productId;
        });
        return (
          <div key={d.id}>
            <p>{funkoName.title}</p>
            <p>{d.quantity}</p>
            <p>{d.price}</p>
            <p>{d.subtotal}</p>
          </div>
        );
      })}
      <h4>Total: $ {amount}</h4>
      <form onSubmit={handleStatus}>
      <select defaultValue={statusOrder}>
          <option value="PENDING">Pending</option>
          <option value="SHIPPED">Shipped</option>
          <option value="IN TRANSIT">In Transit</option>
          <option value="DELIVERED">Delivered</option>
      </select>
        <button type="submit">Update Status</button>
      </form>
    </div>
  );
};

export default EachOrder;
