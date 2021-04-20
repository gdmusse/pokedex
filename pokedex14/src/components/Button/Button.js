import StyledButton from './styles.js';

const Button = ({ text, color, onClick }) => {
  return (
    <StyledButton color={color} onClick={onClick}>
      {text}
    </StyledButton>
  );
};

export default Button;
