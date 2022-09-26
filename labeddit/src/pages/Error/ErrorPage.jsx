import Header from "../../components/Header/Header";
import { ErrorContainer, ErrorPageContainer, PageContainer } from "./styled";
import error from "../../assets/imgs/404.jpg"

function ErrorPage({ rightButtonText, setRightButtonText }) {
    return (
        <PageContainer>
            <ErrorPageContainer>
                <Header rightButtonText={rightButtonText} setRightButtonText={setRightButtonText} showLeftButton isDetails />
                <ErrorContainer>
                    <img src={error} alt="Imagem de erro 404" />
                    <h2>Página não encontrada, aperte no botão de voltar</h2>
                </ErrorContainer>
            </ErrorPageContainer>
        </PageContainer>
    );
}

export default ErrorPage;