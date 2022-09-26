import { CircularProgress } from "@mui/material";
import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;

export const PostDetailsPageContainer = styled.div`
  width: 100vw;
  max-width: 428px;
  min-height: 100vh;
  /* border: 1px solid black; */
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PostContainer = styled.div`
  margin-top: 36px;
`;

export const CommentFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  align-items: center;
  margin-bottom: 12px;

  button {
    margin-top: 12px;
    max-width: 365px;
    width: 85vw;
    height: 40px;
    background: linear-gradient(90deg, #ff6489 0%, #f9b24e 100%);
    border-radius: 12px;
    color: white;
    font-weight: 500;
    font-size: 18px;
    border: none;
    cursor: pointer;
  }
`;

export const BodyInput = styled.textarea`
  background-color: #ededed;
  width: 364px;
  border-radius: 12px;
  height: 131px;
  border: none;
  padding: 18px;
  resize: unset;
  font-family: sans-serif;
`;

export const HorizontalLine = styled.hr`
  border: 0;
  height: 1px;
  width: 363px;
  background: linear-gradient(90deg, #ff6489 0%, #f9b24e 100%),
    linear-gradient(0deg, #acacac, #acacac);
  margin-bottom: 20px;
`;

export const CircularProgressLoading = styled(CircularProgress)`
  color: #fe7e02;
`;
