import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDetails,getCategories,getReviews } from "../../redux/actions/actions";
import styles from "./FunkoDetail.module.css";
import Funko from "../../assets/Funko.gif";
import { addToCart } from "../../redux/actions/actions";
import Swal from "sweetalert2";
import Nav from "../Nav/Nav";
import ReviewRoot from "../Reviews/ReviewRoot/ReviewRoot";
import Detail from '../../components/FunkoDetail/Detail/Detail';
import imgCredit from "./image.js";
import ImageCredit from "../componentsReusable/ImageCredit";
import ReviewList from "../Reviews/ReviewList/ReviewList";
import Footer from "../Footer/Footer";

const FunkoDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const funkoDetails = useSelector((state) => state.detail);
  const cart = useSelector((state) => state.cart);
  // const categories = useSelector((state) => state.categories);
  const reviews= useSelector(state=> state.reviews)
  
  useEffect(() => {
    dispatch(getDetails(id));
    dispatch(getCategories());
    dispatch(getReviews(reviews));
 
  }, [dispatch, id,reviews]);
  

  const addToCart1 = (id) => {
    let funkoAlreadyInCart = cart.find(
      (item) => String(item.id) === String(id)
    );
    if (funkoAlreadyInCart) {
      Swal.fire({
        title: "The item is already in the cart",
        icon: "info",
        timer: 4000,
        timerProgressBar: true,
      });
    } else {

      dispatch(addToCart(Number(id)));
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Satisfactorily added',
        showConfirmButton: false,
        timer: 1500
      })
    }
  };




  if (funkoDetails.length === 0) {
    return (
      <div className={styles.h1}>
        <h1 >Loading...</h1>
        <img src={Funko} alt="Funko" />

      </div>
    )
  } else {
    return (
      <div >
        <Nav />
        <div className={styles.container}>

          <div className={styles.item} >
            <img src={funkoDetails[0].image} alt="Funko-Img" className={styles.img} />
          </div>

          <div className={styles.item} >

            <div className={styles.header} >
              <div className={styles.brand}>
                <p>{funkoDetails[0].brand}</p>
              </div>
              <div className={styles.title}>
                <h1>{funkoDetails[0].title}</h1>
              </div>
            </div>
            <Detail />
            <div className={styles.buttonRoot} >

              <div>
                <button
                  onClick={() => addToCart1(id)}
                  className={styles.buttonAdd}
                >
                  {cart.find((item) => String(item.id) === id)
                    ? "In cart"
                    : "Add to cart"}

                </button>
              </div>

              <ReviewRoot />

            </div>

          </div>
          <div className={styles["item-review"]}>
            <ReviewList reviews={reviews} />
          </div>
          <div className={styles["item-medium"]}></div>
          <div className={styles["item-pay"]}>
            <h4>Payment methods</h4>

            <div>
              <p >
                pay up to 12 cuotes
              </p>
            </div>
            <p margin-top="20px" >Credit card</p>

            <ImageCredit
              styles={styles}
              naranja={imgCredit.naranja}
              master={imgCredit.master}
              american={imgCredit.american}
              visa={imgCredit.visa}
            />

            <p margin-top="20px" >Debit card</p>

            <ImageCredit
              styles={styles}
              naranja={imgCredit.naranja}
              master={imgCredit.master}
              american={imgCredit.american}
              visa={imgCredit.visa}
            />

            <p margin-top="20px" >Cash</p>

            <div className={styles["ui-pdp-payment-icon"]}>
              <div className={styles["ui-pdp-payment-icon__size"]}>
                <img src={imgCredit.american} width="24px" height="24px" alt="creditAmerican"/>
              </div>

              <div className={styles["ui-pdp-payment-icon__size"]}>
                <img src={imgCredit.visa} width="45px" height="14px" alt="creditVisa" />
              </div>
            </div>

          </div>
        </div>
<Footer></Footer>
      </div>
    )
  }
};

export default FunkoDetail;
