import styled from "styled-components";
import { CircularProgress } from "@mui/material";

export const PageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;

export const FeedPageContainer = styled.div`
  width: 100vw;
  max-width: 428px;
  min-height: 100vh;
  /* border: 1px solid black; */
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PostsListContainer = styled.div`
  margin-top: 36px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PostFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
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

export const TitleInput = styled.input`
  background-color: #ededed;
  width: 364px;
  border-radius: 12px;
  border: none;
  margin-bottom: 10px;
  height: 30px;
  padding: 18px;
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
`;

export const CircularProgressLoading = styled(CircularProgress)`
  color: #fe7e02;
`;
