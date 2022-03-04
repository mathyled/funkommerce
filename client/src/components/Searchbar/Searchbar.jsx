import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { searchFunkos } from "../../redux/actions/actions";
import s from "./Searchbar.module.css"

//Cuando ya este la base de datos hay que cambiar las actions a busqueda por query y borrarle los arrays al reducer del search

const Searchbar = () => {
    const dispatch = useDispatch();
    let [input, setInput] = useState("");

    const handleChange = (e) => {
        e.preventDefault();
        setInput(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(searchFunkos(input));
        e.target.reset();
    };

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input
                type="text"
                placeholder="What are you looking for?"
                value={input}
                onChange={handleChange}
                />
                <button type="submit">
                    Search
                </button>
            </form>
        </div>
    );
};

export default Searchbar;
