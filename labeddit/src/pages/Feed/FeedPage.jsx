import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import PostCard from "../../components/PostCard/PostCard";
import { baseURL } from "../../constants/urls";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import useRequestsData from "../../hooks/useRequestsData";
import { goToPostDetailsPage } from "../../routes/coordinator";
import PostForm from "./PostForm";
import {
  CircularProgressLoading,
  FeedPageContainer,
  HorizontalLine,
  PageContainer,
  PostsListContainer
} from "./styled";

function FeedPage({ rightButtonText, setRightButtonText }) {
  useProtectedPage();
  const navigate = useNavigate();
  const [posts, getPosts, isLoading] = useRequestsData([], `${baseURL}/posts`);

  const onClickCard = (id) => {
    goToPostDetailsPage(navigate, id);
  };

  const postsList =
    posts &&
    posts.map((post) => {
      return (
        <PostCard
          key={post.id}
          post={post}
          goToDetailsPage={onClickCard}
          getPosts={getPosts}
        />
      );
    });

  return (
    <PageContainer>
      <FeedPageContainer>
        <Header
          rightButtonText={rightButtonText}
          setRightButtonText={setRightButtonText}
        />
        <PostForm getPosts={getPosts} />
        <HorizontalLine />
        <PostsListContainer>
          {isLoading && <CircularProgressLoading color="inherit" size={50} />}
          {postsList}
        </PostsListContainer>
      </FeedPageContainer>
    </PageContainer>
  );
}

export default FeedPage;
