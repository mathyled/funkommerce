import React, { useState } from "react";
import FormReview from "../FormReview/FormReview";
import styles from "./ReviewRoot.module.css"
const ReviewRoot = () => {

    const [visible, setVisible] = useState(false);
    return (
        <div className={styles.root}>

            <button
                className={styles.btn}
                onClick={() => setVisible(v => !v)}
            >
                <span>Leave a Review</span>
            </button>
            <div className={styles.container} >
                {visible ?
                    <main className={styles.main} >

                        <div className={styles.root} >

                            <div className={styles.card}>

                                <div className={styles.divHeader}>funko</div>
                                <FormReview />
                                <div className={styles.divClose}>
                                    <button onClick={() => setVisible(v => !v)} className={styles.btnClose}>Close</button>
                                </div>
                            </div>

                        </div>
                    </main>

                    : ""}

            </div>

        </div>
    )
};

export default ReviewRoot;