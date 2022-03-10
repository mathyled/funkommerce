import React, { useState } from "react"
import { useEffect } from "react";
import { useDispatch } from "react-redux"
import { searchFunkos } from "../../redux/actions/actions";
import style from "./Searchbar.module.css"

const Searchbar = () => {
    const dispatch = useDispatch();
    let [input, setInput] = useState("");

    const handleChange = (e) => {
        e.preventDefault();

        const { value } = e.target;
        setInput(value);
        if (value.length > 2) {
            dispatch(searchFunkos(input));
        }

    };

   

    return (
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
