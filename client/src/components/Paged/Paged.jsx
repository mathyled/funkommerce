import React from 'react';
import styles from '../Paged/Paged.module.css'

const Paged = ({funkoPerPage, totalFunko, paginate}) => {
    const numberPage = [];

    for(let i = 1; i <= Math.ceil(totalFunko.length / funkoPerPage); i++){
        numberPage.push(i)
    }
    return (
		<nav className={styles.pag}> {numberPage.map((num) => (
			<div key={num}>
			  <button className={styles.btn} onClick={(e) => paginate(e, num)}>{num}</button>
		   </div>))}
		  </nav>
	)
}


export default Paged