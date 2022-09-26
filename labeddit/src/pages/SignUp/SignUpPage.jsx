import Header from "../../components/Header/Header";
import { useUnprotectedPage } from "../../hooks/useUnprotectedPage";
import { goToLoginPage } from "../../routes/coordinator";
import SignUpForm from "./SignUpForm"
import { PageContainer, SignUpPageContainer } from "./styled"

function SignUpPage({rightButtonText, setRightButtonText}) {
    useUnprotectedPage()
    
    return (
        <PageContainer>
            <SignUpPageContainer>
                <Header rightButtonText={rightButtonText} setRightButtonText={setRightButtonText}/>
                <h1>Olá, boas vindas ao LabEddit ;)</h1>
                <SignUpForm rightButtonText={rightButtonText} setRightButtonText={setRightButtonText}/>
            </SignUpPageContainer>
        </PageContainer>
    );
}

export default SignUpPage;