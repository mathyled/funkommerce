import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styles from "../FormReview/FormReview.module.css";
import { getReviews } from "../../../redux/actions/actions"
const FormReview = () => {
    const [reviews, setReviews] = useState([]);
    const [form, setForm] = useState({ funko: "", review: "", id: crypto.randomUUID() })
    const dispatch = useDispatch();
    function handlerOnChange(e) {
        const { name, value } = e.target
        setForm({
            ...form,
            [name]: value
        })
    };

    function handlerSubmit(e) {
        e.preventDefault();
        setReviews([
            ...reviews,
            form
        ])
        dispatch(getReviews(reviews))
        setForm({ funko: "", review: "", id: crypto.randomUUID() })
    };

    return (
        <div >
            <form onSubmit={handlerSubmit} className={styles.form}>
                {/* <h2>Leave a Review</h2> */}
                <div className={styles.container} >
                    <div>
                        {/* <label>Funko</label> */}
                        <input
                            type="text"
                            placeholder="Funko name"
                            id="funko"
                            name="funko"
                            autoComplete="off"
                            value={form.funko}
                            onChange={handlerOnChange}
                        />

                    </div>
                    <div>
                        {/* <label>Review</label> */}
                        <textarea
                            placeholder="What do you think ?"
                            id="review"
                            name="review"
                            autoComplete="off"
                            value={form.review}
                            onChange={handlerOnChange}
                            className={styles.input}
                        />
                    </div>

                </div>

                <button type="submit" className={styles.submit}>Submit</button>
            </form>
        </div>
    )
};

export default FormReview;