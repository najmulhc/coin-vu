import styled from "styled-components";

export const Button = styled.button`
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "#475dfc"};
  color: white;
  border: 2px solid #ffffff00;
  padding: 0.5rem 1.5rem;
  border-radius: 5px;
  transition: all .2s ease-in;
  font-weight: 500;
  cursor: pointer;
  &:hover {
    color: ${(props) =>
      props.backgroundColor ? props.backgroundColor : "#475dfc"};
    background-color: #ffffff00;
    border-color: ${(props) =>
      props.backgroundColor ? props.backgroundColor : "#475dfc"};
  }
`;
