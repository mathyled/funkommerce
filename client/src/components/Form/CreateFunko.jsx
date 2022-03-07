import React, { useEffect, useState } from "react";
import styles from "./CreateFunko.module.css";
import { useSelector, useDispatch } from "react-redux";
import { validator } from "../../helpers/validatorsForm"
import { getFunkos } from "../../redux/actions/actions";
import Input from "../componentsReusable/Input";

const CreateFunko = () => {
  //let allFunkos = useSelector((state) => state.funkos);
  let dispatch = useDispatch();

  const [input, setInput] = useState({
    title: "",
    number: "",
    brand: "",
    category: "",
    features: [],
    formFactor: "",
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
    features: [],
    formFactor: "",
    license: "",
    image: "",
    price: 0,
    stock: 0,
  });

  useEffect(() => {
    dispatch(getFunkos());
  }, []);

  const handleChange = (event) => {
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    });
    setError(validator(error, event.target))
  };

  const handleDelete = (event) => {
    event.preventDefault();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    //dispatch(createFunko(input));
    setInput({
      title: "",
      number: "",
      brand: "",
      category: "",
      features: [],
      formFactor: "",
      license: "",
      image: "",
      price: 0,
      stock: 0,
    });
  };

  return (
      <div>
          <h1>Add a New Product</h1>
          <form>
              <span>Title</span>
              <Input type="text" name="title" placeholder="Title..." value={input.title} onChange={handleChange}/>
              {error.title && <b>{error.title}</b>}
              <span>Number</span>
              <Input type="number" name="number" placeholder="Number..." value={input.number} onChange={handleChange}/>
              {error.number && <b>{error.number}</b>}
              <span>Brand</span>
              <Input type="text" name="brand" placeholder="Brand..." value={input.brand} onChange={handleChange}/>
              {error.brand && <b>{error.brand}</b>}
              <span>Category</span>
              <Input type="text" name="category" placeholder="Category..." value={input.category} onChange={handleChange}/>
              {error.category && <b>{error.category}</b>}
              <span>Type of Product</span>
              <Input type="text" name="formFactor" placeholder="Type of Product..." value={input.formFactor} onChange={handleChange}/>
              {error.formFactor && <b>{error.formFactor}</b>}
              <span>License</span>
              <Input type="text" name="license" placeholder="License..." value={input.license} onChange={handleChange}/>
              {error.license && <b>{error.license}</b>}
              <span>Image</span>
              <Input type="text" name="image" placeholder="Image..." value={input.image} onChange={handleChange}/>
              {error.image && <b>{error.image}</b>}
              <span>Price $</span>
              <Input type="number" name="price" step=".01" value={input.price} onChange={handleChange}/>
              {error.price === 0 ? "" : error.price && <b>{error.price}</b>}
              <span>Stock</span>
              <Input type="number" name="stock" value={input.stock} onChange={handleChange}/>
              {error.stock === 0 ? "" : error.stock && <b>{error.stock}</b>}
          </form>
      </div>
  )
};

export default CreateFunko;
