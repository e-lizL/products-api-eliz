import styled from 'styled-components';

const StyledButton = styled.button`
  color: white;
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
  &:hover, &:active, &:focus {
    background: var(--navy);
  }
`;

interface IButton {
  children: React.ReactNode;
  onClickFunction: () => void;
}

const Button = ({children, onClickFunction }: IButton) => {
  return (
    <StyledButton onClick={onClickFunction}>{children}</StyledButton>
  )
}

export default Button
