import React, { useEffect, useState } from "react";
import styles from "./ModifyFunko.module.css";
import { useSelector, useDispatch } from "react-redux";
import { validator } from "../../../helpers/validatorsForm";
import { BiSearchAlt } from "react-icons/bi";
import {
  getBrand,
  getCategories,
  getFunkos,
  getLicense,
  modifyFunko,
  deleteFunko,
} from "../../../redux/actions/actions";
import Swal from "sweetalert2";
import Nav from "../../Nav/Nav";

const ModifyFunko = () => {
  let allFunkos = useSelector((state) => state.funkosBackUp);
  let allCategories = useSelector((state) => state.categories);
  let allLicenses = useSelector((state) => state.license);
  let allBrands = useSelector((state) => state.brand);
  let dispatch = useDispatch();
  let defaultImage =
    "https://cdn.shopify.com/s/files/1/0154/8877/8288/products/1-Mystery-funko-pop-Brand-new-unopened-ones_1024x1024.jpg?v=1577791303";

  const [input, setInput] = useState({
    productId: 0,
    title: "",
    number: "",
    image: "",
    price: 0,
    stock: 0,
    category: "",
    brand: "",
    license: "",
    formFactor: "",
    description: ""
  });

  const [error, setError] = useState({});
  const [product, setProduct] = useState({
    name: "",
  });

  useEffect(() => {
    dispatch(getFunkos());
    dispatch(getCategories());
    dispatch(getLicense());
    dispatch(getBrand());
  }, []);

  const handleChange = (event) => {
    event.preventDefault();
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    });
    setError(validator(error, event.target));
  };

  const handleChangeProduct = (event) => {
    event.preventDefault();
    setProduct({
      ...product,
      [event.target.name]: event.target.value,
    });
  };

  const handleProduct = (event) => {
    event.preventDefault();
    let chosenProduct = allFunkos?.find((e) => e.title === product.name);
    if (product.name === "") {
      Swal.fire({
        title: "Select a product first",
        icon: "error",
        position: "center",
        timer: 2500,
        showConfirmButton: false,
        timerProgressBar: true,
      });
      return;
    }
    if (chosenProduct) {
      setInput({
        productId: chosenProduct.id,
        title: chosenProduct.title,
        number: chosenProduct.number,
        brand: chosenProduct.Brand.name,
        category: chosenProduct.Category.name,
        license: chosenProduct.License.name,
        image: chosenProduct.image,
        price: chosenProduct.price,
        stock: chosenProduct.stock,
      });
    } else {
      Swal.fire({
        title: "The product doesn't exist",
        icon: "error",
        position: "center",
        timer: 2500,
        showConfirmButton: false,
        timerProgressBar: true,
      });
      return;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let validation = Object.values(error).filter(e => e !== "")
    if (typeof input.stock === "string") {
      let number = parseInt(input.stock);
      input.stock = number;
    }
    if (
      !input.title ||
      !input.number ||
      !input.brand ||
      !input.category ||
      !input.license ||
      !input.image ||
      input.price < 0.99 ||
      input.price > 999.99 ||
      input.stock < 1 ||
      input.stock > 100 ||
      validation.length > 0
    ) {
      Swal.fire({
        title: "Some fields are wrong or empty",
        icon: "error",
        position: "center",
        timer: 2500,
        showConfirmButton: false,
        timerProgressBar: true,
      });
      return;
    } else {
      dispatch(modifyFunko(input));
      Swal.fire({
        title: `${input.title} Successfully Modified`,
        icon: "success",
        position: "center",
        timer: 1500,
        showConfirmButton: false,
        timerProgressBar: true,
      });
      setInput({
        productId: 0,
        title: "",
        number: "",
        image: "",
        price: 0,
        stock: 0,
        category: "",
        brand: "",
        license: "",
        formFactor: "",
        description: ""
      });
      dispatch(getFunkos())
      setProduct({
        name: ""
      })
    }
  };

  const handleDelete = (e) => {
    e.preventDefault();
    let chosenProduct = allFunkos?.find((e) => e.title === product.name);
    if (chosenProduct) {
      Swal.fire({
        title: `Are you sure you want to delete ${chosenProduct.title}?`,
        icon: "warning",
        position: "center",
        showConfirmButton: true,
        showDenyButton: true,
        confirmButtonText: "Delete",
        denyButtonText: "Cancel",
      }).then((result) => {
        if (result.isConfirmed) {
          dispatch(deleteFunko(chosenProduct.id));
          setInput({
            productId: 0,
            title: "",
            number: "",
            image: "",
            price: 0,
            stock: 0,
            category: "",
            brand: "",
            license: "",
            formFactor: "",
            description: ""
          });
          dispatch(getFunkos())
          setProduct({
            name: ""
          })
        } else if (result.isDenied) {
          return;
        }
      });
    } else {
      Swal.fire({
        title: "Choose a product to delete!",
        icon: "error",
        position: "center",
        timer: 2500,
        showConfirmButton: false,
        timerProgressBar: true,
      });
    }
  };

  return (
    <div className={styles.all}>
      {/* <Nav /> */}
      <div className={styles.create}>
        <div className={styles.gridLeft}>
          <img
            src={input.image || defaultImage}
            alt="New_Funko"
            className={styles.img}
          />
        </div>
        <div className={styles.gridRight}>
            <form onSubmit={handleProduct}>
          <div className={styles.formTop}>
              <input
                type="text"
                name="name"
                list="products"
                placeholder="Article..."
                value={product.name}
                className={error.name ? styles.error : styles.input}
                autoFocus
                onChange={handleChangeProduct}
              />
              <datalist id="products">
                {allFunkos?.map((c) => {
                  return (
                    <option key={c.id} value={c.title}>
                      {c.title}
                    </option>
                  );
                })}
              </datalist>
              <p>{error.name && <b>{error.name}</b>}</p>
              <button type="submit" className={styles.sBtn}>
                <BiSearchAlt />
              </button>
          </div>
            </form>
          <form onSubmit={handleSubmit}>
            <div className={styles.formMiddle}>
              <div className={styles.formLeft}>
                <input
                  type="text"
                  name="title"
                  placeholder="Title..."
                  value={input.title}
                  className={error.title ? styles.wrong : styles.input}
                  onChange={handleChange}
                />
                <p className={styles.errors}>
                  {error.title && <b>{error.title}</b>}
                </p>

                <input
                  type="text"
                  name="brand"
                  list="brands"
                  placeholder="Brand..."
                  value={input.brand}
                  className={error.brand ? styles.wrong : styles.input}
                  onChange={handleChange}
                />
                <datalist id="brands">
                  {allBrands?.map((c) => {
                    return (
                      <option key={c.id}>
                        {c.name}
                      </option>
                    );
                  })}
                </datalist>
                <p className={styles.errors}>
                  {error.brand && <b>{error.brand}</b>}
                </p>

                <input
                  type="text"
                  name="category"
                  list="categories"
                  placeholder="Category..."
                  value={input.category}
                  className={error.category ? styles.wrong : styles.input}
                  onChange={handleChange}
                />
                <datalist id="categories">
                  {allCategories?.map((c) => {
                    return (
                      <option key={c.id}>
                        {c.name}
                      </option>
                    );
                  })}
                </datalist>
                <p className={styles.errors}>
                  {error.category && <b>{error.category}</b>}
                </p>

                <input
                  type="text"
                  name="license"
                  list="licenses"
                  placeholder="License..."
                  value={input.license}
                  className={error.license ? styles.wrong : styles.input}
                  onChange={handleChange}
                />
                <datalist id="licenses">
                  {allLicenses?.map((l) => {
                    return (
                      <option key={l.id}>
                        {l.name}
                      </option>
                    );
                  })}
                </datalist>
                <p className={styles.errors}>
                  {error.license && <b>{error.license}</b>}
                </p>
              </div>

              <div className={styles.formRight}>
                <input
                  type="number"
                  name="number"
                  placeholder="Number..."
                  min="0"
                  value={input.number}
                  className={error.number ? styles.wrong : styles.input}
                  onChange={handleChange}
                />
                <p className={styles.errors}>
                  {error.number && <b>{error.number}</b>}
                </p>

                <input
                  type="text"
                  name="image"
                  placeholder="Image URL..."
                  value={input.image}
                  className={error.image ? styles.wrong : styles.input}
                  onChange={handleChange}
                />
                <p className={styles.errors}>
                  {error.image && <b>{error.image}</b>}
                </p>

                <input
                  type="number"
                  name="price"
                  placeholder="Price..."
                  step=".01"
                  min="0"
                  value={input.price === 0 ? "" : input.price}
                  className={error.price ? styles.wrong : styles.input}
                  onChange={handleChange}
                />
                <p className={styles.errors}>
                  {error.price === 0 ? "" : error.price && <b>{error.price}</b>}
                </p>

                <input
                  type="number"
                  name="stock"
                  placeholder="Stock..."
                  min="0"
                  value={input.stock === 0 ? "" : input.stock}
                  className={error.stock ? styles.wrong : styles.input}
                  onChange={handleChange}
                />
                <p className={styles.errors}>
                  {error.stock === 0 ? "" : error.stock && <b>{error.stock}</b>}
                </p>
              </div>
            </div>
            <div className={styles.formBottom}>
              <button type="submit" className={styles.modifyBtn}>
                Modify
              </button>
          <button
            type="button"
            onClick={handleDelete}
            className={styles.deleteBtn}
          >
            Delete
          </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ModifyFunko;
