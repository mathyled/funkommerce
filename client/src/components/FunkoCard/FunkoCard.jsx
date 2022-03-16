import styles from "./FunkoCard.module.css";
import { Link } from "react-router-dom";
import notFound from "../../assets/notFound.png";
import { useState } from "react";
import Paged from "../Paged/Paged";
import tristezaNotFound from "../../assets/tristezaNotFound.png";
import Order from "../Order/Order";
import { useDispatch, useSelector } from "react-redux";
import { changePage } from "../../redux/actions/actions";

const FunkoCard = ({ funkos, addToCart1, cart }) => {
  ///PAGINADO
  // console.log('jjjjj',funkos)
  const [actualFunko, setActualpage] = useState(1);
  const page = useSelector((state) => state.actualPage);
  const dispatch = useDispatch();
  const [funkoPerPage] = useState(20);

  const indexOfLastFunko = page * funkoPerPage;
  const indexOfFirstFunko = indexOfLastFunko - funkoPerPage;
  const currentFunko = funkos.slice(indexOfFirstFunko, indexOfLastFunko);

  function paginate(e, numberPage) {
    //setActualpage(numberPage);
    dispatch(changePage(numberPage));
  }

  if (funkos.length < 1) {
    return (
      <div className={styles.notFound2}>
        <h2>Product not found</h2>
        <img
          src={tristezaNotFound}
          alt="tristezaNotFound.png"
          className={styles.notfound}
        />
      </div>
    );
  } else {
    return (
     
      <div className={styles.containerAll}>
        <div className={styles.container}>
        <div className={styles.order}>
          <Order />
        </div>
          <div className={styles.funkosCard}>
            {currentFunko &&
              currentFunko.map((product) => (
                <div className={styles.item} key={product.id}>
                  <ul key={product.id}>
                    <li className={styles.li}>
                      <Link
                        to={`/detail/${product.id}`}
                        className={styles.linkDetails}
                      >
                        <img
                          src={product["image"] || notFound}
                          alt="Funko-Img"
                          className={styles.funkoImg}
                        />
                        <div className={styles.brand}>
                          <h2>{product.Brand.name}</h2>
                        </div>
                        <div className={styles.funkoTitle}>
                          <h1>{product.title}</h1>
                        </div>

                        <div className={styles.price}>
                          <h2>US$ {product.price}</h2>
                        </div>
                      </Link>
                      <div>
                        <button
                          onClick={() => addToCart1(product.id)}
                          className={styles.buttonAdd}
                        >
                          {cart.find((item) => item.id === product.id)
                            ? "In cart"
                            : "Add to cart"}
                        </button>
                      </div>
                    </li>
                  </ul>
                </div>
              ))}
          </div>
          <div className={styles.pagination}>
            <Paged
              funkoPerPage={funkoPerPage}
              totalFunko={funkos}
              paginate={paginate}
            />
          </div>
        </div>
      </div>
    );
  }
};

export default FunkoCard;
