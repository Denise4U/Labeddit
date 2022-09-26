import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const LoginPageContainer = styled.div`
  width: 100vw;
  max-width: 428px;
  height: 100%;
  /* border: 1px solid black; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  input {
    width: 85vw;
    max-width: 363px;
    margin-bottom: 10px;
    height: 40px;
    border: 1px solid #d5d8de;
    border-radius: 4px;
    padding: 16px;
  }

  button {
    margin-top: 30px;
    max-width: 365px;
    width: 85vw;
    height: 40px;
    background: linear-gradient(90deg, #ff6489 0%, #f9b24e 100%);
    border-radius: 27px;
    color: white;
    font-weight: 500;
    font-size: 18px;
    border: none;
    cursor: pointer;
  }
`;

export const Button = styled.button`
  max-width: 365px;
  width: 85vw;
  height: 40px;
  border: 1px solid #fe7e02;
  border-radius: 27px;
  color: #fe7e02;
  font-weight: 500;
  font-size: 17px;
  background-color: white;
  cursor: pointer;
`;

export const HorizontalLine = styled.div`
  border-top: 1px solid black;
  width: 363px;
  margin: 18px 0 18px 0;
`;

export const FormAndButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
