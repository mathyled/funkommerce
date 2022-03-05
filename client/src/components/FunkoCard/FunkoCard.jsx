import React from "react";
import styles from "./FunkoCard.module.css";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getFunkos, addToCart } from "../../redux/actions/actions";
import cart1 from "../../../src/assets/cart1.png";
import { Link } from "react-router-dom";
import notFound from "../../assets/notFound.png";

const FunkoCard = () => {
  const funkos = useSelector((state) => state.funkos);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFunkos());
  }, [dispatch]);

  const addToCart1 = (id) => {
    dispatch(addToCart(id));
  };

  if (funkos.length < 1) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  } else {
    return (
      <div className={styles.container}>
        <Link to="/cart">
          <img src={cart1} alt="img" className={styles.cartImg} />
        </Link>
        <div className={styles.funkosCard}>
          {funkos.map((product) => (
            <div className={styles.item} key={product.attributes.id}>
              <ul key={product.attributes.id}>
                <li className={styles.li}>
                  <Link to={`/detail/${product.attributes.id}`}>
                  <h2>{product.attributes.title}</h2>
                  <img
                    src={product.attributes["image-url"] || notFound}
                    alt="Funko-Img"
                    className={styles.funkoImg}
                    />
                    </Link>
                  <button onClick={() => addToCart1(product.attributes.id)}>
                    Add to cart
                  </button>
                </li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    );
  }
};

export default FunkoCard;
