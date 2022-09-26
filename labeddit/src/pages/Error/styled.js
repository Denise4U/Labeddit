import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;

export const ErrorPageContainer = styled.div`
  width: 100vw;
  max-width: 428px;
  min-height: 100vh;
  /* border: 1px solid black; */
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 60px;
  align-items: center;
  justify-content: center;
  background-color: #ededed;

  img {
    width: 100%;
  }

  h2 {
    padding: 30px;
    text-align: center;
    margin-top: 10px;
    background-image: linear-gradient(90deg, #ff6489 0%, #f9b24e 100%),
      linear-gradient(0deg, #acacac, #acacac);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;
