import { useState, useEffect } from 'react';
import { IProduct } from '../interfaces';
import axios from 'axios';
import {
  Card,
  ProductsWrapper
} from '../AppStyles';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<IProduct[]>();

  const getSearchProducts = () => {
    const searchProductsUrl = `https://dummyjson.com/products/search?q=${searchTerm}`;
    const getData = async() => {
      const res = await axios.get(searchProductsUrl);
      const searchProducts = res.data.products
      setSearchResults(searchProducts)
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

      <ProductsWrapper> 
        {searchResults 
          && searchResults.map(item => 
            <Card key={item.title}>
            <h4>Category: {item.category}</h4> 
            <h4>Title: {item.title}</h4>
            <h4>Description: {item.description}</h4>
            <h4>Price: {item.price}</h4>
            <h4>Stock: {item.stock}</h4>
            </Card>
           )
        } 
      </ProductsWrapper> 
    </>
  )
}
export default Search