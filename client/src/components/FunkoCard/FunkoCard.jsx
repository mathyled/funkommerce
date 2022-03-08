import styles from "./FunkoCard.module.css";
import { Link } from "react-router-dom";
import notFound from "../../assets/notFound.png";
import ItemsQuantity from "../ItemsQuantity/ItemsQuantity";

import { useEffect, useState } from "react";

import Paged from "../Paged/Paged";
import tristezaNotFound from "../../assets/tristezaNotFound.png";
import { MdOutlineAddShoppingCart } from "react-icons/md";



const FunkoCard = ({ funkos, addToCart1, cart }) => {
  
  ///PAGINADO
//console.log('jjjjj',funkos)
  const [actualFunko, setActualpage] = useState(1);

  const [funkoPerPage] = useState(20);
  
    const indexOfLastFunko = actualFunko * funkoPerPage;
    const indexOfFirstFunko = indexOfLastFunko - funkoPerPage;
    const currentFunko = funkos.slice(indexOfFirstFunko, indexOfLastFunko)

    function paginate (e, numberPage){
        setActualpage(numberPage)
    }


  if (funkos.length < 1) {
    return (
      <div>
        <h2>Product not found</h2>
        <img src={tristezaNotFound} alt="tristezaNotFound.png" className={styles.notfound} />
      </div>
    );
  } else {
    return (
      <div className={styles.container}>
       

        <div className={styles.funkosCard}>
          {currentFunko && currentFunko.map((product) => (
            <div className={styles.item} key={product.id}>
              <ul key={product.id}>
                
                <li  className={styles.li}>
                  
                  <Link
                    to={`/detail/${product.id}`}
                    className={styles.linkDetails}
                  >
                    <img
                      src={product["image"] || notFound}
                      alt="Funko-Img"
                      className={styles.funkoImg}
                    />

                    <div className={styles.funkoTitle}>
                      <div className={styles.brand}>
                        <h2>{product.brand}</h2>
                      </div>
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

    );
  }
};

export default FunkoCard;
