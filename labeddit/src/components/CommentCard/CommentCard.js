import { BodyPost, CommentCardContainer, SendTo, VoteContainer } from "./styled";
import upVector from "../../assets/icons/upVector.svg"
import upVectorGreen from "../../assets/icons/upVectorGreen.svg"
import downVector from "../../assets/icons/downVector.svg"
import downVectorRed from "../../assets/icons/downVectorRed.svg"

function CommentCard(props) {

    const handleUpVote = () => {
        if (props.comment.userVote === 1) {
            props.handleCommentVote(props.comment.id)
        } else {
            props.handleCommentVote(props.comment.id, 1)
        }
    }

    const handleDownVote = () => {
        if (props.comment.userVote === -1) {
            props.handleCommentVote(props.comment.id)
        } else {
            props.handleCommentVote(props.comment.id, -1)
        }
    }
    return (
        <CommentCardContainer>
            <div>
                <SendTo>Enviado por: {props.comment.username}</SendTo>
                <BodyPost>{props.comment.body}</BodyPost>
            </div>
            <VoteContainer>
                {props.comment.userVote === 1 ? <img src={upVectorGreen} alt={"Voto Positivo"} onClick={handleUpVote} /> : <img src={upVector} alt={"Ícone voto positivo"} onClick={handleUpVote} />}
                {props.comment.voteSum}
                {props.comment.userVote === -1 ? <img src={downVectorRed} alt={"Voto Negativo"} onClick={handleDownVote} /> : <img src={downVector} alt={"Ícone voto negativo"} onClick={handleDownVote} />}
            </VoteContainer>
        </CommentCardContainer>
    );
}

export default CommentCard;