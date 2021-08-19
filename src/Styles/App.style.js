import styled from "styled-components";

export const AppStyled = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: center;

  .title {
    font-size: 5rem;
    height:auto ;
    @media(max-width:700px){
      font-size: 3rem;
    }
  }
`;
