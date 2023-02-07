import { useState } from 'react';
import { ISearch } from '../interfaces'
import axios from 'axios';

const Search = ({ setProductsData }: ISearch) => {
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
    <>
      <input 
        type="text"
        name="search-products"
        id="search-products"
        placeholder="Search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      >
      </input>
      <button onClick={getSearchProducts}>search</button>
    </>
  )
}
export default Search