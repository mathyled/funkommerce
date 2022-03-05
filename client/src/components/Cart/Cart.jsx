import React from "react";
import styles from "./Cart.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteFromCart,
  sumInCart,
  clearCart,
} from "../../redux/actions/actions";
import notFound from "../../assets/notFound.png";
import { useEffect } from "react";
import { RiDeleteBin5Line } from "react-icons/ri";
//MdOutlineAddShoppingCart

const Cart = () => {
  let cart = useSelector((state) => state.cart);
  let arr = []
  // const[total, setTotal] = useState(arr)

  useEffect(() => {
    localStorage.setItem("funkosInCart", JSON.stringify(cart));
  }, [cart]);

  const dispatch = useDispatch();

  const addOneToCart = (id) => {
    dispatch(sumInCart(id));
  };

  const deleteOneInTheCart = (id) => {
    dispatch(deleteFromCart(id));
  };

  const deleteAllInTheCart = (id, boolean) => {
    dispatch(deleteFromCart(id, boolean));
  };

  const emptyCart = () => {
    dispatch(clearCart());
  };
  
  
  
//  const totalFuntion = ()=>{
//   // if (total.length > 1) {
      
//   //   for (let i = 0; i < arr.length; i++) {
//   //     sum += arr[i]
//   //   }

//   // })
//   setTotal(arr.push())
    
//   }
 
  return (
    <div className={styles.container}>
      <div className={styles.myCartAndButtonEmpty}>
        <h1 className={styles.myCart}>MY CART</h1>
        <button onClick={() => emptyCart()} className={styles.emptyCart}>
          Empty cart{" "}
        </button>
        {/* <h2>{total[0]}</h2> */}
      </div>


      <div className={styles.subContainer}>
        {cart.map((product) => (
          <ul key={product.attributes.id}>
            <li className={styles.li}>
              <h2 className={styles.title}>{product.attributes.title}</h2>
              <img
                src={product.attributes["image-url"] || notFound}
                alt="Funko-Img"
                className={styles.funkoImg}
              ></img>
              <div className={styles.price}>
                <h5 >
                  {product.attributes.id - 42550}.00 x {product.quantity} ={" "}
                  {(product.attributes.id - 42550) * product.quantity} USD
                  {arr.push((product.attributes.id - 42550) * product.quantity)}
                </h5>
              </div>
              {/* {console.log(arr)} */}
              <div>
                <button
                  onClick={() => addOneToCart(product.attributes.id)}
                  className={styles.buttonsMoreAndLess}
                  // onChange={totalFuntion}
                >
                  +
                </button>
                <button
                  onClick={() => deleteOneInTheCart(product.attributes.id)}
                  className={styles.buttonsMoreAndLess}
                  // onChange={totalFuntion}
                >
                  -
                </button>
              </div>
              <div>
                <button
                  onClick={() =>
                    deleteAllInTheCart(product.attributes.id, true)
                  }
                  className={styles.deleteButton}
                >
                  <RiDeleteBin5Line></RiDeleteBin5Line>
                </button>
              </div>
            </li>
          </ul>
        ))}
      </div>



    </div>
  );
};
export default Cart;
