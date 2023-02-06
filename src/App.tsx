import { useState, useEffect } from 'react';
import axios from 'axios';
import { ProductProps } from './interfaces';
import {
  Container,
  Card,
  Select,
  ProductsWrapper
} from './AppStyles';


function App() {
  const [productsData, setProductsData] = useState<ProductProps[]>([]);
  const [order, setOrder] = useState("alphabetically");

  useEffect(() => {
    
    const productsUrl = 'https://dummyjson.com/products';

    const getData = async() => {
      const res = await axios.get(productsUrl);
      const allProducts = res.data.products
      const alphaProducts = allProducts.sort(( a: ProductProps, b: ProductProps ) => a.title.localeCompare(b.title))
      setProductsData(allProducts)
    }

    getData();
  
  },[]);

  console.log(order);

  
  return (
    <Container>
      <Select 
        value={order}
        onChange={(e) => setOrder(e.target.value)}
      >
        <option value="category">category</option>
        <option value="title">title</option>
        <option value="description">description</option>
        <option value="price">price</option>
        <option value="stock">stock</option>
        <option value="alphabetically">alphabetically</option>
      </Select>

      <ProductsWrapper> 
        {productsData 
          && productsData.map(item => 
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
    </Container>
  );
}

export default App;
