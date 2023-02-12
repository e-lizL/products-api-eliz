import { useState, useEffect } from 'react';
import axios from 'axios';
import { IProduct } from './interfaces';
import SelectOrder from './components/SelectOrder';
import Search from './components/Search';
import SelectCategory from './components/SelectCategory';
import {
  Container,
  Card,
  CardsWrapper,
  StyledHeader,
  CrossButton,
  StyledHeading,
  InfoTitle,
  InfoWrapper,
  InfoWrapperLarge,
} from './AppStyles';


function App() {
  const [productsData, setProductsData] = useState<IProduct[]>([]);
  const [order, setOrder] = useState("alphabetically");
  const [isLoading, setIsLoading] = useState(false);

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
    const getData = async () => {
      try {
        setIsLoading(true);
        const res = await axios.get(productsUrl);
        const allProducts = res.data.products.sort(sortProducts(order));
        
        setProductsData(allProducts)
        setIsLoading(false)
      } catch (error) {
        console.log(error);
      }
    }
    getData(); 
  }, [order]);

  const deleteCard= (cardId: number) => {
    const goodProducts = productsData.filter(item => item.id !== cardId);
    setProductsData(goodProducts)
    console.log(productsData);
  } 
  
  return (
    <>
      <StyledHeader>Pearson Products App</StyledHeader>

      <Container>

        <SelectOrder order={order} setOrder={setOrder} />

        <SelectCategory setProductsData={setProductsData} />
          
        {/* @ts-ignore */}
        <Search setProductsData={setProductsData}/>
          
        <div>
          <StyledHeading data-test="product-cards-title">Available products:</StyledHeading>
          <CardsWrapper data-test="product-cards-section"> 
          {isLoading && <h3>Loading...</h3>}
            {productsData 
              && productsData.map(item => 
                <Card data-test="product-card" key={item.id} >
                  <CrossButton onClick={() => deleteCard(item.id)}><span>X</span></CrossButton>
                  <InfoWrapper>
                    <InfoTitle>Title:</InfoTitle>
                    <div>{item.title}</div>
                  </InfoWrapper>

                  <InfoWrapper>
                    <InfoTitle>Category:</InfoTitle>
                    <div>{item.category}</div>
                  </InfoWrapper>

                  <InfoWrapperLarge>
                    <InfoTitle>Description:</InfoTitle>
                    <div>{item.description}</div>
                  </InfoWrapperLarge>

                  <InfoWrapper>
                    <InfoTitle>Price:</InfoTitle>
                    <div>£{item.price}</div>
                  </InfoWrapper>

                  <InfoWrapper>
                    <InfoTitle>Stock:</InfoTitle>
                    <div>{item.stock}</div>
                  </InfoWrapper>

                </Card>
              )
            } 
          </CardsWrapper> 
        </div>

      </Container>
    </>
  );
}

export default App;
