import { useState, useEffect } from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

import {
  Select,
} from '../AppStyles';

// @ts-ignore
const SelectCategory = ({ setProductsData }) => {
  const [categoryArray, setCategoryArray] = useState<string[]>([]);
  const [categoryChoice, setCategoryChoice] = useState('');

  useEffect(() => {
    const categoryUrl = 'https://dummyjson.com/products/categories';
    const getData = async () => {
      const res = await axios.get(categoryUrl);
      const categoryData = res.data;
      setCategoryArray(categoryData)
    }
    getData();
  }, []);

  const getCategoryProducts = () => {
    const categoryProductsUrl = `https://dummyjson.com/products/category/${categoryChoice}`;
    const getData = async() => {
      const res = await axios.get(categoryProductsUrl);
      const categoryProducts = res.data.products
      setProductsData(categoryProducts)
    }
    getData(); 
  }


  return (
    <>
      <label htmlFor='category-select'>choose a category:</label>
      <Select
        name="category-select"
        id="category-select"
        value={categoryChoice}
        onChange={(e) => setCategoryChoice(e.target.value)}
      >
        
        {categoryArray
          && categoryArray.map(item => <option key={uuidv4()} value={item}>{item}</option>)}
      </Select>
      <button onClick={getCategoryProducts}>view category products:</button>
    </>
  )
}

export default SelectCategory 

