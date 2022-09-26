import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import LoginPage from "../pages/Login/LoginPage"
import ErrorPage from "../pages/Error/ErrorPage"
import FeedPage from "../pages/Feed/FeedPage"
import PostDetailsPage from "../pages/Post/PostDetailsPage"
import SignUpPage from "../pages/SignUp/SignUpPage"

const Router = ({rightButtonText, setRightButtonText}) => {
    return (
        <BrowserRouter>
            <Routes>
            <Route index element={<FeedPage rightButtonText={rightButtonText} setRightButtonText={setRightButtonText}/>}/>
                <Route path="/login" element={<LoginPage rightButtonText={rightButtonText} setRightButtonText={setRightButtonText}/>}/>
                <Route path="/signup" element={<SignUpPage rightButtonText={rightButtonText} setRightButtonText={setRightButtonText}/>}/>
                <Route path="/post/:id" element={<PostDetailsPage rightButtonText={rightButtonText} setRightButtonText={setRightButtonText}/>}/>
                <Route path="*" element={<ErrorPage />}/>
            </Routes>
        </BrowserRouter>
    )

}

export default Router;

