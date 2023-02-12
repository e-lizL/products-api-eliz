import { useState, useEffect } from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import Button from './Button'
import {
  Select,
  StyledLabel,
  CategoryWrapper
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
    <CategoryWrapper data-test="choose-category-section">
      <StyledLabel data-test="choose-category-label" htmlFor='category-select'>Choose a product by category:</StyledLabel>
     <Select
        name="category-select"
        id="category-select"
        value={categoryChoice}
        onChange={(e) => setCategoryChoice(e.target.value)}
      >
        
        {categoryArray
          && categoryArray.map(item => <option key={uuidv4()} value={item}>{item}</option>)}
     </Select>
      
      <Button dataTest="category-button" onClickFunction={getCategoryProducts}>view products</Button>
    </CategoryWrapper>
  )
}

export default SelectCategory 

