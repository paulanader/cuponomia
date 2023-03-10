import styled from "styled-components";

export const ColorHeader = styled.header`
  background-color: var(--color-black);
  padding-top: 20px;
  padding-bottom: 20px;

  @media (max-width: 576px) {
    padding-top: 10px;
    padding-bottom: 10px;
  }

  color: white;

  span {
    color: var(--color-green);
  }
`;
