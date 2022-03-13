import React from "react";
import styles from "../Paged/Paged.module.css";
import { useEffect } from "react";

const Paged = ({ funkoPerPage, totalFunko, paginate }) => {
  const numberPage = [];

  for (let i = 1; i <= Math.ceil(totalFunko.length / funkoPerPage); i++) {
    numberPage.push(i);
  }

  const scroll = () => {
    window.scrollTo(0, 0);
  };
  
  return (
    <nav className={styles.pag}>
      {" "}
      {numberPage.map((num) => (
        <div key={num}>
          <button
            className={styles.btn}
            onClick={(e) => {
              paginate(e, num);
              scroll();
            }}
          >
            {num}
          </button>
        </div>
      ))}
    </nav>
  );
};

export default Paged;
