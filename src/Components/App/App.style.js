import styled from "styled-components";

export const AppStyled = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  .title {
    font-size: 5rem;
    font-weight: 100;
    max-height: auto;
    flex-grow: 0;
    margin:1rem 0;
    @media(max-width:700px){
      font-size: 3rem;
    }
  }
`;
