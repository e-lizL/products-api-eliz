import styled from 'styled-components';

const Container = styled.div`
  width: 80%;
  max-width: 700px;
  margin: 0 auto;
  background: green;
  color: white;
  padding: 40px;
`;

const Card = styled.div`
border: 1px solid white;
padding: 10px;
`;

const Select = styled.select`
`;

const ProductsWrapper = styled.div`
  margin-top: 30px;
`;

const SelectionsWrapper = styled.div`
  border: 1px solid red;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export {
  Container,
  Card,
  Select, 
  ProductsWrapper,
  SelectionsWrapper
}

