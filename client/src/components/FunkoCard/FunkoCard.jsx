import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getFunkos, addToCart } from "../../redux/actions/actions";

const FunkoCard = () => {
  const funkos = useSelector((state) => state.funkos);
  console.log(2, funkos);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFunkos());
  }, [dispatch]);

  const addToCart = (e) => {
    console.log(e);
    // dispatch(addToCart());
  }


  if (funkos.length < 1) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  } else {
    return (
      <div>
        {funkos.map((product) => (
          <ul key={product.attributes.id}>
            <li >
              <h2>{product.attributes.title}</h2>
              <button onClick={()=>addToCart(product.attributes.id)}>Add to cart</button>
            </li>
          </ul>
        ))}
      </div>
    );
  }
};

export default FunkoCard;
