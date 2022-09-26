import { CircularProgress } from "@mui/material";
import { useState } from "react";
import { useForm } from "../../hooks/useForm";
import { createPost } from "../../services/posts";
import { BodyInput, PostFormContainer, TitleInput } from "./styled";

function PostForm(props) {

    const [isLoading, setIsLoading] = useState(false)
    const { form, onChange, cleanFields } = useForm({
        title: "",
        body: ""
    })
    
    const onSubmitPost = (event) => {
        event.preventDefault()
        createPost(form, cleanFields, props.getPosts, setIsLoading)
    }

    return (
        <PostFormContainer onSubmit={onSubmitPost}>
            <TitleInput 
                placeholder="Título do post"
                name="title" 
                value={form.title}
                onChange={onChange}
                type={"text"}
                required
            />
            <BodyInput 
                placeholder="Escreva seu post..." 
                name="body" 
                value={form.body}
                onChange={onChange}
                type={"text"}
                // required
            />
            <button>
                {isLoading? <CircularProgress color="inherit" size={20}/> : <>Postar</>}
            </button>
        </PostFormContainer>
    );
}

export default PostForm;