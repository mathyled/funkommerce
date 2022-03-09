import React from "react"

const ImageCredit = ({styles,naranja,master,american,visa})=>{
    return(
        <div className={styles["ui-pdp-payment-icon"]}>

        <div className={styles["ui-pdp-payment-icon__size"]}>
          <img src={naranja} width="20px" height="25px" />
        </div>

        <div className={styles["ui-pdp-payment-icon__size"]}>
          <img src={master} width="24px" height="24px" />
        </div>

        <div className={styles["ui-pdp-payment-icon__size"]}>
          <img src={american} width="24px" height="24px" />
        </div>

        <div className={styles["ui-pdp-payment-icon__size"]}>
          <img src={visa} width="45px" height="14px" />
        </div>

      </div>
    )
};

export default ImageCredit;
