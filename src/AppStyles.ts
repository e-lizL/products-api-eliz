import styled from 'styled-components';

const StyledHeader = styled.h1`
  color: white;
  font-size: 2.5rem;
  font-weight: 400;
  text-align: center;
  padding: 40px;
`;

const Container = styled.div`
  width: 90%;
  max-width: 700px;
  margin: 0 auto;
  background: #F5F5F5;
  color: white; 
  margin-top: 20px;
`;


const Card = styled.div`
  background: var(--navy);
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 10px;
  gap: 20px;
  font-size: 1.2rem;
  box-shadow: 0 0 10px gray;
`;

const Select = styled.select`
  height: 30px;
  width: 220px;
  padding: 0 30px;
  display: flex;
  font-size: 1rem;
  border-radius: 20px;
`;

const ProductsWrapper = styled.div`
  margin-top: 50px;
  display: grid;
  grid-template-columns: repeat( auto-fit, minmax(250px, 1fr) );
  gap: 20px;
  padding: 40px;
`;

const SearchContainer = styled.div`
background: #4a6189;
color: white;
display: flex;
flex-direction: column;
gap: 20px;
padding: 30px;
`;

const OrderContainer = styled(SearchContainer)`
  background: #86E6DE;
  color: #383737;
  padding-bottom: 50px;
`;

const CategoryContainer = styled(SearchContainer)`
  background: #aca9a9;
  color: white;
`;

const StyledLabel = styled.label`
  font-size: 1.5rem;
  font-weight: 600;
  margin-top: 50px;
`;

const ButtonContainer = styled.div`
  background: orange;
  background: linear-gradient(
    to right,
    #EC4836, #C6006F);
  border: none;
  border-radius: 20px;
  width: fit-content;
  padding: 10px;
  width: fit-content;
  &:hover, &:active, &:focus {
    transform: scale(1.1);
    transition: transform .2s 
  }
`;

const StyledButton = styled.button`
  color: white;
  background: orange;
  background: linear-gradient(
    to right,
    #EC4836, #C6006F);
  border: none;
  font-size: 1rem;
  font-weight: 600;
`;

const StyledInput = styled.input`
  padding: 2px 12px; 
  border-radius: 20px;
  border: 1px solid gray;
  font-size: 1rem;  
`;

const SearchWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 20px;
`;

const OrderWrapper = styled(SearchWrapper)`
`;
const CategoryWrapper = styled(SearchWrapper)`
`;

export {
  StyledHeader,
  Container,
  Card,
  Select, 
  ProductsWrapper,
  StyledLabel,
  StyledButton,
  ButtonContainer,
  StyledInput,
  SearchWrapper,
  OrderWrapper,
  CategoryWrapper,
  SearchContainer,
  OrderContainer,
  CategoryContainer
}

