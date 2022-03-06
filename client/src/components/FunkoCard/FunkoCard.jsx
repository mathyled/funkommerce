import styles from "./FunkoCard.module.css";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getFunkos, addToCart } from "../../redux/actions/actions";
import cart1 from "../../../src/assets/cart1.png";
import { Link } from "react-router-dom";
import notFound from "../../assets/notFound.png";
import ItemsQuantity from "../ItemsQuantity/ItemsQuantity";
//import { MdOutlineAddShoppingCart } from 'react-icons/md';
import gifLoader from '../../assets/gifLoader.gif'
import Filter from "../Filters/Filters";

const FunkoCard = () => {
  const funkos = useSelector((state) => state.funkos);
  // let cart = useSelector((state) => state.cart);

  // const [text, setText] = useState("Add to cart");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFunkos());
  }, [dispatch]);

  const addToCart1 = (id) => {
    dispatch(addToCart(id));
  };
  let cart = useSelector((state) => state.cart);
  
  useEffect(() => {
    localStorage.setItem("funkosInCart", JSON.stringify(cart));
  }, [cart]);


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
          <img src={cart1} alt="img" />
          {/* <MdOutlineAddShoppingCart></MdOutlineAddShoppingCart> */}
        </Link>
        <div>

        </div>
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

                  <div className={styles.funkoTittle}>
                    <div>
                      <h3>{product.attributes.brand}</h3>
                    </div>
                    <h2>{product.attributes.title}</h2>
                  </div>

                  <div className={styles.price}>
                    <h3>
                      {/* {Math.floor(Math.random() * (50 - 20 + 1) + 20)} USD */}
                      {product.attributes.id - 42550 } USD
                    </h3>
                  </div>

                  <div>
                    <button
                      onClick={() => addToCart1(product.attributes.id)}
                      className={styles.buttonAdd}
                    >
                      Add to cart
                    </button>
                  </div>
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
