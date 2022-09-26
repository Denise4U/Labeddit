import { CircularProgress } from "@mui/material";
import { useState } from "react";
import { useForm } from "../../hooks/useForm";
import { createComment } from "../../services/posts";
import { BodyInput, CommentFormContainer } from "./styled";

function CommentForm(props) {

    const [isLoading, setIsLoading] = useState(false)
    const { form, onChange, cleanFields } = useForm({
        body: ""
    })

    const onSubmitPost = (event) => {
        event.preventDefault()
        createComment(props.id, form, cleanFields, props.getComments, setIsLoading)
    }

    return (
        <CommentFormContainer onSubmit={onSubmitPost}>
            <BodyInput
                placeholder="Adicionar comentário"
                name="body"
                value={form.body}
                onChange={onChange}
                type={"text"}
                required
            />
            <button>
                {isLoading ? <CircularProgress color="inherit" size={20} /> : <>Responder</>}
            </button>
        </CommentFormContainer>
    );
}

export default CommentForm;