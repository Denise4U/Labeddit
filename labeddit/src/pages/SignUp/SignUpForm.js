import { CircularProgress } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { goToLoginPage } from "../../routes/coordinator";
import { signUp } from "../../services/users";
import { CheckContainer, FormContainer, Input } from "./styled";

function SignUpForm({rightButtonText, setRightButtonText}) {
    const { form, onChange, cleanFields } = useForm({
        username: "",
        email: "",
        password: ""
    })
    const [isLoading, setIsLoading] = useState(false)

    const navigate = useNavigate()

    const onSubmitSignUp = (event) => {
        event.preventDefault()
        signUp(form, cleanFields, navigate, setRightButtonText, setIsLoading)
    }

    return (
        <FormContainer onSubmit={onSubmitSignUp}>
            <Input
                placeholder="Nome de Usuário"
                name="username"
                value={form.username}
                onChange={onChange}
                type={"text"}
                required
            />
            <Input
                placeholder="E-mail"
                name="email"
                value={form.email}
                onChange={onChange}
                type={"email"}
                required
            />
            <Input
                placeholder="Senha"
                name="password"
                value={form.password}
                onChange={onChange}
                type={"password"}
                required
            />
            <CheckContainer>
                <p>Ao continuar, você concorda com o nosso <span>Contrato de usuário</span> e nossa <span>Política de Privacidade</span>
                </p>
                <div>
                    <input type={"checkbox"} />
                    <label>
                        Eu concordo em receber emails sobre coisas legais no Labeddit
                    </label>
                </div>
            </CheckContainer>
            <button>
                {isLoading? <CircularProgress color="inherit" size={20}/> : <>Cadastrar</>}
            </button>
        </FormContainer>
    );
}

export default SignUpForm;