import styled from "styled-components";

export default function Input({ type, placeholder }) {
  return <StyleInput type={type} placeholder={placeholder}></StyleInput>;
}

const StyleInput = styled.input`
  background: rgb(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px 0px rgb(31, 38, 135, 0.37);
  border-radius: 2rem;
  width: 80%;
  height: 3rem;
  padding: 0.6rem;
  border: none;
  outline: none;
  color: gray;
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 1rem;
  &:focus {
    display: inline-block;
    box-shadow: 0 0 0 0.2rem blue;
    backdrop-filter: blur(12rem);
    border-radius: 2rem;
  }
  &::placeholder {
    color: blue;
    font-weight:bold;
    font-size: 1rem;
  }
`;
