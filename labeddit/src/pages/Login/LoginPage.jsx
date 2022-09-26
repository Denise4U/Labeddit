import { Button, FormAndButtonsContainer, HorizontalLine, LoginPageContainer, LogoContainer, PageContainer } from "./styled";
import logo from "../../assets/imgs/logo.svg"
import LoginForm from "./LoginForm";
import { goToSignUpPage } from "../../routes/coordinator";
import { useNavigate } from "react-router-dom";
import { useUnprotectedPage } from "../../hooks/useUnprotectedPage";

function LoginPage({ rightButtonText, setRightButtonText }) {
    useUnprotectedPage()
    const navigate = useNavigate()

    return (
        <PageContainer>
            <LoginPageContainer>
                <LogoContainer>
                    <img src={logo} />
                    <h1>LabEddit</h1>
                    <p>O projeto de rede social da Labenu</p>
                </LogoContainer>
                <FormAndButtonsContainer>
                    <LoginForm rightButtonText={rightButtonText} setRightButtonText={setRightButtonText} />
                    <HorizontalLine></HorizontalLine>
                    <Button onClick={() => goToSignUpPage(navigate)}>
                        Crie uma conta!
                    </Button>
                </FormAndButtonsContainer>
            </LoginPageContainer>
        </PageContainer>
    );
}

export default LoginPage;