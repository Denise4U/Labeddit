import axios from "axios";
import { baseURL } from "../../constants/urls";
import {
  BodyPost,
  CommentContainer,
  IconsContainer,
  PostCardContainer,
  SendTo,
  VoteContainer
} from "./styled";
import upVector from "../../assets/icons/upVector.svg";
import upVectorGreen from "../../assets/icons/upVectorGreen.svg";
import downVector from "../../assets/icons/downVector.svg";
import downVectorRed from "../../assets/icons/downVectorRed.svg";
import commentIcon from "../../assets/icons/commentIcon.svg";

function PostCard(props) {
  const handlePostVote = (postId, direction) => {
    const headers = {
      headers: {
        Authorization: localStorage.getItem("token")
      }
    };

    const body = {
      direction: direction
    };

    if (direction === 1) {
      axios
        .post(`${baseURL}/posts/${postId}/votes`, body, headers)
        .then((res) => {
          console.log("entrei no post", res);
          props.getPosts();
        })
        .catch((err) => {
          console.log(err.response);
        });
    } else if (direction === -1) {
      axios
        .put(`${baseURL}/posts/${postId}/votes`, body, headers)
        .then((res) => {
          console.log("entrei no put", res);
          props.getPosts();
        })
        .catch((err) => {
          console.log(err.response);
        });
    } else {
      axios
        .delete(`${baseURL}/posts/${postId}/votes`, headers)
        .then((res) => {
          console.log("entrei no delete", res);
          props.getPosts();
        })
        .catch((err) => {
          console.log(err.response);
        });
    }
  };

  const handleUpVote = () => {
    if (props.post.userVote === 1) {
      handlePostVote(props.post.id);
    } else {
      handlePostVote(props.post.id, 1);
    }
  };

  const handleDownVote = () => {
    if (props.post.userVote === -1) {
      handlePostVote(props.post.id);
    } else {
      handlePostVote(props.post.id, -1);
    }
  };

  return (
    <PostCardContainer>
      <div>
        <SendTo>Enviado por: {props.post.username}</SendTo>
        <h3>{props.post.title}</h3>
        <BodyPost>{props.post.body}</BodyPost>
      </div>
      <IconsContainer>
        <VoteContainer>
          {props.post.userVote === 1 ? (
            <img
              src={upVectorGreen}
              alt={"Voto Positivo"}
              onClick={handleUpVote}
            />
          ) : (
            <img
              src={upVector}
              alt={"Ícone voto positivo"}
              onClick={handleUpVote}
            />
          )}
          <p>{props.post.voteSum}</p>
          {props.post.userVote === -1 ? (
            <img
              src={downVectorRed}
              alt={"Voto Negativo"}
              onClick={handleDownVote}
            />
          ) : (
            <img
              src={downVector}
              alt={"Ícone voto negativo"}
              onClick={handleDownVote}
            />
          )}
        </VoteContainer>
        {props.isDetails ? (
          <CommentContainer>
            <img src={commentIcon} alt="Ícone de comentários" />
            <p>{props.post.commentCount}</p>
          </CommentContainer>
        ) : (
          <CommentContainer
            onClick={() => props.goToDetailsPage(props.post.id)}
          >
            <img src={commentIcon} alt="Ícone de comentários" />
            <p>{props.post.commentCount}</p>
          </CommentContainer>
        )}
      </IconsContainer>
    </PostCardContainer>
  );
}

export default PostCard;
