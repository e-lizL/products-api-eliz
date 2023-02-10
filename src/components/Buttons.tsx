import {
  StyledButton, 
} from '../AppStyles';

interface IButton {
  children: React.ReactNode;
  onClickFunction: () => void;
}


const Button = ( {children, onClickFunction }: IButton) => {
  return (
    <StyledButton onClick={onClickFunction}></StyledButton>
  )
}

export default Button