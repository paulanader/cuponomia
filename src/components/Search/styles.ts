import styled from "styled-components";

export const MainContainer = styled.div`
  display: grid;
  padding-top: 30px;
  padding-bottom: 30px;
`;

export const SeachButton = styled.button`
  background-color: var(--color-green);
  border: none;
`;

export const Input = styled.input`
  border: none;

  &::placeholder {
    color: white;
  }
`;

export const ClearButton = styled.button`
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
