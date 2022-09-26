import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;

export const SignUpPageContainer = styled.div`
  width: 100vw;
  max-width: 428px;
  min-height: 100vh;
  /* border: 1px solid black; */
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    margin-top: 30px;
    margin-bottom: 180px;
    padding-left: 30px;
    padding-right: 30px;
  }
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

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
    margin-bottom: 20px;
    cursor: pointer;
  }
`;

export const Input = styled.input`
  width: 85vw;
  max-width: 363px;
  margin-bottom: 10px;
  height: 40px;
  border-radius: 4px;
  border: 1px solid #d5d8de;
  border-radius: 4px;
  padding: 16px;
`;

export const CheckContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 60px;

  p {
    padding-left: 34px;
    margin-bottom: 17px;
  }

  span {
    color: #4088cb;
  }

  div {
    padding-left: 32px;
    padding-right: 30px;

    input {
      margin-right: 11px;
    }
  }
`;
