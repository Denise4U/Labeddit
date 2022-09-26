import styled from "styled-components"

export const CommentCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 364px;
    /* height: 167px; */
    border: 1px solid #E0E0E0;
    border-radius: 12px;
    padding: 10px;
    background-color: #FBFBFB;
    margin-bottom: 20px;

    P {
        margin-bottom: 10px;
    }

`

export const SendTo = styled.p`
    font-size: 12px;
    line-height: 16px;
    margin-bottom: 10px;
    color: #6F6F6F;
`

export const BodyPost = styled.p`
    margin-bottom: 10px;
    font-size: 18px;
    line-height: 23px;
`

export const VoteContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 98px;
    height: 28px;
    border: 0.796748px solid #ECECEC;
    border-radius: 28px;
    padding: 5px;

    img {
        cursor: pointer;
    }
`