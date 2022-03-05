import React, { useEffect, useState } from "react";
import s from "./CreateFunko.module.css";
import { useSelector, useDispatch } from "react-redux"
import { getFunkos } from "../../redux/actions";

const CreateFunko = () => {
    let allFunkos = useSelector(state => state.funkos)
    let dispatch = useDispatch();

    const [input, setInput] = useState({

    })

    useEffect(() => {
        dispatch(getFunkos)
    }, []);

    const handleChange = e => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }
}