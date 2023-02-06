import { useState, useEffect } from 'react';
import axios from 'axios';

import {
  Container,
  Card
} from './AppStyles';

interface ProductProps {
  category: string;
  title: string;
  description: string;
  price: number;
  stock: number;
}

function App() {
  const [productsData, setProductsData] = useState<ProductProps[]>([]);

  useEffect(() => {
    
    const productsUrl = 'https://dummyjson.com/products';

    const getData = async() => {
      const res = await axios.get(productsUrl);
      const allProducts = res.data.products
      setProductsData(allProducts)
    }

    getData();
  
  },[]);

  console.log(productsData)

  
  return (
    <Container>
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
    </Container>
  );
}

export default App;
