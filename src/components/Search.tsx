import { useState } from 'react';
import axios from 'axios';
import {
  StyledButton,
  StyledLabel,
  StyledInput,
  SearchWrapper,
  SearchContainer
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
    <SearchContainer>
      <SearchWrapper>
        <StyledLabel htmlFor="search-products">Search for a product:</StyledLabel>
        <StyledInput
        type="text"
        name="search-products"
        id="search-products"
        placeholder="Search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        >
        </StyledInput>
      </SearchWrapper>
      
      <StyledButton onClick={getSearchProducts}>search</StyledButton>
      
    </SearchContainer>
  )
}
export default Search