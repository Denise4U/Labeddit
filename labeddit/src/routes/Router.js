import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import LoginPage from "../pages/Login/LoginPage"
import ErrorPage from "../pages/Error/ErrorPage"
import FeedPage from "../pages/Feed/FeedPage"
import PostPage from "../pages/Post/PostPage"
import SignUpPage from "../pages/SignUp/SignUpPage"

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element = {<LoginPage/>}/>
                <Route path = '*' element ={<ErrorPage/>} />
                <Route path = "/feed/:id" element =  {<PostPage/>} />
                <Route path = "/feed" element =  {<FeedPage/>} />
                <Route path = "/signup" element = {<SignUpPage/>}/>
            </Routes>
        </BrowserRouter>
    )

}

export default Router;

