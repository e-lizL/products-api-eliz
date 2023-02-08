import { useState, useEffect } from 'react';
import axios from 'axios';

import {
  Select,
} from '../AppStyles';

const SelectCategory = () => {
  const [categoryArray, setCategoryArray] = useState<string[]>([]);

  useEffect(() => {
    const categoryUrl = 'https://dummyjson.com/products/categories';
    const getData = async () => {
      const res = await axios.get(categoryUrl);
      const categoryData = res.data;
      setCategoryArray(categoryData)
    }
    getData();
  }, []);

 console.log(categoryArray);



  return (
    <>
    <label htmlFor='category-select'>choose a category:</label>
    <Select>
      name="category-select"
      id="category-select"
      {categoryArray
        && categoryArray.map(item => <option value={item}>{item}</option>)}
    </Select>
    </>
  )
}

export default SelectCategory 

