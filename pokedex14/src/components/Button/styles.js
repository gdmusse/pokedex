import styled from 'styled-components';

const COLORS = {
  green: '#70B85D',
  black: '#656565',
  red: '#EF5350',
};

const StyledButton = styled.button`
  outline: none;
  border: none;

  background-color: ${(props) => COLORS[props.color]};
  color: black;

  font-size: 1.25rem;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
  padding: 6px 14px;
  opacity: 0.9;

  &:hover {
    opacity: 1;
    cursor: pointer;
  }

  &:active {
    box-shadow: inset 0px 0px 2px black;
  }
`;

export default StyledButton;
