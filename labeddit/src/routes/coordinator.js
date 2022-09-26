export const goToFeedPage = (navigate) => {
    navigate("/")
}

export const goToLoginPage = (navigate) => {
    navigate("/login")
}

export const goToSignUpPage = (navigate) => {
    navigate("/signup")
}

export const goToPostDetailsPage = (navigate, id) => {
    navigate(`/post/${id}`)
}

export const goBack = (navigate) => {
    navigate(-1)
}