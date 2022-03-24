import styles from "./FunkoCard.module.css";
import { Link } from "react-router-dom";
import notFound from "../../assets/notFound.png";
import { useEffect, useState } from "react";
import Paged from "../Paged/Paged";
import tristezaNotFound from "../../assets/tristezaNotFound.png";
import Order from "../Order/Order";
import { useDispatch, useSelector } from "react-redux";
import { changePage, addCartDb, setPost, setItemsQuantity, getCartDb} from "../../redux/actions/actions";
import axios from "axios";
import CartFromDb from "../CartFromDb/CartFromDb";
import Swal from "sweetalert2";

const FunkoCard = ({ funkos, addToCart1, choosenCart, cart}) => {
  //PAGINADO
  // const [actualFunko, setActualpage] = useState(1);
  const page = useSelector((state) => state.actualPage);

  const token = useSelector((state) => state.token);

  let cartDb = useSelector((state) => state.cartDb);

  const idUser = useSelector((state) => state.idUser);
  
  const post = useSelector((state) => state.post);

  const dispatch = useDispatch();
  const [funkoPerPage] = useState(20);

  const indexOfLastFunko = page * funkoPerPage;
  const indexOfFirstFunko = indexOfLastFunko - funkoPerPage;
  const currentFunko = funkos.slice(indexOfFirstFunko, indexOfLastFunko);




  


  function paginate(e, numberPage) {
    dispatch(changePage(numberPage));
  }

  const [arrVerfication, setarrVerfication] = useState([]);

 
  let itemsQuantity = useSelector((state) => state.setItemsQuantity);




  const addOneObjectToCartDb = async (id) => {
    
    let objUser = {
      UserID: 2,
    };

    dispatch(getCartDb(objUser));

    let funkoAAgregar2 = funkos.find((e) => e.id === id);
    let funkoAAgregar3 = cartDb.find((e) => e.id === id);

    if ( funkoAAgregar3) {
      Swal.fire({
        title: "The item is already in the cart",
        icon: "info",
        timer: 4000,
        timerProgressBar: true,
      });
    } else {

    if (token && arrVerfication.length < 1 && post === false) {

      let funkoAAgregar = funkos.find((e) => e.id === id);
      let modifyQuantityToFunkoDb = { ...funkoAAgregar, quantity: 1 };
  
      setarrVerfication((prevState) => prevState.concat(modifyQuantityToFunkoDb));
  
      let obj = {
        Items: cart.length < 1 ? [modifyQuantityToFunkoDb] : cart,
        UserId: 2,
      };

     
  
      
      dispatch(addCartDb(obj, funkoAAgregar));
      dispatch(setPost());
      dispatch(setItemsQuantity());


    } else if (token && post) {
      let funkoAAgregar2 = await funkos.find((e) => e.id === id);
      let modifyQuantityToFunkoDb2 = await { ...funkoAAgregar2, quantity: 1 };
      
  
      
      const cartUserdb = await axios.put(
        "http://localhost:3001/api/order/insertproduct",
        {
          item: modifyQuantityToFunkoDb2,
          idUser: 2,
        }
      );
      dispatch(setItemsQuantity(funkoAAgregar2));
    }
  }
  };



  
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
                          onClick={() => {
                            !token ? addToCart1(product.id)
                            : addOneObjectToCartDb(product.id);
                          
                          }}
                          className={styles.buttonAdd}
                        >
                          {choosenCart.find((item) => item.id === product.id)
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
