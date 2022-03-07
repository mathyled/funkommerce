import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterCategories, filterBrands, filterLicense, getFunkos } from '../../redux/actions/actions';


const Filters = () =>{
    const dispatch = useDispatch();
    const funkos = useSelector((state) => state.funkos);

    const categories = funkos?.map((e) => {
        const nombre = e.attributes.category
        return nombre
    })
    const funkoCategory = [... new Set(categories)]

    const brands = funkos?.map((e) => {
        const nombre = e.attributes.brand
        return nombre
    })
    const funkoBrands = [... new Set(brands)]

    const license = funkos?.map((e) => {
        const nombre = e.attributes.license
        return nombre
    })
    const funkoLicense = [... new Set(license)]

    const handleCategories = async (e) => {
        e.preventDefault();
        switch (e.target.value) {
            // eslint-disable-next-line no-lone-blocks
            case 'ALL': {
            dispatch(getFunkos())
            }
                break
            default: dispatch(filterCategories(e.target.value))
        }
    }

    const handleBrand = async (e) => {
        e.preventDefault();
        switch (e.target.value) {
            // eslint-disable-next-line no-lone-blocks
            case 'ALL': {
            dispatch(getFunkos())
            }
                break
            default: dispatch(filterBrands(e.target.value))
        }
    }
    
    const handleLicense = async (e) => {
        e.preventDefault();
        switch (e.target.value) {
            // eslint-disable-next-line no-lone-blocks
            case 'ALL': {
            dispatch(getFunkos())
            }
                break
            default: dispatch(filterLicense(e.target.value))
        }
    }

    function handleClick(e){
        e.preventDefault()
        dispatch(getFunkos())
    }


return (
    <div>
        <select onChange = {(e) => handleCategories(e)}>
            <option value="ALL"> Categories</option>
        {funkoCategory?.map((e) => {
            return (
                <option key={e} value ={e}>{e}</option>
            )
        })}
        </select>

        <select onChange = {(e) => handleBrand(e)}>
            <option value="ALL"> Brands </option>
        {funkoBrands?.map((e) => {
            return (
                <option key={e} value ={e}>{e}</option>
            )
        })}
        </select>
        
        <select onChange = {(e) => handleLicense(e)}>
            <option value="ALL"> License </option>
        {funkoLicense?.map((e) => {
            return (
                <option key={e} value ={e}>{e}</option>
            )
        })}      
        </select>
        <button onClick={(e) => {handleClick(e)} }>All Funkos!</button>
    </div>
)
}

export default Filters


        


  