import React, { useEffect, useState } from "react";
import styles from "./CreateFunko.module.css";
import { useSelector, useDispatch } from "react-redux";
import { validator } from "../../helpers/validatorsForm";
import {
  getBrand,
  getCategories,
  getLicense,
} from "../../redux/actions/actions";
import Input from "../componentsReusable/Input";
import Nav from "../Nav/Nav";

const CreateFunko = () => {
  let allCategories = useSelector((state) => state.categories);
  let allLicenses = useSelector((state) => state.license);
  let allBrands = useSelector((state) => state.brand);
  let dispatch = useDispatch();
  let defaultImage =
    "https://cdn.shopify.com/s/files/1/0154/8877/8288/products/1-Mystery-funko-pop-Brand-new-unopened-ones_1024x1024.jpg?v=1577791303";

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

  const [error, setError] = useState({
    title: "",
    number: "",
    brand: "",
    category: "",
    license: "",
    image: "",
    price: 0,
    stock: 0,
  });

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

  const handleDelete = (event) => {
    event.preventDefault();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if(!input.brand || !input.category || !input.license) {
    //dispatch(createFunko(input));
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
            <h1>Add New Product</h1>
          </div>
          <div className={styles.formMiddle}>
          <div className={styles.formLeft}>
            {/* <span>Title</span> */}
            <input
              type="text"
              name="title"
              placeholder="Title..."
              value={input.title}
              onChange={handleChange}
            />
            {error.title && <b>{error.title}</b>}

            {/* <span>Brand</span> */}
            <input
              type="text"
              name="brand"
              list="brands"
              placeholder="Brand..."
              value={input.brand}
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
            {error.brand && <b>{error.brand}</b>}

            {/* <span>Category</span> */}
            <input
              type="text"
              name="category"
              list="categories"
              placeholder="Category..."
              value={input.category}
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
            {error.category && <b>{error.category}</b>}

            {/* <span>License</span> */}
            <input
              type="text"
              name="license"
              list="licenses"
              placeholder="License..."
              value={input.license}
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
            {error.license && <b>{error.license}</b>}
          </div>

          <div className={styles.formRight}>
            {/*  */}
            <input
              type="number"
              name="number"
              placeholder="Number..."
              min="0"
              value={input.number}
              onChange={handleChange}
            />
            {error.number && <b>{error.number}</b>}

            {/* <span>Image</span> */}
            <input
              type="text"
              name="image"
              placeholder="Image URL..."
              value={input.image}
              onChange={handleChange}
            />
            {error.image && <b>{error.image}</b>}

            {/* <span>Price $</span> */}
            <input
              type="number"
              name="price"
              placeholder="Price..."
              step=".01"
              min="0"
              value={input.price === 0? "" : input.price}
              onChange={handleChange}
            />
            {error.price === 0 ? "" : error.price && <b>{error.price}</b>}

            {/* <span>Stock</span> */}
            <input
              type="number"
              name="stock"
              placeholder="Stock..."
              min="0"
              value={input.stock === 0 ? "" : input.stock}
              onChange={handleChange}
            />
            {error.stock === 0 ? "" : error.stock && <b>{error.stock}</b>}
          </div>
          </div>
          <div className={styles.formBottom}>
          <button type="submit">Create</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateFunko;
