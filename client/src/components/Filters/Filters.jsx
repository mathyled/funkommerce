import React from "react";
import styles from "./Filters.module.css";
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

  const categories = useSelector((state) => state.categories);
  const license = useSelector((state) => state.license);
  const brand = useSelector((state) => state.brand);

  const handleCategories = async (e) => {
    e.preventDefault();

    dispatch(filterCategories(e.target.value));
  };

  const handleBrand = async (e) => {
    e.preventDefault();

    dispatch(filterBrands(e.target.value));
  };

  const handleLicense = async (e) => {
    e.preventDefault();

    dispatch(filterLicense(e.target.value));
  };

  function handleClick(e) {
    e.preventDefault();
    dispatch(getFunkos());
  }

  return (
    <div className={styles.filters}>
      <p className={styles.filterText}>Filter by: </p>

      <select onChange={(e) => handleCategories(e)}>
        <option value="Categories" hidden>
          {" "}
          Categories{" "}
        </option>
        {categories?.map((e) => {
          return (
            <option key={e.id} value={e.name}>
              {e.name}
            </option>
          );
        })}
      </select>

      <select onChange={(e) => handleLicense(e)}>
        <option value="License" hidden>
          {" "}
          License{" "}
        </option>
        {license?.map((e) => {
          return (
            <option key={e.id} value={e.name}>
              {e.name}
            </option>
          );
        })}
      </select>

      <select onChange={(e) => handleBrand(e)}>
        <option value="Brand" hidden>
          {" "}
          Brand{" "}
        </option>
        {brand?.map((e) => {
          return (
            <option key={e.id} value={e.name}>
              {e.name}
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