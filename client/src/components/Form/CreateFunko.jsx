import React, { useEffect, useState } from "react";
import styles from "./CreateFunko.module.css";
import { useSelector, useDispatch } from "react-redux";
import { validator } from "../../helpers/validatorsForm";
import {
  getBrand,
  getCategories,
  getLicense,
  createFunko,
  getFunkos
} from "../../redux/actions/actions";
import Swal from "sweetalert2";
import Nav from "../Nav/Nav";

const CreateFunko = () => {
  let allFunkos = useSelector((state) => state.funkos)
  let allCategories = useSelector((state) => state.categories);
  let allLicenses = useSelector((state) => state.license);
  let allBrands = useSelector((state) => state.brand);
  let dispatch = useDispatch();
  let defaultImage =
    "https://cdn.shopify.com/s/files/1/0154/8877/8288/products/1-Mystery-funko-pop-Brand-new-unopened-ones_1024x1024.jpg?v=1577791303";

  const [input, setInput] = useState({
    title: "",
    number: "",
    image: "",
    price: 0,
    stock: 0,
    category: "",
    brand: "",
    license: "",
    formFactor: "",
    description: "",
  });

  const [error, setError] = useState({});

  useEffect(() => {
    dispatch(getFunkos());
    dispatch(getCategories());
    dispatch(getLicense());
    dispatch(getBrand());
  }, []);

  const handleChange = (event) => {
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    });
    setError(validator(error, event.target));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let validation = Object.values(error).filter(e => e !== "")
    let searchName = allFunkos.find((l) => l.title === input.title)
    let searchLicense = allLicenses?.find((l) => l.name === input.license);
    let searchBrand = allBrands?.find((l) => l.name === input.brand);
    let searchCategory = allCategories?.find((l) => l.name === input.category);
    console.log(searchBrand)
    console.log(searchCategory)
    console.log(searchLicense)
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
        timer: 3000,
        showConfirmButton: false,
        timerProgressBar: true,
      });
      return;
    }
    if (searchName?.title) {
      Swal.fire({
        title: "The name is already taken",
        icon: "error",
        position: "center",
        timer: 3000,
        showConfirmButton: false,
        timerProgressBar: true,
      });
      return;
    }
    if (!searchBrand?.name) {
      Swal.fire({
        title: `The brand you selected doesn't exist and will be created`,
        icon: "warning",
        position: "center",
        showConfirmButton: true,
        showDenyButton: true,
        denyButtonText: "Cancel",
      }).then((result) => {
        if (result.isConfirmed) {
          dispatch(createFunko(input));
          Swal.fire({
            title: `${input.title} Successfully Created`,
            icon: "success",
            position: "center",
            timer: 1500,
            showConfirmButton: false,
            timerProgressBar: true,
          });
          setInput({
            title: "",
            number: "",
            image: "",
            price: 0,
            stock: 0,
            category: "",
            brand: "",
            license: "",
            formFactor: "",
            description: "",
          });
        } else if (result.isDenied) {
          return;
        }
      });
    }
    if (!searchCategory?.name) {
      Swal.fire({
        title: `The category you selected doesn't exist and will be created`,
        icon: "warning",
        position: "center",
        showConfirmButton: true,
        showDenyButton: true,
        denyButtonText: "Cancel",
      }).then((result) => {
        if (result.isConfirmed) {
          dispatch(createFunko(input));
          Swal.fire({
            title: `${input.title} Successfully Created`,
            icon: "success",
            position: "center",
            timer: 1500,
            showConfirmButton: false,
            timerProgressBar: true,
          });
          setInput({
            title: "",
            number: "",
            image: "",
            price: 0,
            stock: 0,
            category: "",
            brand: "",
            license: "",
            formFactor: "",
            description: "",
          });
        } else if (result.isDenied) {
          return;
        }
      });
    }
    if (!searchLicense?.name) {
      Swal.fire({
        title: `The license you selected doesn't exist and will be created`,
        icon: "warning",
        position: "center",
        showConfirmButton: true,
        showDenyButton: true,
        denyButtonText: "Cancel",
      }).then((result) => {
        if (result.isConfirmed) {
          dispatch(createFunko(input));
          Swal.fire({
            title: `${input.title} Successfully Created`,
            icon: "success",
            position: "center",
            timer: 1500,
            showConfirmButton: false,
            timerProgressBar: true,
          });
          setInput({
            title: "",
            number: "",
            image: "",
            price: 0,
            stock: 0,
            category: "",
            brand: "",
            license: "",
            formFactor: "",
            description: "",
          });
        } else if (result.isDenied) {
          return;
        }
      });
    }
    if (searchBrand.name && searchCategory.name && searchLicense.name) {
      dispatch(createFunko(input));
      Swal.fire({
        title: `${input.title} Successfully Created`,
        icon: "success",
        position: "center",
        timer: 1500,
        showConfirmButton: false,
        timerProgressBar: true,
      });
      setInput({
        title: "",
        number: "",
        image: "",
        price: 0,
        stock: 0,
        category: "",
        brand: "",
        license: "",
        formFactor: "",
        description: "",
      });
    }
  };

  return (
    <div className={styles.all}>
      <Nav />
      <div className={styles.create}>
        <div className={styles.gridLeft}>
          <img
            src={input.image || defaultImage}
            alt="New_Funko"
            className={styles.img}
          />
        </div>
        <form className={styles.gridRight} onSubmit={handleSubmit}>
          <div className={styles.formTop}>
            <h1>{input.title ? input.title : "New Product"}</h1>
          </div>
          <div className={styles.formMiddle}>
            <div className={styles.formLeft}>
              <input
                type="text"
                name="title"
                placeholder="Title..."
                value={input.title}
                className={error.title ? styles.wrong : styles.input}
                onChange={handleChange}
                autoFocus
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
                    <option key={c.id} value={c.name}>
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
                    <option key={c.id} value={c.name}>
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
                    <option key={l.id} value={l.name}>
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
                step="1"
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
                step="1"
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
            <button type="submit" className={styles.createBtn}>
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateFunko;
