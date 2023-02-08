import { useState, useEffect } from 'react';
import axios from 'axios';
import { IProduct } from './interfaces';
import SelectOrder from './components/SelectOrder';
import Search from './components/Search';
import SelectCategory from './components/SelectCategory';
import {
  Container,
  Card,
  ProductsWrapper,
  SelectionsWrapper
} from './AppStyles';


function App() {
  const [productsData, setProductsData] = useState<IProduct[]>([]);
  const [order, setOrder] = useState("alphabetically");

  const sortProducts = (prop: string | number) => {
    return (a: IProduct, b: IProduct) => {
      if(prop === 'title' || prop === 'category' || prop === 'description')
      {
        return a[prop].localeCompare(b[prop]);
      }
      if(prop === 'price' || prop === 'stock') {
        return a[prop] - b[prop];
      }
    }
  }
  
  
  useEffect(() => {
    const productsUrl = 'https://dummyjson.com/products';
    const getData = async() => {
      const res = await axios.get(productsUrl);
      const allProducts = res.data.products.sort(sortProducts(order));
      
      setProductsData(allProducts)
    }
    getData(); 
  }, [order]);
  
  return (
    <Container>
      <SelectionsWrapper>
        <SelectOrder order={order} setOrder={setOrder} />
        
        {/* @ts-ignore */}
        <Search setProductsData={setProductsData}/>

        <SelectCategory />
      </SelectionsWrapper>

      <ProductsWrapper> 
        {productsData 
          && productsData.map(item => 
            <Card key={item.title}>
              <h4>Title: {item.title}</h4>
              <h4>Category: {item.category}</h4>          
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
