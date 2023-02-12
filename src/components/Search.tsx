import { useState } from 'react';
import axios from 'axios';
import Button from './Button'
import {
  StyledLabel,
  StyledInput,
  SearchWrapper,
} from '../AppStyles';

// @ts-ignore
const Search = ({ setProductsData }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const getSearchProducts = () => {
    const searchProductsUrl = `https://dummyjson.com/products/search?q=${searchTerm}`;
    const getData = async() => {
      const res = await axios.get(searchProductsUrl);
      const searchProducts = res.data.products
      setProductsData(searchProducts)
    }
    getData();
  }

  return (
    <SearchWrapper data-test="search-section">

      <StyledLabel data-test="search-label" htmlFor="search-products">Search for a product:</StyledLabel>

      <StyledInput
        type="text"
        name="search-products"
        id="search-products"
        placeholder="Search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      >
      </StyledInput>
      
      <Button dataTest="search-button" onClickFunction={getSearchProducts}>search</Button>
      
    </SearchWrapper>
  )
}
export default Search
