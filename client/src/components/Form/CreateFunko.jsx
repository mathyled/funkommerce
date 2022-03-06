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
          <form>
              <span>Title</span>
              <Input type="text" name="title" placeholder="Title..." value={input.title} onChange={handleChange}/>
              {error.title && <b>{error.title}</b>}
          </form>
      </div>
  )
};

export default CreateFunko;
