import React, { useEffect, useState } from "react";
import styles from "./CreateFunko.module.css";
import { useSelector, useDispatch } from "react-redux";
import { validator } from "../../helpers/validatorsForm";
import {
  getBrand,
  getCategories,
  getLicense,
  createFunko,
  createLicense,
  createBrand,
  createCategory
} from "../../redux/actions/actions";
import Swal from "sweetalert2";
import Nav from "../Nav/Nav";

const CreateFunko = () => {
  let allCategories = useSelector((state) => state.categories);
  let allLicenses = useSelector((state) => state.license);
  let allBrands = useSelector((state) => state.brand);
  let dispatch = useDispatch();
  let defaultImage =
    "https://cdn.shopify.com/s/files/1/0154/8877/8288/products/1-Mystery-funko-pop-Brand-new-unopened-ones_1024x1024.jpg?v=1577791303";

  let searchLicense = allLicenses?.filter(l => l.name === input.license)
  let searchBrand = allBrands?.filter(l => l.name === input.brand)
  let searchCategory = allCategories?.filter(l => l.name === input.category)

  const [input, setInput] = useState({
    title: "",
    number: "",
    brand: "",
    category: "",
    license: "",
    image: "",
    price: 0,
    stock: 0,
  });

  const [error, setError] = useState({});

  useEffect(() => {
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
      Object.entries(error).length === 0
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
    }
    if(!searchBrand?.length) {
      Swal.fire({
        title: `The brand ${input.brand} doesn't exist and will be created`,
        icon: "warning",
        position: "center",
        showConfirmButton: true,
        showCancelButton: true
      });
      dispatch(createBrand(input.brand))
    }
    if(!searchCategory?.length) {
      Swal.fire({
        title: `The category ${input.category} doesn't exist and will be created`,
        icon: "warning",
        position: "center",
        showConfirmButton: true,
        showCancelButton: true
      });
      dispatch(createCategory(input.category))
    }
    if(!searchLicense?.length) {
      Swal.fire({
        title: `The license ${input.license} doesn't exist and will be created`,
        icon: "warning",
        position: "center",
        showConfirmButton: true,
        showCancelButton: true
      });
      dispatch(createLicense(input.license))
    }
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
        brand: "",
        category: "",
        license: "",
        image: "",
        price: 0,
        stock: 0,
      });
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
              />
              <p className={styles.errors}>{error.title && <b>{error.title}</b>}</p>

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
              <p className={styles.errors}>{error.brand && <b>{error.brand}</b>}</p>

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
