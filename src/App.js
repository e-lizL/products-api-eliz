import { useState, useEffect } from 'react';
import axios from 'axios';

import {
  Container
} from './AppStyles';

function App() {
  const [productsData, setProductsData] = useState();

  useEffect(() => {
    
    const productsUrl = 'https://dummyjson.com/products';

    const getData = async() => {
      const res = await axios.get(productsUrl);
      const allProducts = res.data.products
      setProductsData(allProducts)
    }

    getData();
  
  },[]);

  console.log(productsData.map(item => item.title));
  

 


  return (
    <Container>
      <h3>hello</h3>
    </Container>
  );
}

export default App;
