import React from "react";
import styles from "./Filters.module.css"
import { useDispatch, useSelector } from "react-redux";
import {
  filterCategories,
  filterBrands,
  filterLicense,
  getFunkos,
} from "../../redux/actions/actions";

const Filters = () => {
  const dispatch = useDispatch();
  const funkos = useSelector((state) => state.funkos);

  const categories = funkos?.map((e) => {
    const nombre = e.category;
    return nombre;
  });
  const funkoCategory = [...new Set(categories)];

  const brands = funkos?.map((e) => {
    const nombre = e.brand;
    return nombre;
  });
  const funkoBrands = [...new Set(brands)];

  const license = funkos?.map((e) => {
    const nombre = e.license;
    return nombre;
  });
  const funkoLicense = [...new Set(license)];

  const handleCategories = async (e) => {
    e.preventDefault();
    switch (e.target.value) {
      // eslint-disable-next-line no-lone-blocks
      case "ALL":
        {
          dispatch(getFunkos());
        }
        break;
      default:
        dispatch(filterCategories(e.target.value));
    }
  };

  const handleBrand = async (e) => {
    e.preventDefault();
    switch (e.target.value) {
      // eslint-disable-next-line no-lone-blocks
      case "ALL":
        {
          dispatch(getFunkos());
        }
        break;
      default:
        dispatch(filterBrands(e.target.value));
    }
  };

  const handleLicense = async (e) => {
    e.preventDefault();
    switch (e.target.value) {
      // eslint-disable-next-line no-lone-blocks
      case "ALL":
        {
          dispatch(getFunkos());
        }
        break;
      default:
        dispatch(filterLicense(e.target.value));
    }
  };

  function handleClick(e) {
    e.preventDefault();
    dispatch(getFunkos());
  }
  let arr = [];
  let f = funkos;
  f.map((e) => (arr.includes(e.category) ? "" : arr.push(e.category)));
  let arr2 = [];
  f.map((e) => (arr2.includes(e.license) ? "" : arr2.push(e.license)));
  let arr3 = [];
  f.map((e) => (arr3.includes(e.brand) ? "" : arr3.push(e.brand)));
  console.log(arr3);
  return (
    <div className={styles.filters}>
      <p className={styles.filterText}>Filter by: </p>
      <select onChange={(e) => handleCategories(e)}>
        <option value="Categories" hidden>
          {" "}
          Categories{" "}
        </option>
        {arr?.map((e) => {
          return (
            <option key={e} value={e}>
              {e}
            </option>
          );
        })}
      </select>

      <select onChange={(e) => handleBrand(e)}>
        <option value="ALL" hidden>
          {" "}
          Brands{" "}
        </option>
        {arr3?.map((e) => {
          return (
            <option key={e} value={e}>
              {e}
            </option>
          );
        })}
      </select>

      <select onChange={(e) => handleLicense(e)}>
        <option value="ALL" hidden>
          {" "}
          License{" "}
        </option>
        {arr2?.map((e) => {
          return (
            <option key={e} value={e}>
              {e}
            </option>
          );
        })}
      </select>
      <button
        onClick={(e) => {
          handleClick(e);
        }}
      >
        All Funkos!
      </button>
    </div>
  );
};

export default Filters;
