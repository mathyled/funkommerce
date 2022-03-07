import React from "react";
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
  // const brand = useSelector((state) => state.brand);
  // const categories = useSelector((state) => state.categories);
  // const license = useSelector((state) => state.license);
  const funkosBackUp = useSelector((state) => state.funkosBackUp)
  

  // const categories = funkos?.map((e) => {
  //   const nombre = e.category;
  //   return nombre;
  // });
  // const funkoCategory = [...new Set(categories)];

  // const brands = funkos?.map((e) => {
  //   const nombre = e.brand;
  //   return nombre;
  // });
  // const funkoBrands = [...new Set(brands)];

  // const license = funkos?.map((e) => {
  //   const nombre = e.license;
  //   return nombre;
  // });
  // const funkoLicense = [...new Set(license)];

  //useEffect(() => {dispatch}, [])


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
  // let arr = [];
  // let f = funkos
  // f.map((e) => (arr.includes(e.category) ? "" : arr.push(e.category)));
  // let arr2 = [];
  // f.map((e) => (arr2.includes(e.license) ? "" : arr2.push(e.license)));
  // let arr3 = [];
  // f.map((e) => (arr3.includes(e.brand) ? "" : arr3.push(e.brand)));
  // console.log(arr3)
  return (
    <div>
      <select onChange={(e) => handleCategories(e)}>
      <option value="Categories" hidden> Categories </option>
        {funkosBackUp?.map((e) => {
          return (
            <option key={e.id} value={e.category}>
              {e.category}
            </option>
          );
        })}
      </select>

      <select onChange={(e) => handleBrand(e)}>
        <option value="ALL" hidden> Brands </option>
        {funkosBackUp?.map((e) => {
          return (
            <option key={e.id} value={e.brand}>
              {e.brand}
            </option>
          );
        })}
      </select>

      <select onChange={(e) => handleLicense(e)}>
        <option value="ALL" hidden> License </option>
        {funkosBackUp?.map((e) => {
          return (
            <option key={e.id} value={e.license}>
              {e.license}
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
