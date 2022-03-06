import styles from "./FunkoCard.module.css";
import { Link } from "react-router-dom";
import notFound from "../../assets/notFound.png";
import ItemsQuantity from "../ItemsQuantity/ItemsQuantity";

import { useEffect, useState } from "react";

import Paged from "../Paged/Paged";
import gifLoader from "../../assets/gifLoader.gif";
import { MdOutlineAddShoppingCart } from "react-icons/md";


const FunkoCard = ({ funkos, addToCart1, cart }) => {
  

  useEffect(() => {
    localStorage.setItem("funkosInCart", JSON.stringify(cart));
  }, [cart]);

  ///PAGINADO

  const [actualFunko, setActualpage] = useState(1);
  const [funkoPerPage] = useState(5);

    const indexOfLastFunko = actualFunko * funkoPerPage;
    const indexOfFirstFunko = indexOfLastFunko - funkoPerPage;
    const currentFunko = funkos.slice(indexOfFirstFunko, indexOfLastFunko)

    function paginate (e, numberPage){
        setActualpage(numberPage)
    }


  if (funkos.length < 1) {
    return (
      <div>
        <img src={gifLoader} alt="gif" />
      </div>
    );
  } else {
    return (
      <div className={styles.container}>
       
        <Link to="/cart" className={styles.cartImg}>
          <ItemsQuantity />
          <MdOutlineAddShoppingCart className={styles.cartImg2} />
        </Link>

        <div className={styles.funkosCard}>
          {currentFunko && currentFunko.map((product) => (
            <div className={styles.item} key={product.attributes.id}>
              <ul key={product.attributes.id}>
                
                <li className={styles.li}>
                  
                  <Link
                    to={`/detail/${product.attributes.id}`}
                    className={styles.linkDetails}
                  >
                    <img
                      src={product.attributes["image-url"] || notFound}
                      alt="Funko-Img"
                      className={styles.funkoImg}
                    />


                    <div className={styles.funkoTittle}>
                      <div>
                        <h3>{product.attributes.brand}</h3>
                      </div>
                      <h2>{product.attributes.title}</h2>


                    </div>

                    <div className={styles.price}>
                      <h3>{product.attributes.id} USD</h3>
                    </div>
                  </Link>
                  <div>
                    <button
                      onClick={() => addToCart1(product.attributes.id)}
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
