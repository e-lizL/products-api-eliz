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
  max-width: 900px;  
  margin: 0 auto;
  background: #F5F5F5;
  color: white; 
  margin-top: 20px;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 40px 20px;
  @media (min-width: 350px) {
    padding: 40px;
  }
`;

const OrderWrapper = styled(Section)`
  background: var(--pastel-green);
  color: #383737;
`;

const CategoryWrapper = styled(Section)`
  background: #787575;
  color: white;
`;

const SearchWrapper = styled(Section)`
  background: var(--sky-blue);
`;

const Select = styled.select`
  height: 30px;
  padding: 0 12px;
  font-size: 1rem;
  color: black;
  border-radius: 20px;
  max-width: 230px;
`;

const StyledLabel = styled.label`
  font-size: 1.5rem;
  font-weight: 600;
`;

const StyledInput = styled.input`
  padding: 8px 15px; 
  border-radius: 20px;
  border: 1px solid gray;
  font-size: 1rem;  
  max-width: 230px;
`;

const StyledHeading = styled.h2`
  color: var(--navy);
  padding: 30px 0 0 30px;
`;

const CardsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat( auto-fit, minmax(300px, 1fr) );
  gap: 20px;
  @media (min-width: 400px) {
    padding: 40px;
  }
`;

const Card = styled.div`
  background: var(--navy);
  padding: 20px 20px 40px;
  margin-bottom: 20px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  font-size: 1.2rem;
  box-shadow: 0 0 10px gray;
`;

const CrossButton = styled.button`
  font-size: 1.5rem;
  border: 1px solid white;
  padding: 6px 10px;
  align-self: end;
  text-align: center;
  background: #4a6189;
  color: white;
  border-radius: 5px;
  border: 0; 
  &:hover, &:active, &:focus {
    background: white;
    color: red;
  }
`;

const InfoWrapper = styled.div`
  margin-top: 10px;
  display: flex;
  gap: 1rem;
`;

const InfoWrapperLarge = styled(InfoWrapper)`
  flex-direction: column;
  gap: 0.5rem;
`;

const InfoTitle = styled.div`
  color: var(--pastel-green);
`;

export {
  StyledHeader,
  Container,
  SearchWrapper,
  Select, 
  OrderWrapper,
  CategoryWrapper,
  StyledLabel,
  StyledInput,
  StyledHeading,
  CardsWrapper,
  Card,
  CrossButton,
  Section,
  InfoWrapper,
  InfoWrapperLarge,
  InfoTitle
}

