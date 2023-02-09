import styled from 'styled-components';

const Container = styled.div`
  width: 90%;
  max-width: 700px;
  margin: 0 auto;
  background: #F5F5F5;
  color: white;
  padding: 40px; 
`;


const Card = styled.div`
  background: var(--navy);
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 10px;
  gap: 20px;
  font-size: 1.2rem;
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
  margin-top: 30px;
  display: grid;
  grid-template-columns: repeat( auto-fit, minmax(250px, 1fr) );
  gap: 20px;
`;

const SelectionsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const StyledSelectLabel = styled.label`
  color: var(--navy);
  font-size: 1.5rem;
  font-weight: 600;
  padding-left: 10px;
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
  font-size: 1rem;
  font-weight: 600;
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

export {
  Container,
  Card,
  Select, 
  ProductsWrapper,
  SelectionsWrapper,
  StyledSelectLabel,
  StyledButton,
  ButtonContainer
}

