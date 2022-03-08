import React, { useState } from "react"
import { useEffect } from "react";
import { useDispatch } from "react-redux"
import { searchFunkos } from "../../redux/actions/actions";
import style from "./Searchbar.module.css"
//import {BiSearchAlt} from "react-icons/bi"
//Cuando ya este la base de datos hay que cambiar las actions a busqueda por query y borrarle los arrays al reducer del search

const Searchbar = () => {
    const dispatch = useDispatch();
    let [input, setInput] = useState("");

    const handleChange = (e) => {
        e.preventDefault();
        setInput(e.target.value)
        dispatch(searchFunkos(input));
        
    };

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     dispatch(searchFunkos(input));
    //     e.target.reset();
    // };

    return(
        <div>
            <form>
                <input
                className={style.search}
                type="text"
                placeholder="What are you looking for?"
                value={input}
                onChange={handleChange}
                />
                {/* <button type="submit">
                  <BiSearchAlt />
                </button> */}
            </form>
        </div>
    );
};

export default Searchbar;
